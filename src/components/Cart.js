import FetchData from "./FetchData";

const Cart = () => {
  const {data,error} = FetchData('http://localhost:5000/cart');
  
  const handleDelete = (id,e)=> {
    //remove item from cart api
    fetch('http://localhost:5000/cart/'+id,{
      method:"DELETE",
    });
    //remove item from cart screen
    e.target.parentElement.parentElement.classList.add('hidden');
  }

  return (
    <div className="cart">
      {!data && (<h1>{error}</h1>)}
      <div className="parent bg-gray-200 py-14">
        <div className="container md:flex flex-wrap justify-around">
          {data == false && <h1>Your Cart Is Empty</h1>}
          {data &&(data.map((ele)=>(
            <div key={ele.id}  className="box text-center p-3 my-6 md:mx-2 sm:mx-auto sm:w-9/12  md:w-2/5 lg:w-1/3 xl:w-1/4 box-border border border-2 border-gray-400 my-20 rounded-md">
              <div className="text-center">
                <img src={ele.avatar} alt="product-img" className="w-32 h-36 mx-auto" />
                <h2 className="tracking-wider text-lg font-bold my-8 mx-4">{ele.title}</h2>
              </div>
              <div className="flex flex-wrap justify-around">
                <h1 className="tracking-wider text-md my-8 mx-2"><strong>Price: </strong>${ele.price}</h1>
                <h1 className="tracking-wider text-md my-8 mx-2"><strong>Quantity: </strong> {ele.qty}</h1>
                <h1 className="tracking-wider text-md my-8 mx-2"><strong>Size: </strong>{ele.size}</h1>
                <h1 className="tracking-wider text-md my-8 mx-2"><strong>Color: </strong>{ele.color}</h1>
                <h1 className="tracking-wider text-md my-8 mx-2"><strong>Total: </strong>${ele.qty * ele.price}</h1>
                <button onClick={(e) => handleDelete(ele.id,e)} className="tracking-wider text-md my-8 mx-4 px-3 py-2 bg-blue-500 hover:bg-blue-700 border border-2 rounded-md text-white">Delete Item</button>
              </div>
            </div>
          )))}
          {/* popup */}
          {/* <div className="deletedDiv hidden fixed top-1/4 right-1/4 w-1/2 h-1/2 z-1 bg-slate-600/75 flex items-center justify-around">
            <div className="text-center text-xl p-6 bg-white rounded-md">
              <h1>YOUR ITEM HAS BEEN SUCCESSFULLY DELETED </h1>
              <h1>BACK TO CART <Link to="/cart" className="px-3 bg-blue-400 text-white rounded-md">CART</Link></h1>
              <h1>GO TO HOME </h1>
            </div>
          </div> */}
        </div>
      </div>
    </div>
  );
}

export default Cart;