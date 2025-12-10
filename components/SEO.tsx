import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

interface SEOProps {
  title: string;
  description: string;
  type?: 'website' | 'article';
  structuredData?: Record<string, any>;
}

const SEO: React.FC<SEOProps> = ({ title, description, type = 'website', structuredData }) => {
  const location = useLocation();

  useEffect(() => {
    // Update Title
    document.title = title;

    // Update Meta Description
    let metaDesc = document.querySelector('meta[name="description"]');
    if (!metaDesc) {
      metaDesc = document.createElement('meta');
      metaDesc.setAttribute('name', 'description');
      document.head.appendChild(metaDesc);
    }
    metaDesc.setAttribute('content', description);

    // Update Open Graph tags (basic implementation)
    const updateMeta = (property: string, content: string) => {
      let element = document.querySelector(`meta[property="${property}"]`);
      if (!element) {
        element = document.createElement('meta');
        element.setAttribute('property', property);
        document.head.appendChild(element);
      }
      element.setAttribute('content', content);
    };

    updateMeta('og:title', title);
    updateMeta('og:description', description);
    updateMeta('og:url', window.location.href);
    updateMeta('og:type', type);

    // Handle JSON-LD Structured Data
    let script: HTMLScriptElement | null = null;
    
    if (structuredData) {
      // Create a new script element for JSON-LD
      script = document.createElement('script');
      script.setAttribute('type', 'application/ld+json');
      script.textContent = JSON.stringify(structuredData);
      document.head.appendChild(script);
    }

    // Cleanup function
    return () => {
      if (script && document.head.contains(script)) {
        document.head.removeChild(script);
      }
    };

  }, [title, description, type, location, structuredData]);

  return null;
};

export default SEO;