import bannerBG from '../../assets/bannerBG.jpg'
const Banner = () => {
    return (
        <div>
            <div className='hero min-h-screen' style={{backgroundImage: `url(${bannerBG})`}}>
            <div className="hero-overlay bg-opacity-30 bg-yellow-700"></div>
                <div className="flex place-items-center text-center text-neutral-content">
                    <div className="px-2 lg:px-0 lg:w-3/4 mx-auto">
                        <h1 className="mb-10 text-2xl md:text-4xl lg:text-6xl bg-gradient-to-r from-blue-500 via-purple-500 to-indigo-500 text-transparent bg-clip-text font-bold">Where Ideas Become Gadgets: <br /> <span className='bg-gradient-to-r from-blue-500 via-purple-500 to-indigo-500 text-transparent bg-clip-text'>Explore the Future</span></h1>
                        <p className="mb-5 text-gray-400 text-lg md:text-xl font-semibold">
                        Embark on a journey into the future, exploring innovative technologies that redefine possibilities. Join us in shaping tomorrow&apos;s world, one gadget at a time!
                        </p>
                        <button className="btn btn-primary bg-purple-600 hover:bg-purple-500">Shop Now</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;