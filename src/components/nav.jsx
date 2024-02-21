import Button from "./Button";
import { SiIonic } from "react-icons/si";
import { IoMenu } from "react-icons/io5";
import { IoClose } from "react-icons/io5";
import { useState } from "react";

const Nav = () => {
    let Links = [
        { name: "Features", link: "/" },
        { name: "Pricing", link: "/" },
        { name: "Contact", link: "/" }
    ];
    let [open, setOpen] = useState(false);

    return (
        <div className="shadow-md w-full z-20 fixed top-0 left-0 ">
            <div className="md:flex items-center justify-between  bg-white py-4 md:px-10 px-7">
                <div className="font-bold text-2xl cursor-pointer flex item-center font-[Poppins] text-gray-800">
                    <span className="text-3xl text-indigo-600 mr-1 ">
                        <SiIonic />
                    </span>
                    BOOKMARK
                </div>

                <div onClick={() => setOpen(!open)}
                    className="text-3xl absolute right-8 top-6 cursor-pointer md:hidden">
                    {open ?
                        <IoClose/>
                        :
                        <IoMenu name={open ? "close" : "menu"} />
                    }
                </div>

                <ul
                    className={`md:flex md:items-center md:pb-0 pb-12 absolute md:static bg-white md:z-auto z-[-1] left-0 w-full md:w-auto pl-0 pl-9 transition-all-duration-500 ease-in ${open ? 'top-20 opacity-100' : 'top-[-490px]'} md:opacity-100 opacity-0`}
                >
                    {
                        Links.map((link) => (
                            <li key={link.name} className="md:ml-8 text-xl md:my-0 my-7 ">
                                <a href={link.link} className="text-gray-800 hover:text-gray-400 duration-500">{link.name}</a>
                            </li>
                        ))
                    }
                    <Button>
                        Log in
                    </Button>

                </ul>

            </div>

        </div>
    )
}

export default Nav
