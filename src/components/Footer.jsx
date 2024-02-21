import IconFacebook from "../../images/IconFacebook.svg"
import { SiIonic } from "react-icons/si";
import IconTwitter from "../../images/IconTwitter.svg"
const Footer = () => {
    let Links = [
        { name: "Features", link: "/" },
        { name: "Pricing", link: "/" },
        { name: "Contact", link: "/" }
    ];

    return (
        <footer className="text-gray-500 text-center mt-10 py-5 w-full mx-auto md:px-8 ">
            <div>
                <div >
                    <p> 35,000+ already joined </p>
                </div>

                <div className=" mt-2 text-2xl font-bold tracking-tight text-gray-800 sm:text-2xl">
                    <h4> Stay up-to-date with what we’re doing </h4>
                </div>

                <div className="md:flex md:space-x-2 justify-center p-1  ">
                    <div className="items-center rounded-md p-0.5 ">
                        <input
                            type="email"
                            placeholder="Enter your email"
                            className="w-full md:w-auto bg-gray-300 p-2.5 outline-none"
                        />
                    </div>
                    <button
                        className="w-full  md:w-auto p-2.5 rounded-md text-white bg-red-600 outline-none shadow-md focus:shadow-none"
                    >
                        Contact Us
                    </button>
                </div>
            </div>

            <div className=" mt-8 bg-slate-800 py-6 items-center justify-between lg:flex">
                <div className="md:flex items-center justify-between py-4 md:px-10 px-7">
                    <div className="justify-center text-white font-bold text-2xl cursor-pointer flex item-center font-[Poppins] text-gray-800">
                        <span className="text-3xl text-indigo-600 mr-2">
                            <SiIonic />
                        </span>
                        BOOKMARK
                    </div>
                    <ul className="md:flex">
                        {
                            Links.map((link) => (
                                <li key={link.name} className="md:ml-8 text-xl md:my-0 my-7 ">
                                    <a href={link.link} className="text-white  text-gray-800 hover:text-gray-400 duration-500">{link.name}</a>
                                </li>
                            ))
                        }
                    </ul>

                </div>
                <div className="mt-6 mx-4 grid place-content-center">
                    <ul className="flex items-center space-x-4">
                        <li className="w-10 h-10 border rounded-full flex items-center justify-center">
                            <img src={IconFacebook} alt="facebook" />
                        </li>
                        <li className="w-10 h-10 border rounded-full flex items-center justify-center">
                            <img src={IconTwitter} alt="twitter" />
                        </li>
                    </ul>
                </div>
            </div>

        </footer>
    )


}
export default Footer