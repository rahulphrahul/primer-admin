import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TablePagination from '@material-ui/core/TablePagination';
import TableRow from '@material-ui/core/TableRow';
import Card from "../../components/Card/Card.js";
import CardHeader from "../../components/Card/CardHeader.js";
import CardBody from "../../components/Card/CardBody.js";
import AddIcon from "@material-ui/icons/Add";
import Grid from "@material-ui/core/Grid";
import GridItem from "../../components/Grid/GridItem.js";
import GridContainer from "../../components/Grid/GridContainer.js";
import Typography from "@material-ui/core/Typography";
import Button from "../../components/CustomButtons/Button.js";
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import TextField from "@material-ui/core/TextField";

import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import IconButton from '@material-ui/core/IconButton';
import { useAlert } from 'react-alert'

const columns = [
  { id: 'Time', label: 'TIME',align: 'center', minWidth: 10 },
  { id: 'MeetingSubject', label: 'MEETING  SUBJECT',align: 'center', minWidth: 500 },
  
];

function createData(Time, MeetingSubject,size ,population) {
  const density = population / size;
  return { Time, MeetingSubject, size, density };
}

const rows = [
    createData("00:00 AM - 00:30 AM", 'Institution'),
    createData("00:30 AM - 01:00 AM", ''),
    createData("01:00 AM - 01:30 AM", 'Admission'),
    createData("01:30 AM - 02:00 AM", 'Study materials'),
    createData("02:00 AM - 02:30 AM", 'caneda entry'),
    createData("02:30 AM - 03:00 AM", 'fees discussion'),
    createData("03:00 AM - 03:30 AM", 'Institution'),
    createData("03:30 AM - 04:00 AM", ''),
    createData("04:00 AM - 04:30 AM", 'Admission'),
    createData("04:30 AM - 05:00 AM", ''),
    createData("05:00 AM - 05:30 AM", ''),
    createData("05:30 AM - 06:00 AM", ''),
    createData("06:00 AM - 06:30 AM", 'Admission'),
    createData("06:30 AM - 07:00 AM", 'Institution'),
    createData("07:00 AM - 07:30 AM", 'Institution'),
    createData("07:30 AM - 08:00 AM", 'Admission'),
    createData("08:00 AM - 08:30 AM", ''),
    createData("08:30 AM - 09:00 AM", 'Study materials'),
    createData("09:00 AM - 09:30 AM", 'caneda entry'),
    createData("09:30 AM - 10:00 AM", 'fees discussion'),
    createData("10:00 AM - 10:30 AM", 'Institution'),
    createData("10:30 AM - 11:00 AM", 'Admission'),
    createData("11:00 AM - 11:30 AM", 'Institution'),
    createData("11:30 AM - 12:00 AM", ''),
    createData("12:00 PM - 12:30 AM", 'Admission'),
    createData("12:30 PM - 01:00 PM", ''),
    createData("01:00 PM - 01:30 PM", 'Admission'),
    createData("01:30 PM - 02:00 PM", ''),
    createData("02:00 PM - 02:30 PM", 'Institution'),
    createData("02:30 PM - 03:00 PM", ''),
    createData("03:00 PM - 03:30 PM", 'Institution'),
    createData("03:30 PM - 04:00 PM", 'Admission'),
    createData("04:00 PM - 04:30 PM", ''),
    createData("04:30 PM - 05:00 PM", ''),
    createData("05:00 PM - 05:30 PM", 'Admission'),
    createData("05:30 PM - 06:00 PM", ''),
    createData("06:00 PM - 06:30 PM", ''),
    createData("06:30 PM - 07:00 PM", ''),
    createData("07:00 PM - 07:30 PM", 'Institution'),
    createData("07:30 PM - 08:00 PM", 'Institution'),
    createData("08:00 PM - 08:30 PM", ''),
    createData("08:30 PM - 09:00 PM", ''),
    createData("09:00 PM - 09:30 PM", ''),
    createData("09:30 PM - 10:00 PM", ''),
    createData("10:00 PM - 10:30 PM", 'Institution'),
    createData("10:30 PM - 11:00 PM", 'Institution'),
    createData("11:00 PM - 12:30 PM", ''),
    createData("11:30 PM - 12:00 PM", 'Institution'),
    
];

const useStyles = makeStyles({
  root: {
    width: '100%',
  },
  container: {
    maxHeight: 440,
  },
  griditems: {
    marginBottom:"18px",
    width:"100%"
  },
});

export default function MeetingNew() {
  const classes = useStyles();
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };
  const alert = useAlert()

  return (
      <>


            <div style={{marginBottom:"22px",color:"#fff",padding:"10px 0",Width:"100%",background:"linear-gradient(60deg, #ffa726, #fb8c00)",boxShadow:"0 4px 20px 0 rgb(0 0 0 / 14%), 0 7px 10px -5px rgb(255 152 0 / 40%)",borderRadius:"5px"}}>
            <center>
            <Typography>
    Book New Meeting
  </Typography></center>
        </div>

        <GridContainer>
        <GridItem xs={12} sm={12} md={5}>
<Paper style={{padding:"5px"}}>
        

            <div style={{width:"100%",height:"100%",border:"1px solid rgb(239 184 108)"}}>
          <div style={{width:"100%",padding:"5px 0",color:"#fff",backgroundColor:"rgb(239 184 108)"}}>
          <center>Meeting Calender</center>
          </div>
          
                  <table style={{width:"100%",height:"100%"}}>
                    <tr>
                      <td><center><IconButton style={{color:"#646465"}} aria-label="next">
                                      <ArrowBackIosIcon />
                                  </IconButton>
                      </center></td>

                      <td style={{width:"65%"}}><center>
                        
                        <TextField
                  style={{width:"60%"}}
                  type="date"
                  className={classes.textBox}
                  InputLabelProps={{
                    shrink: true,
                  }}
                />
                        </center></td>
                      
                      <td><center><IconButton style={{color:"#646465"}} aria-label="next">
                                      <ArrowForwardIosIcon />
                                  </IconButton>
                        </center></td>
                    </tr>
                  </table>



                  <Paper className={classes.root}>
      <TableContainer className={classes.container}>
        <Table stickyHeader aria-label="sticky table">
          <TableHead>
            <TableRow>
              {columns.map((column) => (
                <TableCell
                  key={column.id}
                  align={column.align}
                  style={{ padding:"10px 0px",width:"500px",background:"rgb(239 184 108)", color:"#fff"}}
                >
                  {column.label}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((row) => {
              return (
                <TableRow hover role="checkbox" tabIndex={-1} key={row.code}>
                  {columns.map((column) => {
                    const value = row[column.id];
                    return (
                      <TableCell style={{padding:"6px 0"}}
                       key={column.id} align={column.align}>
                        {column.format && typeof value === 'number' ? column.format(value) : value}
                      </TableCell>
                    );
                  })}
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        rowsPerPageOptions={[6, 12, 24, 48]}
        component="div"
        count={rows.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onChangePage={handleChangePage}
        onChangeRowsPerPage={handleChangeRowsPerPage}
      />
    </Paper>
        </div>
<center>
       
          <table style={{marginTop:"10px",border:"1px solid #848383"}}><tr>
            <td style={{backgroundColor:"#0f0",color:"#fff"}}>Sheduled
    </td><td style={{backgroundColor:"#fff",color:"#000",width:"50%"}}><center>Free</center>
    </td></tr></table>
    </center>
        </Paper>

        </GridItem>
  <GridItem xs={12} sm={12} md={7}>


<Paper>
<center>
  
  <table style={{padding:"20px"}}>
    <tr>
        <td colSpan={2}>
          <center><Typography style={{fontWeight:"bold",fontSize:"20px",color:"#656765"}}>Book Meeting</Typography></center>
          </td>
      </tr><tr>
      <td style={{width:"35%"}}><Typography style={{paddingTop:"20px"}} className={classes.griditems}>
                Search for Registered Student
              </Typography></td>
      <td style={{paddingLeft:"10px"}}><TextField style={{width:"100%"}} className={classes.griditems}
                  id="outlined-basic"
                  variant="outlined"
                  className={classes.textBox}
                /></td>
    </tr>
    <tr>
    <td style={{width:"35%"}}><Typography className={classes.griditems}>
                Branch
              </Typography></td>
      <td style={{paddingLeft:"10px"}}>
        <FormControl style={{width:"100%", marginBottom:"10px", marginBottom:"10px"}} variant="outlined" className={classes.formControl}>
        <Select
          native
          inputProps={{
            name: 'branch',
            id: 'outlined-age-native-simple',
          }}
        >
          <option value={"RBL Nagar"}>RBL Nagar, Bangalore</option>
          <option value={"Whitefield"}>Whitefield, Bangalore</option>
          <option value={"Nungambakkam"}>Nungambakkam, Chennai</option>
          <option value={"JP Nagar"}>JP Nagar, Hyderabad</option>
        </Select>
      </FormControl></td>
    </tr>
    <tr>
    <td style={{width:"35%"}}><Typography className={classes.griditems}>
                First Name
              </Typography></td>
      <td style={{paddingLeft:"10px"}}>
        <TextField
                 style={{width:"100%"}}
                  id="outlined-basic"
                  variant="outlined"
                  className={classes.textBox}
                /></td>
    </tr>
    <tr>
    <td style={{width:"35%"}}><Typography className={classes.griditems}>
                Last Name
              </Typography></td>
      <td style={{paddingLeft:"10px"}}>
        <TextField
                  style={{width:"100%"}}
                  id="outlined-basic"
                  variant="outlined"
                  className={classes.textBox}
                /></td>
    </tr>
    <tr>
    <td style={{width:"35%"}}><Typography className={classes.griditems}>
                Email Address
              </Typography></td>
      <td style={{paddingLeft:"10px"}}>
        <TextField
                  style={{width:"100%"}}
                  id="outlined-basic"
                  variant="outlined"
                  className={classes.textBox}
                /></td>
    </tr>
    <tr>
    <td style={{width:"25%"}}><Typography className={classes.griditems}>
                Contact Number
                
              </Typography></td>
      <td style={{paddingLeft:"10px"}}>
        <FormControl style={{width:"25%"}} variant="outlined" className={classes.formControl}>
        <Select
        style={{padding:"0px 0px"}}
          native
          inputProps={{
            name: 'meetingStatus',
            id: 'outlined-age-native-simple',
          }}
        >
          <option value={"+91"}>+ 91</option>
          <option value={"+86"}>+ 86</option>
          <option value={"+56"}>+ 56</option>
          <option value={"+09"}>+ 09</option>
          <option value={"+45"}>+ 45</option>
        </Select>
      </FormControl>
        <TextField
                  required
                  style={{width:"70%",marginLeft:"5%"}}
                  id="outlined-basic"
                  variant="outlined"
                  label="PH Number"
                  type="number"
                  InputLabelProps={{
                    shrink: true,
                  }}
                  className={classes.textBox}
                /></td>
    </tr><tr>
    <td style={{width:"35%"}}>
      <Typography className={classes.griditems}>
                Meeting Type
              </Typography></td>
      <td style={{paddingLeft:"10px"}}>
      <FormControl style={{width:"100%", marginBottom:"10px", marginBottom:"10px"}} variant="outlined" className={classes.formControl}>
        <Select
          native
          inputProps={{
            name: 'meetingType',
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
      </FormControl></td>
    </tr><tr>
    <td style={{width:"25%"}}>
    <Typography className={classes.griditems}>
                Meeting Date
              </Typography>
    </td>
      <td style={{paddingLeft:"10px"}}>
      <TextField
                  required
                  variant="outlined"
                  style={{width:"100%"}}
                  type="date"
                  className={classes.textBox}
                  InputLabelProps={{
                    shrink: true,
                  }}
                />
      </td>
    </tr><tr>
    <td style={{width:"25%"}}>
    <Typography className={classes.griditems}>
                Meeting Time
              </Typography>
    </td>
      <td style={{paddingLeft:"10px"}}>
      <TextField
                  required
                  variant="outlined"
                  type="time"
                  style={{width:"45%",marginRight:"10%"}}
                  InputLabelProps={{
                    shrink: true,
                  }}
                />
                <TextField
                  required
                  variant="outlined"
                  type="time"
                  style={{width:"45%"}}
                  InputLabelProps={{
                    shrink: true,
                  }}
                />
      </td>
    </tr><tr>
    <td style={{width:"35%"}}>
    <Typography className={classes.griditems}>
                Meeting Status
              </Typography>
    </td>
      <td style={{paddingLeft:"10px"}}>
      <FormControl style={{width:"100%"}} variant="outlined" className={classes.formControl}>
        <Select
          native
          inputProps={{
            name: 'meetingStatus',
            id: 'outlined-age-native-simple',
          }}
        >
          <option value={"Sheduled"}>Scheduled</option>
          <option value={"Completed"}>Completed</option>
          <option value={"Postponed"}>Postponed</option>
          <option value={"Advanced"}>Advanced</option>
          <option value={"Cancelled"}>Cancelled</option>
        </Select>
      </FormControl>
      </td>
    </tr><tr>
    <td style={{width:"35%"}}>
    <Typography className={classes.griditems}>
                Meeting Host
                </Typography>
    </td>
      <td style={{paddingLeft:"10px"}}>
      <FormControl style={{width:"100%"}} variant="outlined" className={classes.formControl}>
        <Select
          native
          inputProps={{
            name: 'meetingStatus',
            id: 'outlined-age-native-simple',
          }}
        >
          <option value={"Priya"}>Priya Prakash(Education Advisor)</option>
          <option value={"Abdul"}>Abdul Hakeem(Center Director)</option>
          <option value={"Sam"}>Sam Jackson(Education Advisor)</option>
        </Select>
      </FormControl>
      </td>
    </tr>
    <tr>
    <td style={{width:"35%"}}>
    <Typography className={classes.griditems}>
                Meeting Email Template
              </Typography>
    </td>
      <td style={{paddingLeft:"10px"}}>
      <FormControl style={{width:"100%"}} variant="outlined" className={classes.formControl}>
        <Select
          native
          inputProps={{
            name: 'meetingStatus',
            id: 'outlined-age-native-simple',
          }}
        >
          <option value={"NewAppointment"}>New Appointment</option>
          <option value={"AppointmentCancellation"}>Appointment Cancellation</option>
          <option value={"AppointmentResheduled"}>Appointment Resheduled</option>
          <option value={"AppointmentAdvanced"}>Appointment Advanced</option>
        </Select>
      </FormControl>
      </td>
    </tr>
    <tr>
    <td style={{width:"35%"}}>
    <Typography className={classes.griditems}>
                Meeting Email Subject
              </Typography>
    </td>
      <td style={{paddingLeft:"10px"}}>
      <TextField
                  style={{width:"100%"}}
                  id="outlined-multiline-static"
                  className={classes.textBox}
                  multiline
                  rows={3}
                  variant="outlined"
                />
      </td>
    </tr>
    <tr>
      <td colSpan={2}><center><Button onClick={() => {
        alert.success("Booking Successful");
      }} style={{backgroundColor:"#ff9800",minWidth:"100px",marginTop:"20px"}}>Book</Button></center></td>
      </tr>
  </table>
  
  
  

              
              </center>
</Paper>
</GridItem>
        </GridContainer>

    

    </>
  );
}