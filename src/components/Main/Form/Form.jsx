import React, { useState,  useContext,} from  'react';
import { TextField, Typography, Grid, Button, FormControl, InputLabel, Select, MenuItem } from '@material-ui/core';
import { v4 as uuidv4 } from 'uuid';
import formatDate from '../../../utils/formatDate';
import useStyles from './styles';

const initialState = {
  amount: '',
  category: '',
  type: 'Income',
  date: formatDate(new Date()),
};



const NewTransactionForm = () => {
    const classes = useStyles();
    const { addTransaction } = useContext(ExpenseTrackerContext);
    const [formData, setFormData] = useState(initialState);

    const createTransaction = () => {
        
        addTransaction({ ...formData, amount: Number(formData.amount), id: uuidv4() });
        setFormData(initialState);
      };


    return (
        <Grid container spacing={2}>
      
          <Grid item xs={12}>
            <Typography align="center" variant="subtitle2" gutterBottom>
            To create and expense !!!
            </Typography>
          </Grid>
          <Grid item xs={6}>
            <FormControl fullWidth>
              <InputLabel>Type</InputLabel>
              <Select value={formData.type} onChange={(e) => setFormData({ ...formData, type: e.target.value })}>
                <MenuItem value="Income">Income</MenuItem>
                <MenuItem value="Expense">Expense</MenuItem>
              </Select>
            </FormControl>
          </Grid>
          <Grid item xs={6}>
            <FormControl fullWidth>
              <InputLabel>Category</InputLabel>
              <Select value={formData.category} onChange={(e) => setFormData({ ...formData, category: e.target.value })}>
              <MenuItem value="business ">business</MenuItem>
                <MenuItem value="toys">toys </MenuItem>
              </Select>
            </FormControl>
          </Grid>
    
          <Grid item xs={6}>
            <TextField type="number" label="Amount" value={formData.amount} onChange={(e) => setFormData({ ...formData, amount: e.target.value })} fullWidth />
          </Grid>
          <Grid item xs={6}>
            <TextField fullWidth label="Date" type="date" value={formData.date} onChange={(e) => setFormData({ ...formData, date: formatDate(e.target.value) })} />
          </Grid>
          <Button className={classes.button} variant="outlined" color="primary" fullWidth onClick={createTransaction}>Create</Button>
        </Grid>
      );

};

export default NewTransactionForm;
