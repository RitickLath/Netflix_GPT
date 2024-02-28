import Body from "./Components/Body";
import { useEffect } from "react";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { app } from "./Components/utils/firebase";
import UserContetProvider from "./Context/UserContetProvider";

const auth = getAuth(app);

function App() {
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        console.log("you are logged in " + user);
      } else {
        console.log("you aren't");
      }
    });
  }, []);
  return (
    <>
      <UserContetProvider>
        <Body />
      </UserContetProvider>
    </>
  );
}

export default App;
