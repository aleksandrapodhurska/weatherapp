import React from 'react';
import Header from '../../components/header/header';
import SearchBar from '../../components/searchBar/searchBar';
import Card from '../../elements/card/card';
import Preview from '../../components/preview/preview';
import WeatherDetailes from '../../components/weatherDetailes/weatherDetailes';
import ErrorNotice from '../../components/errorNotice/errorNotice';
import Footer from '../../components/footer/footer';
import classes from './app.module.css';

function App() {
  return (
    <div className="App">
      <div classes={classes.AppWrapper}>
      <Header/>
      <main className={classes.AppMain}>
        <SearchBar/>
        <Card>
          <WeatherDetailes/>
          {/* <Preview/> */}
          {/* <ErrorNotice/> */}
        </Card>
      </main>
      <Footer/>
      </div>
    </div>
  );
}

export default App;
