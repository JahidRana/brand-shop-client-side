import {  PiArrowFatLineLeftFill, PiArrowFatLineRightFill } from "react-icons/pi";
import choose1 from '../../assets/choose1.webp'
import choose2 from '../../assets/choose2.webp'
const WhyChoose = () => {
    return (
        <div className="pt-20 px-8">
            <h2 className="text-5xl font-extrabold text-center mb-20">Why Choose Us!!!</h2>
            <div className="grid grid-cols-1 md:grid-cols-3">
                <div className="pr-4">
                    <div className="mb-4">
                        <div className="flex items-center gap-2">
                            <PiArrowFatLineRightFill></PiArrowFatLineRightFill>
                            <h3 className="text-2xl font-bold underline">Expertise You Can Trust</h3>
                        </div>
                        <p className="text-justify ">Our team of seasoned tech enthusiasts and professionals bring years of expertise in the technology and electronics industry. </p>
                    </div>
                    <div className="mb-4">
                        <div className="flex items-center gap-2">
                            <PiArrowFatLineRightFill></PiArrowFatLineRightFill>
                            <h3 className="text-2xl font-bold underline">Authorized Dealer of Premium Brands</h3>
                        </div>
                        <p className="text-justify">GadgetGrove website is an authorized dealer of leading technology brands like Apple, Samsung, Realme, etc., ensuring customers of genuine and authentic products.</p>
                    </div>
                    <div className="mb-4">
                        <div className="flex items-center gap-2">
                            <PiArrowFatLineRightFill></PiArrowFatLineRightFill>
                            <h3 className="text-2xl font-bold underline">Latest Product Releases</h3>
                        </div>
                        <p className="text-justify">Showcase that website stays updated with the latest product releases from major tech brands, allowing you to be among the first to access cutting-edge gadgets and electronics.</p>
                    </div>
                </div>
                <div className="order-3 md:order-none">
                    <img  className="h-40 mx-auto w-3/4 mb-2" src={choose2} alt="" />
                    <img className="h-40 mx-auto w-3/4" src={choose1} alt="" />
                </div>
                <div>
                <div className="pr-4 text-right">
                    <div className="mb-4">
                        <div className="flex md:justify-end items-center gap-2">
                            <PiArrowFatLineRightFill className="md:hidden"></PiArrowFatLineRightFill>
                            <h3 className=" text-2xl font-bold underline">Fast and Reliable Shipping</h3>
                            <PiArrowFatLineLeftFill className="hidden md:block"></PiArrowFatLineLeftFill>
                        </div>
                        <p className="text-justify ">Guaranteed fast and reliable shipping services, ensuring that customers receive their products promptly and in excellent condition, enhancing their overall shopping experience.</p>
                    </div>
                    <div className="mb-4">
                        <div className="flex md:justify-end items-center gap-2">
                            <PiArrowFatLineRightFill className="md:hidden"></PiArrowFatLineRightFill>
                            <h3 className="text-2xl font-bold underline">Dedicated Customer Support</h3>
                            <PiArrowFatLineLeftFill className="hidden md:block"></PiArrowFatLineLeftFill>
                        </div>
                        <p className="text-justify">Our dedicated customer support team that is knowledgeable about the products and ready to assist customers with any queries or concerns you might have.</p>
                    </div>
                    <div className="mb-4">
                        <div className="flex md:justify-end items-center gap-2">
                        <PiArrowFatLineRightFill className="md:hidden"></PiArrowFatLineRightFill>
                            <h3 className="text-2xl font-bold underline">Secure Online Transactions:</h3>
                            <PiArrowFatLineLeftFill className="hidden md:block"></PiArrowFatLineLeftFill>
                        </div>
                        <p className="text-justify">Assure customers of secure online transactions through encrypted payment gateways, providing a safe and trustworthy environment for their purchases.</p>
                    </div>
                </div>
                </div>
            </div>
        </div>
    );
};

export default WhyChoose;