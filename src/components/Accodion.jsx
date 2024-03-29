import React, { useState } from "react";
import { TECollapse } from "tw-elements-react";

export default function Accordion() {
  const [activeElement, setActiveElement] = useState("");

  const handleClick = (value) => {
    if (value === activeElement) {
      setActiveElement("");
    } else {
      setActiveElement(value);
    }
  };
  return (
    <div className="w-3/4 mx-auto">
      <div className="lg:grid mt-10">
        <div id="accordionExample">
          <div className="rounded-t-lg border border-neutral-200 bg-white dark:border-neutral-600 dark:bg-neutral-800">
            <h2 className="mb-0" id="headingOne">
              <button
                className={`${activeElement === "element1" &&
                  `text-primary [box-shadow:inset_0_-1px_0_rgba(229,231,235)] dark:!text-primary-400 dark:[box-shadow:inset_0_-1px_0_rgba(75,85,99)]`
                  } group relative flex w-full items-center rounded-t-[15px] border-0 bg-white px-5 py-4 text-left text-base text-neutral-800 transition [overflow-anchor:none] hover:z-[2] focus:z-[3] focus:outline-none dark:bg-neutral-800 dark:text-white`}
                type="button"
                onClick={() => handleClick("element1")}
                aria-expanded="true"
                aria-controls="collapseOne"
              >
                What is Bookmark?
                <span
                  className={`${activeElement === "element1"
                      ? `rotate-[-180deg] -mr-1`
                      : `rotate-0 fill-[#212529]  dark:fill-white`
                    } ml-auto h-5 w-5 shrink-0 fill-[#336dec] transition-transform duration-200 ease-in-out motion-reduce:transition-none dark:fill-blue-300`}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="h-6 w-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                    />
                  </svg>
                </span>
              </button>
            </h2>
            <TECollapse
              show={activeElement === "element1"}
              className="!mt-0 !rounded-b-none !shadow-none"
            >
              <div className="px-5 py-4">
                <strong> What is Bookmark? </strong>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce tincidunt justo eget ultricies fringilla. Phasellus blandit ipsum quis quam ornare mattis.
              </div>
            </TECollapse>
          </div>
        </div>
        <div className="border border-t-0 border-neutral-200 bg-white dark:border-neutral-600 dark:bg-neutral-800">
          <h2 className="mb-0" id="headingTwo">
            <button
              className={`${activeElement === "element2"
                  ? `text-primary [box-shadow:inset_0_-1px_0_rgba(229,231,235)] dark:!text-primary-400 dark:[box-shadow:inset_0_-1px_0_rgba(75,85,99)]`
                  : `transition-none rounded-b-[15px]`
                } group relative flex w-full items-center rounded-t-[15px] border-0 bg-white px-5 py-4 text-left text-base text-neutral-800 transition [overflow-anchor:none] hover:z-[2] focus:z-[3] focus:outline-none dark:bg-neutral-800 dark:text-white`}
              type="button"
              onClick={() => handleClick("element2")}
              aria-expanded="true"
              aria-controls="collapseOne"
            >
              How can I request a new browser?
              <span
                className={`${activeElement === "element2"
                    ? `rotate-[-180deg] -mr-1`
                    : `rotate-0 fill-[#212529] dark:fill-white`
                  } ml-auto h-5 w-5 shrink-0 fill-[#336dec] transition-transform duration-200 ease-in-out motion-reduce:transition-none dark:fill-blue-300`}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="h-6 w-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                  />
                </svg>
              </span>
            </button>
          </h2>
          <TECollapse
            show={activeElement === "element2"}
            className="!mt-0 !rounded-b-none !shadow-none"
          >
            <div className="px-5 py-4">
              <strong>How can I request a new browser?</strong>
              Vivamus luctus eros aliquet convallis ultricies. Mauris augue massa, ultricies non ligula. Suspendisse imperdiet. Vivamus luctus eros aliquet convallis ultricies. Mauris augue massa, ultricies non ligula. Suspendisse imperdie tVivamus luctus eros aliquet convallis ultricies. Mauris augue massa, ultricies non ligula. Suspendisse imperdiet.
            </div>
          </TECollapse>
        </div>
        <div className="rounded-t-0 border border-t-0 border-neutral-200 bg-white dark:border-neutral-600 dark:bg-neutral-800">
          <h2 className="accordion-header mb-0" id="headingThree">
            <button
              className={`${activeElement === "element3"
                  ? `text-primary [box-shadow:inset_0_-1px_0_rgba(229,231,235)] dark:!text-primary-400 dark:[box-shadow:inset_0_-1px_0_rgba(75,85,99)]`
                  : `transition-none rounded-b-[15px]`
                } group relative flex w-full items-center rounded-t-[15px] border-0 bg-white px-5 py-4 text-left text-base text-neutral-800 transition [overflow-anchor:none] hover:z-[2] focus:z-[3] focus:outline-none dark:bg-neutral-800 dark:text-white`}
              type="button"
              onClick={() => handleClick("element3")}
              aria-expanded="true"
              aria-controls="collapseOne"
            >
              Is there a mobile app?
              <span
                className={`${activeElement === "element3"
                    ? `rotate-[-180deg] -mr-1`
                    : `rotate-0 fill-[#212529] dark:fill-white`
                  } ml-auto h-5 w-5 shrink-0 fill-[#336dec] transition-transform duration-200 ease-in-out motion-reduce:transition-none dark:fill-blue-300`}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="h-6 w-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                  />
                </svg>
              </span>
            </button>
          </h2>
          <TECollapse
            show={activeElement === "element3"}
            className="!mt-0 !shadow-none"
          >
            <div className="px-5 py-4">
              <strong>Is there a mobile app?</strong>
              Sed consectetur quam id neque fermentum accumsan. Praesent luctus vestibulum dolor, ut condimentum urna vulputate eget. Cras in ligula quis est pharetra mattis sit amet pharetra purus. Sed sollicitudin ex et ultricies bibendum.
            </div>
          </TECollapse>
        </div>
        <div className="rounded-b-lg border border-t-0 border-neutral-200 bg-white dark:border-neutral-600 dark:bg-neutral-800">
          <h2 className="accordion-header mb-0" id="headingThree">
            <button
              className={`${activeElement === "element4"
                  ? `text-primary [box-shadow:inset_0_-1px_0_rgba(229,231,235)] dark:!text-primary-400 dark:[box-shadow:inset_0_-1px_0_rgba(75,85,99)]`
                  : `transition-none rounded-b-[15px]`
                } group relative flex w-full items-center rounded-t-[15px] border-0 bg-white px-5 py-4 text-left text-base text-neutral-800 transition [overflow-anchor:none] hover:z-[2] focus:z-[3] focus:outline-none dark:bg-neutral-800 dark:text-white`}
              type="button"
              onClick={() => handleClick("element4")}
              aria-expanded="true"
              aria-controls="collapseOne"
            >
              What about other Chromium browsers?
              <span
                className={`${activeElement === "element4"
                    ? `rotate-[-180deg] -mr-1`
                    : `rotate-0 fill-[#212529] dark:fill-white`
                  } ml-auto h-5 w-5 shrink-0 fill-[#336dec] transition-transform duration-200 ease-in-out motion-reduce:transition-none dark:fill-blue-300`}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="h-6 w-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                  />
                </svg>
              </span>
            </button>
          </h2>
          <TECollapse
            show={activeElement === "element4"}
            className="!mt-0 !shadow-none"
          >
            <div className="px-5 py-4">
              <strong>  What about other Chromium browsers?</strong>
              Integer condimentum ipsum id imperdiet finibus. Vivamus in placerat mi, at euismod dui. Aliquam vitae neque eget nisl gravida pellentesque non ut velit.
            </div>
          </TECollapse>
        </div>

      </div>
    </div>
  );
}