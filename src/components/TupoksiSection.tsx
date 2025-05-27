import React, { useState } from 'react';
import parse, { domToReact, HTMLReactParserOptions, Element } from 'html-react-parser';
import { ChevronLeft } from 'lucide-react';
import { TupoksiPosition, TupoksiData } from '../data/tupoksiData';

interface TupoksiSectionProps {
  position: TupoksiPosition;
  data: TupoksiData;
  onBack: () => void;
  isEditMode: boolean;
  onContentUpdate: (positionId: TupoksiPosition, newContent: string) => void;
}

export const TupoksiSection: React.FC<TupoksiSectionProps> = ({ 
  position, 
  data, 
  onBack, 
  isEditMode,
  onContentUpdate 
}) => {
  const positionData = data[position];
  const [editContent, setEditContent] = useState(positionData.content);

  if (!positionData) return null;

  const handleContentChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setEditContent(e.target.value);
    onContentUpdate(position, e.target.value);
  };

  const handleTupoksiLink = (pos: string) => {
  // Trigger event global, akan ditangkap di App.tsx
  window.dispatchEvent(new CustomEvent('showTupoksi', { detail: pos }));
};

const options: HTMLReactParserOptions = {
  replace(domNode) {
    if (
      domNode instanceof Element &&
      domNode.name === 'span' &&
      domNode.attribs &&
      domNode.attribs.class?.includes('tupoksi-link')
    ) {
      const onclick = domNode.attribs.onclick;
      const match = onclick?.match(/showTupoksi\('([^']+)'\)/);
      const pos = match?.[1];

      return (
        <span
          className="tupoksi-link cursor-pointer text-blue-600 underline hover:text-blue-800"
          onClick={() => pos && handleTupoksiLink(pos)}
        >
          {domToReact(domNode.children, options)}
        </span>
      );
    }
  },
};

  return (
    <div className="max-w-4xl mx-auto py-8 px-4 fade-in">
      <div className="flex flex-col sm:flex-row justify-between items-center mb-8">
        <h2 className="text-2xl sm:text-3xl font-bold text-blue-800 dark:text-gray-100">
          Tugas Pokok dan Fungsi {positionData.title}
        </h2>
        <button 
          onClick={onBack}
          className="text-blue-600 dark:text-gray-100 hover:text-blue-800 dark:hover:text-blue-100 font-medium mt-4 sm:mt-0 transform hover:translate-x-[-8px] transition-all flex items-center"
        >
          <ChevronLeft className="h-5 w-5 mr-1" />
          Kembali ke Struktur
        </button>
      </div>
      
      <div className="bg-white dark:bg-gray-700 p-6 rounded-xl shadow-lg mb-8 transform hover:scale-[1.02] transition-all duration-300">
        {isEditMode ? (
          <div className="space-y-4">
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
              Edit Konten HTML:
            </label>
            <textarea
              value={editContent}
              onChange={handleContentChange}
              className="w-full h-96 p-4 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-800 dark:border-gray-600 dark:text-white font-mono text-sm"
            />
            <p className="text-xs text-gray-500 dark:text-gray-400">
              Anda dapat menggunakan tag HTML untuk memformat konten.
            </p>
          </div>
        ) : (
  <div>
    {parse(positionData.content, options)}
  </div>        )}
      </div>
      
      {!isEditMode && (
        <div className="p-6 rounded-t-lg w-full mx-auto text-center mb-8">
          <p className="text-gray-400 dark:text-gray-300">
            Klik pada teks berwarna biru untuk langsung menuju ke jabatan terkait dalam alur kerja.
          </p>
        </div>
      )}
    </div>
  );
};