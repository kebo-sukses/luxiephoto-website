import { useEffect } from 'react';
import { useCMS } from '@/context/CMSContext';

/**
 * DynamicFavicon - Updates the browser favicon from CMS settings
 * This component doesn't render anything, it just manages the favicon
 */
const DynamicFavicon = () => {
  const { getSiteSettings } = useCMS();
  const settings = getSiteSettings();

  useEffect(() => {
    if (settings?.favicon) {
      // Get all existing favicon links
      const existingFavicons = document.querySelectorAll('link[rel*="icon"]');
      
      // Remove existing favicons
      existingFavicons.forEach(link => link.remove());

      // Create new favicon link
      const link = document.createElement('link');
      link.rel = 'icon';
      link.href = settings.favicon;
      
      // Determine type based on extension
      const ext = settings.favicon.split('.').pop()?.toLowerCase();
      if (ext === 'svg') {
        link.type = 'image/svg+xml';
      } else if (ext === 'png') {
        link.type = 'image/png';
      } else if (ext === 'ico') {
        link.type = 'image/x-icon';
      } else if (ext === 'webp') {
        link.type = 'image/webp';
      } else {
        link.type = 'image/png'; // Default
      }

      document.head.appendChild(link);

      // Also add apple-touch-icon for iOS
      const appleIcon = document.createElement('link');
      appleIcon.rel = 'apple-touch-icon';
      appleIcon.href = settings.favicon;
      document.head.appendChild(appleIcon);
    }
  }, [settings?.favicon]);

  return null; // This component doesn't render anything
};

export default DynamicFavicon;
