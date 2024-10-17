import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import logoImage from './assets/logo.png';

export default function Header() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { t, i18n } = useTranslation();

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
    setIsModalOpen(false);
  };

  return (
    <>
      <header className="w-full bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex-shrink-0">
              <a href="/" className="text-xl font-bold text-gray-800">
                <img src={logoImage} alt="hey"  className="w-17 h-20"  />
              </a>
            </div>
            <div className="flex items-center space-x-8">
              <a href="/security-help" className="text-gray-600 hover:text-gray-900">
                {t('Security and help')}
              </a>
              <a
                href="/SignUp"
                className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-md transition duration-300"
              >
                {t('Signin & Login')}
              </a>
              <button onClick={toggleModal} className="focus:outline-none">
                <img
                  src="/icons/language.svg"
                  alt="Change Language"
                  className="w-6 h-6"
                />
              </button>
            </div>
          </div>
        </div>
      </header>

      {isModalOpen && (
        <div className="fixed inset-0 bg-gray-500 bg-opacity-75 flex justify-center items-center z-50">
          <div className="bg-white p-6 rounded-lg shadow-lg max-w-sm w-full">
            <h2 className="text-xl font-semibold mb-4">{t('Choose Language')}</h2>
            <button
              onClick={() => changeLanguage('en')}
              className="block w-full text-left py-2 px-4 hover:bg-gray-100"
            >
              {t('English')}
            </button>
            <button
              onClick={() => changeLanguage('ko')}
              className="block w-full text-left py-2 px-4 hover:bg-gray-100"
            >
              {t('Korean')}
            </button>
            <button
              onClick={toggleModal}
              className="block w-full text-left py-2 px-4 text-red-500 hover:bg-gray-100 mt-4"
            >
              {t('Close')}
            </button>
          </div>
        </div>
      )}
    </>
  );
}
