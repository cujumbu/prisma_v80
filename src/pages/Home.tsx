import React from 'react';
import { Link } from 'react-router-dom';
import { FileText, Search } from 'lucide-react';
import { useTranslation } from 'react-i18next';

const Home: React.FC = () => {
  const { t } = useTranslation();

  return (
    <div className="text-center">
      <h1 className="text-4xl font-bold mb-8">{t('welcomeMessage')}</h1>
      <p className="text-xl mb-8">{t('homeDescription')}</p>
      <div className="flex justify-center space-x-4">
        <Link to="/claim" className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded inline-flex items-center">
          <FileText className="mr-2" />
          {t('submitClaim')}
        </Link>
        <Link to="/status" className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded inline-flex items-center">
          <Search className="mr-2" />
          {t('checkClaimStatus')}
        </Link>
      </div>
    </div>
  );
};

export default Home;
