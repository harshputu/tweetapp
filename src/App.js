import { Routes, Route } from 'react-router-dom';
import './styles/style.css';
import NavBar from './components/Navbar';
import Home from './pages/Home';
import TweetListing from './pages/TweetListing';
import User from './pages/User';
import Login from './pages/Login';
import Register from './pages/Register';
import Comment from './pages/Comment';
import UpdateTweet from './pages/UpdateTweet';
import Forget from './pages/Forget';
import { NotFound } from './pages/NotFound';

function App() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/tweetslist" element={<TweetListing />} />
        <Route path="/users" element={<User />} />
        <Route path="/comment" element={<Comment />} />
        <Route path="/updateTweet" element={<UpdateTweet />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Register />} />
        <Route path="/forgetPassword" element={<Forget />} />
        <Route path="/*" element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;
