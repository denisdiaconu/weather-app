import { data } from "autoprefixer";
import { DateTime } from "luxon";

const API_KEY = process.env.REACT_APP_DEFAULT;
const BASE_LINK = 'https://api.openweathermap.org/data/2.5';

const getData = (type, searchParams) => {
    const url = new URL(BASE_LINK + '/' + type);
    url.search = new URLSearchParams({...searchParams, appid:API_KEY})
    return fetch(url).then((resolution) => resolution.json());
};

const formatForecastWeather = (data) => {
    let { timezone, daily, hourly } = data;
    daily = daily.slice(1, 6).map(t => {
        return {
            title: formatLocal(t.dt, timezone, 'ccc'),
            temp: t.temp.day,
            icon: t.weather[0].icon
        }
    });

    hourly = hourly.slice(1, 6).map(t => {
        return {
            title: formatLocal(t.dt, timezone, 'hh:mm a'),
            temp: t.temp.day,
            icon: t.weather[0].icon
        }
    });

    return { timezone, daily, hourly}
}

const getFormatData = async (searchParams) => {
    const formatWeatherNow = await getData('weather', searchParams)
    const { coord } = formatWeatherNow;
    const { lat, lon } = coord;
    const formatForecast = await getData('onecall', {lat, lon, exclude: 'current,minutely,alerts', units: 'metric'}).then(
        formatForecastWeather
    )

    return {...formatWeatherNow, ...formatForecast}
}

const iconUrlChange = (code) => `http://openweathermap.org/img/wn/${code}@2x.png`;

const formatLocal = (secs, zone, format = "cccc, dd LLL yyyy' | Local time: 'hh:mm a") => DateTime.fromSeconds(
    secs
).setZone(zone).toFormat(format);

export default getFormatData;
export { formatLocal, iconUrlChange };