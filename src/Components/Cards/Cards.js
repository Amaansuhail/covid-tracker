import React from 'react'
import {Card, CardContent , Typography , Grid} from '@material-ui/core'
import Countup from 'react-countup'
import Countrypicker from '../Countrypicker/Countrypicker';
import  cx from 'classnames'
import styles from './Cards.module.css'
const Chards = ({data:{confirmed , recovered , deaths , lastUpdate}})=> {
    if(!confirmed)
    {
        return 'loading..';
    }

    
    return (
      <div className={styles.container}> 
      <Grid container spacing={3} justify="center">
        <Grid item component={Card} xs={12} md={3} className={cx(styles.card , styles.infected)}>
          <CardContent>
              <Typography color="textSecondary" gutterBottom>Infected </Typography>
              <Typography varaint="h2">
              <Countup 
              start={0} 
              end={confirmed.value} 
             duration={2.5}
             separator=","
              />
               </Typography>
              <Typography color="textSecondary">{new Date(lastUpdate).toDateString() }</Typography>
              <Typography varaint="body2">Number of ative cases of COVID-19 </Typography>
          </CardContent>

        </Grid>
        <Grid item component={Card} xs={12} md={3} className={cx(styles.card , styles.recovered)}>
          <CardContent>
              <Typography color="textSecondary" gutterBottom>Recovered </Typography>
              <Typography varaint="h2">
              <Countup 
              start={0} 
              end={recovered.value} 
             duration={2.5}
             separator=","
              />
               </Typography>
               <Typography color="textSecondary">{new Date(lastUpdate).toDateString() }</Typography>
              <Typography varaint="body2">Number of recoveries from COVID-19 </Typography>
          </CardContent>

        </Grid>
        <Grid item component={Card} xs={12} md={3} className={cx(styles.card , styles.deaths)}>
          <CardContent>
              <Typography color="textSecondary" gutterBottom>Deaths </Typography>
              <Typography varaint="h2">
              <Countup 
              start={0} 
              end={deaths.value} 
             duration={2.5}
             separator=","
              />
               </Typography>
               <Typography color="textSecondary">{new Date(lastUpdate).toDateString() }</Typography>
              <Typography varaint="body2">Number of deaths caused by COVID-19 </Typography>
          </CardContent>

        </Grid>


      </Grid>
      </div>
    )
}
export default Chards