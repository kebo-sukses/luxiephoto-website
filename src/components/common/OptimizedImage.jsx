import React, { useState, useRef, useEffect } from 'react';
import { cn } from '@/utils/helpers';

/**
 * OptimizedImage Component - Lazy loading with blur placeholder
 */
const OptimizedImage = ({
  src,
  alt,
  className = '',
  containerClassName = '',
  width,
  height,
  priority = false,
  objectFit = 'cover',
  onLoad,
  sizes = '100vw',
  quality = 80,
}) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [isInView, setIsInView] = useState(priority);
  const [error, setError] = useState(false);
  const imgRef = useRef(null);

  // Generate optimized srcset for responsive images
  const generateSrcSet = (baseUrl) => {
    const widths = [400, 800, 1200, 1600, 2000];
    
    // Check if it's an Unsplash URL
    if (baseUrl.includes('unsplash.com')) {
      return widths
        .map(w => {
          const url = new URL(baseUrl);
          url.searchParams.set('w', w.toString());
          url.searchParams.set('q', quality.toString());
          return `${url.toString()} ${w}w`;
        })
        .join(', ');
    }
    
    return undefined;
  };

  // Intersection Observer for lazy loading
  useEffect(() => {
    if (priority) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
          observer.disconnect();
        }
      },
      {
        rootMargin: '50px',
        threshold: 0.01,
      }
    );

    if (imgRef.current) {
      observer.observe(imgRef.current);
    }

    return () => observer.disconnect();
  }, [priority]);

  const handleLoad = () => {
    setIsLoaded(true);
    onLoad?.();
  };

  const handleError = () => {
    setError(true);
  };

  const srcSet = generateSrcSet(src);

  return (
    <div
      ref={imgRef}
      className={cn(
        'relative overflow-hidden bg-gray-100',
        containerClassName
      )}
      style={{
        aspectRatio: width && height ? `${width}/${height}` : undefined,
      }}
    >
      {/* Blur placeholder / skeleton */}
      <div
        className={cn(
          'absolute inset-0 bg-gradient-to-br from-gray-100 to-gray-200 transition-opacity duration-500',
          isLoaded ? 'opacity-0' : 'opacity-100'
        )}
      >
        {/* Animated shimmer effect */}
        <div className="absolute inset-0 bg-shimmer bg-[length:200%_100%] animate-shimmer" />
      </div>

      {/* Error state */}
      {error && (
        <div className="absolute inset-0 flex items-center justify-center bg-gray-100 text-gray-400">
          <svg
            className="w-12 h-12"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={1.5}
              d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
            />
          </svg>
        </div>
      )}

      {/* Actual image */}
      {isInView && !error && (
        <img
          src={src}
          srcSet={srcSet}
          sizes={sizes}
          alt={alt}
          width={width}
          height={height}
          loading={priority ? 'eager' : 'lazy'}
          decoding={priority ? 'sync' : 'async'}
          onLoad={handleLoad}
          onError={handleError}
          className={cn(
            'w-full h-full transition-all duration-700',
            objectFit === 'cover' && 'object-cover',
            objectFit === 'contain' && 'object-contain',
            objectFit === 'fill' && 'object-fill',
            isLoaded ? 'opacity-100 scale-100' : 'opacity-0 scale-105',
            className
          )}
        />
      )}
    </div>
  );
};

export default OptimizedImage;
