import React, {useState} from 'react';
import Header from '../../components/header/header';
import SearchBar from '../../components/searchBar/searchBar';
import Card from '../../elements/card/card';
import Preview from '../../components/preview/preview';
import WeatherDetailes from '../../components/weatherDetailes/weatherDetailes';
import ErrorNotice from '../../components/errorNotice/errorNotice';
import Footer from '../../components/footer/footer';
import classes from './app.module.css';

const API_KEY = 'd7c071dbf7790d7d7813ad4c44980cbb';

function App() {

  const [city, setCity] = useState('');
  const [weather, setWeather] = useState({
    'dt': '',
    'temp': '',
    'weather': '',
    'description': ''
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  function onChange(e) {
    let input = e.target.value;
    if (input === '') {
      setWeather('');
    }
    setCity(input);
  }

  const  onClick = async (e) => {
    setError(false);
    if (city !== '') {
      try {
        e.preventDefault();
        console.log(city);
        const api_url = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${API_KEY}`);
          const data = await api_url.json();
          // console.log(data);
          const info = {
              dt: data.dt,
              name: data.name,
              temp: data.main.temp,
              weather: data.weather[0].main,
              description: data.weather[0].description,
          };
          console.log(info);
          setWeather(info); 
      }
      catch(error) {
        console.log('caught error');
        setLoading(false);
        setError(true);
      }
    }
  }

  return (
    <div className="App">
      <div classes={classes.AppWrapper}>
      <Header/>
      <main className={classes.AppMain}>
        <SearchBar 
            listenChange={onChange}
            onClick={onClick}
          />
        <Card>
          {
            (loading) ? <div>Loading...</div> :
            (error) ? <ErrorNotice/> :
            (weather.dt) ? <WeatherDetailes weather={weather}/> : <Preview/>
           }
        </Card>
      </main>
      <Footer/>
      </div>
    </div>
  );
}

export default App;
