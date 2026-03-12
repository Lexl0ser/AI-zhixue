export interface Product {
  id: string;
  title: string;
  description: string;
  price: number;
  type: 'video' | 'pdf' | 'ppt';
  image: string;
  category: string;
  features: string[];
}

export const products: Product[] = [
  {
    id: '1',
    title: 'AI 基础入门：从零开始认识人工智能',
    description: '专为零基础设计的视频课程，用大白话讲清楚什么是AI，它能帮您做些什么。',
    price: 99,
    type: 'video',
    image: 'https://picsum.photos/seed/ai-basic/800/600',
    category: '入门基础',
    features: ['10集高清视频', '配套PDF讲义', '永久回看']
  },
  {
    id: '2',
    title: '手机AI摄影：让您的照片更有艺术感',
    description: '学习使用手机AI修图工具，一键去路人、自动调色，让您的生活照变大片。',
    price: 68,
    type: 'ppt',
    image: 'https://picsum.photos/seed/ai-photo/800/600',
    category: '生活应用',
    features: ['精美PPT课件', '实操案例演示', '工具推荐清单']
  },
  {
    id: '3',
    title: 'AI 智能助手：您的生活全能管家',
    description: '教您使用AI写对联、查菜谱、写家书，甚至还能帮您制定健康饮食计划。',
    price: 128,
    type: 'pdf',
    image: 'https://picsum.photos/seed/ai-helper/800/600',
    category: '效率提升',
    features: ['50页深度指南', '常用指令模板', '专家在线答疑']
  },
  {
    id: '4',
    title: 'AI 绘画创作：开启您的艺术第二人生',
    description: '不需要画笔，只需一句话，AI就能帮您画出心中的山水画或全家福。',
    price: 158,
    type: 'video',
    image: 'https://picsum.photos/seed/ai-art/800/600',
    category: '兴趣爱好',
    features: ['视频实操教学', '风格提示词库', '作品点评指导']
  }
];
