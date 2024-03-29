import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import SignIn from './pages/SignIn';
import Dashboard from './pages/Dashboard';
import Projects from './pages/Projects';
import SignUp from './pages/SignUp';
import Header from './Components/Header';
import Footer from './Components/Footer';
import PrivateRoute from './Components/PrivateRoute';
import CreatedPost from './pages/CreatePost';
import OnlyAdminPrivateRoute from './Components/OnlyAdminPrivateRoute';


export default function App() {
  return (
    <BrowserRouter>
    
      <Header/>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/sign-in' element={<SignIn />} />
        <Route path='/sign-up' element={<SignUp />} />
        <Route element={<PrivateRoute />}>
          <Route path='/dashboard' element={<Dashboard />} />
        </Route>
       
        <Route element={<OnlyAdminPrivateRoute />}>
          <Route path='/create-post' element={<CreatedPost />} />
          {/* <Route path='/update-post/:postId' element={<UpdatePost />} /> */}
        </Route>
        <Route path='/projects' element={<Projects />} />
        
      </Routes>
      <Footer/>
 
    </BrowserRouter>
  );
}