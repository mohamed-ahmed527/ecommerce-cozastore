import category1 from "./../assets/categories/category1.webp";
import category2 from "./../assets/categories/category2.webp";
import category3 from "./../assets/categories/category3.webp";
import { Link } from 'react-router-dom/cjs/react-router-dom.min';

const Categories = () => {
  const categories = [
    {url: category1 , title: "Women", subTitle: "New Trend"},
    {url: category2 , title: "Men", subTitle: "New Trend"},
    {url: category3 , title: "Accessories", subTitle: "New Trend"},
  ];

  return (
    <div className="categories my-24 overflow-hidden">
      <div className="container md:flex md:justify-around flex-wrap lg:justify-around tracking-wider">
        {categories.map((ele , index) => (
          <div className="box h-72 lg:h-64 sm:w-full md:max-w-96 lg:w-96 xl:w-1/3 md:mx-1 mb-14 border-2 box-border rounded-md mx-auto " key={index} style={{backgroundImage: `url(${ele.url})`, backgroundSize: "cover", backgroundPositionX:"right", backgroundPositionY:"top"}}>
            <div className="layout h-full w-full overflow-hidden relative">
              <h1 className="mt-4 mx-6 text-xl font-extrabold ">{ele.title}</h1>
              <p className="mt-2 mx-6 text-lg ">{ele.subTitle}</p>
              <Link to="/Shop" className="absolute bottom-6 left-6 text-black text-md font-bold tracking-wider">Shop Now</Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Categories;