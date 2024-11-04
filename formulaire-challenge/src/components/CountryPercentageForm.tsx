import React, { useState } from 'react';
import { JsonForms } from '@jsonforms/react';
import Typography from '@mui/material/Typography';
import { JsonFormsRendererRegistryEntry } from '@jsonforms/core';
import schema from '../schemas/FormSchema';
import uischema from '../schemas/UISchema';

const CountryPercentageForm: React.FC<{ renderers: JsonFormsRendererRegistryEntry[] }> = ({ renderers }) => {
  const [data, setData] = useState<{ countryPercentages: { country: string; percentage: number }[] }>({
    countryPercentages: [{ country: "France 50%", percentage: 50 }],
  });

  const [totalPercentage, setTotalPercentage] = useState(50);

  const handleChange = ({ data }: any) => {
    setData(data);
    console.log("Données après modification:", data);
    const total = data.countryPercentages?.reduce((acc: number, item: { percentage: number }) => acc + item.percentage, 0) || 0;
    setTotalPercentage(total);
  };

  const handleAddRow = () => {
    const newRow = { country: "France 50%", percentage: 50 };
    const updatedData = {
      ...data,
      countryPercentages: [...data.countryPercentages, newRow],
    };
    setData(updatedData);
    console.log("Données après ajout de ligne:", updatedData);
  };

  return (
    <div className="json-forms-container">
      <JsonForms
        schema={schema}
        uischema={uischema}
        data={data}
        renderers={renderers}
        onChange={handleChange}
      />
      <button onClick={handleAddRow}>Ajouter une ligne</button>
      <Typography variant="h6" className="total-percentage">
        Total des pourcentages: {totalPercentage}%
      </Typography>
      {totalPercentage === 100 ? (
        <Typography variant="h6" className="total-percentage valid">
          Formulaire valide!
        </Typography>
      ) : (
        <Typography variant="h6" className="total-percentage invalid">
          Le total doit être égal à 100%.
        </Typography>
      )}
    </div>
  );
};

export default CountryPercentageForm;
