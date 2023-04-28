import { Fragment, useState } from 'react';
import Cart from './Cart/Cart';
import Header from './Header/Header';
import Pizzas from './Pizzas/Pizzas';
import CartProvider from './store/CartProvider';
import Footer from './Footer/Footer';

const App = () => {
  const [cartIsShown, setCartIsShown] = useState(false);
  const showCartHandler = () => {
    setCartIsShown(true);
  };
  const hideCartHandler = () => {
    setCartIsShown(false);
  };
  return (
    <CartProvider>
      {cartIsShown && <Cart onClose={hideCartHandler} />}
      <Header onShowCart={showCartHandler} />
      <main>
        <Pizzas />
      </main>
      <Footer/>
    </CartProvider>
  );
};

export default App;
