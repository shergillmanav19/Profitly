import React from "react";
import Signup from "./pages/Signup";
// import LoginPractice from "./pages/practiceLogin";/
import LandingPage from "./pages/LandingPage";
import Dashboard from "./components/dashboard/Dashboard";
import { AuthProvider } from "./contexts/AuthContext";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Login from "./pages/Login";
// import LoginPractice from "./pages/practiceLogin";
import "./App.css";
import CryptoDashboard from "./CryptoDashboard";
import PrivateRoute from "./components/privateRoutes/PrivateRoute";
function App() {
  return (
    // <div className="w-100" style={{ maxWidth: "400px" }}>
    <AuthProvider>
      <Router>
        <Switch>
          <Route exact path="/" component={Signup} />
          <Route path="/login" component={Login} />
          <PrivateRoute path="/main" component={LandingPage} />
          <PrivateRoute path="/dashboard" component={Dashboard} />
          <PrivateRoute path="/crypto" component={CryptoDashboard} />
        </Switch>
      </Router>
    </AuthProvider>
    // </div>

    // </Container>
  );
}

export default App;
