import { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { useParams, useNavigate } from 'react-router-dom';
import { Search, Sparkles, Zap, Brain, Image, Music, Video, Code, FileText, MessageSquare } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import LanguageSwitcher from '@/components/LanguageSwitcher';
import UrlRedirect from '@/components/UrlRedirect';
import { aiToolsData } from '@/data/aiTools';
import { trackToolClick, trackSearch, trackCategoryFilter } from '@/components/GoogleAnalytics';

const Index = () => {
  const { t, i18n } = useTranslation();
  const { lang } = useParams<{ lang?: string }>();
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');

  // Handle language from URL
  useEffect(() => {
    if (lang && (lang === 'en' || lang === 'zh')) {
      i18n.changeLanguage(lang);
    }
  }, [lang, i18n]);

  const categories = [
    { id: 'all', name: t('categories.all'), icon: Sparkles, slug: '' },
    { id: 'chat', name: t('categories.chat'), icon: MessageSquare, slug: 'ai-chat' },
    { id: 'image', name: t('categories.image'), icon: Image, slug: 'image-generation' },
    { id: 'writing', name: t('categories.writing'), icon: FileText, slug: 'writing-tools' },
    { id: 'coding', name: t('categories.coding'), icon: Code, slug: 'coding-tools' },
    { id: 'video', name: t('categories.video'), icon: Video, slug: 'video-tools' },
    { id: 'audio', name: t('categories.audio'), icon: Music, slug: 'audio-tools' },
    { id: 'design', name: t('categories.design'), icon: Zap, slug: 'design-tools' },
    { id: 'productivity', name: t('categories.productivity'), icon: Brain, slug: 'productivity-tools' },
  ];

  const generateTags = (category: string, keyFeatures: string): string[] => {
    const features = keyFeatures.split(',').map(f => f.trim());
    const categoryTags: { [key: string]: string[] } = {
      'chat': [t('tags.conversation'), t('tags.assistant')],
      'image': [t('tags.imageGeneration'), t('tags.artCreation')],
      'writing': [t('tags.writing'), t('tags.contentCreation')],
      'coding': [t('tags.programming'), t('tags.codeGeneration')],
      'video': [t('tags.videoProduction'), t('tags.videoEditing')],
      'audio': [t('tags.audioProcessing'), t('tags.voiceSynthesis')],
      'design': [t('tags.design'), t('tags.creative')],
      'productivity': [t('tags.productivity'), t('tags.automation')]
    };
    
    const baseTags = categoryTags[category] || [t('tags.productivity')];
    const featureTags = features.slice(0, 2).map(f => {
      if (f.toLowerCase().includes('generation')) return t('tags.generation');
      if (f.toLowerCase().includes('editing')) return t('tags.videoEditing');
      if (f.toLowerCase().includes('writing')) return t('tags.writing');
      if (f.toLowerCase().includes('code')) return t('tags.programming');
      if (f.toLowerCase().includes('voice')) return t('tags.voiceSynthesis');
      if (f.toLowerCase().includes('video')) return t('tags.videoProduction');
      if (f.toLowerCase().includes('image')) return t('tags.imageGeneration');
      if (f.toLowerCase().includes('text')) return t('tags.textGeneration');
      if (f.toLowerCase().includes('search')) return t('tags.productivity');
      if (f.toLowerCase().includes('translation')) return t('tags.translation');
      return f.length > 10 ? f.substring(0, 8) : f;
    });
    
    return [...baseTags, ...featureTags].slice(0, 3);
  };

  const localizedTools = aiToolsData.map(tool => ({
    ...tool,
    description: tool.description[i18n.language as 'en' | 'zh'] || tool.description.en,
    tags: generateTags(tool.category, tool.keyFeatures)
  }));

  const filteredTools = localizedTools.filter(tool => {
    const matchesSearch = tool.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         tool.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         tool.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
    const matchesCategory = selectedCategory === 'all' || tool.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  // Track search when searchTerm changes
  const handleSearchChange = (value: string) => {
    setSearchTerm(value);
    if (value.length > 2) {
      const results = localizedTools.filter(tool =>
        tool.name.toLowerCase().includes(value.toLowerCase()) ||
        tool.description.toLowerCase().includes(value.toLowerCase()) ||
        tool.tags.some(tag => tag.toLowerCase().includes(value.toLowerCase()))
      );
      trackSearch(value, results.length);
    }
  };

  // Track category filter changes
  const handleCategoryChange = (categoryId: string) => {
    const category = categories.find(c => c.id === categoryId);
    if (category && category.slug) {
      const langPrefix = lang ? `/${lang}` : '';
      navigate(`${langPrefix}/category/${category.slug}`);
    } else {
      setSelectedCategory(categoryId);
      trackCategoryFilter(categoryId);
    }
  };

  const featuredTools = filteredTools.filter(tool => tool.featured);
  const regularTools = filteredTools.filter(tool => !tool.featured);

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-blue-50 to-indigo-100">
      <UrlRedirect />
      <header className="sticky top-0 z-50 bg-white/90 backdrop-blur-md border-b border-purple-100 shadow-sm">
        <div className="container mx-auto px-4 py-5">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="w-12 h-12 bg-gradient-to-r from-purple-600 to-blue-600 rounded-xl flex items-center justify-center shadow-lg">
                <Sparkles className="w-7 h-7 text-white" />
              </div>
              <h1 className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
                {t('header.title')}
              </h1>
            </div>
            <LanguageSwitcher />
          </div>
        </div>
      </header>

      <section className="pt-20 pb-16 px-4">
        <div className="container mx-auto text-center max-w-6xl">
          <h2 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-8 leading-tight">
            {t('hero.title')}{' '}
            <span className="bg-gradient-to-r from-purple-600 via-blue-600 to-indigo-600 bg-clip-text text-transparent">
              {t('hero.titleHighlight')}
            </span>
          </h2>
          <p className="text-lg md:text-xl text-gray-600 mb-10 max-w-4xl mx-auto leading-relaxed">
            {t('hero.subtitle')}
          </p>
          
          <div className="max-w-3xl mx-auto mb-12">
            <div className="relative">
              <Search className="absolute left-5 top-1/2 transform -translate-y-1/2 text-gray-400 w-6 h-6" />
              <Input
                type="text"
                placeholder={t('hero.searchPlaceholder')}
                value={searchTerm}
                onChange={(e) => handleSearchChange(e.target.value)}
                className="pl-14 pr-6 py-4 text-lg md:text-xl border-2 border-purple-200 focus:border-purple-400 rounded-2xl shadow-lg focus:shadow-xl transition-all duration-300 bg-white/80 backdrop-blur-sm"
              />
            </div>
          </div>

          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {categories.map((category) => {
              const Icon = category.icon;
              return (
                <Button
                  key={category.id}
                  variant={selectedCategory === category.id ? "default" : "outline"}
                  onClick={() => handleCategoryChange(category.id)}
                  className={`flex items-center space-x-2 px-5 py-3 rounded-full transition-all duration-300 ${
                    selectedCategory === category.id
                      ? 'bg-gradient-to-r from-purple-600 to-blue-600 text-white shadow-lg hover:shadow-xl transform hover:scale-105'
                      : 'hover:bg-purple-50 hover:border-purple-300 hover:shadow-md'
                  }`}
                >
                  <Icon className="w-4 h-4" />
                  <span className="font-medium">{category.name}</span>
                </Button>
              );
            })}
          </div>
        </div>
      </section>

      <main className="container mx-auto px-4 pb-16">
        {filteredTools.length === 0 && (
          <div className="text-center py-16">
            <div className="text-6xl mb-4">🔍</div>
            <h3 className="text-2xl font-semibold text-gray-700 mb-2">{t('search.noResults')}</h3>
            <p className="text-gray-500">{t('search.tryOther')}</p>
          </div>
        )}

        {featuredTools.length > 0 && (
          <section className="mb-16">
            <h3 className="text-3xl font-bold mb-8 text-center">
              {t('sections.featured')}
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {featuredTools.map((tool) => (
                <Card key={tool.id} className="group hover:shadow-xl transition-all duration-300 border-2 border-purple-100 hover:border-purple-300 bg-gradient-to-br from-white to-purple-50">
                  <CardHeader className="pb-3">
                    <div className="flex items-center space-x-3 mb-2">
                      <div className="text-3xl">{tool.logo}</div>
                      <div>
                        <CardTitle className="text-xl group-hover:text-purple-600 transition-colors">
                          {tool.name}
                        </CardTitle>
                        <div className="flex items-center space-x-2 mt-1">
                          <span className="px-2 py-1 bg-purple-100 text-purple-700 text-xs rounded-full font-medium">
                            {categories.find(c => c.id === tool.category)?.name}
                          </span>
                          <span className="px-2 py-1 bg-yellow-100 text-yellow-700 text-xs rounded-full font-medium">
                            ⭐ {t('sections.featured')}
                          </span>
                        </div>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-gray-600 mb-4 line-clamp-3">
                      {tool.description}
                    </CardDescription>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {tool.tags.map((tag, index) => (
                        <span key={index} className="px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded-full">
                          {tag}
                        </span>
                      ))}
                    </div>
                    <Button
                      asChild
                      className="w-full bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700"
                    >
                      <a
                        href={tool.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={() => trackToolClick(tool.name, tool.category, tool.url)}
                      >
                        {t('buttons.tryNow')}
                      </a>
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>
        )}

        {regularTools.length > 0 && (
          <section>
            <h3 className="text-3xl font-bold mb-8 text-center">
              {selectedCategory === 'all' 
                ? t('sections.allTools') 
                : t('sections.categoryTools', { 
                    category: categories.find(c => c.id === selectedCategory)?.name 
                  })
              }
              <span className="text-lg font-normal text-gray-500 ml-2">
                {t('sections.toolCount', { count: regularTools.length })}
              </span>
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {regularTools.map((tool) => (
                <Card key={tool.id} className="group hover:shadow-lg transition-all duration-300 border hover:border-purple-200">
                  <CardHeader className="pb-3">
                    <div className="flex items-center space-x-3 mb-2">
                      <div className="text-2xl">{tool.logo}</div>
                      <div className="flex-1">
                        <CardTitle className="text-lg group-hover:text-purple-600 transition-colors">
                          {tool.name}
                        </CardTitle>
                        <span className="px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded-full font-medium">
                          {categories.find(c => c.id === tool.category)?.name}
                        </span>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-gray-600 mb-4 line-clamp-2 text-sm">
                      {tool.description}
                    </CardDescription>
                    <div className="flex flex-wrap gap-1 mb-4">
                      {tool.tags.slice(0, 2).map((tag, index) => (
                        <span key={index} className="px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded-full">
                          {tag}
                        </span>
                      ))}
                    </div>
                    <Button
                      asChild
                      variant="outline"
                      size="sm"
                      className="w-full hover:bg-purple-50 hover:border-purple-300"
                    >
                      <a
                        href={tool.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={() => trackToolClick(tool.name, tool.category, tool.url)}
                      >
                        {t('buttons.visitTool')}
                      </a>
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>
        )}
      </main>
    </div>
  );
};

export default Index;
