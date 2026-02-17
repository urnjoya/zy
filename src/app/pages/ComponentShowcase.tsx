import { Navbar } from '../components/layout/Navbar';
import { Footer } from '../components/layout/Footer';
import { ToolCard } from '../components/toolzy/ToolCard';
import { CategoryCard } from '../components/toolzy/CategoryCard';
import { ResultCard } from '../components/toolzy/ResultCard';
import { CopyButton } from '../components/toolzy/CopyButton';
import { AdPlaceholder } from '../components/toolzy/AdPlaceholder';
import { LoadingState } from '../components/toolzy/LoadingState';
import { ErrorMessage } from '../components/toolzy/ErrorMessage';
import { Button } from '../components/ui/button';
import { Input } from '../components/ui/input';
import { Textarea } from '../components/ui/textarea';
import { Switch } from '../components/ui/switch';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '../components/ui/accordion';
import { tools, categories } from '../data/tools';

export function ComponentShowcase() {
  return (
    <div className="min-h-screen bg-white flex flex-col">
      <Navbar />

      <main className="flex-grow">
        <section className="bg-gradient-to-b from-blue-50 to-white py-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Toolzy Design System
            </h1>
            <p className="text-xl text-gray-600">
              Complete component library showcase
            </p>
          </div>
        </section>

        {/* Buttons */}
        <section className="py-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Buttons</h2>
            <div className="flex flex-wrap gap-4">
              <Button>Primary Button</Button>
              <Button variant="secondary">Secondary Button</Button>
              <Button variant="outline">Outline Button</Button>
              <Button variant="ghost">Ghost Button</Button>
              <Button variant="destructive">Destructive Button</Button>
              <Button size="sm">Small Button</Button>
              <Button size="lg">Large Button</Button>
            </div>
          </div>
        </section>

        {/* Cards */}
        <section className="py-12 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Category Cards</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {categories.map((category) => (
                <CategoryCard key={category.id} category={category} />
              ))}
            </div>
          </div>
        </section>

        {/* Tool Cards */}
        <section className="py-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Tool Cards</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {tools.slice(0, 6).map((tool) => (
                <ToolCard key={tool.id} tool={tool} />
              ))}
            </div>
          </div>
        </section>

        {/* Form Elements */}
        <section className="py-12 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Form Elements</h2>
            <div className="max-w-2xl space-y-6">
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Input Field
                </label>
                <Input placeholder="Enter text here..." />
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Textarea
                </label>
                <Textarea placeholder="Enter longer text here..." rows={4} />
              </div>

              <div className="flex items-center space-x-3">
                <Switch id="demo-switch" />
                <label htmlFor="demo-switch" className="text-sm font-medium text-gray-700">
                  Toggle Switch
                </label>
              </div>
            </div>
          </div>
        </section>

        {/* Results & Copy */}
        <section className="py-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Result Display</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl">
              <ResultCard title="Sample Result">
                <p>This is a sample result card with output data.</p>
              </ResultCard>

              <div className="space-y-4">
                <CopyButton text="Sample text to copy" />
                <p className="text-sm text-gray-600">Click to copy text to clipboard</p>
              </div>
            </div>
          </div>
        </section>

        {/* Messages */}
        <section className="py-12 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Messages & Alerts</h2>
            <div className="max-w-2xl space-y-4">
              <ErrorMessage type="error" message="This is an error message" />
              <ErrorMessage type="success" message="This is a success message" />
              <ErrorMessage type="info" message="This is an info message" />
              <ErrorMessage type="warning" message="This is a warning message" />
            </div>
          </div>
        </section>

        {/* Loading States */}
        <section className="py-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Loading States</h2>
            <div className="bg-white border border-gray-200 rounded-xl">
              <LoadingState message="Processing your request..." />
            </div>
          </div>
        </section>

        {/* Ad Placeholders */}
        <section className="py-12 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Ad Placeholders</h2>
            <div className="space-y-6 max-w-4xl">
              <div>
                <p className="text-sm font-semibold text-gray-700 mb-3">Small (h-24)</p>
                <AdPlaceholder size="small" />
              </div>
              <div>
                <p className="text-sm font-semibold text-gray-700 mb-3">Medium (h-40)</p>
                <AdPlaceholder size="medium" />
              </div>
              <div>
                <p className="text-sm font-semibold text-gray-700 mb-3">Large (h-64)</p>
                <AdPlaceholder size="large" />
              </div>
            </div>
          </div>
        </section>

        {/* Accordion/FAQ */}
        <section className="py-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">FAQ Accordion</h2>
            <div className="max-w-2xl">
              <Accordion type="single" collapsible className="bg-white border border-gray-200 rounded-xl">
                <AccordionItem value="item-1">
                  <AccordionTrigger className="px-6">
                    What is Toolzy?
                  </AccordionTrigger>
                  <AccordionContent className="px-6">
                    Toolzy is a collection of free online tools for developers, writers, and creators.
                  </AccordionContent>
                </AccordionItem>
                
                <AccordionItem value="item-2">
                  <AccordionTrigger className="px-6">
                    Is it really free?
                  </AccordionTrigger>
                  <AccordionContent className="px-6">
                    Yes! All tools are completely free with no signup required.
                  </AccordionContent>
                </AccordionItem>
                
                <AccordionItem value="item-3">
                  <AccordionTrigger className="px-6">
                    How does it work?
                  </AccordionTrigger>
                  <AccordionContent className="px-6">
                    All processing happens in your browser for maximum privacy and speed.
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>
          </div>
        </section>

        {/* Typography */}
        <section className="py-12 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Typography Scale</h2>
            <div className="space-y-4 bg-white p-8 rounded-xl border border-gray-200">
              <h1 className="text-5xl">Heading 1 - Hero (5xl)</h1>
              <h2 className="text-4xl">Heading 2 - Page Title (4xl)</h2>
              <h3 className="text-3xl">Heading 3 - Section (3xl)</h3>
              <h4 className="text-2xl">Heading 4 - Subsection (2xl)</h4>
              <p className="text-xl">Large text (xl)</p>
              <p className="text-lg">Medium text (lg)</p>
              <p className="text-base">Base text (base)</p>
              <p className="text-sm">Small text (sm)</p>
              <p className="text-xs">Extra small text (xs)</p>
            </div>
          </div>
        </section>

        {/* Color Palette */}
        <section className="py-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Color Palette</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <div className="space-y-2">
                <div className="h-24 bg-blue-600 rounded-lg"></div>
                <p className="text-sm font-medium">Primary Blue</p>
                <p className="text-xs text-gray-600">#2563eb</p>
              </div>
              <div className="space-y-2">
                <div className="h-24 bg-gray-900 rounded-lg"></div>
                <p className="text-sm font-medium">Text Dark</p>
                <p className="text-xs text-gray-600">#111827</p>
              </div>
              <div className="space-y-2">
                <div className="h-24 bg-gray-600 rounded-lg"></div>
                <p className="text-sm font-medium">Text Medium</p>
                <p className="text-xs text-gray-600">#4b5563</p>
              </div>
              <div className="space-y-2">
                <div className="h-24 bg-gray-50 border border-gray-200 rounded-lg"></div>
                <p className="text-sm font-medium">Background</p>
                <p className="text-xs text-gray-600">#f9fafb</p>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
