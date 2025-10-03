import { Route, Routes } from "react-router-dom";
// import Home from "../Pages/Home";
// import Eyeglasses from "../Pages/Eyeglasses";
// import ScreenGlasses from "../Pages/ScreenGlasses";
import NotFound from "../ui/NotFound";
// import Privacy from "../Auth/Privacy";
// import Description from "../Pages/Description";
import AddToCard from "../Cart/AddToCard";
import AdminPanel from "../admin/AdminPanel";
import axios from "axios";
import { useEffect, useState } from "react";
import Home from "../Pages/Home";
import { Eyeglasses } from "../Pages/Eyeglasses";
import { ScreenGlasses } from "../Pages/screen-glasses";
import { KidsGlasses } from "../Pages/kids-glasses";
import { ContactGlasses } from "../Pages/contact-glasses";
import { SunGlasses } from "../Pages/sun-glasses";
import { Description } from "../ui/Description";

const AllRouts = () => {
  const [role, setRole] = useState(null);
  console.log("🚀 ~ AllRouts ~ role:", role);
  const getUser = async () => {
    const userInfo = await axios.get("http://localhost:8080/auth/me", {
      withCredentials: true,
    });
    setRole(userInfo?.data?.user?.role);
  };
  useEffect(() => {
    getUser();
  }, []);
  return (
    <div>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route
          exact
          path="/eyeglassespage"
          element={
            // <Privacy>
            <Eyeglasses />
            // </Privacy>
          }
        />
        <Route exact path="/screenglasses" element={<ScreenGlasses />} />
        {role === "admin" && (
          <Route exact path="/admin" element={<AdminPanel />} />
        )}
        <Route exact path="/kidsglasses" element={<KidsGlasses />} />
        <Route exact path="/contactlenses" element={<ContactGlasses />} />
        <Route exact path="/sunglasses" element={<SunGlasses />} />
        <Route exact path="/description/:id" element={<Description />} />
        <Route exact path="/AddToCard" element={<AddToCard />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
};

export default AllRouts;
