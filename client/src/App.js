import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import './App.css';

import Home from './pages/Home/Home';
import Footer from './components/footer/footer';
import fetchData from "./store/actions/fetchData";



const App = () => {
  const data = useSelector(state => state.data);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchData());
  }, []);

  return (
    <>
      { data.loading && <div className="d-flex justify-content-center align-items-center vh-100">
        <div className="spinner-border" role="status">
          <span className="sr-only">Loading...</span>
        </div>
      </div> }

      { !data.loading && data.error && <h3 className="d-flex m-0 justify-content-center align-items-center vh-100">Network error!</h3> }

      { !data.loading && !data.error && <div className='app__pageContainer'>
        <Home />
        <Footer />
      </div> }
    </>
  );
}

export default App;