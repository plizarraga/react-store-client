import { useState, useEffect } from 'react';
import { Product } from '../../models';
import { ProductList } from '.';

const Catalog = () => {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    const response = await fetch('http://localhost:3000/api/v1/products');
    const data = await response.json();
    setProducts(data);
  };
  
  return <ProductList products={products} />;
};

export default Catalog;
