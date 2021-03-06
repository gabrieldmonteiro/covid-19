import React from 'react';

import { Cards, Chart, CountryPicker, Footer } from './components';
import styles from './App.module.css';
import { fetchData } from './api';
import logo from './img/logo.png';

class App extends React.Component {

    state = {
        data: {},
        country: '',
    }

    async componentDidMount() {
        const data = await fetchData();

        this.setState({ data })
    }

    handleCountryChange = async (country) => {
        const data = await fetchData(country);

        this.setState({ data, country:country });
    }
    
    render() {
        const { data, country } = this.state;
        return (
            <div className={styles.container}>
                <img alt='COVID-19' className={styles.image} src={logo}/>
                <Cards data={data} />
                <CountryPicker handleCountryChange={this.handleCountryChange} />
                <Chart data={data} country={country}/>      
                <Footer/>          
            </div>
            
        );
    }
}

export default App;