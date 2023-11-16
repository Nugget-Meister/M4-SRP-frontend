import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import NavBar from "./common/Navbar.jsx";
import "./App.css";
import Home from "./Home/Home.jsx";
import ItemDetails from "./ItemDetails/ItemDetails.jsx";
import EditItem from "./Item/EditItem.jsx";
import NewItem from "./Item/NewItem.jsx";
import Login from "./Login/Login.jsx";
import { GoogleOAuthProvider } from "@react-oauth/google";

const client_id = import.meta.env.VITE_GOOGLE_CLIENT_ID

function App() {
  return (
    <>
      <GoogleOAuthProvider 
        clientId={client_id}
      >
                    
        <Router>
          <NavBar />
          <main>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/login" element={<Login />} />
              <Route path="/new" element={<NewItem />} />
              <Route path="/:id" element={<ItemDetails />} />
              <Route path="/:id/edit" element={<EditItem />} />
            </Routes>
          </main>
        </Router>
      </GoogleOAuthProvider>
    </>
  );
}

export default App;
