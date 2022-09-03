import "./App.css";
import Header from "./Header";
import Home from "./Home";
import Checkout from "./Checkout";
import Payment from './Payment'
import Login from "./Login";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useEffect } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "./firebase";
import { useStateValue } from "./StateProvider";

function App() {
  const [{}, dispatch] = useStateValue();

  useEffect(() => {
    onAuthStateChanged(auth, (authUser) => {
      console.log("the user is >>>", authUser);
        dispatch({
          type:'SET_USER',
          user: authUser
        })
      if (authUser) {
      } else {
        dispatch({
          type:'SET_USER',
          user: null
        })
      }
    });
  }, []);

  return (
    <Router>
      <div className="app">
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route
            path="/checkout"
            element={
              <>
                <Header />
                <Checkout />
              </>
            }
          />
          <Route
            path="/payment"
            element={
              <>
                <Header />
                <Payment />
              </>
            }
          />
          <Route
            path="/"
            element={
              <>
                <Header />
               {/*  <Home /> */}
              </>
            }
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
