export type Category = 'text' | 'developer' | 'security' | 'utility';

export interface Tool {
  id: string;
  name: string;
  description: string;
  category: Category;
  path: string;
}

export interface CategoryInfo {
  id: Category;
  name: string;
  description: string;
  icon: string;
  path: string;
}

export const categories: CategoryInfo[] = [
  {
    id: 'text',
    name: 'Text & Writing Tools',
    description: 'Word counters, text generators, case converters, and more writing utilities.',
    icon: 'FileText',
    path: '/category/text'
  },
  {
    id: 'developer',
    name: 'Developer Tools',
    description: 'JSON formatters, code validators, API testers, and programming utilities.',
    icon: 'Code',
    path: '/category/developer'
  },
  {
    id: 'security',
    name: 'Security & Privacy Tools',
    description: 'Password generators, encryption tools, hash calculators, and privacy utilities.',
    icon: 'Shield',
    path: '/category/security'
  },
  {
    id: 'utility',
    name: 'Random & Utility Tools',
    description: 'Random generators, converters, calculators, and other handy utilities.',
    icon: 'Wrench',
    path: '/category/utility'
  }
];

export const tools: Tool[] = [
  // Text & Writing Tools
  {
    id: 'word-counter',
    name: 'Word Counter',
    description: 'Count words, characters, sentences, and paragraphs in your text.',
    category: 'text',
    path: '/tool/word-counter'
  },
  {
    id: 'case-converter',
    name: 'Case Converter',
    description: 'Convert text to uppercase, lowercase, title case, and more.',
    category: 'text',
    path: '/tool/case-converter'
  },
  {
    id: 'lorem-ipsum',
    name: 'Lorem Ipsum Generator',
    description: 'Generate placeholder text for your designs and mockups.',
    category: 'text',
    path: '/tool/lorem-ipsum'
  },
  {
    id: 'text-diff',
    name: 'Text Diff Checker',
    description: 'Compare two texts and find the differences between them.',
    category: 'text',
    path: '/tool/text-diff'
  },
  {
    id: 'markdown-preview',
    name: 'Markdown Preview',
    description: 'Preview your markdown text in real-time.',
    category: 'text',
    path: '/tool/markdown-preview'
  },
  {
    id: 'duplicate-remover',
    name: 'Duplicate Line Remover',
    description: 'Remove duplicate lines from your text instantly.',
    category: 'text',
    path: '/tool/duplicate-remover'
  },

  // Developer Tools
  {
    id: 'json-formatter',
    name: 'JSON Formatter',
    description: 'Format, validate, and beautify your JSON data.',
    category: 'developer',
    path: '/tool/json-formatter'
  },
  {
    id: 'base64-encoder',
    name: 'Base64 Encoder/Decoder',
    description: 'Encode and decode Base64 strings quickly.',
    category: 'developer',
    path: '/tool/base64-encoder'
  },
  {
    id: 'url-encoder',
    name: 'URL Encoder/Decoder',
    description: 'Encode and decode URLs and query parameters.',
    category: 'developer',
    path: '/tool/url-encoder'
  },
  {
    id: 'color-picker',
    name: 'Color Picker & Converter',
    description: 'Convert between HEX, RGB, HSL, and other color formats.',
    category: 'developer',
    path: '/tool/color-picker'
  },
  {
    id: 'regex-tester',
    name: 'Regex Tester',
    description: 'Test and validate regular expressions with live matching.',
    category: 'developer',
    path: '/tool/regex-tester'
  },
  {
    id: 'jwt-decoder',
    name: 'JWT Decoder',
    description: 'Decode and inspect JSON Web Tokens.',
    category: 'developer',
    path: '/tool/jwt-decoder'
  },

  // Security & Privacy Tools
  {
    id: 'password-generator',
    name: 'Password Generator',
    description: 'Generate strong, secure passwords with custom options.',
    category: 'security',
    path: '/tool/password-generator'
  },
  {
    id: 'hash-generator',
    name: 'Hash Generator',
    description: 'Generate MD5, SHA-1, SHA-256, and other hash values.',
    category: 'security',
    path: '/tool/hash-generator'
  },
  {
    id: 'uuid-generator',
    name: 'UUID Generator',
    description: 'Generate unique UUIDs (v1, v4) for your applications.',
    category: 'security',
    path: '/tool/uuid-generator'
  },
  {
    id: 'password-strength',
    name: 'Password Strength Checker',
    description: 'Check the strength and security of your passwords.',
    category: 'security',
    path: '/tool/password-strength'
  },

  // Random & Utility Tools
  {
    id: 'qr-generator',
    name: 'QR Code Generator',
    description: 'Create QR codes for URLs, text, and more.',
    category: 'utility',
    path: '/tool/qr-generator'
  },
  {
    id: 'timestamp-converter',
    name: 'Timestamp Converter',
    description: 'Convert between Unix timestamps and readable dates.',
    category: 'utility',
    path: '/tool/timestamp-converter'
  },
  {
    id: 'random-number',
    name: 'Random Number Generator',
    description: 'Generate random numbers with custom ranges.',
    category: 'utility',
    path: '/tool/random-number'
  },
  {
    id: 'unit-converter',
    name: 'Unit Converter',
    description: 'Convert between different units of measurement.',
    category: 'utility',
    path: '/tool/unit-converter'
  },
  {
    id: 'list-randomizer',
    name: 'List Randomizer',
    description: 'Shuffle and randomize lists of items.',
    category: 'utility',
    path: '/tool/list-randomizer'
  }
];

export const getToolsByCategory = (category: Category): Tool[] => {
  return tools.filter(tool => tool.category === category);
};

export const getCategoryInfo = (category: Category): CategoryInfo | undefined => {
  return categories.find(cat => cat.id === category);
};

export const getToolById = (id: string): Tool | undefined => {
  return tools.filter(tool => tool.id === id)[0];
};

export const popularTools = tools.slice(0, 6);
