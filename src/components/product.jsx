// src/Product.jsx
function Product(items) {
  const desc = "This is a product component";
  return (
    <div>
      {desc} - {items.name},{items.price}
    </div>
  );
}

export default Product;
