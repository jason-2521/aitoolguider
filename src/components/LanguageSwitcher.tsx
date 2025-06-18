import { useTranslation } from 'react-i18next';
import { Button } from '@/components/ui/button';
import { Globe } from 'lucide-react';
import { trackLanguageChange } from './GoogleAnalytics';

const LanguageSwitcher = () => {
  const { i18n, t } = useTranslation();

  const toggleLanguage = () => {
    const newLang = i18n.language === 'en' ? 'zh' : 'en';
    i18n.changeLanguage(newLang);
    trackLanguageChange(newLang);
  };

  return (
    <Button
      variant="outline"
      size="sm"
      onClick={toggleLanguage}
      className="flex items-center space-x-2 hover:bg-purple-50 hover:border-purple-300"
    >
      <Globe className="w-4 h-4" />
      <span>{t('buttons.switchLanguage')}</span>
    </Button>
  );
};

export default LanguageSwitcher;
