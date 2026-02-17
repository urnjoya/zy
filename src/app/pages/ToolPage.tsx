import { useState } from 'react';
import { useParams, Navigate, Link } from 'react-router';
import { Navbar } from '../components/layout/Navbar';
import { Footer } from '../components/layout/Footer';
import { Button } from '../components/ui/button';
import { Textarea } from '../components/ui/textarea';
import { ResultCard } from '../components/toolzy/ResultCard';
import { CopyButton } from '../components/toolzy/CopyButton';
import { AdPlaceholder } from '../components/toolzy/AdPlaceholder';
import { ToolCard } from '../components/toolzy/ToolCard';
import { Alert, AlertDescription } from '../components/ui/alert';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '../components/ui/accordion';
import { getToolById, tools, type Tool } from '../data/tools';
import { AlertCircle } from 'lucide-react';

export function ToolPage() {
  const { toolId } = useParams<{ toolId: string }>();
  const tool = getToolById(toolId || '');
  
  const [input, setInput] = useState('');
  const [result, setResult] = useState('');
  const [error, setError] = useState('');

  if (!tool) {
    return <Navigate to="/404" replace />;
  }

  // Example tool logic for Word Counter
  const processInput = () => {
    setError('');
    
    if (!input.trim()) {
      setError('Please enter some text to process');
      return;
    }

    // Different processing logic based on tool type
    switch (tool.id) {
      case 'word-counter':
        const words = input.trim().split(/\s+/).length;
        const chars = input.length;
        const charsNoSpaces = input.replace(/\s/g, '').length;
        const sentences = input.split(/[.!?]+/).filter(s => s.trim()).length;
        const paragraphs = input.split(/\n\n+/).filter(p => p.trim()).length;
        setResult(`Words: ${words}\nCharacters: ${chars}\nCharacters (no spaces): ${charsNoSpaces}\nSentences: ${sentences}\nParagraphs: ${paragraphs}`);
        break;
        
      case 'case-converter':
        setResult(input.toUpperCase());
        break;
        
      case 'base64-encoder':
        try {
          const encoded = btoa(input);
          setResult(encoded);
        } catch (e) {
          setError('Invalid input for Base64 encoding');
        }
        break;
        
      case 'json-formatter':
        try {
          const parsed = JSON.parse(input);
          const formatted = JSON.stringify(parsed, null, 2);
          setResult(formatted);
        } catch (e) {
          setError('Invalid JSON format');
        }
        break;
        
      default:
        setResult(`Processed: ${input.substring(0, 100)}...`);
    }
  };

  const clearAll = () => {
    setInput('');
    setResult('');
    setError('');
  };

  // Get related tools (same category, different tool)
  const relatedTools = tools
    .filter(t => t.category === tool.category && t.id !== tool.id)
    .slice(0, 3);

  return (
    <div className="min-h-screen bg-white flex flex-col">
      <Navbar />

      <main className="flex-grow">
        {/* Tool Header */}
        <section className="bg-gradient-to-b from-blue-50 to-white py-12">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              {tool.name}
            </h1>
            <p className="text-xl text-gray-600">
              {tool.description} Fast, free, and secure. All processing happens in your browser.
            </p>
          </div>
        </section>

        {/* Tool Interface */}
        <section className="py-12">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {/* Input Area */}
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Input
                  </label>
                  <Textarea
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    placeholder="Enter your text here..."
                    className="min-h-[300px] resize-none font-mono text-sm"
                  />
                </div>

                <div className="flex gap-3">
                  <Button onClick={processInput} className="flex-1">
                    Process
                  </Button>
                  <Button onClick={clearAll} variant="outline">
                    Clear
                  </Button>
                </div>

                {error && (
                  <Alert variant="destructive">
                    <AlertCircle className="h-4 w-4" />
                    <AlertDescription>{error}</AlertDescription>
                  </Alert>
                )}
              </div>

              {/* Result Area */}
              <div className="space-y-4">
                <div className="flex items-center justify-between mb-2">
                  <label className="block text-sm font-semibold text-gray-700">
                    Result
                  </label>
                  {result && <CopyButton text={result} />}
                </div>

                <ResultCard title="Output">
                  {result ? (
                    <pre className="whitespace-pre-wrap font-mono text-sm break-words">
                      {result}
                    </pre>
                  ) : (
                    <p className="text-gray-400 text-sm">
                      Your result will appear here...
                    </p>
                  )}
                </ResultCard>
              </div>
            </div>
          </div>
        </section>

        {/* Ad Placeholder */}
        <section className="py-8">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <AdPlaceholder size="medium" />
          </div>
        </section>

        {/* How to Use */}
        <section className="py-12 bg-gray-50">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">
              How to Use
            </h2>
            <div className="bg-white border border-gray-200 rounded-xl p-6">
              <ol className="space-y-3 list-decimal list-inside text-gray-700">
                <li>Enter or paste your text in the input area</li>
                <li>Click the "Process" button to get your result</li>
                <li>Use the "Copy" button to copy the result to your clipboard</li>
                <li>Click "Clear" to reset and start over</li>
              </ol>
            </div>

            {/* Example */}
            <div className="mt-8">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                Example
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="bg-white border border-gray-200 rounded-xl p-4">
                  <p className="text-sm font-semibold text-gray-700 mb-2">Input:</p>
                  <code className="text-sm text-gray-600 font-mono">
                    Hello World! This is a sample text.
                  </code>
                </div>
                <div className="bg-white border border-gray-200 rounded-xl p-4">
                  <p className="text-sm font-semibold text-gray-700 mb-2">Output:</p>
                  <code className="text-sm text-gray-600 font-mono">
                    {tool.id === 'word-counter' 
                      ? 'Words: 6\nCharacters: 34'
                      : tool.id === 'case-converter'
                      ? 'HELLO WORLD! THIS IS A SAMPLE TEXT.'
                      : 'Processed result...'}
                  </code>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-12">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">
              Frequently Asked Questions
            </h2>
            <Accordion type="single" collapsible className="bg-white border border-gray-200 rounded-xl">
              <AccordionItem value="item-1">
                <AccordionTrigger className="px-6">
                  Is this tool free to use?
                </AccordionTrigger>
                <AccordionContent className="px-6">
                  Yes, {tool.name} is completely free to use with no limitations or signup required.
                </AccordionContent>
              </AccordionItem>
              
              <AccordionItem value="item-2">
                <AccordionTrigger className="px-6">
                  Is my data secure?
                </AccordionTrigger>
                <AccordionContent className="px-6">
                  Absolutely. All processing happens directly in your browser. Your data never leaves your device.
                </AccordionContent>
              </AccordionItem>
              
              <AccordionItem value="item-3">
                <AccordionTrigger className="px-6">
                  Do I need to create an account?
                </AccordionTrigger>
                <AccordionContent className="px-6">
                  No account needed. Simply use the tool whenever you need it, completely anonymously.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-4">
                <AccordionTrigger className="px-6">
                  Can I use this on mobile?
                </AccordionTrigger>
                <AccordionContent className="px-6">
                  Yes! {tool.name} works perfectly on all devices including mobile phones and tablets.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </section>

        {/* Related Tools */}
        {relatedTools.length > 0 && (
          <section className="py-12 bg-gray-50">
            <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">
                Related Tools
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {relatedTools.map((relatedTool) => (
                  <ToolCard key={relatedTool.id} tool={relatedTool} />
                ))}
              </div>
            </div>
          </section>
        )}
      </main>

      <Footer />
    </div>
  );
}
