import { createClient } from '@sanity/client';
import imageUrlBuilder from '@sanity/image-url';

// Sanity client configuration
export const client = createClient({
  projectId: 'ejbq5x0u',
  dataset: 'production',
  useCdn: true, // CDN untuk performa lebih cepat
  apiVersion: '2024-01-01',
});

// Image URL builder
const builder = imageUrlBuilder(client);

export function urlFor(source) {
  if (!source) return null;
  return builder.image(source);
}

// Fetch all content for homepage
export async function getHomepageContent() {
  const query = `{
    "siteSettings": *[_type == "siteSettings"][0]{
      siteName,
      logo,
      favicon,
      primaryColor,
      secondaryColor,
      fontHeading,
      fontBody,
      socialLinks
    },
    "hero": *[_type == "heroSection"][0]{
      subtitle,
      title,
      titleHighlight,
      description,
      ctaPrimary,
      ctaSecondary,
      backgroundImages[]{
        asset->{url},
        alt
      },
      stats[]{
        number,
        label
      }
    },
    "about": *[_type == "aboutSection"][0]{
      subtitle,
      decorativeText,
      title,
      description,
      features[]{
        title,
        description
      },
      images[]{
        asset->{url},
        alt
      },
      signature,
      experience
    },
    "services": *[_type == "service"] | order(order asc){
      _id,
      icon,
      title,
      description,
      features
    },
    "portfolio": *[_type == "portfolioItem"] | order(order asc){
      _id,
      image{
        asset->{url},
        alt
      },
      names,
      category,
      location,
      description
    },
    "testimonials": *[_type == "testimonial"] | order(order asc){
      _id,
      image{
        asset->{url}
      },
      avatar{
        asset->{url}
      },
      names,
      role,
      rating,
      text,
      location
    },
    "partners": *[_type == "partner"] | order(order asc){
      _id,
      name,
      logo{
        asset->{url}
      }
    },
    "pricing": *[_type == "pricingPlan"] | order(order asc){
      _id,
      name,
      price,
      currency,
      period,
      description,
      features,
      isPopular,
      ctaText
    },
    "blog": *[_type == "blogPost"] | order(publishedAt desc)[0...6]{
      _id,
      title,
      slug,
      excerpt,
      featuredImage{
        asset->{url}
      },
      category,
      author->{
        name,
        avatar{
          asset->{url}
        }
      },
      publishedAt,
      readTime
    },
    "contact": *[_type == "contactInfo"][0]{
      subtitle,
      title,
      description,
      address,
      phone,
      email,
      whatsapp,
      mapEmbed,
      workingHours
    },
    "footer": *[_type == "footerSettings"][0]{
      description,
      quickLinks[]{
        label,
        url
      },
      galleryImages[]{
        asset->{url}
      },
      copyright
    }
  }`;
  
  return client.fetch(query);
}

// Fetch single blog post
export async function getBlogPost(slug) {
  const query = `*[_type == "blogPost" && slug.current == $slug][0]{
    _id,
    title,
    slug,
    content,
    featuredImage{
      asset->{url}
    },
    category,
    author->{
      name,
      avatar{
        asset->{url}
      },
      bio
    },
    publishedAt,
    readTime
  }`;
  
  return client.fetch(query, { slug });
}

// Fetch all portfolio items with filter
export async function getPortfolioItems(category = null) {
  let query = `*[_type == "portfolioItem"`;
  
  if (category && category !== 'all') {
    query += ` && category == $category`;
  }
  
  query += `] | order(order asc){
    _id,
    image{
      asset->{url},
      alt
    },
    names,
    category,
    location,
    description
  }`;
  
  return client.fetch(query, { category });
}
