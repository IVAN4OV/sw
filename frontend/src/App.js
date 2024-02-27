import React, { useContext, useEffect, useState } from 'react';
import { BrowserRouter } from "react-router-dom";
import AppRouter from './components/AppRouter';
import Navbar from './components/Navbar/Navbar';
import { Context } from '.';
import { observer } from 'mobx-react-lite';
import ScrollToTop from './ScrollToTop';
import Footer from './components/Footer/Footer';

const App = () => {
  const { store } = useContext(Context);
  const [isAuthChecked, setIsAuthChecked] = useState(false);

  useEffect(() => {
    if(localStorage.getItem('token')) {
      setIsAuthChecked(true);
      store.checkAuth();
    } else {
      setIsAuthChecked(true);
    }
  }, [store]);

  if(store.isLoading || !isAuthChecked) {
    console.log(process.env.REACT_APP_API_URL)
    return <div>ЗАГРУЖАЮСЬ ЖДИИИИ!!!...</div>;
  };

  return (
    <BrowserRouter>
      <Navbar />
      <AppRouter />
      <ScrollToTop /> {/* Временное решение! */}
      <Footer />
    </BrowserRouter>
  );
};

export default observer(App);