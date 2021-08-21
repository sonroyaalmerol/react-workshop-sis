import React from 'react';

import Grid from '@material-ui/core/Grid';
import GradesTable from '../component/GradesTable';
import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles(() => ({
  container: {
    width: '100vw',
    marginTop: '4rem'
  }
}))

const Grades = () => {
  const classes = useStyles();

  return (
    <Grid container justifyContent="center" alignItems="center" className={classes.container}>
      <Grid item>
        <GradesTable />
      </Grid>
    </Grid>
  );
}

export default Grades;