
import React, { Component } from 'react'

import Chards from './Components/Cards/Cards';
import Charts from './Components/Charts/Charts';
import Countrypicker from './Components/Countrypicker/Countrypicker';
import { fetchdata } from './indexx'
import styles from './Indd.module.css'
import image from './images/image.png';
export class App extends Component {
  state = {
    data: {},
    country: ''
  }
   
  async componentDidMount() {
    const data1 = await  fetchdata();
   this.setState({data: data1})
 }
 handleCountryChange = async (country) => {
  const data1 = await  fetchdata(country);
  this.setState({ data: data1, country: country });

   console.log(data1)
  

  //this.setState({ data, country: country });
}
  render(){
    const {data, country} = this.state
  return (
    <div className="App">
    
      <div className={styles.container} >
      <img className={styles.image} src={image} alt="COVID-19" />
    <Chards data={data} />
    <Countrypicker handleCountryChange={this.handleCountryChange} />
    <Charts data={data}  country={country} />
    </div>
    </div>
  );
 
}}

export default App;
