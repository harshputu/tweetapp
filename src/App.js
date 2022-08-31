import logo from './logo.svg';
import './App.css';
import NavBar from './components/Navbar';
import './styles/style.css'
import Home from './pages/Home';
import TweetListing from './pages/TweetListing';
import User from './pages/User';
import Login from './pages/Login';
import Register from './pages/Register';
import Comment from './pages/Comment';
import UpdateTweet from './pages/UpdateTweet';
import Forget from './pages/Forget';

function App() {
  return (
    <div>
      <NavBar/>
      {/* <Home/>
      <TweetListing/>
      <User/> 
      <Login/>
      <Register/>
      <Comment/>
      <UpdateComment/>*/}
      <Forget/>
      
    </div>
  );
}

export default App;
