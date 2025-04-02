import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import PrivateRoute from "./components/PrivateRoute";
import { useContext } from "react";
import AuthContext from "./context/AuthContext";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import Graficos from "./pages/Graficos";
import Profile from "./pages/Profile";

function App() {
  const auth = useContext(AuthContext);

  if (!auth) {
    throw new Error("AuthContext must be used within an AuthProvider");
  }
  console.log(auth.isAuthenticated);
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />

        <Route
          element={
            <PrivateRoute
              isAuthenticated={auth.isAuthenticated}
              redirectPath="/login"
            />
          }
        >
          <Route path="/" element={<Dashboard />} />
          <Route path="/graficos" element={<Graficos />} />
          <Route path="/profile" element={<Profile />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
