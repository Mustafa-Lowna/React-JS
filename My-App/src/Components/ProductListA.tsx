let products = [
  "Smartphone",
  "Laptop",
  "Wireless Headphones",
  "Smartwatch",
  "Bluetooth Speaker",
  "Gaming Console",
];
function ProductListA() {
  return (
    <div>
      <h3 className="text-success">Available Products</h3>
      <ul className="list-group">
        {products.map((product) => (
          <li className="list-group-item">{product}</li>
        ))}
      </ul>
    </div>
  );
}
export default ProductListA;
