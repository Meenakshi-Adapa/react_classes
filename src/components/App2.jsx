import "./styles/App2.css";
import Product from "./product";
export default function App2() {
  const product = [
    { id: 1, name: 'Product 1', price: 100 },
    { id: 2, name: 'Product 2', price: 200 },
    { id: 3, name: 'Product 3', price: 300 },
    { id: 4, name: 'Product 4', price: 400 },
    { id: 5, name: 'Product 5', price: 500 }
  ]
  return (
    <>
      <div>
        <h1>This is App2</h1>
      </div>
      <div className="Product-list">
    
          { 
            product.map(value => (
             <Product  key={value.id} {...value} />
            ))
          }
     
      </div>
    </>
  );
}