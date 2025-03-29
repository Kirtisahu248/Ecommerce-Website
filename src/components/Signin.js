import { useRef, useState } from "react";
import { checkValidateData } from "../utils/validate";
import { auth } from "../utils/firebase";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { useDispatch } from "react-redux";
import { addUser } from "../utils/userSlice";
import { useNavigate } from "react-router";
const Signin = () => {
  const [isSignInForm, setSignInForm] = useState(true);
  const [errorMessage, setErrorMessage] = useState([]);
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const email = useRef(null);
  const password = useRef(null);
  const name = useRef(null);
  const toogleSignIn = (value) => {
    setSignInForm(value);
  };
  const handleClick = () => {
    //validate the form data

    const message = checkValidateData(
      email.current.value,
      password.current.value
    );
    setErrorMessage(message);
    if (message) return;

    if (!isSignInForm) {
      //sign up logic

      createUserWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          // Signed up
          const user = userCredential.user;
          updateProfile(user, {
            displayName: name.current.value
          }).then(() => {
            const {uid,email,displayName}= auth.currentUser;
            dispatch(addUser({uid:uid,email:email,displayName: displayName}))
            // navigate("/")
          }).catch((error) => {
            setErrorMessage(error.message)
          });
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(errorCode + "-" + errorMessage);
        });
    } else {
      //sign in logic
      signInWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          const user = userCredential.user
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(errorCode + "-" + errorMessage);
        });
    }
  };
  return (
    <div className=" flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4">
      <div className="w-full max-w-md">
        <img
          className="w-20 mx-auto mb-4"
          alt="logo"
          src="https://tse3.mm.bing.net/th?id=OIP.h73f0tiG-tiMzWrPuQ124gHaCP&pid=Api&P=0&h=180"
        />
      </div>
      <div className="bg-white border border-gray-300 rounded-lg p-6 shadow-md w-3/12">
        <h1 className="text-3xl font-semibold mb-4">
          {isSignInForm ? "Sign in" : "Create Account"}
        </h1>

        <form onSubmit={(e) => e.preventDefault()}>
          {!isSignInForm && (
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Your Name
              </label>
              <input
                ref={name}
                className="w-full p-2 border border-gray-300 rounded-md mb-2"
                type="text"
                placeholder="First and Last Name"
              />
            </div>
          )}
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Email
            </label>
            <input
              ref={email}
              type="text"
              className="w-full p-2 border border-gray-300 rounded-md mb-2"
            />

            <label className="block text-sm font-medium text-gray-700 mb-2">
              Password
            </label>
            <input
              ref={password}
              type="password"
              className="w-full p-2 border border-gray-300 rounded-md mb-2 "
            />
          </div>
          <p className="font-bold text-lg text-red-500 my-2">{errorMessage}</p>
          <button
            className="w-full bg-yellow-400 py-2 rounded-md font-medium mb-4"
            onClick={handleClick}
          >
            {isSignInForm ? "Sign in" : "Sign Up"}
          </button>
        </form>

        {!isSignInForm && (
          <div>
            <p className="inline text-xs text-gray-600 mb-4">
              Already have an account?
            </p>
            <span
              className="font-bold cursor-pointer hover:border-b border-black"
              onClick={() => toogleSignIn(true)}
            >
              Signin
            </span>
          </div>
        )}
      </div>

      {isSignInForm && (
        <div className="mt-4 text-center min-w-96">
          <p className="text-sm text-gray-600 mb-4">New to Amazon?</p>
          <button
            className="py-2 bg-gray-100  w-full rounded-full font-medium shadow-sm border border-gray-300"
            onClick={() => toogleSignIn(!isSignInForm)}
          >
            Create your Amazon Account
          </button>
        </div>
      )}
    </div>
  );
};

export default Signin;
