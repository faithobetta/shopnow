import React from 'react';
import { useSelector } from 'react-redux';
import ProductCard from '../components/ProductCard';

const FilterData = () => {
  const filterProducts = useSelector((state) => state.product.FilteredData);

  return (
    <div className="mx-auto py-12 px-4 md:px-16 lg:px-24">
      {filterProducts && filterProducts.length > 0 ? (
        <>
          <h2 className="text-2xl font-bold mb-6 mt-16 text-center">Shop</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-6 cursor-pointer">
            {filterProducts.map((product, index) => (
              <ProductCard key={product.id || index} product={product} />
            ))}
          </div>
        </>
      ) : (
        <div className="flex justify-center">
          <h3 className='font-bold'>No Products Found</h3>
        </div>
      )}
    </div>
  );
};

export default FilterData;
