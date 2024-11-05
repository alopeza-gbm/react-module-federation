import * as React from 'react';


const About = React.lazy(() => import('about/Module'));

const Cart = React.lazy(() => import('cart/Module'));

const Shop = React.lazy(() => import('shop/Module'));

export function App() {
  return (
    <React.Suspense fallback={null}>
      <About />
      <Cart/>
      <Shop/>
    </React.Suspense>
  );
}

export default App;
