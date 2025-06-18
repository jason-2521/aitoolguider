import { useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

const UrlRedirect = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { i18n } = useTranslation();

  useEffect(() => {
    const searchParams = new URLSearchParams(location.search);
    const category = searchParams.get('category');
    const lang = searchParams.get('lang');

    // Category slug mapping
    const categorySlugMap: { [key: string]: string } = {
      'chat': 'ai-chat',
      'image': 'image-generation',
      'writing': 'writing-tools',
      'coding': 'coding-tools',
      'video': 'video-tools',
      'audio': 'audio-tools',
      'design': 'design-tools',
      'productivity': 'productivity-tools'
    };

    let newPath = '';

    // Handle language parameter
    if (lang && (lang === 'en' || lang === 'zh')) {
      i18n.changeLanguage(lang);
      newPath = `/${lang}`;
    }

    // Handle category parameter
    if (category && categorySlugMap[category]) {
      const categorySlug = categorySlugMap[category];
      newPath += `/category/${categorySlug}`;
    }

    // Redirect if we have a new path
    if (newPath && newPath !== location.pathname) {
      navigate(newPath, { replace: true });
    }
  }, [location, navigate, i18n]);

  return null;
};

export default UrlRedirect;
