import {
  BrowserRouter as Router,
  Routes, Route, Navigate
} from "react-router-dom";
import Home from "./pages/Home";
import Users from "./pages/Users";
import Account from "./pages/Account";

const App = () => {


  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/users" element={<Users />} />
        <Route exact path="/account" element={<Account />} />
      </Routes>
    </Router>
  )

}

export default App;