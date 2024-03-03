import Body from "./Components/Body";
import { useEffect } from "react";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { app } from "./Components/utils/firebase";
import UserContetProvider from "./Context/UserContetProvider";
import { useNavigate } from "react-router-dom";

const auth = getAuth(app);

function App() {
  return (
    <>
      <UserContetProvider>
        <Body />
      </UserContetProvider>
    </>
  );
}

export default App;
