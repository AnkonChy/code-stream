import React, { useEffect } from "react";
import { Outlet } from "react-router";
import Dashboard from "../../pages/Dashboard/Dashboard";
import { useDispatch } from "react-redux";
import { clearUser, setUser } from "../../features/auth/authSlice";
import { onAuthStateChanged } from "firebase/auth";
import auth from "../../firebase/firebase.config";
import Footer from "../../Components/Footer";
import Ready from "../../Components/Ready";
import FAQ from "../../Components/FAQ";

const MainLayout = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
    //   if (currentUser) {
    //     dispatch(setUser(currentUser));
    //   } else {
    //     dispatch(clearUser());
    //   }
    console.log(currentUser);
    });

    return () => unsubscribe();
  }, [dispatch]);

  return (
    <div className="bg-gray-200">
      {/* <Dashboard /> */}
      <Outlet/>
      <FAQ/>
      <Ready/>
      <Footer/>
    </div>
  );
};

export default MainLayout;
