import Categories from "./Categories";
import Header from "./Header";
import Products from "./Products";

const Home = () => {
  return(
    <div className="home">
      <Header></Header>
      <Categories></Categories>
      <Products></Products>
    </div>
  );
}

export default Home ;
