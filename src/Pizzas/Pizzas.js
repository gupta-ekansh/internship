import { Fragment } from 'react';
import AvailablePizzas from './AvailablePizza';
import PizzaSummary from './PizzaSummary';

const Pizzas = () => {
  return (
    <Fragment>
      <PizzaSummary />
      <AvailablePizzas />
    </Fragment>
  );
};

export default Pizzas;
