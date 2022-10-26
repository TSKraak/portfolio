import { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import Loading from "./components/Loading";
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
  const [about, setAbout] = useState([]);
  const [validToken, setValidToken] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const token = localStorage.getItem("token");

    const fetchUserWithToken = async () => {
      if (token) {
        try {
          // if we do have a token,
          // check wether it is still valid or if it is expired
          const response = await axios.get(`${apiUrl}/me`, {
            headers: { Authorization: `Bearer ${token}` }
          });

          // token is still valid, set user with token
          setUser({ token, ...response.data });
          setValidToken(true);
          setIsLoading(false);
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
      <NavBar
        user={user}
        setUser={setUser}
        validToken={validToken}
        setValidToken={setValidToken}
      />
      {isLoading && <Loading />}
      <div className="App-Content">
        <Routes>
          <Route
            exact
            path="/"
            element={
              <HomePage
                about={about}
                setAbout={setAbout}
                experiences={experiences}
                setExperiences={setExperiences}
                projects={projects}
                setProjects={setProjects}
                setIsLoading={setIsLoading}
              />
            }
          />
          <Route exact path="/contact" element={<ContactPage />} />
          <Route
            exact
            path="/admin"
            element={
              <AdminPage
                user={user}
                setUser={setUser}
                validToken={validToken}
                setValidToken={setValidToken}
              />
            }
          />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
