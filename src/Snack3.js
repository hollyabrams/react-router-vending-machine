import { Link } from 'react-router-dom';

const Snack3 = () => {
  return (
    <div className="container">
      <h1>Snack 3</h1>
      <p>This is snack 3.</p>
      <Link to="/">Go back to Vending Machine</Link>
    </div>
  );
};

export default Snack3;
