import React from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import { Home } from 'lucide-react';
import { policies } from '../data/urls';
import ReactMarkdown from 'react-markdown';

interface PolicyPageProps {
  type: 'privacy' | 'terms' | 'refund';
}

export function PolicyPage({ type }: PolicyPageProps) {
  const { t, i18n } = useTranslation();
  const currentLanguage = i18n.language;
  const policy = policies[currentLanguage]?.[type] || policies.en[type];

  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-50 to-blue-100 dark:from-gray-900 dark:to-gray-800">
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          {/* Navigation */}
          <Link
            to="/"
            className="inline-flex items-center gap-2 mb-6 px-4 py-2 rounded-lg bg-white dark:bg-gray-700 text-gray-800 dark:text-white hover:bg-gray-50 dark:hover:bg-gray-600 transition-colors shadow-sm"
          >
            <Home size={20} />
            <span>{t('navigation.backToHome')}</span>
          </Link>

          {/* Content */}
          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8">
            <h1 className="text-3xl font-bold mb-6 text-gray-900 dark:text-white">
              {policy.title}
            </h1>
            <div className="prose dark:prose-invert max-w-none">
              <ReactMarkdown>{policy.content}</ReactMarkdown>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}