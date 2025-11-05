let products = [
  {
    title: "Smartphone",
    price: 599,
    description: "Latest 5G smartphone with high-resolution camera.",
  },
  {
    title: "Laptop",
    price: 999,
    description: "Lightweight laptop with Intel i7 processor.",
  },
  {
    title: "Bluetooth Speaker",
    price: 49,
    description: "Portable speaker with deep bass and long battery life.",
  },
];
function ProductListB() {
  return (
    <div>
      <h3 className="text-primary">Product Catalog</h3>
      <ul className="list-group">
        {products.map((product) => (
          <li className="list-group-item">
            <h3>
              <strong>{product.title}</strong>
            </h3>
            <h3 className="text-success">Price: {product.price}</h3>
            <h3 className="text-muted">{product.description}</h3>
          </li>
        ))}
      </ul>
    </div>
  );
}
export default ProductListB;
