import React, { useContext } from "react";
import { DataContext } from "./DataContext";
import { Link } from "react-router-dom";

const Products = () => {
  const [products] = useContext(DataContext);

  return (
    <>
      <h3 className='text-center header'>Our Latest Products</h3>
      <div className='container'>
        <div className='row p-2'>
          {products.map((product) => (
            <section
              key={product._id}
              className='home-products col-lg-4 col-md-6 pb-4'
            >
              <Link
                style={{ textDecoration: "none" }}
                to={`/products/${product._id}`}
              >
                <h5 className='text-center py-3 text-info'>{product.name}</h5>
                <img
                  className='img-fluid home-image'
                  src={product.image}
                  alt='products'
                />
                <h6 className='buy-now'>Buy Now</h6>
              </Link>
            </section>
          ))}
        </div>
      </div>
    </>
  );
};

export default Products;
