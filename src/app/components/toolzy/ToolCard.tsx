import { Link } from 'react-router';
import { ArrowRight } from 'lucide-react';
import type { Tool } from '../../data/tools';

interface ToolCardProps {
  tool: Tool;
}

export function ToolCard({ tool }: ToolCardProps) {
  return (
    <Link
      to={tool.path}
      className="group block bg-white border border-gray-200 rounded-xl p-6 hover:shadow-lg hover:border-blue-300 transition-all duration-200"
    >
      <div className="flex flex-col h-full">
        <h3 className="font-semibold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
          {tool.name}
        </h3>
        <p className="text-sm text-gray-600 mb-4 flex-grow">
          {tool.description}
        </p>
        <div className="flex items-center text-sm font-medium text-blue-600 group-hover:text-blue-700">
          <span>Open Tool</span>
          <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
        </div>
      </div>
    </Link>
  );
}
