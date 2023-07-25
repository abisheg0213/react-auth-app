import { React, useState } from "react";
import { auth } from "./firebase";
import {
  createUserWithEmailAndPassword,
  signOut,
  onAuthStateChanged
} from "firebase/auth";
export default function App() {
  const [email, setemail] = useState("");
  const [pass, setpass] = useState("");
  const [userdata, setuser] = useState({});
  onAuthStateChanged(auth, (currentUser) => {
    setuser(currentUser);
  });
  const register = async (email, password) => {
    try {
      const user = await createUserWithEmailAndPassword(auth, email, password);
      console.log(user);
    } catch (err) {
      console.log(err.message);
    }
  };
  const login = async () => {};
  const logout = async () => {
    await signOut(auth);
  };
  return (
    <div>
      <div>
        <h3>Register User</h3>
        <input
          placeholder="Email..."
          onChange={(e) => {
            setemail(e.target.value);
          }}
        />
        <input
          placeholder="Password..."
          onChange={(e) => {
            setpass(e.target.value);
          }}
        />
        <button
          onClick={() => {
            register(email, pass);
          }}
        >
          Create User
        </button>
      </div>
      <div>
        <h3>Login User</h3>
        <input
          placeholder="Email..."
          onChange={(e) => {
            setemail(e.target.value);
          }}
        />
        <input
          placeholder="Password..."
          onChange={(e) => {
            setpass(e.target.value);
          }}
        />
        <button>Login</button>
      </div>
      <div>
        <h3>Logged In User</h3>
        <p>{userdata?.email}</p>

        <button
          onClick={() => {
            logout();
          }}
        >
          Sign out
        </button>
      </div>
    </div>
  );
}
