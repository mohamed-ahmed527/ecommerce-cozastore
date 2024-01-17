import { BrowserRouter as Router, Route, Switch } from "react-router-dom/cjs/react-router-dom.min";
import Home from './components/Home';
import Navbar from "./components/Navbar";
import ProductDetails from "./components/ProductDetails";
import Cart from './components/Cart';
import ShopPage from './components/ShopPage';
import BlogPage from './components/BlogPage';
import AboutPage from './components/AboutPage';
import ContactPage from './components/ContactPage';

function App() {
  
  return (
    <Router>
      <div className="App">
        <Navbar></Navbar>
        <div className="content">
          <Switch>
            <Route exact path="/">
              <Home></Home>
            </Route>
            <Route path="/product/:id">
              <ProductDetails></ProductDetails>
            </Route>
            <Route path="/shop">
              <ShopPage></ShopPage>
            </Route>
            <Route path="/blog">
              <BlogPage></BlogPage>
            </Route>
            <Route path="/about">
              <AboutPage></AboutPage>
            </Route>
            <Route path="/contact">
              <ContactPage></ContactPage>
            </Route>
            <Route path="/cart">
              <Cart></Cart>
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
