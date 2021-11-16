import React, { useState, useRef } from "react";
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { useDispatch, useSelector } from "react-redux";
import { Redirect   } from 'react-router-dom';
import Form from "react-validation/build/form";
import Input from "react-validation/build/input";
import CheckButton from "react-validation/build/button";
import { login } from "../actions/auth";

const theme = createTheme(); 
const required = (value) => {
  if (!value) {
    return (
      <div className="alert alert-danger" role="alert">
        This field is required!
      </div>
    );
  }
};
  const Login = (props) => {
    const form = useRef();
    const checkBtn = useRef();
  
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [loading, setLoading] = useState(false);
  
    const { isLoggedIn } = useSelector(state => state.auth);
    // const { message } = useSelector(state => state.message);
  
    const dispatch = useDispatch();
  
    const onChangeUsername = (e) => {
      const username = e.target.value;
      setUsername(username);
    };
  
    const onChangePassword = (e) => {
      const password = e.target.value;
      setPassword(password);
    };
  
    const handleLogin = (e) => {
      e.preventDefault();
      setLoading(true);
  
      form.current.validateAll();
  
      if (checkBtn.current.context._errors.length === 0) {
        dispatch(login(username, password))
          .then(() => {
            props.history.push("./profile");
            window.location.reload();
          })
          .catch(() => {
            setLoading(false);
          });
      } else {
        setLoading(false);
      }
    };
  
    // if (isLoggedIn) {
    //   return <Redirect  to="/profile" />;
    // }
  return (
    <ThemeProvider theme={theme}>
      <Container className="logIn" component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign in
          </Typography>
          <Form onSubmit={handleLogin} ref={form}>
            <TextField
              margin="normal"
              required
              fullWidth
              type="text"
              id="username"
              label="Username"
              name="username"
              value={username}
              autoComplete="username"
              autoFocus
              onChange={onChangeUsername}
              validations={[required]}
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              type="password"
              value={password}
              autoComplete="current-password"
              onChange={onChangePassword} 
              validations={[required]}
            />
            <FormControlLabel
              control={<Checkbox value="remember" color="primary" />}
              label="Remember me"
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Sign In
            </Button>
            {loading && (
                <span className="spinner-border spinner-border-sm"></span>
              )}
           
            <div className="form-group">
              <div className="alert alert-danger" style={{backgroundColor:"#a37cf0",borderColor:"transparent"}} role="alert">
                </div>
            </div>
            <Grid container>
              <Grid item xs>
                <Link href="#" variant="body2">
                  Forgot password?
                </Link>
              </Grid>
              <Grid item>
                <Link href="#" variant="body2">
                  {"Don't have an account? Sign Up"}
                </Link>
              </Grid>
            </Grid>
          </Form>
        </Box>
     
      </Container>
    </ThemeProvider>
    
  );
}

export default Login;
