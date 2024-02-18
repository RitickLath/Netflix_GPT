import React from "react";

const Home_Login = () => {
  return (
    <div>
      <div className="flex justify-center mt-[25%] lg:mt-[22%]">
        <div className="z-10  text-white">
          {/* text */}
          <div>
            <h1 className="mx-24 text-center text-3xl lg:text-[3.5rem] font-bold">
              Unlimited movies, TV shows and more
            </h1>
            {/* h2 */}
            <h2 className="text-xl lg:text-2xl text-center mt-2 lg:mt-6 font-semibold">
              Watch anywhere. Cancel anytime.
            </h2>
            {/* h3 */}
            <h1 className="px-16 text-xl text-center mt-4 font-semibold">
              Ready to watch? Enter your email to create or restart your
              membership.
            </h1>
          </div>

          {/* input box */}
          <div className="lg:flex lg:justify-center lg:items-center md:flex md:justify-center flex justify-center mt-8">
            <form className="" action="">
              <input
                className="bg-gradient-to-l from-[#201e1e] to-110% w-[250px] lg:w-[400px] outline-none bg-transparent border-[1px] border-gray-300 px-4 py-3 lg:py-4 rounded-md text-normal"
                type="email"
                placeholder="Email address"
              />
            </form>

            <div>
              <button className="mx-2 w-[160px] rounded-md text-2xl font-semibold px-3 py-2 md:py-3 lg:py-3 bg-[#C11119]">
                Get Started
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home_Login;
