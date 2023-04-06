import { Link } from 'react-router-dom';

const Snack1 = () => {
  return (
    <div className='container'>
      <h1>Snack 1</h1>
      <p>This is snack 1.</p>
      <Link to="/">Go back to Vending Machine</Link>
    </div>
  );
};

export default Snack1;
