import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import AdminPage from "./pages/AdminPage";
import ContactPage from "./pages/ContactPage";
import HomePage from "./pages/HomePage";
import NotFound from "./pages/NotFound";

function App() {
  const [user, setUser] = useState({});
  const [experiences, setExperiences] = useState([]);
  const [projects, setProjects] = useState([]);

  return (
    <div className="App">
      <NavBar />
      <div className="App-Content">
        <Routes>
          <Route
            exact
            path="/"
            element={
              <HomePage
                experiences={experiences}
                setExperiences={setExperiences}
                projects={projects}
                setProjects={setProjects}
              />
            }
          />
          <Route exact path="/contact" element={<ContactPage />} />
          <Route
            exact
            path="/admin"
            element={<AdminPage user={user} setUser={setUser} />}
          />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
