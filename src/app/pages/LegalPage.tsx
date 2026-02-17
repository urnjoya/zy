import { useParams, Navigate } from 'react-router';
import { Navbar } from '../components/layout/Navbar';
import { Footer } from '../components/layout/Footer';

type LegalPageType = 'privacy' | 'terms' | 'disclaimer' | 'about' | 'contact';

const legalContent: Record<LegalPageType, { title: string; content: JSX.Element }> = {
  privacy: {
    title: 'Privacy Policy',
    content: (
      <div className="prose prose-lg max-w-none">
        <p className="text-gray-600">Last updated: February 16, 2026</p>
        
        <h2>Introduction</h2>
        <p>
          At Toolzy, we take your privacy seriously. This Privacy Policy explains how we handle 
          your information when you use our online tools and services.
        </p>

        <h2>Data Processing</h2>
        <p>
          All tools on Toolzy process data locally in your browser. Your input data never leaves 
          your device and is not stored on our servers. We do not collect, store, or transmit any 
          of the content you process using our tools.
        </p>

        <h2>Analytics</h2>
        <p>
          We may use anonymous analytics tools to understand how our website is used. This helps us 
          improve our services. These analytics do not collect personally identifiable information.
        </p>

        <h2>Cookies</h2>
        <p>
          We may use essential cookies to ensure the website functions properly. We do not use 
          tracking cookies for advertising purposes.
        </p>

        <h2>Third-Party Services</h2>
        <p>
          Our website may contain advertisements served by third-party advertising networks. These 
          networks may use cookies and other tracking technologies. Please refer to their privacy 
          policies for more information.
        </p>

        <h2>Contact</h2>
        <p>
          If you have questions about this Privacy Policy, please contact us through our contact page.
        </p>
      </div>
    )
  },
  terms: {
    title: 'Terms & Conditions',
    content: (
      <div className="prose prose-lg max-w-none">
        <p className="text-gray-600">Last updated: February 16, 2026</p>
        
        <h2>Acceptance of Terms</h2>
        <p>
          By accessing and using Toolzy, you accept and agree to be bound by the terms and provisions 
          of this agreement.
        </p>

        <h2>Use License</h2>
        <p>
          Permission is granted to use the tools on this website for personal and commercial purposes. 
          All tools are provided free of charge and may be used without registration.
        </p>

        <h2>Disclaimer</h2>
        <p>
          The tools and materials on Toolzy are provided on an 'as is' basis. We make no warranties, 
          expressed or implied, and hereby disclaim and negate all other warranties including, without 
          limitation, implied warranties or conditions of merchantability, fitness for a particular 
          purpose, or non-infringement of intellectual property or other violation of rights.
        </p>

        <h2>Limitations</h2>
        <p>
          In no event shall Toolzy or its suppliers be liable for any damages (including, without 
          limitation, damages for loss of data or profit, or due to business interruption) arising 
          out of the use or inability to use the materials on Toolzy.
        </p>

        <h2>Accuracy of Materials</h2>
        <p>
          The materials appearing on Toolzy could include technical, typographical, or photographic 
          errors. We do not warrant that any of the materials on its website are accurate, complete, 
          or current.
        </p>

        <h2>Modifications</h2>
        <p>
          We may revise these terms of service at any time without notice. By using this website, 
          you are agreeing to be bound by the current version of these terms of service.
        </p>
      </div>
    )
  },
  disclaimer: {
    title: 'Disclaimer',
    content: (
      <div className="prose prose-lg max-w-none">
        <p className="text-gray-600">Last updated: February 16, 2026</p>
        
        <h2>Website Disclaimer</h2>
        <p>
          The information provided by Toolzy is for general informational purposes only. All information 
          on the site is provided in good faith, however we make no representation or warranty of any 
          kind, express or implied, regarding the accuracy, adequacy, validity, reliability, availability, 
          or completeness of any information on the site.
        </p>

        <h2>Professional Disclaimer</h2>
        <p>
          The tools and information on this website do not constitute professional advice. Before making 
          any decision or taking any action that might affect your finances or business, you should 
          consult a qualified professional advisor.
        </p>

        <h2>Results Disclaimer</h2>
        <p>
          While we strive to provide accurate results, we cannot guarantee that all tools will produce 
          100% accurate outputs in all scenarios. Users should verify critical results independently.
        </p>

        <h2>External Links Disclaimer</h2>
        <p>
          The site may contain links to external websites that are not provided or maintained by us. 
          We do not guarantee the accuracy, relevance, timeliness, or completeness of any information 
          on these external websites.
        </p>

        <h2>Errors and Omissions Disclaimer</h2>
        <p>
          While we have made every attempt to ensure that the information contained on this website is 
          correct, we are not responsible for any errors or omissions, or for the results obtained from 
          the use of this information.
        </p>
      </div>
    )
  },
  about: {
    title: 'About Toolzy',
    content: (
      <div className="prose prose-lg max-w-none">
        <h2>Our Mission</h2>
        <p>
          Toolzy was created with a simple mission: to provide fast, free, and reliable online tools 
          for everyone. Whether you're a developer, writer, student, or professional, we believe you 
          deserve access to quality utilities without barriers.
        </p>

        <h2>What We Offer</h2>
        <p>
          Our platform provides a curated collection of professional-grade tools across four main 
          categories:
        </p>
        <ul>
          <li><strong>Text & Writing Tools:</strong> Word counters, case converters, and text utilities</li>
          <li><strong>Developer Tools:</strong> JSON formatters, encoders, and programming utilities</li>
          <li><strong>Security & Privacy Tools:</strong> Password generators, hash calculators, and encryption tools</li>
          <li><strong>Random & Utility Tools:</strong> Converters, generators, and handy utilities</li>
        </ul>

        <h2>Our Principles</h2>
        <h3>Privacy First</h3>
        <p>
          All our tools run directly in your browser. Your data never leaves your device, ensuring 
          complete privacy and security.
        </p>

        <h3>Always Free</h3>
        <p>
          We believe essential tools should be accessible to everyone. All our tools are free to use 
          with no signup required.
        </p>

        <h3>Performance Focused</h3>
        <p>
          We optimize for speed and reliability. Our tools are lightweight, fast, and work on all devices.
        </p>

        <h2>Contact Us</h2>
        <p>
          Have suggestions for new tools or feedback? We'd love to hear from you. Visit our contact 
          page to get in touch.
        </p>
      </div>
    )
  },
  contact: {
    title: 'Contact Us',
    content: (
      <div className="prose prose-lg max-w-none">
        <p>
          We'd love to hear from you! Whether you have a question, suggestion, or feedback, feel free 
          to reach out.
        </p>

        <h2>Get in Touch</h2>
        <p>
          For general inquiries, tool suggestions, or feedback:
        </p>
        <ul>
          <li><strong>Email:</strong> contact@toolzy.com</li>
          <li><strong>Response Time:</strong> We aim to respond within 24-48 hours</li>
        </ul>

        <h2>Feature Requests</h2>
        <p>
          Have an idea for a new tool? We're always looking to expand our collection based on user 
          needs. Send us your suggestions and we'll consider them for future development.
        </p>

        <h2>Bug Reports</h2>
        <p>
          If you encounter any issues or bugs while using our tools, please let us know with as much 
          detail as possible:
        </p>
        <ul>
          <li>Which tool you were using</li>
          <li>What you were trying to do</li>
          <li>What happened vs. what you expected</li>
          <li>Your browser and device information</li>
        </ul>

        <h2>Business Inquiries</h2>
        <p>
          For partnership opportunities or business-related inquiries:
        </p>
        <ul>
          <li><strong>Email:</strong> business@toolzy.com</li>
        </ul>

        <div className="bg-blue-50 border border-blue-200 rounded-xl p-6 mt-8">
          <p className="text-gray-900 font-semibold mb-2">Note</p>
          <p className="text-gray-700 mb-0">
            This is a demo contact page. In a production environment, you would integrate a contact 
            form or provide actual contact details.
          </p>
        </div>
      </div>
    )
  }
};

export function LegalPage() {
  const { page } = useParams<{ page: string }>();
  
  if (!page || !(page in legalContent)) {
    return <Navigate to="/404" replace />;
  }

  const { title, content } = legalContent[page as LegalPageType];

  return (
    <div className="min-h-screen bg-white flex flex-col">
      <Navbar />

      <main className="flex-grow py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-8">
            {title}
          </h1>
          <div className="bg-white">
            {content}
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
