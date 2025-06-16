export interface AITool {
  id: number;
  name: string;
  description: {
    en: string;
    zh: string;
  };
  category: string;
  url: string;
  logo: string;
  keyFeatures: string;
  featured: boolean;
  rank: number;
  monthlyTraffic: number;
}

export const aiToolsData: AITool[] = [
  {
    id: 1,
    name: 'ChatGPT',
    description: {
      en: 'Conversational AI assistant by OpenAI for natural language conversations, text generation, coding, and creative writing',
      zh: 'OpenAI开发的对话式AI助手，能够进行自然语言对话、文本生成、编程和创意写作'
    },
    category: 'chat',
    url: 'https://chat.openai.com',
    logo: '🤖',
    keyFeatures: 'Text generation, coding, creative writing',
    featured: true,
    rank: 1,
    monthlyTraffic: 75000000
  },
  {
    id: 2,
    name: 'Canva',
    description: {
      en: 'AI-powered design platform with templates, Magic Studio, and image generation features',
      zh: 'AI驱动的设计平台，提供模板、Magic Studio和图像生成功能'
    },
    category: 'design',
    url: 'https://canva.com',
    logo: '🎨',
    keyFeatures: 'Templates, Magic Studio, image generation',
    featured: true,
    rank: 2,
    monthlyTraffic: 263500000
  },
  {
    id: 3,
    name: 'DeepL',
    description: {
      en: 'AI translation service with high-quality translation in 31 languages',
      zh: 'AI翻译服务，支持31种语言的高质量翻译'
    },
    category: 'writing',
    url: 'https://deepl.com',
    logo: '🌐',
    keyFeatures: 'High-quality translation in 31 languages',
    featured: true,
    rank: 3,
    monthlyTraffic: 167300000
  },
  {
    id: 4,
    name: 'Midjourney',
    description: {
      en: 'AI art and image generation platform with high-quality image generation and Discord integration',
      zh: 'AI艺术和图像生成平台，通过Discord集成提供高质量图像生成'
    },
    category: 'image',
    url: 'https://midjourney.com',
    logo: '🎨',
    keyFeatures: 'High-quality image generation, Discord integration',
    featured: true,
    rank: 9,
    monthlyTraffic: 910000
  },
  {
    id: 5,
    name: 'Gemini',
    description: {
      en: "Google's multimodal AI assistant supporting text, image, and code generation",
      zh: 'Google的多模态AI助手，支持文本、图像和代码生成'
    },
    category: 'chat',
    url: 'https://gemini.google.com',
    logo: '💎',
    keyFeatures: 'Text, image, and code generation',
    featured: true,
    rank: 10,
    monthlyTraffic: 2830246
  },
  {
    id: 6,
    name: 'DALL-E 3',
    description: {
      en: "OpenAI's advanced image generation model with text-to-image generation and editing capabilities",
      zh: 'OpenAI的先进图像生成模型，具备文本到图像生成和编辑功能'
    },
    category: 'image',
    url: 'https://openai.com/dall-e-3',
    logo: '🖼️',
    keyFeatures: 'Text-to-image generation, editing capabilities',
    featured: false,
    rank: 11,
    monthlyTraffic: 890000
  },
  {
    id: 7,
    name: 'Microsoft Copilot',
    description: {
      en: "Microsoft's AI assistant with Office integration, web search, and image generation",
      zh: 'Microsoft的AI助手，集成Office、网络搜索和图像生成功能'
    },
    category: 'chat',
    url: 'https://copilot.microsoft.com',
    logo: '🔧',
    keyFeatures: 'Office integration, web search, image generation',
    featured: false,
    rank: 12,
    monthlyTraffic: 2828587
  },
  {
    id: 8,
    name: 'Runway',
    description: {
      en: 'AI-powered video editing and generation platform with text-to-video and image-to-video features',
      zh: 'AI驱动的视频编辑和生成平台，支持文本到视频、图像到视频等功能'
    },
    category: 'video',
    url: 'https://runwayml.com',
    logo: '🎬',
    keyFeatures: 'Text-to-video, image-to-video, editing tools',
    featured: false,
    rank: 13,
    monthlyTraffic: 870000
  },
  {
    id: 9,
    name: 'Character.ai',
    description: {
      en: 'Platform for creating and chatting with AI characters, supporting character creation, roleplay, and community',
      zh: '创建和与AI角色聊天的平台，支持角色创建、角色扮演和社区功能'
    },
    category: 'chat',
    url: 'https://character.ai',
    logo: '👥',
    keyFeatures: 'Character creation, roleplay, community',
    featured: false,
    rank: 14,
    monthlyTraffic: 1052473
  },
  {
    id: 10,
    name: 'Jasper',
    description: {
      en: 'AI content generation platform focused on blog writing, marketing copy, and templates',
      zh: 'AI内容生成平台，专注于博客写作、营销文案和模板'
    },
    category: 'writing',
    url: 'https://jasper.ai',
    logo: '✍️',
    keyFeatures: 'Blog writing, marketing copy, templates',
    featured: false,
    rank: 15,
    monthlyTraffic: 850000
  },
  {
    id: 11,
    name: 'Quizizz',
    description: {
      en: 'AI-powered quiz and learning platform with quiz generation, analytics, and gamification',
      zh: 'AI驱动的测验和学习平台，提供测验生成、分析和游戏化功能'
    },
    category: 'productivity',
    url: 'https://quizizz.com',
    logo: '📚',
    keyFeatures: 'Quiz generation, analytics, gamification',
    featured: false,
    rank: 16,
    monthlyTraffic: 4049386
  },
  {
    id: 12,
    name: 'Copy.ai',
    description: {
      en: 'AI copywriting assistant focused on marketing copy, emails, and product descriptions',
      zh: 'AI文案写作助手，专注于营销文案、邮件和产品描述'
    },
    category: 'writing',
    url: 'https://copy.ai',
    logo: '📝',
    keyFeatures: 'Marketing copy, emails, product descriptions',
    featured: false,
    rank: 17,
    monthlyTraffic: 830000
  },
  {
    id: 13,
    name: 'CapCut',
    description: {
      en: 'AI video editing platform with templates, effects, and AI enhancement features',
      zh: 'AI视频编辑平台，提供模板、特效和AI增强功能'
    },
    category: 'video',
    url: 'https://capcut.com',
    logo: '✂️',
    keyFeatures: 'Templates, effects, AI enhancement',
    featured: false,
    rank: 18,
    monthlyTraffic: 1045099
  },
  {
    id: 14,
    name: 'GitHub Copilot',
    description: {
      en: 'AI programming assistant with code suggestions, documentation writing, and debugging',
      zh: 'AI编程助手，提供代码建议、文档编写和调试功能'
    },
    category: 'coding',
    url: 'https://github.com/features/copilot',
    logo: '💻',
    keyFeatures: 'Code suggestions, documentation, debugging',
    featured: false,
    rank: 19,
    monthlyTraffic: 810000
  },
  {
    id: 15,
    name: 'DeepAI',
    description: {
      en: 'Collection of AI tools and APIs including image generation, text analysis, and style transfer',
      zh: 'AI工具和API集合，包括图像生成、文本分析和风格转换'
    },
    category: 'productivity',
    url: 'https://deepai.org',
    logo: '🧠',
    keyFeatures: 'Image generation, text analysis, style transfer',
    featured: false,
    rank: 20,
    monthlyTraffic: 77004
  },
  {
    id: 16,
    name: 'Cursor',
    description: {
      en: 'AI-first code editor with code generation, explanation, and refactoring capabilities',
      zh: 'AI优先的代码编辑器，支持代码生成、解释和重构'
    },
    category: 'coding',
    url: 'https://cursor.sh',
    logo: '⌨️',
    keyFeatures: 'Code generation, explanation, refactoring',
    featured: false,
    rank: 21,
    monthlyTraffic: 790000
  },
  {
    id: 17,
    name: 'Hugging Face',
    description: {
      en: 'AI model hub and development platform with model hosting, datasets, and Spaces',
      zh: 'AI模型中心和开发平台，提供模型托管、数据集和Spaces'
    },
    category: 'coding',
    url: 'https://huggingface.co',
    logo: '🤗',
    keyFeatures: 'Model hosting, datasets, Spaces',
    featured: false,
    rank: 22,
    monthlyTraffic: 2448969
  },
  {
    id: 18,
    name: 'Perplexity AI',
    description: {
      en: 'AI-powered search engine with conversational search, citations, and multimodal capabilities',
      zh: 'AI驱动的搜索引擎，提供对话式搜索、引用和多模态功能'
    },
    category: 'productivity',
    url: 'https://perplexity.ai',
    logo: '🔍',
    keyFeatures: 'Conversational search, citations, multimodal',
    featured: false,
    rank: 23,
    monthlyTraffic: 770000
  },
  {
    id: 19,
    name: 'Poe',
    description: {
      en: 'Platform for chatting with multiple AI models, supporting various AI models and custom bots',
      zh: '与多个AI模型聊天的平台，支持多种AI模型和自定义机器人'
    },
    category: 'chat',
    url: 'https://poe.com',
    logo: '💬',
    keyFeatures: 'Multiple AI models, custom bots',
    featured: false,
    rank: 24,
    monthlyTraffic: 294881
  },
  {
    id: 20,
    name: 'ElevenLabs',
    description: {
      en: 'AI voice generation platform with text-to-speech, voice cloning, and multilingual support',
      zh: 'AI语音生成平台，支持文本转语音、语音克隆和多语言功能'
    },
    category: 'audio',
    url: 'https://elevenlabs.io',
    logo: '🎙️',
    keyFeatures: 'Text-to-speech, voice cloning, multilingual',
    featured: false,
    rank: 25,
    monthlyTraffic: 750000
  }
];
