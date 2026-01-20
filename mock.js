// Mock data for LuxiePhoto - Wedding Photography Website

export const navigationLinks = [
  { name: 'Home', path: '/', hasDropdown: true, dropdownItems: [
    { name: 'Home - Layout 1', path: '/' },
    { name: 'Home - Layout 2', path: '/home-2' }
  ]},
  { name: 'About', path: '/about', hasDropdown: false },
  { name: 'Portfolio', path: '/portfolio', hasDropdown: true, dropdownItems: [
    { name: 'Portfolio Style 1', path: '/portfolio' },
    { name: 'Portfolio Style 2', path: '/portfolio-2' },
    { name: 'Single Portfolio', path: '/portfolio/1' }
  ]},
  { name: 'Pages', path: '#', hasDropdown: true, dropdownItems: [
    { name: 'Services', path: '/services' },
    { name: 'Our Team', path: '/team' },
    { name: 'Pricing', path: '/pricing' },
    { name: 'FAQ', path: '/faq' }
  ]},
  { name: 'Blog', path: '/blog', hasDropdown: true, dropdownItems: [
    { name: 'Blog Page', path: '/blog' },
    { name: 'Single Post', path: '/blog/1' }
  ]},
  { name: 'Contact', path: '/contact', hasDropdown: false }
];

export const heroContent = {
  subtitle: 'Wedding Photography',
  title: 'Make A Wonderful Story\nFor Your Wedding',
  cta: 'View Portfolio'
};

export const aboutContent = {
  subtitle: 'About Us',
  name: 'Luxie Photography',
  title: "I'm Luxie, I'm A Wedding Photographer",
  description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
  signature: 'Luxie Photo'
};

export const services = [
  {
    id: 1,
    icon: 'Video',
    title: 'Wedding Videography',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
  },
  {
    id: 2,
    icon: 'Camera',
    title: 'Wedding Photography',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
  },
  {
    id: 3,
    icon: 'Brush',
    title: 'Retouch Photo',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
  }
];

export const portfolioItems = [
  {
    id: 1,
    image: 'https://images.unsplash.com/photo-1604017011826-d3b4c23f8914?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDk1Nzd8MHwxfHNlYXJjaHwyfHx3ZWRkaW5nJTIwcGhvdG9ncmFwaHl8ZW58MHx8fHwxNzY4NjY0NjE0fDA&ixlib=rb-4.1.0&q=85',
    names: 'Arthur & Linda',
    category: 'Classic Wedding',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore.'
  },
  {
    id: 2,
    image: 'https://images.unsplash.com/photo-1573676048035-9c2a72b6a12a?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDk1Nzd8MHwxfHNlYXJjaHwzfHx3ZWRkaW5nJTIwcGhvdG9ncmFwaHl8ZW58MHx8fHwxNzY4NjY0NjE0fDA&ixlib=rb-4.1.0&q=85',
    names: 'Thomas & Grace',
    category: 'Classic Wedding',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore.'
  },
  {
    id: 3,
    image: 'https://images.unsplash.com/flagged/photo-1552981941-424aac2b4311?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDk1Nzd8MHwxfHNlYXJjaHw0fHx3ZWRkaW5nJTIwcGhvdG9ncmFwaHl8ZW58MHx8fHwxNzY4NjY0NjE0fDA&ixlib=rb-4.1.0&q=85',
    names: 'Michael & Gina',
    category: 'Casual Wedding',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore.'
  },
  {
    id: 4,
    image: 'https://images.unsplash.com/photo-666811088961-c666a471ad15?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NTYxOTF8MHwxfHNlYXJjaHwxfHxicmlkYWwlMjBwb3J0cmFpdHN8ZW58MHx8fHwxNzY4NjY0NjIwfDA&ixlib=rb-4.1.0&q=85',
    names: 'Freddie & Aida',
    category: 'Nature Wedding',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore.'
  },
  {
    id: 5,
    image: 'https://images.unsplash.com/photo-1638527033651-ca8700003190?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDk1NzZ8MHwxfHNlYXJjaHwyfHxjb3VwbGUlMjBwaG90b2dyYXBoeXxlbnwwfHx8fDE3Njg2NjQ2MjZ8MA&ixlib=rb-4.1.0&q=85',
    names: 'Robbie & Magie',
    category: 'Casual Wedding',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore.'
  },
  {
    id: 6,
    image: 'https://images.unsplash.com/photo-1563808599481-34a342e44508?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDk1NzZ8MHwxfHNlYXJjaHwzfHxjb3VwbGUlMjBwaG90b2dyYXBoeXxlbnwwfHx8fDE3Njg2NjQ2MjZ8MA&ixlib=rb-4.1.0&q=85',
    names: 'Alfie & Jessie',
    category: 'Casual Wedding',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore.'
  },
  {
    id: 7,
    image: 'https://images.unsplash.com/photo-1576566933304-a2d7d8a496fe?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDk1NzZ8MHwxfHNlYXJjaHw0fHxjb3VwbGUlMjBwaG90b2dyYXBoeXxlbnwwfHx8fDE3Njg2NjQ2MjZ8MA&ixlib=rb-4.1.0&q=85',
    names: 'John & Esme',
    category: 'Casual Wedding',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore.'
  },
  {
    id: 8,
    image: 'https://images.pexels.com/photos/2058070/pexels-photo-2058070.jpeg',
    names: 'Finn & May',
    category: 'Casual Wedding',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore.'
  }
];

export const testimonials = [
  {
    id: 1,
    image: 'https://images.unsplash.com/photo-1604017011826-d3b4c23f8914?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDk1Nzd8MHwxfHNlYXJjaHwyfHx3ZWRkaW5nJTIwcGhvdG9ncmFwaHl8ZW58MHx8fHwxNzY4NjY0NjE0fDA&ixlib=rb-4.1.0&q=85',
    names: 'Robbie & Maggie',
    role: 'Bride – Groom',
    text: "Wow we are both blown away, these photos are beautiful. Thank you so much for capturing our wedding day. We love our photos and how you've captured every precious moment of our ceremony in detail. We can't thank you enough. It was wonderful to meet you, you have left a lasting memory with us."
  },
  {
    id: 2,
    image: 'https://images.unsplash.com/photo-1573676048035-9c2a72b6a12a?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDk1Nzd8MHwxfHNlYXJjaHwzfHx3ZWRkaW5nJTIwcGhvdG9ncmFwaHl8ZW58MHx8fHwxNzY4NjY0NjE0fDA&ixlib=rb-4.1.0&q=85',
    names: 'Arthur & Linda',
    role: 'Bride – Groom',
    text: "I can't begin to express how truly grateful we are for LuxiePhoto and their incredible talent in capturing our wedding day. From the very first moment, we knew we were in great hands. The entire experience was exceptional, from our initial consultation to receiving our final, beautifully edited gallery."
  },
  {
    id: 3,
    image: 'https://images.unsplash.com/flagged/photo-1552981941-424aac2b4311?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDk1Nzd8MHwxfHNlYXJjaHw0fHx3ZWRkaW5nJTIwcGhvdG9ncmFwaHl8ZW58MHx8fHwxNzY4NjY0NjE0fDA&ixlib=rb-4.1.0&q=85',
    names: 'Freddie & Aida',
    role: 'Bride – Groom',
    text: "LuxiePhoto beautifully captured every emotion on our wedding day, from the happy tears to the laughter. Looking through our photos is like reliving the day over and over – they truly tell the story of our love. Their style is both elegant and candid, and their eye for those little in-between moments is incredible."
  }
];

export const partners = [
  { id: 1, name: 'Roxana' },
  { id: 2, name: 'Felton' },
  { id: 3, name: 'Pennelope' },
  { id: 4, name: 'Savannah' },
  { id: 5, name: 'Sacramento' },
  { id: 6, name: 'Evelyn' },
  { id: 7, name: 'Laura Violy' },
  { id: 8, name: 'Milla' }
];

export const pricingPlans = [
  {
    id: 1,
    name: 'Package Basic',
    price: 69,
    features: ['1 Hour Session', '10 Digital Images', 'Online Gallery', '1 Photographer']
  },
  {
    id: 2,
    name: 'Package Premium',
    price: 99,
    features: ['2 Hour Session', '20 Digital Images', 'Online Gallery', '1 Photographer'],
    popular: true
  },
  {
    id: 3,
    name: 'Package Deluxe',
    price: 139,
    features: ['3 Hour Session', '30 Digital Images', 'Online Gallery', '2 Photographer']
  }
];

export const contactInfo = {
  address: 'Jl. Pantai Batu Bolong 69, Canggu, Bali',
  phone: '(+62) 8152 253 778',
  email: 'support@luxiephoto.com'
};

export const blogPosts = [
  {
    id: 1,
    image: 'https://images.unsplash.com/photo-1533091090875-1ff4acc497dd?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDk1Nzd8MHwxfHNlYXJjaHwxfHx3ZWRkaW5nJTIwcGhvdG9ncmFwaHl8ZW58MHx8fHwxNzY4NjY0NjE0fDA&ixlib=rb-4.1.0&q=85',
    title: 'Wedding Portfolio Tips for Photographers',
    date: 'November 8, 2024',
    excerpt: 'Lorem ipsum dolor sit amet, consectetur elit adipiscing, sed do eiusm tempor incididunt ut viverra nulla metus varius laoreet ut…'
  },
  {
    id: 2,
    image: 'https://images.pexels.com/photos/949224/pexels-photo-949224.jpeg',
    title: "Freddie And Aida's Nature Wedding In Bali",
    date: 'November 5, 2024',
    excerpt: 'Lorem ipsum dolor sit amet, consectetur elit adipiscing, sed do eiusm tempor incididunt ut viverra nulla metus varius laoreet ut…'
  },
  {
    id: 3,
    image: 'https://images.unsplash.com/photo-1575921900760-9063dc794e0c?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDk1NzZ8MHwxfHNlYXJjaHwxfHxjb3VwbGUlMjBwaG90b2dyYXBoeXxlbnwwfHx8fDE3Njg2NjQ2MjZ8MA&ixlib=rb-4.1.0&q=85',
    title: '5 Reasons To Have A Small Wedding In 2024',
    date: 'November 5, 2024',
    excerpt: 'Lorem ipsum dolor sit amet, consectetur elit adipiscing, sed do eiusm tempor incididunt ut viverra nulla metus varius laoreet ut…'
  }
];

export const footerGallery = [
  'https://images.unsplash.com/photo-1604017011826-d3b4c23f8914?crop=entropy&cs=srgb&fm=jpg&w=150&h=150&fit=crop',
  'https://images.unsplash.com/photo-1573676048035-9c2a72b6a12a?crop=entropy&cs=srgb&fm=jpg&w=150&h=150&fit=crop',
  'https://images.unsplash.com/flagged/photo-1552981941-424aac2b4311?crop=entropy&cs=srgb&fm=jpg&w=150&h=150&fit=crop',
  'https://images.unsplash.com/photo-1638527033651-ca8700003190?crop=entropy&cs=srgb&fm=jpg&w=150&h=150&fit=crop',
  'https://images.unsplash.com/photo-1563808599481-34a342e44508?crop=entropy&cs=srgb&fm=jpg&w=150&h=150&fit=crop',
  'https://images.unsplash.com/photo-1576566933304-a2d7d8a496fe?crop=entropy&cs=srgb&fm=jpg&w=150&h=150&fit=crop'
];

export const socialLinks = [
  { name: 'Facebook', icon: 'Facebook' },
  { name: 'Twitter', icon: 'Twitter' },
  { name: 'Instagram', icon: 'Instagram' },
  { name: 'Pinterest', icon: 'PinIcon' }
];