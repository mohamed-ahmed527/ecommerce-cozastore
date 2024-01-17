import blogpic1 from "./../assets/blog/blog1.webp";
import blogpic2 from "./../assets/blog/blog2.webp";
import blogpic3 from "./../assets/blog/blog3.webp";

const BlogPage = () => {
  const blogs = [
    {
      url:blogpic1,
      title: "8 Inspiring Ways to Wear Dresses in the Winter",
      text:"Praesent vel mi bibendum, finibus leo ac, condimentum arcu. Pellentesque sem ex, tristique sit amet suscipit in, mattis imperdiet enim. Integer tempus justo nec velit fringilla, eget eleifend neque blandit. Sed tempor magna sed congue auctor. Mauris eu turpis eget tortor ultricies elementum. Phasellus vel placerat orci, a venenatis justo. Phasellus faucibus venenatis nisl vitae vestibulum. Praesent id nibh arcu. Vivamus sagittis accumsan felis, quis vulputate"
    },
    {
      url:blogpic2,
      title: "The Great Big List of Men’s Gifts for the Holidays",
      text:"Praesent vel mi bibendum, finibus leo ac, condimentum arcu. Pellentesque sem ex, tristique sit amet suscipit in, mattis imperdiet enim. Integer tempus justo nec velit fringilla, eget eleifend neque blandit. Sed tempor magna sed congue auctor. Mauris eu turpis eget tortor ultricies elementum. Phasellus vel placerat orci, a venenatis justo. Phasellus faucibus venenatis nisl vitae vestibulum. Praesent id nibh arcu. Vivamus sagittis accumsan felis, quis vulputate"
    },
    {
      url:blogpic3,
      title: "5 Winter-to-Spring Fashion Trends to Try Now",
      text:"Praesent vel mi bibendum, finibus leo ac, condimentum arcu. Pellentesque sem ex, tristique sit amet suscipit in, mattis imperdiet enim. Integer tempus justo nec velit fringilla, eget eleifend neque blandit. Sed tempor magna sed congue auctor. Mauris eu turpis eget tortor ultricies elementum. Phasellus vel placerat orci, a venenatis justo. Phasellus faucibus venenatis nisl vitae vestibulum. Praesent id nibh arcu. Vivamus sagittis accumsan felis, quis vulputate"
    },
    {
      url:blogpic1,
      title: "8 Inspiring Ways to Wear Dresses in the Winter",
      text:"Praesent vel mi bibendum, finibus leo ac, condimentum arcu. Pellentesque sem ex, tristique sit amet suscipit in, mattis imperdiet enim. Integer tempus justo nec velit fringilla, eget eleifend neque blandit. Sed tempor magna sed congue auctor. Mauris eu turpis eget tortor ultricies elementum. Phasellus vel placerat orci, a venenatis justo. Phasellus faucibus venenatis nisl vitae vestibulum. Praesent id nibh arcu. Vivamus sagittis accumsan felis, quis vulputate"
    }
  ]
  return (
    <div className="blog-page">
        <div className="blog-header py-24 text-center text-white">
          <h1 className="text-3xl lg:text-4xl font-bold tracking-wider">Blog</h1>
        </div>
      <div className="container ">
        <div className="parent flex flex-wrap justify-around my-28">
          {blogs.map((ele,index)=>(
            <div className="blog w-full md:w-1/2 tranform scale-95 my-10" key={index}>
              <div className="pic">
                <img src={ele.url} alt="blog img" />
              </div>
              <h1 className="my-6 text-2xl font-bold tracking-wider text-slate-950">{ele.title}</h1>
              <p className="text-md tracking-wide text-gray-600">{ele.text} </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
 
export default BlogPage;