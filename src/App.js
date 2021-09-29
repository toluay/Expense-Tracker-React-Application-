import React, { useEffect, useRef } from 'react';
import { Grid } from '@material-ui/core';
import { Details} from './components';

const App = () => {
    const classes = useStyles();

    return (
        <div>
<Grid className={classes.grid} container spacing={0} alignItems="center" justify="center" style={{ height: '100vh'}}>
        <Grid item xs={12} sm={4} className={classes.mobile}>
          <Details title="Income" />
        </Grid>
        <Grid ref={main} item xs={12} sm={3} className={classes.main}>
          {/* <Main /> */}
          main component here 
        </Grid>
        <Grid item xs={12} sm={4} className={classes.desktop}>
          <Details title="Income" />
        </Grid>
        <Grid item xs={12} sm={4} className={classes.last}>
          <Details title="Expense" />
        </Grid>
        </Grid>

    </div>
  );
};

export default App;