import { useHistory, useParams } from "react-router-dom/cjs/react-router-dom.min";
import FetchData from "./FetchData";
import { useState } from "react";

const ProductDetails = () => {
  const {id} = useParams();
  const {data:product, error} = FetchData('http://localhost:8000/products/' + id);
  const [quantity, setQuantity] = useState(1);
  const [size, setSize] =useState('size S');
  const [color, setColor] =useState('Red');
  const increment = () => {
    setQuantity(quantity+1);
  };
  const decrement = ()=>{
    setQuantity(quantity - 1);
    if(quantity <= 1){
      setQuantity(1);
    }
  };
  const history = useHistory();
  const handleAdd = (item)=>{
    const title = item.title;
    const price = item.price;
    const avatar = item.avatar;
    let qty = item.quantity;
    qty = quantity;
    const product = {title, price, avatar, qty, size, color};

    fetch('http://localhost:5000/cart', {
      method: 'POST',
      headers: {"Content-Type" : "application/json"},
      body: JSON.stringify(product)
    }).then(
      history.push('/cart')
    )
  }

  return (
    <div className="product-details bg-gray-100 py-20 h-full">
      {error && <h1 className="text-xl text-center">{error}</h1>}
      {product && (
        <div className="container lg:w-3/5">
          <div className="box md:flex border border-1 border-gray-300 shadow-md shadow-gray-400 rounded-md">
            <div className="pic  sm:mx-auto md:mx-0 w-2/3 md:w-2/5">
              <img src={product.avatar} alt="" />
            </div>
            <div className="info md:w-1/2 md:ml-10 w-full text-center">
              <h2 className="text-lg lg:text-xl tracking-wide font-bold my-6">{product.title}</h2>
              <p className="text-md lg:text-lg tracking-wider font-bold text-gray-700 ">$ {product.price} </p>
              <div className="sizes my-6">
                <label className="mr-6 text-lg ">Size</label>
                <select name="size" value={size} onChange={(e)=>setSize(e.target.value)} className="border border-2 border-gray-400 px-1 rounded-md">
                  <option >size S</option>
                  <option >size M</option>
                  <option >size L</option>
                  <option >size XL</option>
                </select>
              </div>
              <div className="colors my-6">
                <label className="mr-6 text-lg ">Color</label>
                <select name="color" value={color} onChange={(e)=>setColor(e.target.value)} className="border border-2 border-gray-400 px-1 rounded-md">
                  <option >Red</option>
                  <option >Blue</option>
                  <option >White</option>
                  <option >Black</option>
                  <option >Gray</option>
                </select>
              </div>
              <div className="quantity my-10 flex justify-center flex border border-1 border-gray-300 w-fit mx-auto">
                <p className="cursor-pointer hover:bg-blue-600 hover:text-white text-md font-bold px-4 py-2 transition duration-400"
                onClick={decrement}>-</p>
                <p className="cursor-pointer text-md font-bold px-4 py-2 border-x border-x-1 border-gray-300 bg-gray-100">{quantity}</p>
                <p className="cursor-pointer hover:bg-blue-600 hover:text-white text-md font-bold px-4 py-2 transition duration-400"
                onClick={increment}>+ </p>
              </div>
              <button
              onClick={()=> handleAdd(product)}
              className="add mb-10 w-fit mx-auto px-5 py-2 bg-blue-600 rounded-full text-white hover:bg-gray-900 hover:text-white">
                ADD TO CART
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default ProductDetails;