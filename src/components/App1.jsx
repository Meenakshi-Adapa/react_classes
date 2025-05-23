import Product from './Product';
import Varient from './varient';
export default function App1() {
  return (
    <>
      <div>This is App1 Component</div>
      <Product name="shoes" price="25000" />
      <Varient a="10" b="20" />
    </>
  );
}
