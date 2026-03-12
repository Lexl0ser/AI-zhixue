import React from 'react';
import { BookOpen, Video, FileText, CheckCircle2, ShoppingCart } from 'lucide-react';
import { motion } from 'motion/react';
import { Product } from '../data/products';
import { cn } from '../lib/utils';

interface ProductCardProps {
  product: Product;
  onBuy: (product: Product) => void;
}

export const ProductCard: React.FC<ProductCardProps> = ({ product, onBuy }) => {
  const Icon = product.type === 'video' ? Video : product.type === 'ppt' ? FileText : BookOpen;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="bg-white rounded-3xl overflow-hidden shadow-sm border border-[#E5E5E5] flex flex-col h-full"
    >
      <div className="relative h-56 overflow-hidden">
        <img
          src={product.image}
          alt={product.title}
          className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
          referrerPolicy="no-referrer"
        />
        <div className="absolute top-4 left-4">
          <span className="bg-[#2D5A27] text-white px-4 py-1.5 rounded-full text-sm font-medium">
            {product.category}
          </span>
        </div>
      </div>

      <div className="p-8 flex flex-col flex-grow">
        <div className="flex items-center gap-2 mb-4 text-[#666]">
          <Icon size={20} />
          <span className="text-sm uppercase tracking-wider">
            {product.type === 'video' ? '视频课程' : product.type === 'ppt' ? 'PPT课件' : 'PDF指南'}
          </span>
        </div>

        <h3 className="text-2xl font-bold mb-4 leading-tight">
          {product.title}
        </h3>

        <p className="text-[#555] mb-6 line-clamp-2 leading-relaxed">
          {product.description}
        </p>

        <ul className="space-y-3 mb-8 flex-grow">
          {product.features.map((feature, idx) => (
            <li key={idx} className="flex items-center gap-2 text-sm text-[#444]">
              <CheckCircle2 size={16} className="text-[#2D5A27]" />
              {feature}
            </li>
          ))}
        </ul>

        <div className="flex items-center justify-between mt-auto pt-6 border-t border-[#F0F0F0]">
          <div className="flex flex-col">
            <span className="text-sm text-[#888]">课程价格</span>
            <span className="text-3xl font-bold text-[#2D5A27]">¥{product.price}</span>
          </div>
          <button
            onClick={() => onBuy(product)}
            className="btn-primary flex items-center gap-2 !px-6 !py-3"
          >
            <ShoppingCart size={20} />
            立即购买
          </button>
        </div>
      </div>
    </motion.div>
  );
};
