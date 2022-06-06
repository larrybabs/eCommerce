import "./default.scss";
import Homepage from "./pages/Homepage";
import Registration from "./pages/Registration";
import { Routes, Route } from "react-router-dom";
import MainLayout from "./layout/MainLayout";
import HomepageLayout from "./layout/HomepageLayout";
import Login from "./pages/Login";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route
          path="/"
          element={
            <HomepageLayout>
              <Homepage />
            </HomepageLayout>
          }
        />

        <Route
          path="/registration"
          element={
            <MainLayout>
              <Registration />{" "}
            </MainLayout>
          }
        />
      
        <Route
          path="/login"
          element={
            <MainLayout>
              <Login />{" "}
            </MainLayout>
          }
        />
      </Routes>
    </div>
  );
}

export default App;
