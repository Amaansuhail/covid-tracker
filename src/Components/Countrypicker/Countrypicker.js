import React , {useState , useEffect } from 'react'
import {NativeSelect , FormControl} from '@material-ui/core'
import NativeSelectInput from '@material-ui/core/NativeSelect/NativeSelectInput'
import {fetchh} from '../../indexx.js'
import styles from './Countrypicker.module.css'
const Countrypicker = ({handleCountryChange})=> {
    const [fetchedcountries , setfetchedcountries] = useState([])
    useEffect(() => {
        const countryapi  = async () => {
            setfetchedcountries(await fetchh())
        }
    countryapi();

    }, [setfetchedcountries]);
   // console.log(fetchedcountries)
    
    return (
        <FormControl  className={styles.formControl}>
            <NativeSelect defaultValue="" onChange={(e) => handleCountryChange(e.target.value)}>s
                <option value="global">Global</option>
                {fetchedcountries.map((country, i) => <option key={i} value={country}>{country}</option>)}
            </NativeSelect>
        </FormControl>
    )
}
export default Countrypicker