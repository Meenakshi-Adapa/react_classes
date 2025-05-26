export default function Product({ name, price }) {
  return (
    <div className="product">
      <p>{name} - ${price}</p>
    </div>
  );
}

