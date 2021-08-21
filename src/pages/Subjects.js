import React from 'react';

import Grid from '@material-ui/core/Grid';
import CircularProgress from '@material-ui/core/CircularProgress';
import SubjectsTable from '../component/SubjectsTable';
import { makeStyles } from '@material-ui/styles';
import { useAuth } from '../utils/useAuth';

const useStyles = makeStyles(() => ({
  container: {
    width: '100vw',
    marginTop: '4rem'
  }
}))

const Subjects = () => {
  const classes = useStyles();
  const { subjects } = useAuth();
  const [data, setData] = React.useState([]);
  const [loading, setLoading] = React.useState(true);

  React.useEffect(() => {
    setLoading(true);
    subjects().then((data) => {
      setLoading(false);
      setData(data);
    });
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Grid container justifyContent="center" alignItems="center" className={classes.container}>
      <Grid item>
        { !loading ? (
          <SubjectsTable data={data} />
        ) : (
          <CircularProgress />
        ) }
      </Grid>
    </Grid>
  );
}

export default Subjects;