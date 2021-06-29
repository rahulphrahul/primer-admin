import React from 'react';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import SvgIcon from '@material-ui/core/SvgIcon';
import Card from "../../components/Card/Card.js";
import CardHeader from "../../components/Card/CardHeader.js";
import CardBody from "../../components/Card/CardBody.js";
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Checkbox from '@material-ui/core/Checkbox';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Page1 from '../TrialLessonsManage/ManageTrialLessons.js';
import { GridContainer, GridItem } from '../../components/index.js';

const GreenCheckbox = withStyles({
  root: {
    color: 'green',
    itemAlign: 'center',
    '&$checked': {
      color: 'green',
    },
  },
  checked: {},
})((props) => <Checkbox color="default" {...props} />);

const StyledTableCell = withStyles((theme) => ({
  head: {
    backgroundColor: "#ff9800",
    color: theme.palette.common.white,
    padding:"5px 0px",
  },
  body: {
    fontSize: 12,
    padding:"5px 10px",
  },
}))(TableCell);

const StyledTableRow = withStyles((theme) => ({
  root: {
    '&:nth-of-type(odd)': {
      backgroundColor: theme.palette.action.hover,
    },
  },
}))(TableRow);

function HomeIcon(props) {
  return (
    <SvgIcon {...props}>
      <path fill="none" d="M0 0h24v24H0V0z" /><g><path d="M14.06 9.02l.92.92L5.92 19H5v-.92l9.06-9.06M17.66 3c-.25 0-.51.1-.7.29l-1.83 1.83 3.75 3.75 1.83-1.83c.39-.39.39-1.02 0-1.41l-2.34-2.34c-.2-.2-.45-.29-.71-.29zm-3.6 3.19L3 17.25V21h3.75L17.81 9.94l-3.75-3.75z" /></g>
    </SvgIcon>
  );
}

function createData(ID, Status, Lession_Name, Student_Name, Request_Date, Purpose, Sourced_Form, Prefered_Date, Booking_Date, Lession_Time, Lession_Mode, Trainer, Enrolled) {
  return { ID, Status, Lession_Name, Student_Name, Request_Date, Purpose, Sourced_Form, Prefered_Date, Booking_Date, Lession_Time, Lession_Mode, Trainer, Enrolled };
}

let rows = [
  createData(1, 'New-Booking', 'IELTS', 'Ashok kumar', '25-jan-20', 'Study Abroad', 'Google', 'in 2 week', '4-feb-20', '2:30 PM - 3:30PM', 'Zoom', 'Preety Shah', 'No'),
  createData(2, 'IN-REVIEW', 'IELTS', 'Kishor BG', '26-jan-20', 'Career', 'Google', 'Anytime', '2-feb-20', '2:30 PM - 3:30PM', 'Skype', 'Gulam Ahmed', 'No'),
  createData(3, 'IN-REVIEW', 'TOEFL', 'Satish R', '27-jan-20', 'Study Abroad', 'Erxian Referral', '1 Month', '10-feb-20', '2:30 PM - 3:30PM', 'In-Person', 'Shallin K', 'No'),
  createData(4, 'IN-REVIEW', 'GRE', 'Rajan Kumar', '28-jan-20', 'Career', 'Erxian Referra', 'Anytime', '13-feb-20', '2:30 PM - 3:30PM', 'In-Person', 'Preety Shah', 'No'),
  createData(5, 'Scheduled', 'GRE', 'Ashish Duggai', '29-jan-20', 'Study Abroad', 'Facebook', 'Anytime', '16-feb-20', '4:00 PM - 5:30PM', 'Zoom', 'Preety Shah', 'No'),
  createData(6, 'Cancelled', 'SAT', 'Rahim Ahmed', '30-jan-20', 'Study Abroad', 'Google', 'In 2 week', '19-feb-20', '2:30 PM - 3:30PM', 'Zoom', 'Gulam Ahmed', 'No'),
  createData(7, 'Cancelled', 'PTE', 'Sam Peterson', '31-jan-20', 'Study Abroad', 'Erxian Abroad', 'In 2 week', '22-feb-20', '5:30 PM - 6:30PM', 'Classroom', 'Preety Shah', 'No'),
  createData(8, 'Completed', 'GMAT', 'Syed Ahmed', '1-feb-20', 'Career', 'Other', 'Anytime', '25-feb-20', '2:30 PM - 3:30PM', 'In-Person', 'Gulam Ahmed', 'Yes'),
  createData(9, 'IN-REVIEW', 'IELTS', 'Kalpana Srihari', '2-feb-20', 'Career', 'Google', '1 Month', '28-feb-20', '4:00 PM - 5:30PM', 'Skype', 'Preety Shah', 'no'),
  createData(10, 'Completed', 'SAT', 'Sylvia Robert', '3-feb-20', 'Career', 'Erxian Referral', 'In 2 week', '2-mar-20', '4:00 PM - 5:30PM', 'Skype', 'Shallin K', 'yes')
];

const useStyles = makeStyles({
  table: {
    minWidth: 10,
  },
  header: {
    align: 'center',
    color: 'green',
    maxWidth: 10,
  },
  root: {
    minWidth: 20,
    align: 'left',
    border: '2px solid #000000',
  },
  title: {
    fontSize: 14,
    color: 'black',
    align: 'center',
    itemAlign: 'center',
  },
  paper: {
    backgroundColor: 'green',
    maxWidth: 4000,
  },
  checkboxesParent: {
    display: 'flex',
    flexDirection: 'row',
    marginLeft: 15,
  },
  checkboxes: {
  },
  filterParent: {
    display: 'flex',
    justifyContent: 'flex-start',
    alignItems: 'center',
    flexDirection: 'row'
  },
  grid1: {
    position: 'sticky',
    left: 0,
  },
  grid2: {
    position: 'sticky',
    right: 0,
  }
});

export default function Erxian() {
  const classes = useStyles();

  const [state, setState] = React.useState({
    all: true,
    requestDate: false,
    bookingDate: false,
    startDate: '',
    endDate: '',
    redirect: false
  });

  const [newRows, setNewRows] = React.useState([])

  const [currRow, setCurrRow] = React.useState({})

  React.useEffect(() => {
    setNewRows([])
    if (state.all)
      setNewRows(rows)
    if (state.new)
      setNewRows([...newRows, rows.filter(item => item.Status === "New-Booking")])
    if (state.inReview)
      setNewRows([...newRows, rows.filter(item => item.Status === "IN-REVIEW")])
    if (state.scheduled)
      setNewRows([...newRows, rows.filter(item => item.Status === "Scheduled")])
    if (state.completed)
      setNewRows([...newRows, rows.filter(item => item.Status === "Completed")])
    if (state.canceled)
      setNewRows([...newRows, rows.filter(item => item.Status === "Cancelled")])
    if (state.requestDate)
      setNewRows([...newRows, rows.filter(item => ((item.Booking_Date >= state.startDate) && (item.Booking_Date <= state.endDate)))])
    if (state.bookingDate)
      setNewRows([...newRows, rows.filter(item => ((item.Request_Date >= state.startDate) && (item.Request_Date <= state.endDate)))])
  }, [state])

  React.useEffect(() => {
    if (!state.all)
      setNewRows([])
  }, [state.all])

  const handleChange = (event) => {
    setState({ ...state, [event.target.name]: event.target.checked });
  };

  if (state.redirect) {
    return <Page1 data={currRow} />
  }
  else {
    return (
      <div>

<GridContainer>
    <GridItem>




    </GridItem>
    <GridItem>
    <TableContainer component={Paper} style={{marginTop:"20px"}}>
          <Table className={classes.table} aria-label="customized table">
            <TableHead>
              <TableRow>
                <StyledTableCell align="center">ID</StyledTableCell>
                <StyledTableCell align="center">Student Name</StyledTableCell>
                <StyledTableCell align="center">DOB</StyledTableCell>
                <StyledTableCell align="center">Phone Number Name</StyledTableCell>
                <StyledTableCell align="center">View</StyledTableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {newRows.map((row) => (
                <StyledTableRow key={row.ID}>
                  <StyledTableCell align="center">{row.ID}</StyledTableCell>
                  <StyledTableCell align="center">{row.Lession_Name}</StyledTableCell>
                  <StyledTableCell align="center">{row.Student_Name}</StyledTableCell>
                  <StyledTableCell align="center">{row.Purpose}</StyledTableCell>

                  <StyledTableCell align="center"><HomeIcon onClick={() => { setCurrRow(row); setState({ ...state, redirect: true }) }} /></StyledTableCell>
                </StyledTableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
    </GridItem>
</GridContainer>








            <div style={{color:"#fff",padding:"10px",Width:"100%",background:"linear-gradient(60deg, #ffa726, #fb8c00)",boxShadow:"0 4px 20px 0 rgb(0 0 0 / 14%), 0 7px 10px -5px rgb(255 152 0 / 40%)",borderRadius:"5px"}}>
            <center>
        <Typography className={classes.cardTitleWhite} style={{fontSize:"22px",lineHeight:"1.0"}}>
        Edit Trial Lessons Booking
        </Typography></center>
        </div>


<Paper style={{padding:"10px",marginTop:"20px"}}>
<table>
  <center>
  <tr>
    <td colSpan="6" style={{color:"#fff",textAlign: "center",backgroundColor:"rgb(255 177 75)"}}>Filter By TRIAL LESSONS STATUS</td>
  </tr>
  <tr>
    <td colSpan="6" style={{border: "1px solid",textAlign: "center"}}>TRIAL LESSONS STATUS</td>
  </tr>
  <tr>
    <td style={{textAlign: "center",border: "1px solid",padding:"0px 7px"}}>
    <FormControlLabel className={classes.checkboxes} control={<GreenCheckbox checked={state.all} onChange={handleChange} name="all" />}/>
    <span style={{marginLeft:"-20px"}}> All</span>
    </td>
    <td style={{textAlign: "center",border: "1px solid",padding:"0px 7px"}}>
    <FormControlLabel className={classes.checkboxes} control={<GreenCheckbox name="new" onChange={handleChange} />} />
    <span style={{marginLeft:"-20px"}}>New</span></td>
    <td style={{textAlign: "center",border: "1px solid",padding:"0px 7px"}}>
    <FormControlLabel className={classes.checkboxes} control={<GreenCheckbox name="inReview" onChange={handleChange} />} />
    <span style={{marginLeft:"-20px"}}>In-Review</span></td>
    <td style={{textAlign: "center",border: "1px solid",padding:"0px 7px"}}>
    <FormControlLabel className={classes.checkboxes} control={<GreenCheckbox name="scheduled" onChange={handleChange} />} />
    <span style={{marginLeft:"-20px"}}>Sheduled</span></td>
    <td style={{textAlign: "center",border: "1px solid",padding:"0px 7px"}}><center>
    <FormControlLabel className={classes.checkboxes} control={<GreenCheckbox name="completed" onChange={handleChange} />} />
    <span style={{marginLeft:"-20px"}}>Complete</span></center></td>
    <td style={{textAlign: "center",border: "1px solid",padding:"0px 7px"}}><center>
    <FormControlLabel className={classes.checkboxes} control={<GreenCheckbox name="canceled" onChange={handleChange} />} />
    <span style={{marginLeft:"-20px"}}>Cancelled</span></center></td>
  </tr>

  </center>
</table>
</Paper>
<br/><br/>





        <TableContainer component={Paper} style={{marginTop:"-20px"}}>
          <Table className={classes.table} aria-label="customized table">
            <TableHead>
              <TableRow>
                <StyledTableCell align="center">ID</StyledTableCell>
                <StyledTableCell align="center">Edit</StyledTableCell>
                <StyledTableCell align="center">Student Name</StyledTableCell>
                <StyledTableCell align="center">Lesson Name</StyledTableCell>
                <StyledTableCell align="center">Student Name</StyledTableCell>
                <StyledTableCell align="center">Purpose</StyledTableCell>
                <StyledTableCell align="center">Request Date</StyledTableCell>
                <StyledTableCell align="center">Sourced Form</StyledTableCell>
                <StyledTableCell align="center">Prefered Date</StyledTableCell>
                <StyledTableCell align="center">Booking Date</StyledTableCell>
                <StyledTableCell style={{minWidth:"115px"}} align="center">Lession Time</StyledTableCell>
                <StyledTableCell align="center">Lession Mode</StyledTableCell>
                <StyledTableCell align="center">Trainer</StyledTableCell>
                <StyledTableCell style={{paddingRight:"5px"}} align="center">Enrolled</StyledTableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {newRows.map((row) => (
                <StyledTableRow key={row.ID}>
                  <StyledTableCell align="center">{row.ID}</StyledTableCell>
                  <StyledTableCell align="center"><HomeIcon onClick={() => { setCurrRow(row); setState({ ...state, redirect: true }) }} /></StyledTableCell>
                  <StyledTableCell align="center">{row.Status}</StyledTableCell>
                  <StyledTableCell align="center">{row.Lession_Name}</StyledTableCell>
                  <StyledTableCell align="center">{row.Student_Name}</StyledTableCell>
                  <StyledTableCell align="center">{row.Purpose}</StyledTableCell>
                  <StyledTableCell align="center">{row.Request_Date}</StyledTableCell>
                  <StyledTableCell align="center">{row.Sourced_Form}</StyledTableCell>
                  <StyledTableCell align="center">{row.Prefered_Date}</StyledTableCell>
                  <StyledTableCell align="center">{row.Booking_Date}</StyledTableCell>
                  <StyledTableCell align="center">{row.Lession_Time}</StyledTableCell>
                  <StyledTableCell align="center">{row.Lession_Mode}</StyledTableCell>
                  <StyledTableCell align="center">{row.Trainer}</StyledTableCell>
                  <StyledTableCell align="center">{row.Enrolled}</StyledTableCell>
                </StyledTableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>




      </div>
    );
  }
}