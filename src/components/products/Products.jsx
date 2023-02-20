import { useEffect, useState } from 'react';
import ProductCard from './components/ProductCard';
import './styles/Products.css'

function ProductsData() {
  const [ProductData, setProductData] = useState([]);

  useEffect(() => {
    fetch("jsons/shirt.json")
      .then(response => response.json())
      .then(datos => {
        setProductData(datos)
      })
  }, []);
  console.log(ProductData)
  return ProductData;
}

function Products() {
  const products = ProductsData();
  return (
    <section className="products">
      <h2 className="section-title mt-5">Remeras</h2>
      <div className="products-content">
        {
          products.map(product => (
            <ProductCard
              key={product.id + 'product'}
              colors={product.colors}
              details={product.details}
              image={product.image}
              name={product.name}
              size={product.size}
              zone={product.zone}
            ></ProductCard>
          ))
        }
      </div>
    </section>
  );
}

export default Products;