import { useEffect, useState } from "react";
import { ApiProduct } from "../../types";


interface ProductListProps {
  onAddToCart: (product: ApiProduct) => void;
}

const ProductList: React.FC<ProductListProps> = ({ onAddToCart }) => {
  const [products, setProducts] = useState<ApiProduct[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    async function fetchProducts() {
      try {
        const res = await fetch("https://fakestoreapi.com/products");
        const data: ApiProduct[] = await res.json();
        setProducts(data);
      } catch (err) {
        console.error("Error loading products", err);
      } finally {
        setLoading(false);
      }
    }

    fetchProducts();
  }, []);

  if (loading) {
    return <p className="text-center">Loading products...</p>;
  }

  return (
    <div className="row g-4">
      {products.map((product) => (
        <div className="col-md-4 col-sm-6" key={product.id}>
          <div className="card h-100 product-card">
            <div className="product-img-wrap">
              <img
                src={product.image}
                className="card-img-top"
                alt={product.title}
              />
            </div>

            <div className="card-body d-flex flex-column">
              <div className="product-category text-muted text-uppercase mb-1">
                {product.category}
              </div>

              <h5 className="card-title product-title">
                {product.title}
              </h5>

              <p className="card-text product-description">
                {product.description.length > 90
                  ? product.description.slice(0, 90) + "..."
                  : product.description}
              </p>

              <div className="mt-auto">
                <div className="d-flex justify-content-between align-items-center mb-2">
                  <span className="product-price fw-bold">
                    ₹{(product.price * 85).toFixed(0)}
                  </span>
                  {product.rating && (
                    <small className="text-muted">
                      ⭐ {product.rating.rate.toFixed(1)} (
                      {product.rating.count})
                    </small>
                  )}
                </div>

                <button
                  className="btn btn-primary w-100"
                  onClick={() => onAddToCart(product)}
                >
                  Add to Cart
                </button>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProductList;