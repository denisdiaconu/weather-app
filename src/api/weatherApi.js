import { data } from "autoprefixer";

const API_KEY = process.env.REACT_APP_DEFAULT;
const BASE_LINK = 'https://api.openweathermap.org/data/2.5';

const getData = (type, searchParams) => {
    const url = new URL(BASE_LINK + '/' + type);
    url.search = new URLSearchParams({...searchParams, appid:API_KEY})
    return fetch(url).then((resolution) => resolution.json());
};

const formatForecastWeather = (data) => {
    let
}

const getFormatData = async (searchParams) => {
    const formatWeatherNow = await getData('weather', searchParams)
    const { coord } = formatWeatherNow;
    const { lat, lon } = coord;
    const formatForecast = await getData('onecall', {lat, lon, exclude: 'current,minutely,alerts', units: 'metric'}).then(
        formatForecastWeather
    )

    return formatWeatherNow
}

export default getFormatData;