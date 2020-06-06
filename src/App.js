import React from 'react'

import { Cards, Chart, CountryPicker } from './components';
import styles from './App.module.css';
import { fetchData } from './api'

import coronaImage from './images/image.png'

class App extends React.Component{
    state = {
        data: {},
        country: '',
    }
    async componentDidMount(){
        const fecthedData = await fetchData();
        this.setState({data: fecthedData})
    }

    handleCountryChange = async (country) => {
        const fecthedData = await fetchData(country);
        
        this.setState({data: fecthedData, country: country})
    }
    render(){
        const {data} = this.state;
        return(
            <div className={styles.container}>
                <img className={styles.image} alt="COVID-19" src={coronaImage} />
                <Cards  data={data}/>
                <CountryPicker handleCountryChange={this.handleCountryChange}/>
                <Chart data={data} country={this.state.country}/>
            </div>
        )
    }
}

export default App;