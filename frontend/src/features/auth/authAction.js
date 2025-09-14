import {
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithEmailAndPassword,
  signInWithPopup,
} from "firebase/auth";
import auth from "../../firebase/firebase.config";
import { setUser } from "./authSlice";
const googleProvider = new GoogleAuthProvider();

export const signInWithGoogle = async (dispatch) => {
  try {
    const result = await signInWithPopup(auth, googleProvider);

    // extract only serializable fields
    const userData = {
      uid: result.user.uid,
      email: result.user.email,
      displayName: result.user.displayName,
      photoURL: result.user.photoURL,
    };

    dispatch(setUser(userData));
  } catch (error) {
    console.error("Google Sign-In error:", error);
  }
};

export const registerWithEmail = async (dispatch, email, password) => {
  try {
    const result = await createUserWithEmailAndPassword(auth, email, password);
    dispatch(setUser(result.user)); // redux store e save
  } catch (error) {
    console.error("Email Registration error:", error.message);
  }
};

export const loginWithEmail = async (dispatch, email, password) => {
  try {
    const result = await signInWithEmailAndPassword(auth, email, password);
    dispatch(setUser(result.user)); // redux store e user save
  } catch (error) {
    console.error("Login error:", error.message);
  }
};
