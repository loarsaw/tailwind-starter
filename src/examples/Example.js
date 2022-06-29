/* eslint-disable jsx-a11y/anchor-is-valid */
/* This example requires Tailwind CSS v2.0+ */
export default function Example() {
    return (
      <div className="bg-black-50">
        <div className="w-full mx-auto py-12 px-4 sm:px-6 lg:flex lg:items-center lg:justify-between">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            <span className="block">Tailwindcss</span>
            <span className="block text-indigo-600">Should you use tailwindcss.</span>
          </h2>
          <div className="mt-8 flex lg:mt-0 lg:flex-shrink-0">
            <div className=" rounded-md shadow">
              <a
                href="#"
                className=" items-center justify-center px-5 py-3 border  text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700"
              >
                Get started
              </a>
            </div>
            <div className="ml-3  rounded-md shadow">
              <a
                href="#"
                className=" items-center justify-center px-5 py-3 border text-base font-medium rounded-md text-indigo-600 bg-white hover:bg-indigo-50"
              >
                Learn more
              </a>
            </div>
          </div>
        </div>
      </div>
    )
  }
  