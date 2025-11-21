import { useState } from "react";

type Product = {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
};

function ProductList() {
  const [products, setProducts] = useState<Product[]>([]);

  const fetchProducts = async () => {
    let response = await fetch("https://fakestoreapi.com/products");
    let data = await response.json();
    setProducts(data);
  };
  return (
    <div className="container my-5">
      <h3 className="mb-4 fw-bold text-secondary">Product List</h3>

      <button className="btn btn-primary mb-4" onClick={fetchProducts}>
        Load Products
      </button>

      <div className="row">
        {products.map((product) => (
          <div className="col-md-4 col-lg-3 mb-4" key={product.id}>
            <div className="card shadow-sm border-0 h-100">
              <img
                src={product.image}
                className="card-img-top p-3"
                alt={product.title}
                style={{ height: "200px", objectFit: "contain" }}
              />

              <div className="card-body">
                <h6 className="fw-semibold">{product.title}</h6>

                <p className="text-muted small">{product.category}</p>

                <p
                  className="small text-secondary"
                  style={{ height: "40px", overflow: "hidden" }}
                >
                  {product.description}
                </p>

                <h6 className="text-success fw-bold mt-2">₹{product.price}</h6>

                <button className="btn btn-sm btn-dark w-100 mt-2">
                  Add to Cart
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
export default ProductList;
