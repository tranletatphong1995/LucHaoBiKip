import React, { useState } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import SearchForm from './components/SearchForm';
import SearchResults from './components/SearchResults';
import DataInput from './components/DataInput';
import { Element, Field } from './types';

const App: React.FC = () => {
  const [searchResult, setSearchResult] = useState<Element | null>(null);
  const [selectedField, setSelectedField] = useState<Field>('investment');
  const [activeTab, setActiveTab] = useState<'search' | 'input'>('search');

  const handleSearch = (field: Field, category: string, element: string) => {
    // TODO: Implement actual search logic here
    // For now, we'll just set a dummy result
    setSelectedField(field);
    setSearchResult({
      name: element,
      generalDescription: 'Đây là mô tả chung cho ' + element,
      meanings: {
        [field]: 'Ý nghĩa của ' + element + ' trong lĩnh vực ' + field,
      },
    });
  };

  const handleDataSubmit = (data: {
    category: string;
    name: string;
    generalDescription: string;
    meanings: { [key in Field]: string };
  }) => {
    // TODO: Implement actual data saving logic here
    console.log('Submitted data:', data);
    alert('Dữ liệu đã được lưu thành công!');
  };

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-8 text-center">Bí Kíp Lục Hào</h1>
        <div className="mb-4">
          <button
            className={`mr-2 px-4 py-2 rounded ${activeTab === 'search' ? 'bg-indigo-600 text-white' : 'bg-gray-200'}`}
            onClick={() => setActiveTab('search')}
          >
            Tra cứu
          </button>
          <button
            className={`px-4 py-2 rounded ${activeTab === 'input' ? 'bg-indigo-600 text-white' : 'bg-gray-200'}`}
            onClick={() => setActiveTab('input')}
          >
            Nạp dữ liệu
          </button>
        </div>
        {activeTab === 'search' ? (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <SearchForm onSearch={handleSearch} />
            </div>
            <div>
              <SearchResults result={searchResult} field={selectedField} />
            </div>
          </div>
        ) : (
          <DataInput onSubmit={handleDataSubmit} />
        )}
      </main>
      <Footer />
    </div>
  );
};

export default App;