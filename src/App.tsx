import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Brain, Search, ShoppingCart, User, Menu, X, Sparkles } from 'lucide-react';
import { Hero } from './components/Hero';
import { Features } from './components/Features';
import { ProductCard } from './components/ProductCard';
import { products, Product } from './data/products';

export default function App() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [cartCount, setCartCount] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleBuy = (product: Product) => {
    setCartCount(prev => prev + 1);
    // In a real app, this would open a checkout modal or go to a cart page
    alert(`已将《${product.title}》加入购物车！`);
  };

  return (
    <div className="min-h-screen">
      {/* Navigation */}
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-white/90 backdrop-blur-md py-4 shadow-sm' : 'bg-transparent py-6'}`}>
        <div className="container mx-auto px-6 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 bg-[#2D5A27] rounded-xl flex items-center justify-center text-white">
              <Brain size={24} />
            </div>
            <span className="text-2xl font-bold tracking-tight">智学AI</span>
          </div>

          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center gap-12">
            {['首页', '精品课程', '学习指南', '关于我们'].map((item) => (
              <a key={item} href="#" className="text-lg font-medium hover:text-[#2D5A27] transition-colors">
                {item}
              </a>
            ))}
          </div>

          <div className="flex items-center gap-6">
            <button className="p-2 hover:bg-[#F5F7F5] rounded-full transition-colors">
              <Search size={24} />
            </button>
            <button className="relative p-2 hover:bg-[#F5F7F5] rounded-full transition-colors">
              <ShoppingCart size={24} />
              {cartCount > 0 && (
                <span className="absolute top-0 right-0 bg-[#2D5A27] text-white text-[10px] w-5 h-5 rounded-full flex items-center justify-center font-bold">
                  {cartCount}
                </span>
              )}
            </button>
            <button className="hidden md:flex items-center gap-2 bg-[#2D5A27] text-white px-6 py-2.5 rounded-full font-medium hover:bg-[#1E3D1A] transition-colors">
              <User size={20} />
              登录 / 注册
            </button>
            <button 
              className="lg:hidden p-2"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="fixed top-[80px] left-0 right-0 bg-white z-40 border-b border-[#F0F0F0] lg:hidden overflow-hidden"
          >
            <div className="flex flex-col p-6 gap-6">
              {['首页', '精品课程', '学习指南', '关于我们'].map((item) => (
                <a key={item} href="#" className="text-xl font-medium">
                  {item}
                </a>
              ))}
              <button className="bg-[#2D5A27] text-white px-6 py-4 rounded-2xl font-medium text-center">
                登录 / 注册
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <main>
        <Hero />
        
        <Features />

        {/* Products Section */}
        <section className="py-24 bg-[#F9F8F5]">
          <div className="container mx-auto px-6">
            <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
              <div className="max-w-2xl">
                <h2 className="text-4xl md:text-5xl font-bold mb-6">精品推荐课程</h2>
                <p className="text-xl text-[#666]">
                  我们为您精选了最适合入门的AI教程，涵盖生活、工作、娱乐等各个方面。
                </p>
              </div>
              <div className="flex gap-4">
                <button className="px-6 py-2 rounded-full border border-[#2D5A27] text-[#2D5A27] font-medium hover:bg-[#2D5A27] hover:text-white transition-all">
                  全部课程
                </button>
                <button className="px-6 py-2 rounded-full bg-[#2D5A27] text-white font-medium hover:bg-[#1E3D1A] transition-all">
                  最新上线
                </button>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-8">
              {products.map((product) => (
                <ProductCard key={product.id} product={product} onBuy={handleBuy} />
              ))}
            </div>
          </div>
        </section>

        {/* Testimonial / Quote Section */}
        <section className="py-24 bg-white overflow-hidden relative">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[#2D5A27]/5 rounded-full blur-[120px] -z-10" />
          <div className="container mx-auto px-6 text-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="max-w-4xl mx-auto"
            >
              <span className="text-6xl text-[#2D5A27] font-serif opacity-30 mb-8 block">“</span>
              <h2 className="text-3xl md:text-5xl font-serif italic leading-snug mb-12">
                “我今年65岁了，以前总觉得AI是年轻人的玩意儿。但在智学AI学习后，我发现它其实很简单。现在我会用AI写诗、修图，感觉自己年轻了二十岁！”
              </h2>
              <div className="flex items-center justify-center gap-4">
                <img src="https://i.pravatar.cc/100?u=elder" alt="User" className="w-16 h-16 rounded-full border-2 border-[#2D5A27]" />
                <div className="text-left">
                  <p className="font-bold text-xl">张大爷</p>
                  <p className="text-[#666]">退休教师 · 智学AI资深学员</p>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20">
          <div className="container mx-auto px-6">
            <div className="bg-[#2D5A27] rounded-[50px] p-12 md:p-20 text-center text-white relative overflow-hidden">
              <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl" />
              <div className="absolute bottom-0 left-0 w-64 h-64 bg-black/10 rounded-full translate-y-1/2 -translate-x-1/2 blur-3xl" />
              
              <h2 className="text-4xl md:text-6xl font-bold mb-8 relative z-10">准备好开启您的AI之旅了吗？</h2>
              <p className="text-xl md:text-2xl text-white/80 mb-12 max-w-2xl mx-auto relative z-10">
                现在加入，立享新人8折优惠。更有免费入门礼包等您领取。
              </p>
              <div className="flex flex-wrap justify-center gap-6 relative z-10">
                <button className="bg-white text-[#2D5A27] px-10 py-5 rounded-full text-xl font-bold hover:bg-[#F5F7F5] transition-all hover:scale-105 active:scale-95">
                  立即免费试听
                </button>
                <button className="bg-transparent border-2 border-white text-white px-10 py-5 rounded-full text-xl font-bold hover:bg-white/10 transition-all">
                  咨询在线客服
                </button>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-[#1A1A1A] text-white py-20">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
            <div className="col-span-1 lg:col-span-1">
              <div className="flex items-center gap-2 mb-8">
                <div className="w-10 h-10 bg-[#2D5A27] rounded-xl flex items-center justify-center text-white">
                  <Brain size={24} />
                </div>
                <span className="text-2xl font-bold tracking-tight">智学AI</span>
              </div>
              <p className="text-white/60 leading-relaxed mb-8">
                我们致力于消除数字鸿沟，让每一位中老年朋友都能享受人工智能带来的美好生活。
              </p>
            </div>

            <div>
              <h4 className="text-xl font-bold mb-8">快速链接</h4>
              <ul className="space-y-4 text-white/60">
                <li><a href="#" className="hover:text-white transition-colors">精品课程</a></li>
                <li><a href="#" className="hover:text-white transition-colors">学习社区</a></li>
                <li><a href="#" className="hover:text-white transition-colors">常见问题</a></li>
                <li><a href="#" className="hover:text-white transition-colors">关于我们</a></li>
              </ul>
            </div>

            <div>
              <h4 className="text-xl font-bold mb-8">联系我们</h4>
              <ul className="space-y-4 text-white/60">
                <li>客服电话：400-123-4567</li>
                <li>电子邮箱：support@zhixueai.com</li>
                <li>办公地址：北京市朝阳区科技大厦A座</li>
              </ul>
            </div>

            <div>
              <h4 className="text-xl font-bold mb-8">关注我们</h4>
              <div className="flex gap-4 mb-8">
                {/* Mock Social Icons */}
                {[1, 2, 3].map(i => (
                  <div key={i} className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center hover:bg-[#2D5A27] transition-colors cursor-pointer">
                    <Sparkles size={20} />
                  </div>
                ))}
              </div>
              <p className="text-sm text-white/40">扫码关注微信公众号，获取更多免费教程</p>
            </div>
          </div>
          
          <div className="pt-8 border-t border-white/10 text-center text-white/40 text-sm">
            <p>© 2026 智学AI - 中老年AI学习平台. 版权所有.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
