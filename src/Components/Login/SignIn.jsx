import React, { useState, useRef } from "react";
import { Link } from "react-router-dom";
import { validate } from "../utils/Validation";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { app } from "../utils/firebase";

const auth = getAuth(app);

const SignIn = () => {
  const [learnMore, setLearnMore] = useState(false);

  const email = useRef();
  const password = useRef();
  const [valid, setvalid] = useState(null);

  const validateEntry = () => {
    validate(email.current.value, password.current.value);
    setvalid(validate(email.current.value, password.current.value));

    if (validate(email.current.value, password.current.value) == null) {
      console.log("ll");
      signInWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          // Signed up
          alert("user Signed In");
          const user = userCredential.user;
          // ...
        })
        .catch((error) => {
          console.log(error);
          const errorCode = error.code;
          alert("Incorrect I'd or Password");
          const errorMessage = error.message;
          // ..
        });
    }
  };

  return (
    <div className="lg:w-full lg:flex md:w-full md:flex justify-center">
      <div className="pt-[66px] px-8 lg:w-[460px] lg:h-[600px] lg:mt-[100px] md:w-[420px] md:h-[630px] md:mt-[80px] bg-black opacity-[0.87]">
        <h1 className="text-white text-3xl font-semibold">Sign In</h1>
        <div className="mt-7">
          <form onSubmit={(e) => e.preventDefault()} action="">
            <div>
              <input
                ref={email}
                required
                className="px-4 py-3 rounded-md mb-4 w-[100%] bg-[#333333]"
                type="email"
                placeholder="Email or phone number"
              />
            </div>
            <div>
              <input
                ref={password}
                required
                className="px-4 py-3 rounded-md mb-4 w-[100%] bg-[#333333]"
                type="password"
                placeholder="Password"
              />
            </div>
            {<p className="text-white text-sm">{valid}</p>}

            <button
              onClick={validateEntry}
              className="px-4 py-3 rounded-md mt-6 mb-4 w-[100%] text-white text-lg font-semibold bg-[#E50914]"
            >
              Sign In
            </button>
          </form>
        </div>
        <div className="flex justify-between">
          <div>
            <input
              className="outline-none bg-[#B3B3B3]"
              type="checkbox"
              name=""
              id=""
            />
            <label className="text-[#B3B3B3]  px-2 text-[0.83rem] " htmlFor="">
              Remember me
            </label>
          </div>
          <div>
            <Link className="text-[#B3B3B3] text-[0.83rem]">Need help?</Link>
          </div>
        </div>

        <h1 className="text-[#B3B3B3] mt-20 lg:mt-6 md:mt-4">
          New to Netflix?{" "}
          <Link className="text-white hover:underline" to="/">
            Sign up now.
          </Link>
        </h1>
        <h1 className="text-[#B3B3B3] text-sm mt-3">
          This page is protected by Google reCAPTCHA to ensure you're not a bot.
          {!learnMore ? (
            <button
              onClick={() => setLearnMore(true)}
              className="mx-2 text-[#0071DC] hover:underline"
            >
              Learn more.
            </button>
          ) : (
            ""
          )}
        </h1>
        {learnMore ? (
          <h1 className="text-[#B3B3B3] text-sm mt-4 duration-1000">
            The information collected by Google reCAPTCHA is subject to the
            Google
            <Link
              className="px-1 text-[#0071DC]"
              to="https://policies.google.com/privacy"
              target="_blank"
            >
              Privacy Policy
            </Link>{" "}
            and{" "}
            <Link
              className="px-1 text-[#0071DC]"
              to="https://policies.google.com/terms"
              target="_blank"
            >
              Terms of Service,
            </Link>
            and is used for providing, maintaining, and improving the reCAPTCHA
            service and for general security purposes (it is not used for
            personalised advertising by Google).
          </h1>
        ) : (
          "hh"
        )}
      </div>
    </div>
  );
};

export default SignIn;
