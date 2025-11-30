// Color scheme
export const colors = {
  primary: '#007bff',
  secondary: '#6c757d',
  success: '#28a745',
  danger: '#dc3545',
  warning: '#ffc107',
  info: '#17a2b8',
  light: '#f8f9fa',
  dark: '#343a40',
  white: '#ffffff',
  border: '#dee2e6',
  text: '#333333',
  textLight: '#666666',
};

// Layout constants
export const layout = {
  maxWidth: '1200px',
  containerPadding: '2rem',
  sectionPadding: '4rem 2rem',
  borderRadius: '8px',
  transition: 'all 0.3s ease',
};

// Navigation Links - All pages
export const navLinks = [
  { to: '/about', text: 'About Us', icon: 'Info' },
  { to: '/services', text: 'Services', icon: 'Briefcase' },
  { to: '/contact', text: 'Contact', icon: 'Mail' },
  { to: '/faqs', text: 'FAQs', icon: 'HelpCircle' },
  { to: '/terms', text: 'Terms', icon: 'FileText' },
];

// Testimonials data
export const testimonialsData = [
  {
    id: 1,
    name: 'John Smith',
    role: 'Homeowner',
    image: 'https://randomuser.me/api/portraits/men/1.jpg',
    text: 'Estateo helped me find my dream home in just two weeks. Their team was incredibly supportive throughout the process.',
    rating: 5,
  },
  {
    id: 2,
    name: 'Sarah Johnson',
    role: 'Real Estate Investor',
    image: 'https://randomuser.me/api/portraits/women/2.jpg',
    text: 'As an investor, I appreciate the detailed local insights and market analysis provided by Estateo.',
    rating: 5,
  },
  {
    id: 3,
    name: 'Michael Davis',
    role: 'First-time Buyer',
    image: 'https://randomuser.me/api/portraits/men/3.jpg',
    text: 'The process was smooth and transparent. Estateo made buying my first home less stressful.',
    rating: 5,
  },
  {
    id: 4,
    name: 'Emma Wilson',
    role: 'Property Seller',
    image: 'https://randomuser.me/api/portraits/women/4.jpg',
    text: "Sold my property quickly at a great price thanks to Estateo's excellent marketing.",
    rating: 5,
  },
];

// Team data
export const teamData = [
  {
    id: 1,
    name: 'Robert Anderson',
    role: 'CEO & Founder',
    image: 'https://randomuser.me/api/portraits/men/5.jpg',
    bio: 'With 15 years in real estate, Robert founded Estateo to revolutionize property search.',
  },
  {
    id: 2,
    name: 'Lisa Chen',
    role: 'VP of Operations',
    image: 'https://randomuser.me/api/portraits/women/5.jpg',
    bio: 'Expert in streamlining processes and delivering excellence in service.',
  },
  {
    id: 3,
    name: 'James Martinez',
    role: 'Head of Technology',
    image: 'https://randomuser.me/api/portraits/men/6.jpg',
    bio: 'Leading innovation with cutting-edge real estate technology solutions.',
  },
  {
    id: 4,
    name: 'Victoria Thompson',
    role: 'Head of Marketing',
    image: 'https://randomuser.me/api/portraits/women/6.jpg',
    bio: 'Passionate about connecting people with their perfect properties.',
  },
  {
    id: 5,
    name: 'Daniel Lee',
    role: 'Lead Developer',
    image: 'https://randomuser.me/api/portraits/men/7.jpg',
    bio: 'Building the future of real estate technology.',
  },
];

// Statistics data
export const statisticsData = [
  {
    id: 1,
    label: 'Properties Listed',
    value: '50,000+',
    icon: 'Home',
  },
  {
    id: 2,
    label: 'Happy Customers',
    value: '100,000+',
    icon: 'Smile',
  },
  {
    id: 3,
    label: 'Successful Transactions',
    value: '25,000+',
    icon: 'CheckCircle',
  },
  {
    id: 4,
    label: 'Expert Agents',
    value: '500+',
    icon: 'Users',
  },
];

// Partners data
export const partnersData = [
  {
    id: 1,
    name: 'CBRE Group',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/CBRE_Group_logo.svg/512px-CBRE_Group_logo.svg.png',
  },
  {
    id: 2,
    name: 'Keller Williams Realty',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/5f/Keller_Williams_Realty_logo.svg/512px-Keller_Williams_Realty_logo.svg.png',
  },
  {
    id: 3,
    name: 'JLL (Jones Lang LaSalle)',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/1b/Jll_logo.svg/512px-Jll_logo.svg.png',
  },
  {
    id: 4,
    name: 'Coldwell Banker',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/da/Coldwell_Banker_Logo_2018.svg/512px-Coldwell_Banker_Logo_2018.svg.png',
  },
  {
    id: 5,
    name: 'Century 21 Real Estate',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c0/Century_21_2022_logo.svg/512px-Century_21_2022_logo.svg.png',
  },
  {
    id: 6,
    name: 'Sotheby’s International Realty',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/8d/Sotheby%27s_International_Realty_logo.svg/512px-Sotheby%27s_International_Realty_logo.svg.png',
  },
];

// Services data
export const servicesData = [
  {
    id: 1,
    title: 'Property Search',
    description:
      'Find the perfect property with our advanced search filters and local insights.',
    icon: 'Search',
  },
  {
    id: 2,
    title: 'Virtual Tours',
    description:
      'Explore properties from your home with immersive 3D virtual tours.',
    icon: 'Video',
  },
  {
    id: 3,
    title: 'Market Analysis',
    description:
      'Get detailed market analysis and pricing insights for informed decisions.',
    icon: 'BarChart3',
  },
  {
    id: 4,
    title: 'Agent Services',
    description:
      'Connect with experienced agents who know the local market inside out.',
    icon: 'User',
  },
  {
    id: 5,
    title: 'Mortgage Calculator',
    description:
      'Calculate mortgage payments and explore financing options easily.',
    icon: 'DollarSign',
  },
  {
    id: 6,
    title: 'Investment Guidance',
    description: 'Get expert advice on real estate investment opportunities.',
    icon: 'TrendingUp',
  },
];

// FAQ data
export const faqData = [
  {
    id: 1,
    question: 'How do I create an account on Estateo?',
    answer:
      'Visit our website, click "Sign Up", and fill in your details. You\'ll receive a confirmation email to verify your account.',
  },
  {
    id: 2,
    question: 'Is it free to list my property?',
    answer:
      'Basic listings are free. Premium listings with additional features require a subscription.',
  },
  {
    id: 3,
    question: 'How quickly can I sell my property?',
    answer:
      'Most properties sell within 30-60 days on Estateo, depending on the market and property type.',
  },
  {
    id: 4,
    question: 'Can I view virtual tours?',
    answer:
      'Yes, many properties have 360-degree virtual tours available. You can access them from the property listing page.',
  },
  {
    id: 5,
    question: 'How do I contact an agent?',
    answer:
      'Click the "Contact Agent" button on any property listing, and an agent will reach out to you within 24 hours.',
  },
  {
    id: 6,
    question: 'What areas do you serve?',
    answer:
      'We currently serve over 50 cities across the country. Use our location filter to check if we serve your area.',
  },
];

// Footer data
export const footerData = {
  company: {
    title: 'Company',
    links: [
      { label: 'About Us', href: '/about' },
      { label: 'Contact Us', href: '/contact' },
      { label: 'Careers', href: '/careers' },
      { label: 'Blog', href: '/blog' },
    ],
  },
  services: {
    title: 'Services',
    links: [
      { label: 'Buy', href: '#' },
      { label: 'Sell', href: '#' },
      { label: 'Rent', href: '#' },
      { label: 'Investment', href: '#' },
    ],
  },
  support: {
    title: 'Support',
    links: [
      { label: 'Help Center', href: '#' },
      { label: 'FAQs', href: '/faqs' },
      { label: 'Contact Support', href: '#' },
      { label: 'Privacy Policy', href: '#' },
    ],
  },
  legal: {
    title: 'Legal',
    links: [
      { label: 'Terms & Conditions', href: '/terms' },
      { label: 'Privacy Policy', href: '#' },
      { label: 'Cookie Policy', href: '#' },
      { label: 'Disclaimer', href: '#' },
    ],
  },
  contact: {
    email: 'mohamedbasyonydawood@gmail.com',
    phone: '+201062842697',
    address: 'Tanta, Gharbia, Egypt',
  },
};

// About Us data
export const aboutData = {
  title: 'About Estateo',
  description:
    'Estateo is a leading real estate platform dedicated to making property search simple, transparent, and accessible to everyone.',
  mission:
    'Our mission is to revolutionize the way people buy, sell, and rent properties by providing trustworthy information and expert guidance.',
  vision:
    'We envision a world where everyone can find their perfect property with confidence and ease.',
  values: [
    {
      id: 1,
      title: 'Transparency',
      description:
        'We believe in honest and clear communication in all our dealings.',
    },
    {
      id: 2,
      title: 'Innovation',
      description:
        'We continuously innovate to provide cutting-edge real estate solutions.',
    },
    {
      id: 3,
      title: 'Customer Focus',
      description: 'Your satisfaction is our top priority in everything we do.',
    },
    {
      id: 4,
      title: 'Integrity',
      description:
        'We maintain the highest standards of ethical business practices.',
    },
  ],
};

// Contact Us data
export const contactData = {
  title: 'Get In Touch',
  description:
    "Have questions? We'd love to hear from you. Send us a message and we'll respond as soon as possible.",
  offices: [
    {
      id: 1,
      city: 'Tanta',
      address: 'ElBahr, Tanta, Egypt',
      phone: '+201062842697',
      email: 'mohamedbasyonydawood@gmail.com',
    },
    {
      id: 2,
      city: 'Los Angeles',
      address: '456 Property Blvd, Los Angeles, CA 90001',
      phone: '+1 (555) 234-5678',
      email: 'la@estateo.com',
    },
    {
      id: 3,
      city: 'Chicago',
      address: '789 Estate Dr, Chicago, IL 60601',
      phone: '+1 (555) 345-6789',
      email: 'chicago@estateo.com',
    },
  ],
};

// Terms and Conditions data
export const termsData = {
  title: 'Terms and Conditions',
  lastUpdated: 'November 2025',
  sections: [
    {
      id: 1,
      title: 'Acceptance of Terms',
      content:
        'By accessing and using this website, you accept and agree to be bound by the terms and provision of this agreement. If you do not agree to abide by the above, please do not use this service.',
    },
    {
      id: 2,
      title: 'Use License',
      content:
        'Permission is granted to temporarily download one copy of the materials (information or software) on Estateo for personal, non-commercial transitory viewing only. This is the grant of a license, not a transfer of title, and under this license you may not: modify or copy the materials; use the materials for any commercial purpose or for any public display; attempt to decompile or reverse engineer any software contained on the website; remove any copyright or other proprietary notations from the materials.',
    },
    {
      id: 3,
      title: 'Disclaimer',
      content:
        'The materials on Estateo are provided for informational purposes only. Estateo does not warrant the accuracy, adequacy, or completeness of this information and material, and expressly disclaims liability for any errors or omissions in this information.',
    },
    {
      id: 4,
      title: 'Limitations',
      content:
        'In no event shall Estateo or its suppliers be liable for any damages (including, without limitation, damages for loss of data or profit, or due to business interruption) arising out of the use or inability to use Estateo, even if we have been notified orally or in writing of the possibility of such damage.',
    },
    {
      id: 5,
      title: 'User Responsibilities',
      content:
        'Users are responsible for maintaining the confidentiality of their account information and passwords, and are fully responsible for all activities that occur under their account. Users agree to notify Estateo immediately of any unauthorized use of their account or any other breach of security.',
    },
    {
      id: 6,
      title: 'Changes to Terms',
      content:
        'Estateo reserves the right to modify these Terms at any time. Changes will be posted on this page, and your continued use of the website following the posting of revised Terms means that you accept and agree to the changes.',
    },
  ],
};
