import { Link } from 'react-router-dom/cjs/react-router-dom.min';
import FetchData from './FetchData';
const ProductsChildComp = () => {
  const {data, error} = FetchData('http://localhost:8000/products');

  const filter= (e)=> {
    let input = e.target;
    let allInputs = document.querySelectorAll('.types span');
    let inputText =  e.target.innerText;
    let allProducts = document.querySelectorAll('.preview');
    // first remove active-input class from all inputs
    allInputs.forEach((ele)=>{ele.classList.remove("active-input")});
    // second add active-input class to curr input
    input.classList.add("active-input");
    /********/
    allProducts.forEach((ele)=>{
      ele.classList.remove("hidden");
      if(inputText.toLowerCase() !== ele.getAttribute('value')){
        ele.classList.add('hidden');
      }
      if(inputText.toLowerCase() === "all products"){
        ele.classList.remove("hidden");
      }
    })
  }

  return (
    <div className="products my-24">
    <div className="container">
      <h1 className='my-10 text-4xl font-bold tracking-wider text-gray-900'>PRODUCTS OVERVIEW</h1>
      <div className="types">
        <span className="cursor-pointer mr-10 text-md text-gray-500 hover:text-gray-900 hover:underline hover:decoration-1 active-input" onClick={(e)=>filter(e)}>All Products</span>
        <span className="cursor-pointer mr-10 text-md text-gray-500 hover:text-gray-900 hover:underline hover:decoration-1" onClick={(e)=>filter(e)}>Women</span>
        <span className="cursor-pointer mr-10 text-md text-gray-500 hover:text-gray-900 hover:underline hover:decoration-1" onClick={(e)=>filter(e)}>Men</span>
        <span className="cursor-pointer mr-10 text-md text-gray-500 hover:text-gray-900 hover:underline hover:decoration-1" onClick={(e)=>filter(e)}>Shoes</span>
        <span className="cursor-pointer mr-10 text-md text-gray-500 hover:text-gray-900 hover:underline hover:decoration-1" onClick={(e)=>filter(e)}>Watches</span>
      </div>
      <div className="parent md:flex md:flex-wrap justify-around my-20">
        {error && <h1>{error}</h1>}
        {data && 
          data.map((ele, index)=>(
            <div className="preview sm:w-full md:w-1/2 lg:w-1/3 xl:w-1/4 px-4 lg:px-7 box-border my-10 rounded-md" value={ele.class} key={ele.id}>
              <div className="pic overflow-hidden relative">
                <img src={ele.avatar} alt={ele.title} loading='lazy' className='hover:scale-110 transition duration-700 ' />
                <Link to={`/product/${ele.id}`} >Quick View</Link>
              </div>
              <h1 className='text-lg tracking-wide text-slate-700'>{ele.title}</h1>
              <p className='text-md tracking-wide text-gray-600'>${ele.price}</p>
            </div>
          ))
        }

      </div>
    </div>
  </div>

  );
}
 
export default ProductsChildComp;
