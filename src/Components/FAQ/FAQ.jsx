import { Link } from "react-router-dom";

const FAQ = () => {
    return (
        <div className="pt-20 px-6 md:px-10lg :px-20 dark:text-black">
            <h2 className="text-5xl font-extrabold text-center mb-4 dark:text-white">FAQ on <span className="text-orange-500">Gadgets</span></h2>
            <p className="text-center text-lg mb-12 text-cyan-950 dark:text-white"><small>(Frequently asked questions)</small></p>
            <div className="collapse collapse-arrow bg-base-200 mb-4">
                <input type="radio" name="my-accordion-2" checked="checked" /> 
                <div className="collapse-title text-xl font-medium">
                    How to Extend Battery Life?
                </div>
                <div className="collapse-content"> 
                    <p>Learn practical tips to maximize your smartphone&apos;s battery life, including adjusting settings, managing apps, and optimizing usage.</p>
                </div>
            </div>
            <div className="collapse collapse-arrow bg-base-200 mb-4">
                <input type="radio" name="my-accordion-2" /> 
                <div className="collapse-title text-xl font-medium">
                    How to Master in Smartphone Photography
                </div>
                <div className="collapse-content"> 
                    <p>Improve your mobile photography skills with techniques such as composition, lighting, and editing apps. Includes before-and-after photo examples.</p>
                </div>
            </div>
            <div className="collapse collapse-arrow bg-base-200 mb-4">
                <input type="radio" name="my-accordion-2" /> 
                <div className="collapse-title text-xl font-medium">
                    How to implement home Wi-Fi Optimization?
                </div>
                <div className="collapse-content"> 
                    <p>Learn how to optimize your home Wi-Fi network for maximum speed and coverage. Tips include ideal router placement, channel selection, and security settings.</p>
                </div>
            </div>
            <div className="collapse collapse-arrow bg-base-200 mb-4">
                <input type="radio" name="my-accordion-2" /> 
                <div className="collapse-title text-xl font-medium">
                    Windows shortcut key?
                </div>
                <div className="collapse-content"> 
                    <p><Link>See the full <span className="text-blue-800">documentation</span></Link>.</p>
                </div>
            </div>
        </div>
    );
};

export default FAQ;
// faq added