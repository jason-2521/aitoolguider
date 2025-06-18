import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

declare global {
  interface Window {
    gtag: (command: string, targetId: string, config?: any) => void;
  }
}

const GoogleAnalytics = () => {
  const location = useLocation();

  useEffect(() => {
    // Track page views when route changes
    if (typeof window.gtag !== 'undefined') {
      window.gtag('config', 'G-4J7HYVSTYD', {
        page_path: location.pathname + location.search,
      });
    }
  }, [location]);

  return null;
};

// Helper function to track custom events
export const trackEvent = (action: string, category: string, label?: string, value?: number) => {
  if (typeof window.gtag !== 'undefined') {
    window.gtag('event', action, {
      event_category: category,
      event_label: label,
      value: value,
    });
  }
};

// Helper function to track tool clicks
export const trackToolClick = (toolName: string, category: string, url: string) => {
  trackEvent('click', 'tool_interaction', `${toolName} - ${category}`, 1);
  trackEvent('outbound_link', 'external_link', url);
};

// Helper function to track search
export const trackSearch = (searchTerm: string, resultsCount: number) => {
  trackEvent('search', 'site_search', searchTerm, resultsCount);
};

// Helper function to track language change
export const trackLanguageChange = (language: string) => {
  trackEvent('language_change', 'user_interaction', language);
};

// Helper function to track category filter
export const trackCategoryFilter = (category: string) => {
  trackEvent('category_filter', 'user_interaction', category);
};

export default GoogleAnalytics;
