import "./App2.css";

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
      <div class="Product-list">
    
          { 
            product.map(value => (
              <div class="Product-box" key={value.id}>
                <h1> {value.name}</h1> 
                {value.price}
                <div><button>Add to Cart</button></div>
              </div>
            ))
          }
     
      </div>
    </>
  );
}