export default function Varient(sum) {
  return (
    <div>
      <ul>
        <li>Black</li>
        <li>Blue</li>
        <li>Green</li>
        <li>Orange</li>
      </ul>
      <div>
        Sum of {sum.a} and {sum.b} is {parseInt(sum.a) + parseInt(sum.b)}
      </div>
    </div>
  );
}