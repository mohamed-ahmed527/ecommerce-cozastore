const ContactPage = () => {
  return (
    <div className="contact-page">
      <div className="contact-header py-24 text-center text-white">
        <h1 className="text-3xl lg:text-4xl font-bold tracking-wider">contact</h1>
      </div>
      <div className="container py-20">
        <div className="box mx-auto px-6 py-6 bg-gray-100 hover:bg-gray-200 hover:translate-x-2 duration-300 rounded-md">
          <span><i class="fi fi-bs-marker"></i></span>
          <span className="text-lg tracking-wider ml-4">Address</span>
          <h1 className="my-6 text-lg tracking-wider font-bold text-gray-900">Coza Store Center 8th floor, 379 Hudson St, New York, NY 10018 US</h1>
        </div>
        <div className="box mx-auto px-6 py-6 bg-gray-100 hover:bg-gray-200 hover:translate-x-2 duration-300 rounded-md">
          <span><i class="fi fi-rr-phone-call"></i></span>
          <span className="text-lg tracking-wider ml-4">Let's Talk</span>
          <h1 className="my-6 text-lg tracking-wider font-bold text-gray-900">+14201795394655</h1>
        </div>
        <div className="box mx-auto px-6 py-6 bg-gray-100 hover:bg-gray-200 hover:translate-x-2 duration-300 rounded-md">
          <span><i class="fi fi-rr-envelope"></i></span>
          <span className="text-lg tracking-wider ml-4">Sale Support</span>
          <h1 className="my-6 text-lg tracking-wider font-bold text-gray-900">+Contact@example.com</h1>
        </div>
      </div>
    </div>

  );
}

export default ContactPage;