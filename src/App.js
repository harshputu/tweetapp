import "./styles/style.css";
import NavBar from "./components/Navbar";
import { PageRoutes } from "./routes/PageRoutes";

function App() {
  return (
    <>
      <NavBar />
      <PageRoutes />
    </>
  );
}

export default App;
