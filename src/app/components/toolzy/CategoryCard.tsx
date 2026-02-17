import { Link } from 'react-router';
import { FileText, Code, Shield, Wrench, ArrowRight } from 'lucide-react';
import type { CategoryInfo } from '../../data/tools';

interface CategoryCardProps {
  category: CategoryInfo;
}

const iconMap = {
  FileText,
  Code,
  Shield,
  Wrench
};

export function CategoryCard({ category }: CategoryCardProps) {
  const Icon = iconMap[category.icon as keyof typeof iconMap];

  return (
    <Link
      to={category.path}
      className="group block bg-white border border-gray-200 rounded-xl p-8 hover:shadow-xl hover:border-blue-300 transition-all duration-200"
    >
      <div className="flex flex-col items-center text-center">
        <div className="w-16 h-16 bg-blue-50 rounded-2xl flex items-center justify-center mb-4 group-hover:bg-blue-100 transition-colors">
          <Icon className="w-8 h-8 text-blue-600" />
        </div>
        <h3 className="text-xl font-semibold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
          {category.name}
        </h3>
        <p className="text-sm text-gray-600 mb-4">
          {category.description}
        </p>
        <div className="flex items-center text-sm font-medium text-blue-600 group-hover:text-blue-700">
          <span>Explore Tools</span>
          <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
        </div>
      </div>
    </Link>
  );
}
