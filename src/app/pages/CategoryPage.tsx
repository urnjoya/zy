import { useParams, Navigate, Link } from 'react-router';
import { FileText, Code, Shield, Wrench } from 'lucide-react';
import { Navbar } from '../components/layout/Navbar';
import { Footer } from '../components/layout/Footer';
import { ToolCard } from '../components/toolzy/ToolCard';
import { AdPlaceholder } from '../components/toolzy/AdPlaceholder';
import { getCategoryInfo, getToolsByCategory, categories, type Category } from '../data/tools';

const iconMap = {
  FileText,
  Code,
  Shield,
  Wrench
};

export function CategoryPage() {
  const { category } = useParams<{ category: string }>();
  
  // Validate category
  const categoryInfo = getCategoryInfo(category as Category);
  
  if (!categoryInfo) {
    return <Navigate to="/404" replace />;
  }

  const tools = getToolsByCategory(category as Category);
  const relatedCategories = categories.filter(cat => cat.id !== category);
  const Icon = iconMap[categoryInfo.icon as keyof typeof iconMap];

  return (
    <div className="min-h-screen bg-white flex flex-col">
      <Navbar />

      <main className="flex-grow">
        {/* Header */}
        <section className="bg-gradient-to-b from-blue-50 to-white py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-center mb-6">
              <div className="w-16 h-16 bg-blue-50 rounded-2xl flex items-center justify-center">
                <Icon className="w-8 h-8 text-blue-600" />
              </div>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 text-center mb-4">
              {categoryInfo.name}
            </h1>
            <p className="text-xl text-gray-600 text-center max-w-3xl mx-auto">
              {categoryInfo.description}
            </p>
          </div>
        </section>

        {/* Tools Grid */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {tools.map((tool) => (
                <ToolCard key={tool.id} tool={tool} />
              ))}
            </div>

            {tools.length === 0 && (
              <div className="text-center py-12">
                <p className="text-gray-600">No tools available in this category yet.</p>
              </div>
            )}
          </div>
        </section>

        {/* Ad Placeholder */}
        <section className="py-8">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <AdPlaceholder size="medium" />
          </div>
        </section>

        {/* Related Categories */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-8">
              Explore Other Categories
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {relatedCategories.map((cat) => {
                const RelatedIcon = iconMap[cat.icon as keyof typeof iconMap];
                return (
                  <Link
                    key={cat.id}
                    to={cat.path}
                    className="group block bg-white border border-gray-200 rounded-xl p-6 hover:shadow-lg hover:border-blue-300 transition-all duration-200"
                  >
                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-blue-50 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:bg-blue-100 transition-colors">
                        <RelatedIcon className="w-6 h-6 text-blue-600" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-gray-900 mb-1 group-hover:text-blue-600 transition-colors">
                          {cat.name}
                        </h3>
                        <p className="text-sm text-gray-600">
                          {cat.description}
                        </p>
                      </div>
                    </div>
                  </Link>
                );
              })}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
