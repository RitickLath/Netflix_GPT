import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { app } from "../utils/firebase";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import FooterS from "./FooterS";
import { useNavigate } from "react-router-dom";
import UserContext from "../../Context/UserContext";
import OnAuth from "../utils/OnAuth";

const auth = getAuth(app);

const Pagetwo = () => {
  // Navigate
  const navigate = useNavigate();

  // User data state
  const [name, setName] = useState("");
  const [gmail, setgmail] = useState("");
  const [Password, setpassword] = useState("");

  //
  const { user, setUser } = useContext(UserContext);
  const { islogin, setIslogin } = useContext(UserContext);

  const addUser = () => {
    createUserWithEmailAndPassword(auth, gmail, Password)
      .then((userCredential) => {
        const userdata = userCredential.user;
        // make the islogin true
        setUser([gmail, name]);
        setIslogin(true);
        // navigate
        navigate("/signup/regform/paymentpicker");
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.Message;
        // make the islogin false in store
        console.log(errorCode + " - " + errorMessage);
        setIslogin(false);
      });
  };

  return (
    <div>
      <div className="">
        <div className="flex justify-between">
          <img
            className="size-3/4 w-52"
            src="https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png"
            alt="Netflix Logo"
          />
          <button className="px-3 sm:px-6  font-bold">
            <Link to="/login">Sign In</Link>
          </button>
        </div>
        <hr className="-mt-1" />
      </div>
      <div className="text-center px-4 pb-24 flex items-center w-full mt-[5vh] text-[#333333]">
        <div className="w-[450px] mx-auto">
          <h3 className="mt-4 text-left">STEP 2 OF 3</h3>
          <h1 className="text-left text-2xl  font-bold  mt-2">
            Create a password to start <br /> your membership
          </h1>
          <p className="text-left mt-3 font-normal text-xl">
            Just a few more steps and you're done! <br /> We hate paperwork,
            too.
          </p>
          <form
            onSubmit={(e) => {
              e.preventDefault();
            }}
            className="mt-3"
            action=""
          >
            <input
              value={name}
              onChange={(e) => {
                setName(e.target.value);
              }}
              type="text"
              required
              placeholder="Enter your Name"
              className={`outline-none px-3 border-[1.8px] w-[100%] min-w-[320px] py-3 rounded-sm ${
                /^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})$/.test(gmail)
                  ? "border-[#688962]"
                  : "border-[red]"
              } `}
            />

            <input
              value={gmail}
              onChange={(e) => {
                setgmail(e.target.value);
              }}
              type="email"
              required
              name=""
              id=""
              placeholder="Enter your Email"
              className={`mt-3 outline-none px-3 border-[1.8px] -mx-1 w-[100%] min-w-[320px] py-3 rounded-sm ${
                /^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})$/.test(gmail)
                  ? "border-[#688962]"
                  : "border-[red]"
              } `}
            />

            <input
              value={Password}
              onChange={(e) => {
                setpassword(e.target.value);
              }}
              type="password"
              required
              placeholder="Add a Password"
              className={`mt-3 outline-none px-3 border-[1.8px] -mx-1 w-[100%] min-w-[320px] py-3 rounded-sm ${
                /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@.#$!%*?&])[A-Za-z\d@.#$!%*?&]{8,15}$/.test(
                  Password
                )
                  ? "border-[#688962]"
                  : "border-[#D04B51]"
              } `}
            />
            <p className="text-left text-sm mt-1 text-[#D04B51]">
              {!/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@.#$!%*?&])[A-Za-z\d@.#$!%*?&]{8,15}$/.test(
                Password
              ) &&
                !Password == "" &&
                "Password must contain 8-15 characters, an uppercase, lowercase, digit, and special character."}
            </p>
            <p className="text-left text-sm mt-1 text-[#D04B51]">{}</p>
            <button
              onClick={addUser}
              className="mt-3 w-[35%] rounded-md py-3 text-xl font-semibold text-white px-3 bg-red-700"
            >
              Next
            </button>
          </form>
        </div>
      </div>
      <FooterS />
    </div>
  );
};

export default Pagetwo;
