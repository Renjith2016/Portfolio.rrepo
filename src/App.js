import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Apps } from './components/hello/hello';
import { Super } from './components/superover/superoverleague';
import { Card } from './components/congratscard/congratscard';
import { Notification } from './components/notification/notificactionapp';
import { Login } from './components/login/login form';
import { Tech } from './components/technology/technology card';
import { Social } from './components/social/socialbutton';
import { Menu } from './components/menu/menu';
import { Feedback } from './components/feedback/feedback1';
import { FeedBack1 } from './components/feedback/feedback2';
import { Hook } from './components/hooks/hooks';
import { Fruit } from './components/fruits/fruits';
import { DateFunction } from './components/Date/Date';
import { Jsondata } from './components/json/json';
import { Detailsjson } from './components/json/Jsondata';
import { Portfolio } from './components/portfolio.js/port';
import { Home } from './components/portfolio.js/Home';
import { AboutUs } from './components/portfolio.js/Aboutus';
import { Certificate } from './components/portfolio.js/Cretificate';
import { Contact } from './components/portfolio.js/contact';

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/js/bootstrap.bundle.min'



function App() {
  return (
    <>
   <BrowserRouter>
        <Routes>
          <Route path='/' element={[<Portfolio/>,<Home/>,<AboutUs/>,<Certificate/>,<Contact/>]}></Route>
          <Route path='/Home' element={[<Portfolio/>,<Home/>]}></Route>
          <Route path='/AboutUs' element={[<Portfolio/>,<AboutUs/>]}></Route>
          <Route path='/Certificate' element={[<Portfolio/>,<Certificate/>]}></Route>
          <Route path='/Contact' element={[<Portfolio/>,<Contact/>]}></Route>
          <Route path='/project' element={<Menu/>}></Route>
          <Route path='/Feedback' element={[<Menu />, <Feedback />]}></Route>
          <Route path='/FeedBack1' element={[<Menu />, <FeedBack1 />]}></Route>
          <Route path='/Apps' element={[<Menu />, <Apps />]}></Route>
          <Route path='/Super' element={[<Menu />, <Super />]}></Route>
          <Route path='/Card' element={[<Menu />, <Card />]}></Route>
          <Route path='/Notification' element={[<Menu />, <Notification />]}></Route>
          <Route path='/Tech' element={[<Menu />, <Tech />]}></Route>
          <Route path='/Login' element={[<Menu />, <Login />]}></Route>
          <Route path='/Social' element={[<Menu />, <Social />]}></Route>
          <Route path='/Hook' element={[<Menu />, <Hook />]}></Route>
          <Route path='/Fruit' element={[<Menu />, <Fruit />]}></Route>
          <Route path='/DateFunction' element={[<Menu />, <DateFunction />]}></Route>
          <Route path='/Jsondata' element={[<Menu />, <Jsondata />]}></Route>
          <Route path='/Detailsjson/:id' element={[<Menu />, <Detailsjson/>]}></Route>
          
        </Routes>
      </BrowserRouter> 
      
    </>

  );
}

export default App;

