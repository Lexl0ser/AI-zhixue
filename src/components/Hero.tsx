import React from 'react';
import { motion } from 'motion/react';
import { Sparkles, ArrowRight, PlayCircle } from 'lucide-react';

export const Hero: React.FC = () => {
  return (
    <section className="relative pt-32 pb-20 overflow-hidden">
      {/* Background Decorative Elements */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-[#F5F7F5] -z-10 rounded-l-[100px]" />
      <div className="absolute top-20 right-20 w-64 h-64 bg-[#2D5A27]/5 rounded-full blur-3xl -z-10" />

      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          <div className="lg:w-1/2">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#2D5A27]/10 text-[#2D5A27] rounded-full text-sm font-medium mb-8">
                <Sparkles size={16} />
                <span>开启您的AI智慧生活</span>
              </div>
              <h1 className="text-5xl md:text-7xl font-bold leading-[1.1] mb-8">
                活到老学到老 <br />
                <span className="text-[#2D5A27]">AI</span> 让生活更精彩
              </h1>
              <p className="text-xl md:text-2xl text-[#555] leading-relaxed mb-12 max-w-xl">
                专为中老年朋友打造的AI学习平台。不讲复杂代码，只讲实用技巧。带您轻松掌握人工智能，享受科技带来的便利。
              </p>
              <div className="flex flex-wrap gap-6">
                <button className="btn-primary flex items-center gap-2 text-lg">
                  开始学习
                  <ArrowRight size={20} />
                </button>
                <button className="btn-secondary flex items-center gap-2 text-lg">
                  <PlayCircle size={20} />
                  观看介绍视频
                </button>
              </div>

              <div className="mt-12 flex items-center gap-8">
                <div className="flex -space-x-4">
                  {[1, 2, 3, 4].map((i) => (
                    <img
                      key={i}
                      src={`https://i.pravatar.cc/100?u=${i}`}
                      alt="User"
                      className="w-12 h-12 rounded-full border-4 border-white"
                    />
                  ))}
                </div>
                <p className="text-[#666]">
                  已有 <span className="font-bold text-[#2D2D2D]">5,000+</span> 位朋友加入学习
                </p>
              </div>
            </motion.div>
          </div>

          <div className="lg:w-1/2 relative">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1 }}
              className="relative z-10"
            >
              <img
                src="https://picsum.photos/seed/elderly-ai/1000/800"
                alt="Learning AI"
                className="rounded-[40px] shadow-2xl border-8 border-white"
                referrerPolicy="no-referrer"
              />
              {/* Floating Card */}
              <motion.div
                animate={{ y: [0, -20, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -bottom-10 -left-10 bg-white p-6 rounded-3xl shadow-xl border border-[#F0F0F0] max-w-[240px]"
              >
                <div className="flex items-center gap-4 mb-3">
                  <div className="w-12 h-12 bg-green-100 rounded-2xl flex items-center justify-center text-green-600">
                    <Sparkles size={24} />
                  </div>
                  <div>
                    <p className="text-xs text-[#888] uppercase tracking-wider">今日推荐</p>
                    <p className="font-bold">AI 智能助手</p>
                  </div>
                </div>
                <p className="text-sm text-[#666]">“原来写家书可以这么简单，AI真是太神奇了！”</p>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};
