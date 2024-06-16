import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const MedicineDetailPage = () => {
  const { id } = useParams();
  const [medicine, setMedicine] = useState(null);

  useEffect(() => {
    const fetchMedicineDetails = async () => {
      try {
        const response = await axios.get(`https://api.fda.gov/drug/label.json?search=id:${id}`);
        setMedicine(response.data.results[0]);
      } catch (error) {
        console.error('Error fetching the data', error);
      }
    };

    fetchMedicineDetails();
  }, [id]);

  if (!medicine) return <div>Loading...</div>;

  return (
    <div className="max-w-2xl mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4">{medicine.openfda.brand_name[0]}</h1>
      <p className="text-gray-700">{medicine.description}</p>
      {/* Add more details as needed */}
    </div>
  );
};

export default MedicineDetailPage;
