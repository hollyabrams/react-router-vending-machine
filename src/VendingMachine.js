import { Link } from 'react-router-dom';
import "./VendingMachine.css";

const VendingMachine = () => {
  return (
    <div className="container">
    <div className="vending-machine">
      <h1 className="vending-machine__title">Vending Machine</h1>
      <ul className="vending-machine__list">
        <li className="vending-machine__item">
          <Link to="/snack1">Snack 1</Link>
        </li>
        <li className="vending-machine__item">
          <Link to="/snack2">Snack 2</Link>
        </li>
        <li className="vending-machine__item">
          <Link to="/snack3">Snack 3</Link>
        </li>
      </ul>
      <div className='drawer'><h2>Enjoy Your Snack!</h2></div>
    </div>
    </div>
  );
};

export default VendingMachine;
