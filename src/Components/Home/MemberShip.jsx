import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const Home_Login = () => {
  const [input, setInput] = useState("");
  const [message, setMessage] = useState(null);
  const navigate = useNavigate();

  return (
    <div className="">
      <div className="flex justify-center mt-[15%] lg:mt-[12%] ">
        <div className="z-10  text-white">
          {/* text */}
          <div>
            <h1 className="mx-16 text-center text-[1.87rem] lg:text-[3.5rem] font-bold">
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
          {/* lg:flex lg:justify-center lg:items-center md:flex md:justify-center flex justify-center */}
          <div className="text-center  mt-8 lg:flex md:flex md:justify-center lg:justify-center">
            <form className="" action="">
              <input
                value={input}
                onChange={(e) => {
                  setInput(e.target.value);
                }}
                //
                className={` bg-gradient-to-l from-[#201e1e] to-110% w-[350px] lg:w-[400px] outline-none bg-transparent border-[1.5px] border-gray-300 px-4 py-3 lg:py-4 rounded-md text-normal ${
                  /^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})$/.test(
                    input
                  )
                    ? "border-[#688962] bg-transparent"
                    : "border-[white]"
                } `}
                type="email"
                required
                placeholder="Email address"
              />
              <div>
                <button onClick={() => {/^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})$/.test(input) && navigate("/signup")}} className="mt-2 mx-2 w-[160px] rounded-md text-2xl font-semibold px-3 py-2 md:py-3 lg:py-3 bg-[#C11119]">
                  Get Started
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home_Login;
