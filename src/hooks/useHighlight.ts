import { useEffect } from 'react';
import hljs from 'highlight.js';

const COMMON_LANGUAGES = [
  'bash',
  'c++',
  'c#',
  'css',
  'diff',
  'dockerfile',
  'go',
  'graphql',
  'html',
  'ini',
  'java',
  'javascript',
  'json',
  'kotlin',
  'less',
  'makefile',
  'markdown',
  'perl',
  'php',
  'plaintext',
  'python',
  'python-repl',
  'ruby',
  'scss',
  'shell',
  'sql',
  'swift',
  'typescript',
  'vbnet',
  'xml',
  'yaml',
];

export const useHighlight = () => {
  useEffect(() => {
    hljs.configure({
      languages: COMMON_LANGUAGES,
    });
    hljs.highlightAll();
  }, []);
};
