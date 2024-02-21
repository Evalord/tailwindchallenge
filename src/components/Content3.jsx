import Button from "./Button"
import LogoChrome from "../../images/LogoChrome.svg"
import LogoFirefox from "../../images/LogoFirefox.svg"
import LogoOpera from "../../images/LogoOpera.svg"
const Content3 = () => {

  const posts = [
    {
      title: " Add to Chrome ",
      desc: "Minimum version 62",
      img: LogoChrome,
      // authorLogo: "https://api.uifaces.co/our-content/donated/xZ4wg2Xj.jpg",
      // authorName: "Sidi dev",
      // date: "Jan 4 2022",
      // href: "javascript:void(0)"
    },
    {
      title: " Add to Firefox",
      desc: "Minimum version 55",
      img: LogoFirefox,
      // authorLogo: "https://api.uifaces.co/our-content/donated/FJkauyEa.jpg",
      // authorName: "Micheal",
      // date: "Jan 4 2022",
      // href: "javascript:void(0)"
    },
    {
      title: "  Add to Opera",
      desc: "Minimum version 46",
      img: LogoOpera,

    },

  ]

  return (
    <div className="text-center py-16">
      <div>
        <h4 className="mt-2 text-2xl font-bold tracking-tight text-gray-700 sm:text-2xl"> Download the extension </h4>
        <p className="mt-6 text-xl leading-8 text-gray-700">
          We’ve got more browsers in the pipeline.<br/>
          Please do let us know if you’ve got a favourite you’d like us to prioritize.
        </p>
      </div>


      <div className="mx-auto lg:w-3/4 mt-12 grid gap-2 sm:grid-cols-2 lg:grid-cols-3 py-10">
        {
          posts.map((items, key) => (
            <div key={key}>
              <article className="max-w-md mx-auto mt-4 shadow-lg border rounded-md duration-300 hover:shadow-sm">
                <a href={items.href}>
                  <div className="h-58 mt-5 flex justify-center ">
                    <img src={items.img} loading="lazy" width={100} style={{ height: 90 }} />
                  </div>
                  <div className="pt-3 ml-4 mr-2 mb-3">
                    <h3 className="text-xl text-gray-900">
                      {items.title}
                    </h3>
                    <p className="text-gray-400 text-sm mt-1">{items.desc}</p>
                  </div>
                </a>
                <div className="mx-12 mb-2">
                  <button className="p-3 font-medium text-sm  text-center text-white bg-indigo-600 hover:bg-indigo-500 active:bg-indigo-700 active:shadow-none rounded-lg shadow w-full">
                    Add & Install Extension
                  </button>
                </div>
              </article>
            </div>
          ))
        }
      </div>
    </div>
  )
}

export default Content3
