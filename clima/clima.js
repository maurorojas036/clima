const axios = require('axios');
var apiKey = 'fb14c0062102c1b870ea722bbf8e706e';

const getTiempo = async(lat, lon) => {

    var url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}&units=metric`;
    const resp = await axios.get(url);

    return (resp.data.main.temp);
};

module.exports = {
    getTiempo
}