import { Post, PostFormData } from '@/types/post';
import { supabase } from './supabaseClient';

// Sample posts for demonstration (fallback)
const samplePosts: Post[] = [
  {
    id: 1,
    title: 'Welcome to Zemenay Tech Solutions',
    content: 'We are excited to launch our new website and showcase our cutting-edge technology solutions. Our team has been working tirelessly to bring you the best in web development, mobile applications, and digital transformation services.',
    excerpt: 'Launching our new website with cutting-edge technology solutions.',
    status: 'published',
    slug: 'welcome-to-zemenay-tech-solutions',
    author: 'Admin',
    created_at: '2024-01-15T10:00:00.000Z',
    updated_at: '2024-01-15T10:00:00.000Z',
  },
  {
    id: 2,
    title: 'The Future of Web Development',
    content: 'Explore the latest trends in web development including React, Next.js, and modern JavaScript frameworks. Learn how these technologies are shaping the future of digital experiences and business solutions.',
    excerpt: 'Latest trends in web development and modern JavaScript frameworks.',
    status: 'published',
    slug: 'the-future-of-web-development',
    author: 'Admin',
    created_at: '2024-01-14T14:30:00.000Z',
    updated_at: '2024-01-14T14:30:00.000Z',
  },
  {
    id: 3,
    title: 'Mobile App Development Best Practices',
    content: 'Discover the essential practices for building robust, scalable mobile applications. From user experience design to performance optimization, we cover everything you need to know.',
    excerpt: 'Essential practices for building robust, scalable mobile applications.',
    status: 'draft',
    slug: 'mobile-app-development-best-practices',
    author: 'Admin',
    created_at: '2024-01-13T09:15:00.000Z',
    updated_at: '2024-01-13T09:15:00.000Z',
  },
  {
    id: 4,
    title: 'Digital Transformation Strategies',
    content: 'How businesses can leverage technology to transform their operations and customer experiences. Real-world examples and actionable insights for modern enterprises.',
    excerpt: 'Leverage technology to transform business operations and customer experiences.',
    status: 'published',
    slug: 'digital-transformation-strategies',
    author: 'Admin',
    created_at: '2024-01-12T16:45:00.000Z',
    updated_at: '2024-01-12T16:45:00.000Z',
  },
  {
    id: 5,
    title: 'Cloud Solutions for Small Businesses',
    content: 'Affordable cloud computing solutions that can help small businesses scale efficiently. Compare different platforms and find the right fit for your organization.',
    excerpt: 'Affordable cloud computing solutions for small business growth.',
    status: 'draft',
    slug: 'cloud-solutions-for-small-businesses',
    author: 'Admin',
    created_at: '2024-01-11T11:20:00.000Z',
    updated_at: '2024-01-11T11:20:00.000Z',
  },
];

export const initializePosts = async (): Promise<void> => {
  try {
    // Check if posts table has data
    const { data: existingPosts, error } = await supabase
      .from('posts')
      .select('*')
      .limit(1);

    if (error) {
      console.error('Error checking posts table:', error);
      return;
    }

    // If no posts exist, insert sample data
    if (!existingPosts || existingPosts.length === 0) {
      const { error: insertError } = await supabase
        .from('posts')
        .insert(samplePosts);

      if (insertError) {
        console.error('Error inserting sample posts:', insertError);
      } else {
        console.log('Sample posts initialized successfully');
      }
    }
  } catch (error) {
    console.error('Error initializing posts:', error);
  }
};

export const getAllPosts = async (): Promise<Post[]> => {
  try {
    const { data: posts, error } = await supabase
      .from('posts')
      .select('*')
      .order('createdAt', { ascending: false });

    if (error) {
      console.error('Error fetching posts:', error);
      return samplePosts; // Fallback to sample data
    }

    return posts || samplePosts;
  } catch (error) {
    console.error('Error in getAllPosts:', error);
    return samplePosts; // Fallback to sample data
  }
};

export const getPostById = async (id: number): Promise<Post | null> => {
  try {
    const { data: post, error } = await supabase
      .from('posts')
      .select('*')
      .eq('id', id)
      .single();

    if (error) {
      console.error('Error fetching post:', error);
      return null;
    }

    return post;
  } catch (error) {
    console.error('Error in getPostById:', error);
    return null;
  }
};

export const createPost = async (postData: PostFormData): Promise<Post | null> => {
  try {
    console.log('=== POST CREATION DEBUG ===');
    console.log('Creating post with data:', postData);
    console.log('Supabase client:', supabase);
    
    const newPost = {
      title: postData.title,
      content: postData.content,
      excerpt: postData.excerpt,
      status: postData.status,
      slug: postData.title.toLowerCase().replace(/\s+/g, '-').replace(/[^a-z0-9-]/g, ''),
      author: 'Admin', // Default author
      created_at: new Date().toISOString(),
      updated_at: new Date().toISOString(),
    };

    console.log('Formatted post data:', newPost);
    console.log('Attempting Supabase insert...');

    const { data: post, error } = await supabase
      .from('posts')
      .insert([newPost])
      .select()
      .single();

    console.log('Supabase response:', { data: post, error });

    if (error) {
      console.error('❌ Supabase error creating post:', error);
      console.error('Error details:', {
        message: error.message,
        details: error.details,
        hint: error.hint,
        code: error.code
      });
      
      // Check if it's a table structure issue
      if (error.message.includes('relation') || error.message.includes('table')) {
        console.error('🚨 This looks like a table structure issue!');
        console.error('Make sure your Supabase table is named "posts" and has the correct columns');
      }
      
      return null;
    }

    console.log('✅ Post created successfully:', post);
    return post;
  } catch (error) {
    console.error('💥 Unexpected error in createPost:', error);
    console.error('Error type:', typeof error);
    console.error('Error stack:', error instanceof Error ? error.stack : 'No stack trace');
    return null;
  }
};

export const updatePost = async (id: number, postData: PostFormData): Promise<Post | null> => {
  try {
    const updateData = {
      title: postData.title,
      content: postData.content,
      excerpt: postData.excerpt,
      status: postData.status,
      slug: postData.title.toLowerCase().replace(/\s+/g, '-').replace(/[^a-z0-9-]/g, ''),
      updated_at: new Date().toISOString(),
    };

    const { data: post, error } = await supabase
      .from('posts')
      .update(updateData)
      .eq('id', id)
      .select()
      .single();

    if (error) {
      console.error('Error updating post:', error);
      return null;
    }

    return post;
  } catch (error) {
    console.error('Error in updatePost:', error);
    return null;
  }
};

export const deletePost = async (id: number): Promise<boolean> => {
  try {
    const { error } = await supabase
      .from('posts')
      .delete()
      .eq('id', id);

    if (error) {
      console.error('Error deleting post:', error);
      return false;
    }

    return true;
  } catch (error) {
    console.error('Error in deletePost:', error);
    return false;
  }
};