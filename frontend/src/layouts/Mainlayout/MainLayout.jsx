import React, { useEffect } from "react";
import { Outlet } from "react-router";
import { useDispatch } from "react-redux";
import { clearUser, setUser } from "../../features/auth/authSlice";
import { onAuthStateChanged } from "firebase/auth";
import auth from "../../firebase/firebase.config";
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
      <Outlet />
    </div>
  );
};

export default MainLayout;
