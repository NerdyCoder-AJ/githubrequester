import react, {useState, useEffect} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import {ToastContainer} from 'react-toastify'
import 'react-toastify/dist/ReactToastify.min.css'
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import {UserContext} from './Context/UserContext';

// components
import Home from './pages/Home';
import Signup from './pages/Signup'
import Signin from './pages/Signin'
import Pagenotfound from './pages/PageNotFound'
import Footer from './Layouts/Footer';
import Header from './Layouts/Header';

// firebase
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';

// firebase init
import firebaseConfig from './config/firebaseConfig';
firebase.initializeApp(firebaseConfig)




const App = () => {

  const [user, setUser] = useState(null)


  return(
    <Router>
    <ToastContainer />
    <UserContext.Provider value={{user, setUser}}>
    <Header/>
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/signin' element={<Signin />} />
      <Route path='/signup' element={<Signup />} />
      <Route path='*' element={<Pagenotfound />} />
    </Routes>
    {/* <Footer/> */}
    </UserContext.Provider>
    </Router>

  );
}

export default App;
