import "./App.css";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Admin from "./components/admin";
import Main from "./components/main";
import Home from "./components/main/Home";
import UserAuth from "./auth/UserAuth";
import User from "./components/user";
import UserProfile from "./components/user/UserProfile";
import NotFound from "./components/NotFound";
import UserProvider from "./context/UserProvider";
import { useState } from "react";
import Login from "./components/main/Login";
import Signup from "./components/main/Signup";
import AboutUs from "./components/main/AboutUs";
import Contact from "./components/main/ContactUs";
import ManageArtwork from "./components/user/ManageArtworks";
import BrowseExhibition from "./components/main/BrowseExhibition";
import ManageExhibitions from "./components/user/ManageExhibitions";
import AddExhibition from "./components/user/AddExhibition";

function App() {
  const [currentUser, setCurrentUser] = useState(
    JSON.parse(sessionStorage.getItem("user"))
  );

  const [currentAdmin, setCurrentAdmin] = useState(
    JSON.parse(sessionStorage.getItem("admin"))
  );

  return (
    <BrowserRouter>
      <UserProvider>
        <Routes>
          <Route element={<Navigate to="/main/home" />} path="/" />


          <Route element={<Main />} path="main">
            <Route element={<Home />} path="home" />
            <Route element={<AboutUs />} path="aboutus" />
            {/* <Route element={<Gallery />} path="gallery" /> */}
            {/* <Route element={<About />} path="aboutus" /> */}
            <Route element={<Contact />} path="contact" />
            <Route element={<Login />} path="signin" />
            <Route element={<Signup />} path="signup" />
          <Route path="browseexhibition" element={<BrowseExhibition />} />
          </Route>

          <Route
            element={
              <UserAuth>
                <User />
              </UserAuth>
              // <User />
            }
            path="user"
          >
            <Route path="exhibition" element={<ManageExhibitions />} />
            <Route path="addexhibition" element={<AddExhibition />} />
            <Route path="profile" element={<UserProfile />} />
            <Route path="artwork" element={<ManageArtwork />} />
          </Route>
          <Route path="*" element={<NotFound />} />
        </Routes>
      </UserProvider>
    </BrowserRouter>
  );
}

export default App;