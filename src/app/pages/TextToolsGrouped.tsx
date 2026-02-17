import { useState } from 'react';
import { Navbar } from '../components/layout/Navbar';
import { Footer } from '../components/layout/Footer';
import { Button } from '../components/ui/button';
import { Textarea } from '../components/ui/textarea';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../components/ui/tabs';
import { ResultCard } from '../components/toolzy/ResultCard';
import { CopyButton } from '../components/toolzy/CopyButton';
import { AdPlaceholder } from '../components/toolzy/AdPlaceholder';

export function TextToolsGrouped() {
  const [input, setInput] = useState('');

  // Word Counter State
  const [wordStats, setWordStats] = useState({
    words: 0,
    characters: 0,
    charsNoSpaces: 0,
    sentences: 0,
    paragraphs: 0,
    readingTime: 0
  });

  // Case Converter State
  const [convertedCase, setConvertedCase] = useState('');

  // Duplicate Remover State
  const [deduplicatedText, setDeduplicatedText] = useState('');

  const countWords = () => {
    if (!input.trim()) {
      setWordStats({
        words: 0,
        characters: 0,
        charsNoSpaces: 0,
        sentences: 0,
        paragraphs: 0,
        readingTime: 0
      });
      return;
    }

    const words = input.trim().split(/\s+/).length;
    const chars = input.length;
    const charsNoSpaces = input.replace(/\s/g, '').length;
    const sentences = input.split(/[.!?]+/).filter(s => s.trim()).length;
    const paragraphs = input.split(/\n\n+/).filter(p => p.trim()).length;
    const readingTime = Math.ceil(words / 200); // Average reading speed: 200 words/min

    setWordStats({
      words,
      characters: chars,
      charsNoSpaces,
      sentences,
      paragraphs,
      readingTime
    });
  };

  const convertCase = (type: string) => {
    if (!input.trim()) return;

    let result = '';
    switch (type) {
      case 'upper':
        result = input.toUpperCase();
        break;
      case 'lower':
        result = input.toLowerCase();
        break;
      case 'title':
        result = input.replace(/\b\w/g, l => l.toUpperCase());
        break;
      case 'sentence':
        result = input.toLowerCase().replace(/(^\s*\w|[.!?]\s*\w)/g, l => l.toUpperCase());
        break;
      case 'toggle':
        result = input.split('').map(char => 
          char === char.toUpperCase() ? char.toLowerCase() : char.toUpperCase()
        ).join('');
        break;
    }
    setConvertedCase(result);
  };

  const removeDuplicates = () => {
    if (!input.trim()) return;

    const lines = input.split('\n');
    const uniqueLines = [...new Set(lines)];
    setDeduplicatedText(uniqueLines.join('\n'));
  };

  return (
    <div className="min-h-screen bg-white flex flex-col">
      <Navbar />

      <main className="flex-grow">
        {/* Header */}
        <section className="bg-gradient-to-b from-blue-50 to-white py-12">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Text Tools Suite
            </h1>
            <p className="text-xl text-gray-600">
              Multiple text utilities in one place. Process your text with various tools without switching pages.
            </p>
          </div>
        </section>

        {/* Grouped Tool Interface */}
        <section className="py-12">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Shared Input */}
            <div className="mb-8">
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Input Text
              </label>
              <Textarea
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Enter your text here to use any of the tools below..."
                className="min-h-[200px] resize-none text-sm"
              />
            </div>

            {/* Tabbed Tool Interface */}
            <Tabs defaultValue="counter" className="w-full">
              <TabsList className="grid w-full grid-cols-3 mb-8">
                <TabsTrigger value="counter">Word Counter</TabsTrigger>
                <TabsTrigger value="case">Case Converter</TabsTrigger>
                <TabsTrigger value="duplicate">Remove Duplicates</TabsTrigger>
              </TabsList>

              {/* Word Counter Tab */}
              <TabsContent value="counter" className="space-y-6">
                <div className="flex gap-3">
                  <Button onClick={countWords} className="flex-1 sm:flex-none">
                    Count Words
                  </Button>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                  <ResultCard title="Words">
                    <div className="text-3xl font-bold text-blue-600">
                      {wordStats.words}
                    </div>
                  </ResultCard>

                  <ResultCard title="Characters">
                    <div className="text-3xl font-bold text-blue-600">
                      {wordStats.characters}
                    </div>
                  </ResultCard>

                  <ResultCard title="Characters (no spaces)">
                    <div className="text-3xl font-bold text-blue-600">
                      {wordStats.charsNoSpaces}
                    </div>
                  </ResultCard>

                  <ResultCard title="Sentences">
                    <div className="text-3xl font-bold text-blue-600">
                      {wordStats.sentences}
                    </div>
                  </ResultCard>

                  <ResultCard title="Paragraphs">
                    <div className="text-3xl font-bold text-blue-600">
                      {wordStats.paragraphs}
                    </div>
                  </ResultCard>

                  <ResultCard title="Reading Time">
                    <div className="text-3xl font-bold text-blue-600">
                      {wordStats.readingTime} <span className="text-lg">min</span>
                    </div>
                  </ResultCard>
                </div>
              </TabsContent>

              {/* Case Converter Tab */}
              <TabsContent value="case" className="space-y-6">
                <div className="flex flex-wrap gap-3">
                  <Button onClick={() => convertCase('upper')} variant="outline">
                    UPPERCASE
                  </Button>
                  <Button onClick={() => convertCase('lower')} variant="outline">
                    lowercase
                  </Button>
                  <Button onClick={() => convertCase('title')} variant="outline">
                    Title Case
                  </Button>
                  <Button onClick={() => convertCase('sentence')} variant="outline">
                    Sentence case
                  </Button>
                  <Button onClick={() => convertCase('toggle')} variant="outline">
                    tOGGLE cASE
                  </Button>
                </div>

                {convertedCase && (
                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <label className="block text-sm font-semibold text-gray-700">
                        Result
                      </label>
                      <CopyButton text={convertedCase} />
                    </div>
                    <ResultCard title="Converted Text">
                      <pre className="whitespace-pre-wrap font-sans text-sm break-words">
                        {convertedCase}
                      </pre>
                    </ResultCard>
                  </div>
                )}
              </TabsContent>

              {/* Duplicate Remover Tab */}
              <TabsContent value="duplicate" className="space-y-6">
                <div className="flex gap-3">
                  <Button onClick={removeDuplicates}>
                    Remove Duplicate Lines
                  </Button>
                </div>

                {deduplicatedText && (
                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <label className="block text-sm font-semibold text-gray-700">
                        Result
                      </label>
                      <CopyButton text={deduplicatedText} />
                    </div>
                    <ResultCard title="Deduplicated Text">
                      <pre className="whitespace-pre-wrap font-mono text-sm break-words">
                        {deduplicatedText}
                      </pre>
                    </ResultCard>
                    <p className="text-sm text-gray-600 mt-2">
                      Original: {input.split('\n').length} lines → Result: {deduplicatedText.split('\n').length} lines
                    </p>
                  </div>
                )}
              </TabsContent>
            </Tabs>
          </div>
        </section>

        {/* Ad Placeholder */}
        <section className="py-8">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <AdPlaceholder size="medium" />
          </div>
        </section>

        {/* Info Section */}
        <section className="py-12 bg-gray-50">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">
              About This Tool Suite
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-white border border-gray-200 rounded-xl p-6">
                <h3 className="font-semibold text-gray-900 mb-2">Word Counter</h3>
                <p className="text-sm text-gray-600">
                  Get detailed statistics about your text including word count, character count, 
                  sentences, paragraphs, and estimated reading time.
                </p>
              </div>

              <div className="bg-white border border-gray-200 rounded-xl p-6">
                <h3 className="font-semibold text-gray-900 mb-2">Case Converter</h3>
                <p className="text-sm text-gray-600">
                  Convert your text to different cases: uppercase, lowercase, title case, sentence 
                  case, or toggle case with one click.
                </p>
              </div>

              <div className="bg-white border border-gray-200 rounded-xl p-6">
                <h3 className="font-semibold text-gray-900 mb-2">Duplicate Remover</h3>
                <p className="text-sm text-gray-600">
                  Quickly remove duplicate lines from your text while preserving the order of 
                  unique lines.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
