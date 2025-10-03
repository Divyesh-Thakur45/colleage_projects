import SignIn from "./SignIn";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../Service/firebase";

const Privacy = ({ children }) => {
  const [user] = useAuthState(auth);
  if (!user) {
    alert("Please Login First");
    return <SignIn />;
  } else {
    return children;
  }
};

export default Privacy;
