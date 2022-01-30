import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import SignUp from './pages/SignUp';
import SignIn from './pages/SignIn';
import NotFound from './pages/NotFound';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import {PAGE_PATH} from './const';

const setComponent = (path) => {
    const mapPathToComponent = {
      [PAGE_PATH.MAIN] : () => <App/>,
      [PAGE_PATH.SIGNIN]: () => <SignIn/>,
      [PAGE_PATH.SIGNUP]: () => <SignUp/>
    }
    return mapPathToComponent[path]();
}

ReactDOM.render(
  
  <React.StrictMode>
    <Router>
        <Routes>
          <Route path={PAGE_PATH.MAIN} element={setComponent(PAGE_PATH.MAIN)}/>
          <Route path={PAGE_PATH.SIGNIN} element={setComponent(PAGE_PATH.SIGNIN)}/>
          <Route path={PAGE_PATH.SIGNUP} element={setComponent(PAGE_PATH.SIGNUP)}/>
          <Route path='*' element={<NotFound/>}/>
        </Routes>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
