import React from 'react';

import './styles.scss';
import SearchPage from '../../components/Search Page';
import Footer from '../../components/Footer';

const Main: React.FC = () => {
  return (
    <div className="main">
      <SearchPage />
      <Footer />
    </div>
  );
};

export default Main;
