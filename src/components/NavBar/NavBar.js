
import './style.css';
import CartWidget from '../CartWidget/CartWidget';

export const NavBar = () => {
  return (
    <div className="navBar">
    <div>logo</div>
    <div>
      <ul className="options">
        <li>Buzos</li>
        <li>Remeras</li>
        <li>Pantalones</li>
        <li>Bermudas</li>
        <li>Zapatillas</li>
      </ul>
    </div>
    <div>
      <CartWidget/>
    </div>
    </div>
  );
};

export default NavBar;
