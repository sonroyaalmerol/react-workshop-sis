import React from 'react';

import Grid from '@material-ui/core/Grid';
import CurriculumTable from '../component/CurriculumTable';
import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles(() => ({
  container: {
    width: '100vw',
    marginTop: '4rem'
  }
}))

const Curriculum = () => {
  const classes = useStyles();

  return (
    <Grid container justifyContent="center" alignItems="center" className={classes.container}>
      <Grid item>
        <CurriculumTable />
      </Grid>
    </Grid>
  );
}

export default Curriculum;