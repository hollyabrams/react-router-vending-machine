import { Link } from 'react-router-dom';

const Snack2 = () => {
  return (
    <div className='container'>
      <h1>Snack 2</h1>
      <p>This is snack 2.</p>
      <Link to="/">Go back to Vending Machine</Link>
    </div>
  );
};

export default Snack2;
