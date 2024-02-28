import React, { useContext, useRef, useState } from "react";
import { img } from "../../Constants/Image";
import AccountIcon from "./AccountIcon";
import UserContext from "../../Context/UserContext";

const Browse = () => {
  const { user, setUser } = useContext(UserContext);
  const { login, setlogin } = useContext(UserContext);
  //const [user, setUser] = useState([{ name: "Email", id: 1 }]);
  const id = useRef(1);
  const [show, setShow] = useState(true);
  const input = useRef(null);

  const handleAccount = () => {
    setShow(false);
  };

  const AddAccountBtn = () => {
    setShow(true);
    setUser((prevAccounts) => [
      ...prevAccounts,
      { name: input.current.value, id: id.current },
    ]);
    id.current = id.current + 1;
    // console.log(user);
  };

  return (
    <div className="bg-[#141414] w-full h-screen bg-gradient-to-b from-black to-[#141414] to-10% flex justify-center items-center">
      {login && (
        <div>
          {show && (
            <div className="">
              <h1 className="text-white text-3xl lg:text-5xl lg:pb-4 text-center pb-3">
                Who's watching?
              </h1>
              <div className="flex">
                {/* {console.log(login)} */}
                <AccountIcon id={1} name={login.name} />
                {/* {console.log(id.current)} */}
                {user[1] && <AccountIcon id={2} name={user[1].name} />}
                {user[2] && <AccountIcon id={3} name={user[2].name} />}
                {user[3] && <AccountIcon id={4} name={user[3].name} />}

                {/* Update Profile and add profile */}
                {id.current < 4 && (
                  <button
                    onClick={handleAccount}
                    className="p-2 text-center text-sm text-[#656565] hover:text-white"
                  >
                    <img
                      className="w-[80px] h-[80px] lg:w-[120px] lg:h-[120px] rounded-md hover:border-2"
                      src={img[0].img}
                    />
                    <p className="pt-1 lg:text-base">Add Profile</p>
                  </button>
                )}
              </div>
            </div>
          )}

          {/* Add Profile div */}
          {!show && (
            <div>
              <h1 className="text-x sm:text-4xl md:text-4xl lg:text-4xl text-white mb-2">
                Add Profile
              </h1>
              <h2 className="mb-3 text-[#666666] text-base">
                Add a profile for another person watching Netflix
              </h2>
              <hr />
              <div className="flex gap-4 mt-4">
                <img
                  className="w-[60px] h-[60px] rounded-md"
                  src={img[id.current].img}
                  alt=""
                />
                <input
                  ref={input}
                  className="px-2 outline-none h-7 mt-4 w-[70%] bg-[#666666] text-white"
                  type="text"
                />
              </div>
              <hr className="mt-3" />
              <button
                onClick={AddAccountBtn}
                className="px-6 py-1 bg-white hover:bg-[#CC0000] text-black hover:text-white mt-3"
              >
                Continue
              </button>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default Browse;

// import React from 'react'

// const Browse = () => {
//   return (
//     <div>Browse</div>
//   )
// }

// export default Browse
