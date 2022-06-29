/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";

function Buttons() {
  return (
    <section className="pt-20 pb-10 lg:pt-[120px] lg:pb-20">
      <div className="container">
        <div className="-mx-4 flex flex-wrap">
          <div className="w-full px-4">
            <div className="mb-5 flex flex-wrap items-center justify-center space-x-5">
              <button className="inline-flex items-center bg-blue-500 justify-center rounded-full  py-4 px-10 text-center text-base font-normal text-white hover:bg-opacity-90 lg:px-8 xl:px-10">
                Get Started
              </button>
              <button className="inline-flex items-center bg-pink-300 justify-center rounded-md border  py-4 px-10 text-center text-base  transition hover:border hover:text-white lg:px-8 xl:px-10">
                View Details
              </button>
              <button className="inline-flex items-center justify-center bg-purple-400 py-4 px-10 text-center text-base font-normal text-white hover:bg-opacity-90 lg:px-8 xl:px-10">
                Get Started
              </button>
              <button className="btn rounded-full bg-red-400">
                Get Started
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Buttons;
