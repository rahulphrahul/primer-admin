/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-no-undef */
import React from "react";
import { withStyles, makeStyles } from "@material-ui/core/styles";
import GridItem from "../../components/Grid/GridItem.js";
import GridContainer from "../../components/Grid/GridContainer.js";

import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import TextField from "@material-ui/core/TextField";


import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import Button from "@material-ui/core/Button";
import Card from "../../components/Card/Card.js";
import CardHeader from "../../components/Card/CardHeader.js";
import CardIcon from "../../components/Card/CardIcon.js";


const useStyles = makeStyles({
  table: {
    minWidth: 500,
  },
  header: {
    color: "green",
  },
  root: {
    minWidth: 275,
    border: "2px solid #000000",
  },
  title: {
    fontSize: 14,
    color: "black",
    align: "left",
    itemAlign: "left",
  },
  paper: {
    backgroundColor: "green",
    maxWidth: 4000,
  },
  checkboxesParent: {
    display: "flex",
    flexDirection: "row",
    marginLeft: 15,
  },
  checkboxes: {
    border: "1px solid #000",
  },
  filterParent: {
    display: "flex",
    justifyContent: "flex-start",
    alignItems: "center",
    flexDirection: "row",
  },
  grid1: {
    position: "sticky",
    left: 0,
  },
  grid2: {
    position: "sticky",
    right: 0,
  },
  textBox: {
    width: "100%",
  },
  headerContent: {
    flexDirection: "row",
  },
  griditems: {
    marginBottom:"15px",
  },
});

export default function Page1(props) {
  const classes = useStyles();

  const [data, setData] = React.useState({});

  React.useEffect(() => {
    if (props.data !== undefined) setData(props.data);
  }, []);

  return (
    <div style={{margin:"30px 0"}}>
      <center><center>
      <CardHeader style={{padding:"12px", width:"90%" ,boxShadow:"rgb(0 0 0 / 14%) 0px 4px 20px 0px, rgb(70 70 70 / 40%) 0px 7px 10px -5px",borderRadius:"5px"}} >
            
        <Typography className={classes.cardTitleWhite} style={{fontWeight:"bold",fontSize:"23px",lineHeight:"1.0"}}>
        Manage Trial Lessons Booking
        </Typography>
            </CardHeader>
            </center>

      <GridContainer style={{width:"100%" }}>
        <GridItem xs={12} sm={12} md={12}>
          <Card variant="outlined" style={{boxShadow:"rgb(0 0 0 / 14%) 0px 4px 20px 0px, rgb(70 70 70 / 1%) 0px 7px 10px -5px",borderRadius:"5px"}}>
            <CardContent className={classes.headerContent}>
              <center><span style={{fontSize:"22px",fontWeight:"bold",color:"#505050"}}>student Details</span></center>


              <GridContainer style={{padding:"15px"}}>
                <GridItem xs={12} sm={6} md={3} className={classes.griditems} >
                <Typography className={classes.griditems}>First Name
              <TextField
                id="outlined-basic"
                value={data.Student_Name}
                variant="outlined"
                className={classes.textBox}
              /></Typography>
                </GridItem>
                <GridItem xs={12} sm={6} md={3}>
                <Typography className={classes.griditems}>
                Last Name
                <TextField
                  id="outlined-basic"
                  value={data.Student_Name}
                  variant="outlined"
                  className={classes.textBox}
                />
              </Typography>
                </GridItem>
                <GridItem xs={12} sm={6} md={3}>
                <Typography className={classes.griditems}>
                Email id
                <TextField
                  id="outlined-basic"
                  variant="outlined"
                  className={classes.textBox}
                />
              </Typography>
                </GridItem>
                <GridItem xs={12} sm={6} md={3}>
                <Typography className={classes.griditems}>
                Contact Number:
                <TextField
                  id="outlined-basic"
                  variant="outlined"
                  className={classes.textBox}
                />
              </Typography>
                </GridItem>
                <GridItem xs={12} sm={6} md={3}>
                <Typography className={classes.griditems}>
                Lession Booked
                <TextField
                  id="outlined-basic"
                  value={data.Lession_Name}
                  variant="outlined"
                  className={classes.textBox}
                />
              </Typography>
                </GridItem>
                <GridItem xs={12} sm={6} md={3}>
                <Typography className={classes.griditems}>
                Training Purpose
                <TextField
                  id="outlined-basic"
                  value={data.Purpose}
                  variant="outlined"
                  className={classes.textBox}
                />
              </Typography>
                </GridItem>
                <GridItem xs={12} sm={6} md={3}>
                <Typography className={classes.griditems}>
                Preferred Date
                <TextField
                  id="outlined-basic"
                  value={data.Preffered_Date}
                  variant="outlined"
                  className={classes.textBox}
                />
              </Typography>
                </GridItem>
                <GridItem xs={12} sm={6} md={3}>
                <Typography className={classes.griditems}>
                Request Date
                <TextField
                  id="outlined-basic"
                  value={data.Request_Date}
                  variant="outlined"
                  className={classes.textBox}
                />
              </Typography>
                </GridItem>
                
              </GridContainer>
            </CardContent>
          </Card>
        </GridItem>
      </GridContainer>

      <GridContainer style={{width:"100%"}} >
        <GridItem xs={12} sm={12} md={6}>
          <Card variant="outlined" style={{boxShadow:"rgb(0 0 0 / 14%) 0px 4px 20px 0px, rgb(70 70 70 / 1%) 0px 7px 10px -5px",borderRadius:"5px"}} >
            <CardContent style={{padding:"15px"}}>
            <center><span style={{ fontSize:"22px", fontWeight: "bold", color:"#505050"}}>Lesson Booking Details</span></center>
              <Typography style={{paddingTop:"20px"}} className={classes.griditems}>
                Booking Status
                <TextField className={classes.griditems}
                  id="outlined-basic"
                  value={data.Status}
                  variant="outlined"
                  className={classes.textBox}
                />
              </Typography>
              <Typography className={classes.griditems}>
                Trainer
                <TextField
                  id="outlined-basic"
                  value={data.Trainer}
                  variant="outlined"
                  className={classes.textBox}
                />
              </Typography>
              <Typography className={classes.griditems}>
                Lession Date
                <TextField style={{width:"80%"}}
                  type="date"
                  className={classes.textBox}
                  InputLabelProps={{
                    shrink: true,
                  }}
                />
              </Typography>
              <Typography className={classes.griditems}>
                Lesson Time
                <TextField
                  type="time"
                  style={{width:"30%",marginRight:"15px",marginLeft:"25px"}}
                  InputLabelProps={{
                    shrink: true,
                  }}
                />
                <TextField
                  type="time"
                  style={{width:"30%"}}
                  InputLabelProps={{
                    shrink: true,
                  }}
                />
              </Typography>
              
              <Typography className={classes.griditems}>
                Lesson Mode
              <FormControl style={{width:"100%", marginBottom:"10px", marginBottom:"10px"}} variant="outlined" className={classes.formControl}>
        <Select
          native
          inputProps={{
            name: 'Lession Mode',
            id: 'outlined-age-native-simple',
          }}
        >
          <option value={"skype"}>Skype</option>
          <option value={"zoom"}>Zoom</option>
          <option value={"telephonic"}>Telephonic</option>
          <option value={"in-personal"}>In-Personal</option>
          <option value={"webinar"}>Webinar</option>
          <option value={"classroom"}>Classroom</option>
        </Select>
      </FormControl>
      </Typography>

              <Typography className={classes.griditems}>
                Email Tamplete
                <TextField
                  id="outlined-basic"
                  variant="outlined"
                  className={classes.textBox}
                />
              </Typography>
              <Typography className={classes.griditems}>
                Email Subject
                <TextField
                  id="outlined-basic"
                  variant="outlined"
                  className={classes.textBox}
                />
              </Typography>
              <Typography className={classes.griditems}>
                Email Message
                <TextField
                  id="outlined-multiline-static"
                  className={classes.textBox}
                  multiline
                  rows={8}
                  variant="outlined"
                />
              </Typography>
              <Typography className={classes.griditems}>Select Email Signature</Typography>
              <center><Button style={{backgroundColor:"#021c49",color:"#fff",minWidth:"100px",marginTop:"20px"}}>Confirm Booking</Button></center>
            </CardContent>
          </Card>
        </GridItem>

        <GridItem xs={12} sm={12} md={6}>
          <Card style={{boxShadow:"rgb(0 0 0 / 14%) 0px 4px 20px 0px, rgb(70 70 70 / 1%) 0px 7px 10px -5px",borderRadius:"5px"}} >
            <CardContent style={{padding:"15px"}}>
            <center><span style={{fontSize:"22px",fontWeight:"bold",color:"#505050"}}>Trainer Confirmation Details</span></center>


              <Typography style={{paddingTop:"20px"}} className={classes.griditems}>
                Email Template
                <TextField
                  id="outlined-basic"
                  variant="outlined"
                  className={classes.textBox}
                />
              </Typography>
              <Typography className={classes.griditems}>
                Email Message
                <TextField
                  id="outlined-multiline-static"
                  className={classes.textBox}
                  multiline
                  rows={8}
                  variant="outlined"
                />
              </Typography>
              <Typography className={classes.griditems}>Select Email Signature</Typography>
              <center><Button style={{backgroundColor:"#021c49",color:"#fff",minWidth:"100px",marginTop:"20px"}}>Confirm Booking</Button></center>
            </CardContent>
          </Card>
          <Card style={{boxShadow:"rgb(0 0 0 / 14%) 0px 4px 20px 0px, rgb(70 70 70 / 1%) 0px 7px 10px -5px",borderRadius:"5px"}} >
            <CardContent>
              <Typography className={classes.griditems}>
                Trainer's Notes
                <TextField
                  id="outlined-multiline-static"
                  className={classes.textBox}
                  multiline
                  rows={8}
                  variant="outlined"
                />
              </Typography>
              <center><Button style={{backgroundColor:"#021c49",color:"#fff",minWidth:"100px",marginTop:"20px"}}>Save Details</Button></center>
            </CardContent>
          </Card>
        </GridItem>
      </GridContainer>

     </center>
    </div>
  );
}
