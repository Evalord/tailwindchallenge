import * as Tabs from "@radix-ui/react-tabs";
import IllustrationFeaturesTab1 from "../../images/IllustrationFeaturesTab1.svg"
import Button from "./Button";
const Content2 = () => {
  const tabIterms = [
    "Simple Bookmarking",
    "Speedy Searching",
    "Easy Sharing ",
  ];

  return (
    <>
      <div className="mt-10 md:mt-60 md:mb-40">
        <h4 className="text-center mt-2 text-2xl font-bold tracking-tight text-gray-800 sm:text-2xl"> Features </h4>

        <div className="text-center text-xl leading-8">
          <p>
            Our aim is to make it quick and easy for you to access your favourite websites.<br />
            Your bookmarks sync between your devices so you can access them on the go.
          </p>
        </div>

        <div className="mt-10 relative">
          <Tabs.Root className="max-w-screen-xl mx-auto "
            defaultValue="Overview" >
            <Tabs.List className="flex flex-col md:flex-row justify-center  gap-x-3 overflow-x-auto text-sm"
              arial-label="manage your account0">
              {tabIterms.map((item, idx) => (
                <Tabs.Trigger
                  key={idx}
                  className="group outline-none py-1.5 border-b-4 border-white text-gray-500 data-[state=active]:border-indigo-600 data-[state=active]:text-indigo-600"
                  value={item}
                >
                  <div className=" py-1.5 px-3 rounded-lg duration-150 group-hover:text-indigo-600 group-hover:bg-gray-50 group-active:bg-gray-100 font-medium">
                    {item}
                  </div>
                </Tabs.Trigger>
              ))}
            </Tabs.List>

            {tabIterms.map((item, idx) => (
              <div className="">
                <Tabs.Content key={idx} className="py-16 " value={item}>
                  <div className="lg:flex">

                    <div className="md:mt-48 w-full lg:w-1/2">
                      <div className="" >
                        <img src={IllustrationFeaturesTab1} className="lg:absolute lg:-mt-48  z-10" />
                      </div>
                      <div className="">
                        <div className="-mt-20 w-full lg:absolute lg:-mb-24 max-w-80 h-40 bg-indigo-600  bottom-0 left-0 rounded-r-full" />
                      </div>
                    </div>

                    <div className="content-center place-self-center mx-12 lg:w-1/2">
                      <h4 className="text-center mt-10 text-2xl font-bold tracking-tight text-gray-800 sm:text-2xl">Bookmark in one click</h4>
                      <p className="text-center leading-5">
                        Organize your bookmarks however you like.
                        Our simple drag-and-drop interface gives you complete
                        control over how you manage your favourite sites.

                        This is <b>{item}</b> Tab
                      </p>
                      <div className="flex justify-center mt-10" >
                        <Button>More Info </Button>
                      </div>
                    </div>
                  </div>

                </Tabs.Content>
              </div>
            ))}
          </Tabs.Root>


        </div>
      </div>
    </>
  )
}

export default Content2
