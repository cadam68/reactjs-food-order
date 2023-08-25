import { useState } from "react";

import Header from './components/Layout/Header';
import Meals from './components/Meals/Meals';
import CartProvider from './store/CartProvider';
import Cart from "./components/Cart/Cart";

function App() {
  const [ cartIsShown, setCartIsShown ] = useState(false);

  const showCartHandler = () => {
    setCartIsShown(true);
  }

  const hideCartHandler = () => {
      setCartIsShown(false);
  }

  console.log(`cartIsShown=${cartIsShown}`)
  return (
    <CartProvider>
      {cartIsShown && <Cart />}
      <Header onShowCart={showCartHandler} />
      <main>
        <Meals />
      </main>
    </CartProvider>
  );
}

export default App;
