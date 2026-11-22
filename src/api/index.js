import axios from 'axios';

const url = 'https://disease.sh/v3/covid-19';

export const fetchData = async (country) => {
    let cUrl = `${url}/all`;

    if(country){
        cUrl = `${url}/countries/${encodeURIComponent(country)}?strict=true`
    }

    try {

        const { data: { cases, recovered, deaths, updated } } = await axios.get(cUrl);

        return {
            confirmed: { value: cases },
            recovered: { value: recovered },
            deaths: { value: deaths },
            lastUpdate: updated,
        };

    } catch (error) {
        console.log(error);
    }
}

export const fetchDailyData = async () => {
    try {

        const { data: { cases, deaths } } = await axios.get(`${url}/historical/all?lastdays=all`);

        return Object.keys(cases).map((date) => ({
            confirmed: cases[date],
            deaths: deaths[date],
            date,
        }));
    } catch (error) {
        console.log(error);
    }
}

export const fetchCountries = async () => {
    try {

        const { data } = await axios.get(`${url}/countries`);

        return data.map((country)=>country.country);

    } catch (error) {
        console.log(error);
    }
}
