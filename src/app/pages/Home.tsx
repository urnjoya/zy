import { Link } from 'react-router';
import { ArrowRight, Zap } from 'lucide-react';
import { Button } from '../components/ui/button';
import { CategoryCard } from '../components/toolzy/CategoryCard';
import { ToolCard } from '../components/toolzy/ToolCard';
import { Footer } from '../components/layout/Footer';
import { categories, popularTools } from '../data/tools';

export function Home() {
  return (
    <div className="min-h-screen bg-white flex flex-col">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-b from-blue-50 to-white pt-20 pb-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            {/* Logo */}
            <div className="flex justify-center mb-6">
              <div className="w-16 h-16 bg-blue-600 rounded-2xl flex items-center justify-center shadow-lg">
                <span className="text-white font-bold text-3xl">T</span>
              </div>
            </div>

            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 mb-6">
              Fast, Free Online Tools
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto">
              Professional-grade utilities for developers, writers, and creators. 
              No signup required. Instant results.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/category/developer">
                <Button size="lg" className="text-base px-8">
                  Explore Tools
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
              </Link>
              <Link to="/about">
                <Button variant="outline" size="lg" className="text-base px-8">
                  Learn More
                </Button>
              </Link>
            </div>

            {/* Stats */}
            <div className="flex flex-wrap justify-center gap-8 mt-12 text-center">
              <div>
                <div className="text-3xl font-bold text-blue-600">25+</div>
                <div className="text-sm text-gray-600 mt-1">Free Tools</div>
              </div>
              <div className="w-px bg-gray-300"></div>
              <div>
                <div className="text-3xl font-bold text-blue-600">100%</div>
                <div className="text-sm text-gray-600 mt-1">Free Forever</div>
              </div>
              <div className="w-px bg-gray-300"></div>
              <div>
                <div className="text-3xl font-bold text-blue-600">
                  <Zap className="w-8 h-8 inline text-blue-600" />
                </div>
                <div className="text-sm text-gray-600 mt-1">Instant Results</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Categories Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Choose Your Category
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Browse our collection of professional tools organized by purpose
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {categories.map((category) => (
              <CategoryCard key={category.id} category={category} />
            ))}
          </div>
        </div>
      </section>

      {/* Popular Tools */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Popular Tools
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Most frequently used tools by our community
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {popularTools.map((tool) => (
              <ToolCard key={tool.id} tool={tool} />
            ))}
          </div>

          <div className="text-center mt-10">
            <Link to="/category/text">
              <Button variant="outline" size="lg">
                View All Tools
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Why Toolzy?
          </h2>
          <p className="text-lg text-gray-600 mb-8 leading-relaxed">
            Toolzy provides fast, reliable, and completely free online utilities for everyday tasks. 
            Whether you're a developer debugging code, a writer counting words, or someone who needs 
            a quick conversion—we've got you covered. All tools run directly in your browser with 
            instant results and zero signup required.
          </p>
          <Link to="/about">
            <Button variant="outline" size="lg">
              Learn More About Us
            </Button>
          </Link>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-blue-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Get Started?
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Explore our collection of free tools and boost your productivity today
          </p>
          <Link to="/category/developer">
            <Button size="lg" variant="secondary" className="text-base px-8">
              Browse All Tools
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
}
