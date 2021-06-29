import Button from "@material-ui/core/Button";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import React from "react";
import TextField from "@material-ui/core/TextField";
import Typography from "@material-ui/core/Typography";
import classNames from "classnames";
import { makeStyles } from "@material-ui/core/styles";
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import Input from '@material-ui/core/Input';
import OutlinedInput from '@material-ui/core/OutlinedInput';
import InputAdornment from '@material-ui/core/InputAdornment';
import IconButton from '@material-ui/core/IconButton';
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';
import clsx from 'clsx';


const useStyles = makeStyles(theme => ({
  card: {
    overflow: "visible"
  },
  session: {
    position: "relative",
    zIndex: 4000,
    minHeight: "100vh",
    display: "flex",
    flexDirection: "column"
  },
  background: {
    backgroundImage: "url(" + "https://cdn.hipwallpaper.com/i/80/68/Qyu80B.jpg" + ")"
  },
  content: {
    padding: `40px ${theme.spacing(1)}px`,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flex: "1 0 auto",
    flexDirection: "column",
    minHeight: "100%",
    textAlign: "center"
  },
  avatar: {
    position: "relative",
    display: "block",
    margin: "-75px auto 0"
  },
  lockscreenWrapper: {
    flex: "none",
    maxWidth: "280px",
    width: "100%",
    margin: "0 auto"
  },
  fullWidth: {
    width: "100%"
  },
  logo: {
    display: "flex",
    flexDirection: "column"
  }
}));

const Lockscreen = () => {
  const classes = useStyles();
  const [values, setValues] = React.useState({
    amount: '',
    password: '',
    weight: '',
    weightRange: '',
    showPassword: false,
  });

  const handleChange = (prop) => (event) => {
    setValues({ ...values, [prop]: event.target.value });
  };

  const handleClickShowPassword = () => {
    setValues({ ...values, showPassword: !values.showPassword });
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  return (
    <div className={classNames(classes.session, classes.background)}>
      <div className={classes.content}>
        <div className={classes.lockscreenWrapper}>
          <Card className={classes.card}>
            <CardContent>
              <form>
                <div className={classes.avatar}>
                  <img
                    src={`${process.env.PUBLIC_URL}/static/images/avatar.png`}
                    alt="user"
                    title="user"
                  />
                </div>
                <Typography variant="body1" className="mt-1">
                   Admin
                </Typography>
                
                <FormControl className={clsx(classes.margin, classes.textField)} variant="outlined">
          <InputLabel htmlFor="outlined-adornment-password">Password</InputLabel>
          <OutlinedInput
          className={classNames(classes.textField, "mt-0 mb-1")}
            id="outlined-adornment-password"
            type={values.showPassword ? 'text' : 'password'}
            value={values.password}
            onChange={handleChange('password')}
            margin="normal"
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={handleClickShowPassword}
                  onMouseDown={handleMouseDownPassword}
                  edge="end"
                >
                  {values.showPassword ? <Visibility /> : <VisibilityOff />}
                </IconButton>
              </InputAdornment>
            }
            labelWidth={70}
          />
        </FormControl>
                <Button variant="contained" color="primary" type="submit" href="/">
                  Unlock
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Lockscreen;
