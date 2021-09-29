import React , {  useContext }  from 'react';
import { Card, CardHeader, CardContent, Typography, Grid, Divider } from '@material-ui/core';
import { ExpenseTrackerContext } from '../../context/context';
import useStyles from './styles';
import Form from './Form/Form';
import List from './List/List';

const ExpenseTracker = () => {
    const classes = useStyles();
    const { balance } = useContext(ExpenseTrackerContext);

    return (
        <Card className={classes.root}>
          <CardHeader title="Expense Tracker" subheader="Powered by Speechly" />
          <CardContent>
            <Typography align="center" variant="h5">`Total Balance N${balance}`</Typography>
            <Typography variant="subtitle1" style={{ lineHeight: '1.5em', marginTop: '20px' }}>
              {/* <InfoCard /> */} infocard gets here 
            </Typography>
            <Divider className={classes.divider} />
            {/* form component gets here  */}
             <Form />
          </CardContent>
          <CardContent className={classes.cartContent}>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                {/* list component gets here  */}
                 <List />
              </Grid>
            </Grid>
          </CardContent>
        </Card>
      );
    };
    
    export default ExpenseTracker;
    