import React from 'react';
import CountryPercentageForm from './components/CountryPercentageForm';
import { materialRenderers } from '@jsonforms/material-renderers';
import './App.css';

const App: React.FC = () => {
  return (
    <div className="container">
      <h1>Mon Application JSONForms</h1>
      <CountryPercentageForm renderers={materialRenderers} />
    </div>
  );
};

export default App;
