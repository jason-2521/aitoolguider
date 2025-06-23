import { useParams, Navigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { useState } from 'react';
import { Search, Sparkles, Zap, Brain, Image, Music, Video, Code, FileText, MessageSquare } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import LanguageSwitcher from '@/components/LanguageSwitcher';
import { aiToolsData } from '@/data/aiTools';
import { trackToolClick, trackSearch } from '@/components/GoogleAnalytics';

const CategoryPage = () => {
  const { category } = useParams<{ category: string }>();
  const { t, i18n } = useTranslation();
  const [searchTerm, setSearchTerm] = useState('');

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

  // Find current category by slug
  const currentCategory = categories.find(cat => cat.slug === category);
  
  // If category not found, redirect to home
  if (category && !currentCategory) {
    return <Navigate to="/" replace />;
  }

  const selectedCategoryId = currentCategory?.id || 'all';

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
      if (f.toLowerCase().includes('design')) return t('tags.design');
      if (f.toLowerCase().includes('audio')) return t('tags.audioProcessing');
      if (f.toLowerCase().includes('video')) return t('tags.videoProduction');
      return f;
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
    const matchesCategory = selectedCategoryId === 'all' || tool.category === selectedCategoryId;
    return matchesSearch && matchesCategory;
  });

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

  const featuredTools = filteredTools.filter(tool => tool.featured);
  const regularTools = filteredTools.filter(tool => !tool.featured);

  const pageTitle = currentCategory 
    ? `${currentCategory.name} - ${t('header.title')}`
    : t('header.title');

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-blue-50 to-indigo-100">
      {/* Update document title */}
      <title>{pageTitle}</title>
      
      <header className="bg-white/90 backdrop-blur-md border-b border-purple-100 sticky top-0 z-50 shadow-sm">
        <div className="container mx-auto px-4 py-5">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="w-12 h-12 bg-gradient-to-r from-purple-600 to-blue-600 rounded-xl flex items-center justify-center shadow-lg">
                <Sparkles className="w-7 h-7 text-white" />
              </div>
              <h1 className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
                {pageTitle}
              </h1>
            </div>
            <LanguageSwitcher />
          </div>
        </div>
      </header>

      <section className="pt-20 pb-16 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 bg-gradient-to-r from-purple-600 via-blue-600 to-indigo-600 bg-clip-text text-transparent leading-tight">
              {currentCategory ? currentCategory.name : t('hero.title')}
            </h2>
            <p className="text-lg md:text-xl text-gray-600 mb-10 max-w-4xl mx-auto leading-relaxed">
              {currentCategory
                ? t('hero.categoryDescription', { category: currentCategory.name })
                : t('hero.subtitle')
              }
            </p>

            <div className="relative max-w-3xl mx-auto mb-8">
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

          {/* Category Navigation */}
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {categories.map((cat) => {
              const Icon = cat.icon;
              const isActive = cat.id === selectedCategoryId;
              const href = cat.slug ? `/category/${cat.slug}` : '/';
              
              return (
                <Button
                  key={cat.id}
                  asChild
                  variant={isActive ? "default" : "outline"}
                  className={`flex items-center space-x-2 px-5 py-3 rounded-full transition-all duration-300 ${
                    isActive
                      ? 'bg-gradient-to-r from-purple-600 to-blue-600 text-white shadow-lg hover:shadow-xl transform hover:scale-105'
                      : 'hover:bg-purple-50 hover:border-purple-300 hover:shadow-md'
                  }`}
                >
                  <a href={href}>
                    <Icon className="w-4 h-4" />
                    <span className="font-medium">{cat.name}</span>
                  </a>
                </Button>
              );
            })}
          </div>

          {/* Tools Display */}
          {featuredTools.length > 0 && (
            <section className="mb-16">
              <h3 className="text-3xl font-bold mb-8 text-center">
                {t('sections.featured')}
                <span className="text-lg font-normal text-gray-500 ml-2">
                  {t('sections.toolCount', { count: featuredTools.length })}
                </span>
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {featuredTools.map((tool) => (
                  <Card key={tool.id} className="group hover:shadow-xl transition-all duration-300 border-2 border-yellow-200 bg-gradient-to-br from-yellow-50 to-orange-50">
                    <CardHeader>
                      <div className="flex items-start justify-between">
                        <div className="text-3xl mb-2">{tool.logo}</div>
                      </div>
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
                    </CardHeader>
                    <CardContent>
                      <CardDescription className="text-gray-600 mb-4 line-clamp-3">
                        {tool.description}
                      </CardDescription>
                      <div className="flex flex-wrap gap-1 mb-4">
                        {tool.tags.map((tag, index) => (
                          <span key={index} className="px-2 py-1 bg-blue-100 text-blue-700 text-xs rounded-full">
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
                {selectedCategoryId === 'all' 
                  ? t('sections.allTools') 
                  : t('sections.categoryTools', { 
                      category: categories.find(c => c.id === selectedCategoryId)?.name 
                    })
                }
                <span className="text-lg font-normal text-gray-500 ml-2">
                  {t('sections.toolCount', { count: regularTools.length })}
                </span>
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {regularTools.map((tool) => (
                  <Card key={tool.id} className="group hover:shadow-lg transition-all duration-300">
                    <CardHeader>
                      <div className="flex items-start space-x-3">
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
                      <CardDescription className="text-gray-600 mb-4 line-clamp-2">
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

          {filteredTools.length === 0 && (
            <div className="text-center py-16">
              <div className="text-6xl mb-4">🔍</div>
              <h3 className="text-2xl font-bold text-gray-600 mb-2">{t('search.noResults')}</h3>
              <p className="text-gray-500">{t('search.tryDifferent')}</p>
            </div>
          )}
        </div>
      </section>
    </div>
  );
};

export default CategoryPage;
