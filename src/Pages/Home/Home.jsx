import Banner from "../../Components/Banner/Banner";
import { useLoaderData } from "react-router-dom";
import BrandCard from "../../Components/BrandCard/BrandCard";
import FAQ from '../../Components/FAQ/FAQ';
import WhyChoose from '../../Components/WhyChoose/WhyChoose';


const Home = () => {
    const brands= useLoaderData();
    return (
        <div className='max-w-[1440px] mx-auto mt-10 dark:bg-black'>
            <Banner></Banner>
            <div className="px-10 md:px-20 lg:px-32 bg-gray-200 bg-no-repeat bg-cover dark:bg-black">
                <h2 className="text-3xl md:text-5xl lg:text-6xl font-extrabold text-orange-500 text-center pt-10 mb-10">Our Trusted Brands</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 ">
                    {
                        brands?.map(brand=><BrandCard key={brand.key} brand={brand}></BrandCard>)
                    }
                </div>
            </div>
            <FAQ></FAQ>
            <WhyChoose></WhyChoose>
        </div>
    );
};

export default Home;