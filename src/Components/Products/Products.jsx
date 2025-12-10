import React, { useState, useEffect } from 'react';
import { useLoaderData } from "react-router";
import useFetch from '../../hooks/useFetch';
import Product from '../Product/Product';
import './Products.css'

const Products = () => {
  const initialRecords = useLoaderData();
  const { data, loading: fetching, error: fetchError } = useFetch('https://fakestoreapi.com/products');
  const [records, setRecords] = useState([]);

  useEffect(() => {
    // prefer API data, fallback to loader-provided data
    if (data && Array.isArray(data)) {
      setRecords(data);
    } else if (initialRecords && Array.isArray(initialRecords)) {
      setRecords(initialRecords);
    }
  }, [data, initialRecords]);

  if (fetching) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-red-700 mx-auto mb-4"></div>
          <p className="text-gray-300">Loading products...</p>
        </div>
      </div>
    );
  }

  if (fetchError) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded">
          <p>Error loading products: {fetchError}</p>
        </div>
      </div>
    );
  }

  return (
    <div className='products'>
      {records && records.length > 0 ? (
        records.map(pd => <Product key={pd.id} pdt={pd}></Product>)
      ) : (
        <p className="text-center text-gray-600">No products available</p>
      )}
    </div>
  );
};

export default Products;