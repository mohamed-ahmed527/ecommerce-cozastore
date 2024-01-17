import aboutpic from './../assets/about/about1.webp';

const AboutPage = ()=> {
  return(
    <div className="about-page">
      <div className="about-header py-24 text-center text-white">
        <h1 className="text-3xl lg:text-4xl font-bold tracking-wider">About</h1>
      </div>
      <div className="container ">
        <div className="box md:flex justify-between py-20">
          <div className="about-text md:w-2/3 w-full pl-2 pr-6 mb-14">
            <h1 className='text-3xl font-bold mb-6 tracking-wider'>Our Story</h1>
            <p className="my-6 text-md tracking-wide text-gray-700">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris consequat consequat enim, non auctor massa ultrices non. Morbi sed odio massa. Quisque at vehicula tellus, sed tincidunt augue. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Maecenas varius egestas diam, eu sodales metus scelerisque congue. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Maecenas gravida justo eu arcu egestas convallis. Nullam eu erat bibendum, tempus ipsum eget, dictum enim. Donec non neque ut enim dapibus tincidunt vitae nec augue. Suspendisse potenti. Proin ut est diam. Donec condimentum euismod tortor, eget facilisis diam faucibus et. Morbi a tempor elit.</p>
            <p className="my-6 text-md tracking-wide text-gray-700">Donec gravida lorem elit, quis condimentum ex semper sit amet. Fusce eget ligula magna. Aliquam aliquam imperdiet sodales. Ut fringilla turpis in vehicula vehicula. Pellentesque congue ac orci ut gravida. Aliquam erat volutpat. Donec iaculis lectus a arcu facilisis, eu sodales lectus sagittis. Etiam pellentesque, magna vel dictum rutrum, neque justo eleifend elit, vel tincidunt erat arcu ut sem. Sed rutrum, turpis ut commodo efficitur, quam velit convallis ipsum, et maximus enim ligula ac ligula.</p>
          </div>
          <div className="pic w-9/12 mx-auto md:w-1/3 lg:w-1/4 w-1/2 h-fit mt-6 relative z-20">
            <img src={aboutpic} alt="about img" />
            <span className='absolute top-5 -left-5 w-full h-full borde border-2 -z-10 border-gray-400'></span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AboutPage;