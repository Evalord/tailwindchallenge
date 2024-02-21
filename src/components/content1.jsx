import IllustrationHero from "../../images/IllustrationHero.svg"
import Button from "./Button";

const Content1 = () => {

    return (
        <>
            <div className=" flex flex-wrap-reverse py-20 ">
                <div className="w-full lg:w-1/2 flex flex-col justify-center">
                    <div className="text-center mt-10 ">
                        <h3 className="mt-2 text-3xl font-bold tracking-tight text-gray-800 sm:text-3xl"> A Simple Bookmark Manager</h3>
                        <div className="mt-6 text-xl leading-8 text-gray-700 ">
                            <p>
                                A clean and simple interface to organize your favourite websites.
                                Open a new browser tab and see your sites load instantly.
                                Try it for free.
                            </p>
                        </div>
                    </div>
                    <div className=" lg:mt-10 flex justify-center space-x-4">
                        <Button>
                            Get it on Chrome
                        </Button>
                        <Button>
                            Get it on Firefox Features
                        </Button>
                    </div>
                </div>
                <div className="w-full lg:w-1/2 lg:relative">
                    <div className="">
                        <img src={IllustrationHero} className=" lg:absolute z-10" />
                    </div>
                    <div className="-mt-40 lg:absolute w-full w-1/2 h-40 bg-indigo-600 right-0 -bottom-40 rounded-l-full " />
                </div>
            </div>

        </>
    )
}

export default Content1
