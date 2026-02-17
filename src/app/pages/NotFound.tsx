import { Link } from 'react-router';
import { Home, Search } from 'lucide-react';
import { Button } from '../components/ui/button';

export function NotFound() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white flex items-center justify-center px-4">
      <div className="text-center max-w-2xl">
        <div className="mb-8">
          <div className="text-9xl font-bold text-blue-600 mb-4">404</div>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Page Not Found
          </h1>
          <p className="text-xl text-gray-600 mb-8">
            Sorry, we couldn't find the page you're looking for. It might have been moved or doesn't exist.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link to="/">
            <Button size="lg" className="w-full sm:w-auto">
              <Home className="w-5 h-5 mr-2" />
              Go Home
            </Button>
          </Link>
          <Link to="/category/text">
            <Button size="lg" variant="outline" className="w-full sm:w-auto">
              <Search className="w-5 h-5 mr-2" />
              Browse Tools
            </Button>
          </Link>
        </div>

        <div className="mt-12 pt-8 border-t border-gray-200">
          <p className="text-gray-600 mb-4">Looking for something specific?</p>
          <div className="flex flex-wrap justify-center gap-3">
            <Link to="/category/text" className="text-blue-600 hover:text-blue-700 text-sm font-medium">
              Text Tools
            </Link>
            <span className="text-gray-300">•</span>
            <Link to="/category/developer" className="text-blue-600 hover:text-blue-700 text-sm font-medium">
              Developer Tools
            </Link>
            <span className="text-gray-300">•</span>
            <Link to="/category/security" className="text-blue-600 hover:text-blue-700 text-sm font-medium">
              Security Tools
            </Link>
            <span className="text-gray-300">•</span>
            <Link to="/category/utility" className="text-blue-600 hover:text-blue-700 text-sm font-medium">
              Utility Tools
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
