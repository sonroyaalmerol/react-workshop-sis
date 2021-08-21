import React from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardHeader from '@material-ui/core/CardHeader';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/styles';
import { useHistory } from 'react-router';

import { useAuth } from '../utils/useAuth';

const useStyles = makeStyles(() => ({
  container: {
    width: '100vw',
    marginTop: '4rem'
  }
}))

const Login = () => {
  const classes = useStyles();
  const history = useHistory();

  const [username, setUsername] = React.useState('');
  const [password, setPassword] = React.useState('');

  const { login, user } = useAuth();

  React.useEffect(() => {
    console.log(user);
  }, [user])

  return (
    <Grid container justifyContent="center" alignItems="center" className={classes.container}>
      <Grid item>
        <Card>
          <CardHeader title="Log In" />
          <CardContent>
            <Grid container direction="column" spacing={2}>
              <Grid item>
                <TextField label="Username" variant="outlined" value={username} onChange={(event) => setUsername(event.target.value)} />
              </Grid>
              <Grid item>
                <TextField label="Password" type="password" variant="outlined" value={password} onChange={(event) => setPassword(event.target.value)} />
              </Grid>
              <Grid item>
                <Button onClick={() => {
                  login(username, password).then(() => history.push('/subjects'))
                }}>Log in</Button>
              </Grid>
            </Grid>
          </CardContent>
        </Card>
      </Grid>
    </Grid>
  );
}

export default Login;