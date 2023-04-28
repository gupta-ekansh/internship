import { useContext } from 'react';
import CartContext from '../../store/cart-context';
import PizzaItemForm from './PizzaItemForm';
import classes from './PizzaItem.module.css';

const PizzaItem = (props) => {
  console.log("props" , props)
  const cartCtx = useContext(CartContext);
  const price = `₹${props.price.toFixed(2)}`;

  const addToCartHandler = (amount) => {
    cartCtx.addItem({
      id: props.id,
      name: props.name,
      amount: amount,
      price: props.price,
    });
  };
  return (
    <li className={classes.tea}>
      <div className={classes.basics}>
        <div><img className = {classes.img} src = {props.img} alt = {props.name} /></div>
        <div>
          <h3>
            {props.name}
            {props.type ?
              <div className={classes.green}></div>
              : <div className={classes.red}></div>
            }
          </h3>
          <div className={classes.description}>{props.description}</div>
          <div className={classes.price}>{price}</div>
        </div>
      </div>
      
      <div>
        {' '}
        <PizzaItemForm onAddToCart={addToCartHandler} />{' '}
      </div>
    </li>
  );
};

export default PizzaItem;
