const axios = require('axios')
const clima = require('../clima/clima');

const getLugar = async(dir) => {
    const encodeName = encodeURI(dir);

    const instance = axios.create({
        baseURL: `https://geocode.xyz/${encodeName}?json=1`,
        //        timeout: 1000,
        //headers: { 'X-Rapidapi-Key': '94ed01be6emshec6176ce6eab864p1bc948jsn78a91a05bbdd' }
    });

    const resp = await instance.get()

    if (resp.data.length === 0) throw new Error(`No hay resultado para ${dir}`);

    const direccion = resp.data.standard.city;
    const lat = resp.data.latt;
    const lon = resp.data.longt;

    return {
        direccion,
        lat,
        lon
    };
};

const getClima = async(direccion) => {
    try {
        const localizacion = await getLugar(direccion);
        const temperatura = await clima.getTiempo(localizacion.lat, localizacion.lon);

        return `La temperatura en ${localizacion.direccion} es de ${temperatura}°`;

    } catch (e) {

        return `ERROR ${e}`;

    }

}

module.exports = {
    getClima
}