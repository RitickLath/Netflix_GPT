import React from "react";
import LoginHeader from "./Login/LoginHeader";
import SignIn from "./Login/SignIn";
import Background from "./Home/Background";
import FooterL from "./Login/FooterL";

const Login = () => {
  return (
    <div className="bg-gradient-to-l from-black z-10 w-full h-full">
      <div className="lg:bg-transparent md:bg-transparent bg-black w-full h-full ">
        <div className="overflow-x-hidden max-w-full">
          <img
            className="absolute w-full overflow-hidden -z-10 scale-y-150 lg:bg-current md:h-[118vh] lg:h-[115vh]"
            src="https://assets.nflxext.com/ffe/siteui/vlv3/c0b69670-89a3-48ca-877f-45ba7a60c16f/2642e08e-4202-490e-8e93-aff04881ee8a/IN-en-20240212-popsignuptwoweeks-perspective_alpha_website_medium.jpg"
            alt="Background"
          />
        </div>
        <LoginHeader />
        <SignIn />
        <FooterL />
      </div>
    </div>
  );
};

export default Login;
