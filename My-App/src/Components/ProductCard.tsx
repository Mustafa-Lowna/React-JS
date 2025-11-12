type ProductProps = {
  name: string;
  category: string;
  price: number;
  image: string;
};
function ProductCard(props: ProductProps) {
  return (
    <div className="card m-auto" style={{ width: "300px" }}>
      <img
        src={props.image}
        className="card-img-top"
        alt={props.name}
        style={{
          width: "100%",
          height: "300px",
        }}
      />
      <div className="card-body shadow-sm border-0 ">
        <h3 className="card-title text-success">{props.name}</h3>
        <h4 className="card-subtitle text-danger">{props.category}</h4>
        <p className="card-text text-secondary">Salary: ${props.price}</p>
      </div>
    </div>
  );
}
export default ProductCard;
