import React from 'react';
import { motion } from 'motion/react';
import { Brain, Heart, Users, Sparkles } from 'lucide-react';
import { cn } from '../lib/utils';

const features = [
  {
    icon: Brain,
    title: '简单易学',
    description: '拒绝晦涩难懂的专业术语，用最通俗的语言，带您走进AI的世界。',
    color: 'bg-blue-50 text-blue-600'
  },
  {
    icon: Heart,
    title: '贴近生活',
    description: '从写家书、查菜谱到整理照片，让AI真正成为您生活中的好帮手。',
    color: 'bg-red-50 text-red-600'
  },
  {
    icon: Users,
    title: '专属社群',
    description: '购买课程即可加入学习群，与志同道合的朋友一起交流，专家在线答疑。',
    color: 'bg-green-50 text-green-600'
  },
  {
    icon: Sparkles,
    title: '开启新知',
    description: '活到老学到老，AI不是年轻人的专利，更是您开启精彩第二人生的钥匙。',
    color: 'bg-purple-50 text-purple-600'
  }
];

export const Features: React.FC = () => {
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">为什么选择智学AI？</h2>
          <p className="text-xl text-[#666] leading-relaxed">
            我们深知中老年朋友的学习习惯，为您量身定制最舒适、最有效的学习体验。
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="p-8 rounded-3xl border border-[#F0F0F0] hover:border-[#2D5A27] transition-colors group"
            >
              <div className={cn("w-16 h-16 rounded-2xl flex items-center justify-center mb-6 transition-transform group-hover:scale-110", feature.color)}>
                <feature.icon size={32} />
              </div>
              <h3 className="text-2xl font-bold mb-4">{feature.title}</h3>
              <p className="text-[#666] leading-relaxed">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
