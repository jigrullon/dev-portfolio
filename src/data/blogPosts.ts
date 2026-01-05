// Import blog content files
import { content as declaringBankruptcyEn } from './blogContent/declaring-bankruptcy-en';
import { content as declaringBankruptcyEs } from './blogContent/declaring-bankruptcy-es';
import { content as declaringBankruptcyZh } from './blogContent/declaring-bankruptcy-zh';
import { content as escapingNatureEn } from './blogContent/escaping-to-nature-en';
import { content as escapingNatureEs } from './blogContent/escaping-to-nature-es';
import { content as escapingNatureZh } from './blogContent/escaping-to-nature-zh';
import { content as beingGeneralistEn } from './blogContent/being-a-generalist-en';
import { content as beingGeneralistEs } from './blogContent/being-a-generalist-es';
import { content as beingGeneralistZh } from './blogContent/being-a-generalist-zh';

export interface BlogPostContent {
  title: string;
  subtitle: string;
  content: string;
}

export interface BlogPost {
  id: number;
  slug: string;
  image: string;
  date: string;
  readTime: string;
  category: string;
  tags: string[];
  en: BlogPostContent;
  es: BlogPostContent;
  zh: BlogPostContent;
}

export const blogPosts: BlogPost[] = [
  {
    id: 1,
    slug: 'declaring-bankruptcy',
    image: 'https://static1.squarespace.com/static/5b59fe6a7e3c3ac212f4a9aa/t/5b5a4d932483d6109bb01b2c/1483892244817/1000w/can-i-suggest-that-you-just-declare-bankruptcy--a6d3e.png',
    date: 'Oct 25, 2025',
    readTime: '8 min read',
    category: 'Career',
    tags: ['productivity', 'organization', 'digital minimalism', 'workflow'],
    en: {
      title: 'Declaring Bankruptcy',
      subtitle: 'Confessions of a Tab Hoarder.',
      content: declaringBankruptcyEn
    },
    es: {
      title: 'Declarar Bancarrota',
      subtitle: 'Confesiones de un Acaparador de Pestañas.',
      content: declaringBankruptcyEs
    },
    zh: {
      title: '宣布破产',
      subtitle: '标签囤积者的自白。',
      content: declaringBankruptcyZh
    }
  },
  {
    id: 2,
    slug: 'escaping-to-nature-wont-fix-your-work',
    image: 'https://as2.ftcdn.net/v2/jpg/06/37/89/51/1000_F_637895176_BXbHeWjRGoauooAoGXh0ELwqbCxLCN0y.jpg',
    date: 'Nov 13, 2025',
    readTime: '10 min read',
    category: 'Career',
    tags: ['remote work', 'work-life balance', 'productivity', 'burnout'],
    en: {
      title: 'Escaping to Nature Wont Fix Your Work',
      subtitle: "Lessons From a Remote Worker's Failed Homestead.",
      content: escapingNatureEn
    },
    es: {
      title: 'Escapar a la Naturaleza No Arreglará Tu Trabajo',
      subtitle: 'Lecciones de la Finca Fallida de un Trabajador Remoto.',
      content: escapingNatureEs
    },
    zh: {
      title: '逃往大自然不会解决你的工作问题',
      subtitle: '远程工作者失败家园的教训。',
      content: escapingNatureZh
    }
  },
  {
    id: 3,
    slug: 'being-a-generalist',
    image: 'https://substackcdn.com/image/fetch/$s_!IaeD!,f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2F7a36d912-3ba8-40fe-8d6a-cd60825f29b3_690x460.png',
    date: 'Dec 1, 2025',
    readTime: '12 min read',
    category: 'Career',
    tags: ['career development', 'generalist', 'specialization', 'tech career'],
    en: {
      title: 'Being a Generalist',
      subtitle: 'Investigating the question of whether being a tech generalist is a blessing or curse.',
      content: beingGeneralistEn
    },
    es: {
      title: 'Ser un Generalista',
      subtitle: 'Investigando si ser un generalista tecnológico es una bendición o una maldición.',
      content: beingGeneralistEs
    },
    zh: {
      title: '成为一个通才',
      subtitle: '探讨成为技术通才是福还是祸的问题。',
      content: beingGeneralistZh
    }
  }
];

// Helper function to get blog post by slug
export const getBlogPostBySlug = (slug: string): BlogPost | undefined => {
  return blogPosts.find(post => post.slug === slug);
};

// Helper function to get sorted blog posts by date (newest first)
export const getSortedBlogPosts = (): BlogPost[] => {
  return [...blogPosts].sort((a, b) => {
    const dateA = new Date(a.date).getTime();
    const dateB = new Date(b.date).getTime();
    return dateB - dateA;
  });
};

// Helper function to get next and previous posts
export const getAdjacentPosts = (currentSlug: string): { next: BlogPost | null; prev: BlogPost | null } => {
  const sorted = getSortedBlogPosts();
  const currentIndex = sorted.findIndex(post => post.slug === currentSlug);
  
  if (currentIndex === -1) {
    return { next: null, prev: null };
  }
  
  return {
    next: currentIndex > 0 ? sorted[currentIndex - 1] : null,
    prev: currentIndex < sorted.length - 1 ? sorted[currentIndex + 1] : null
  };
};

