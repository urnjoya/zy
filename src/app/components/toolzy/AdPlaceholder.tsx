interface AdPlaceholderProps {
  size?: 'small' | 'medium' | 'large';
  className?: string;
}

export function AdPlaceholder({ size = 'medium', className = '' }: AdPlaceholderProps) {
  const sizeClasses = {
    small: 'h-24',
    medium: 'h-40',
    large: 'h-64'
  };

  return (
    <div className={`${sizeClasses[size]} ${className} bg-gray-100 border-2 border-dashed border-gray-300 rounded-xl flex items-center justify-center`}>
      <div className="text-center">
        <p className="text-sm text-gray-500 font-medium">Advertisement</p>
        <p className="text-xs text-gray-400 mt-1">Sponsored Content</p>
      </div>
    </div>
  );
}
