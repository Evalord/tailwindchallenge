import Accordion from "./Accodion"
import Button from "./Button"

const Content4 = () => {

    return (
        <>
            <div className="text-center ">
                <h4 className="mb-5 text-2xl font-bold tracking-tight text-gray-800 sm:text-2xl">Frequently Asked Questions</h4>
                <p>Here are some of our FAQs. If you have any other questions<br />
                    you’d like answered please feel free to email us.</p>
            </div>
            <div className="w-full">
            <Accordion/>
            </div>
            <div className="flex justify-center my-10">
                <Button>More Info</Button>
            </div>
        </>
    )


}
export default Content4