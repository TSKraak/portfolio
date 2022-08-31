import { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import AdminPage from "./pages/AdminPage";
import ContactPage from "./pages/ContactPage";
import HomePage from "./pages/HomePage";
import NotFound from "./pages/NotFound";
import axios from "axios";
import { apiUrl } from "./config/constants";

function App() {
  const [user, setUser] = useState({ username: "", password: "", token: "" });
  const [experiences, setExperiences] = useState([]);
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    const token = localStorage.getItem("token");

    const fetchUserWithToken = async () => {
      if (token) {
        try {
          // if we do have a token,
          // check wether it is still valid or if it is expired
          const response = await axios.get(`${apiUrl}/me`, {
            headers: { Authorization: `Bearer ${token}` },
          });

          // token is still valid, set user with token
          setUser({ token, ...response.data });
        } catch (error) {
          if (error.response) {
            console.log("ERROR:", error.response.message);
          } else {
            console.log("ERROR:", error);
          }
          // if we get a 4xx or 5xx response,
          // get rid of the token by logging out
          setUser({ username: "", password: "", token: "" });
          localStorage.clear();
        }
      }
    };
    fetchUserWithToken();
  }, []);

  return (
    <div className="App">
      <NavBar user={user} setUser={setUser} />
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
