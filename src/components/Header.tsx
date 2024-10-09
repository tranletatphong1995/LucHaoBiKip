import React from 'react';
import { BookOpen } from 'lucide-react';

const Header: React.FC = () => {
  return (
    <header className="bg-indigo-600 text-white p-4">
      <div className="container mx-auto flex items-center justify-between">
        <div className="flex items-center">
          <BookOpen className="w-8 h-8 mr-2" />
          <h1 className="text-2xl font-bold">Bí Kíp Lục Hào</h1>
        </div>
        <nav>
          <ul className="flex space-x-4">
            <li><a href="#" className="hover:text-indigo-200">Trang chủ</a></li>
            <li><a href="#" className="hover:text-indigo-200">Tra cứu</a></li>
            <li><a href="#" className="hover:text-indigo-200">Nạp dữ liệu</a></li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;