import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TablePagination from "@material-ui/core/TablePagination";
import TableRow from "@material-ui/core/TableRow";
import { Link } from "react-router-dom";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import MenuItem from "@material-ui/core/MenuItem";
import { talkingTopicsData } from "../../assets/data";
import DeleteIcon from "@material-ui/icons/Delete";
//import DatePicker from "react-date-picker";
import DateRangeIcon from "@material-ui/icons/DateRange";
import BackupIcon from "@material-ui/icons/Backup";

import Card from "../../components/Card/Card.js";
import CardHeader from "../../components/Card/CardHeader.js";
import CardBody from "../../components/Card/CardBody.js";
import Typography from "@material-ui/core/Typography";
import AddIcon from "@material-ui/icons/Add";
import Grid from "@material-ui/core/Grid";

const styles = makeStyles((theme) => ({
  root: {
    "& .MuiTextField-root": {
      margin: theme.spacing(2),
      width: "25ch",
    },
  },
}));

const talking_Topic_Group = [
  {
    value: "Counselling",
    label: "Counselling",
  },
  {
    value: "Profile",
    label: "Profile",
  },
  {
    value: "Admission",
    label: "Admission",
  },
  {
    value: "Test Preparation",
    label: "Test Preparation",
  },
  {
    value: "Documentation",
    label: "Documentation",
  },
  {
    value: "Scholarship",
    label: "Scholarship",
  },
  {
    value: "Visa",
    label: "Visa",
  },
  {
    value: "Accomodation",
    label: "Accomodation",
  },
  {
    value: "Insurance",
    label: "Insurance",
  },
  {
    value: "Pre-Departure",
    label: "Pre-Departure",
  },
];

const windowPositions = [
  {
    value: "left",
    label: "left",
  },
  {
    value: "right",
    label: "right",
  },
  {
    value: "top",
    label: "top",
  },
  {
    value: "bottom",
    label: "bottom",
  },
  {
    value: "bottom-left",
    label: "bottom-left",
  },
  {
    value: "bottom-right",
    label: "bottom-right",
  },
];

const fadingTimes = [
  {
    value: "5 seconds",
    label: "5 seconds",
  },
  {
    value: "10 seconds",
    label: "10 seconds",
  },
];

const columns = [
  { id: "id", label: "ID", minWidth: 2 ,align: "center",},
  { id: "edit", label: "Edit", minWidth: 2 ,align: "center",},
  {
    id: "windowType",
    label: "Talking Topic Group",
    minWidth: 20,
    align: "center",
  },
  {
    id: "layoutType",
    label: "Talking Topic",
    minWidth: 20,
    align: "center",
  },
  {
    id: "layoutText",
    label: "Total Discussion Topics",
    minWidth: 20,
    align: "center",
  },
  {
    id: "picture",
    label: "Total Replays Posted",
    minWidth: 10,
    align: "center",
  },
  {
    id: "displayFrequency",
    label: "Total Likes",
    minWidth: 30,
  },
  {
    id: "start",
    label: "Total Unlikes",
    minWidth: 50,
  },
  {
    id: "end",
    label: "Times Shared",
    minWidth: 50,
  },
  {
    id: "position",
    label: "Total Abuse Reported",
    minWidth: 30,
  }

];

function createData(
  id,
  windowType,
  layoutType,
  layoutText,
  picture,
  displayFrequency,
  start,
  end,
  position,
  redirectUrl,
  userInpuType
) {
  return {
    id,
    windowType,
    layoutType,
    layoutText,
    picture,
    displayFrequency,
    start,
    end,
    position,
    redirectUrl,
    userInpuType,
  };
}

const rows = [];
for (var i in talkingTopicsData) {
  rows.push(
    createData(
        talkingTopicsData[i].id,
        talkingTopicsData[i].windowType,
        talkingTopicsData[i].layoutType,
        talkingTopicsData[i].layoutText,
        talkingTopicsData[i].picture,
        talkingTopicsData[i].displayFrequency,
        talkingTopicsData[i].start,
        talkingTopicsData[i].end,
        talkingTopicsData[i].position
    )
  );
}

const useStyles = makeStyles({
  root: {
 //   width: "100%",
    alignItems: "center",
  marginLeft:"0px",
    marginRight:"10px",
    marginTop:"10px",
    marginBottom:"50px",
  },
  container: {
  //  maxHeight: 440,
  },
});

function TalkingTopics() {
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

  const editForm = (data) => {
    if (data.windowType === "overlay") {
      setviewModelForm(false);
      setviewOverlay(true);
    } else if (data.windowType === "model") {
      setviewOverlay(false);
      setviewModelForm(true);
    }
    console.log(data);
    setlayout__text(data.layoutText);
    setdisplay__frequency(data.displayFrequency);
    setstart__(data.start);
    setend__(data.end);
    setwindow__position(data.position);
    setredirect__url(data.redirectUrl);
  };
  const classForForm = styles();

  const [layout__type, setlayout__type] = React.useState("");
  const [layout__text, setlayout__text] = React.useState("");
  const [display__frequency, setdisplay__frequency] = React.useState("daily");
  const [start__, setstart__] = React.useState("");
  const [end__, setend__] = React.useState("");
  const [window__position, setwindow__position] = React.useState("");
  const [redirect__url, setredirect__url] = React.useState("");
  const [fading__time, setfading__time] = React.useState("5 seconds");

  const [viewModelForm, setviewModelForm] = React.useState(false);
  const [viewOverlay, setviewOverlay] = React.useState(false);

  const [previewImage, setpreviewImage] = React.useState('');

  const handleChange = (event) => {
    console.log(event);
    let name = event.target.name;
    if (name === "layoutText") {
      setlayout__text(event.target.value);
    } else if (name === "displayFrequency") {
      setdisplay__frequency(event.target.value);
    } else if (name === "windowPosition") {
      setwindow__position(event.target.value);
    } else if (name === "windowFading") {
      setfading__time(event.target.value);
    } else if (name === "programUrl") {
      setredirect__url(event.target.value);
    }
  };

  const handleStart = (date) => {
    setstart__(date);
  };

  const handleEnd = (date) => {
    setend__(date);
  };

  const previewHandler = (e) =>{
      console.log(e.target.files[0]);
    setpreviewImage(URL.createObjectURL(e.target.files[0]))
  }

  return (
    <div>

<center><CardHeader style={{padding:"12px",marginBottom:"20px", width:"100%" ,boxShadow:"rgb(0 0 0 / 14%) 0px 4px 20px 0px, rgb(70 70 70 / 40%) 0px 7px 10px -5px",borderRadius:"5px"}}>
        <Typography className={classes.cardTitleWhite} style={{fontWeight:"bold",fontSize:"23px",lineHeight:"1.0"}}>
        Talking Topics
        </Typography>
            </CardHeader></center>



        <Grid container spacing={1} style={{marginTop:"15px"}}>
              <Grid item xs={10}>
                      <h3 style={{ color: "rgb(49 49 49 / 79%)", textAlign: "center" ,fontWeight: "bold" }}>
                      
                      </h3>
                    </Grid>
                    <Grid item xs={2}>
                      <Button
                      style={{color:"#fff",backgroundColor:"#021c49"}}
                        variant="contained"
                        startIcon={<AddIcon />}
                      >
                        Add
                      </Button>
                    </Grid>
                  </Grid>
                  <center>
      <Paper className={classes.root} style={{width:"90%"}}>
        <TableContainer className={classes.container}>
          <Table stickyHeader aria-label="sticky table">
            <TableHead>
              <TableRow>
                {columns.map((column) => (
                  <TableCell
                    key={column.id}
                    align={column.align}
                    style={{ minWidth: column.minWidth , color:"#fff" ,backgroundColor:"#a5a6b1",padding:"5px 5px 5px 8px",fontSize:"12px"}}
                  >
                    {column.label}
                  </TableCell>
                ))}
              </TableRow>
            </TableHead>
            <TableBody>
              {rows
                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                .map((row) => {
                  return (
                    <TableRow hover role="checkbox" tabIndex={-1} key={row.id}>
                      {columns.map((column) => {
                        const value = row[column.id];
                        return (
                          <TableCell key={column.id} align={column.align}>
                            {column.id === "edit" ? (
                              <Button style={{backgroundColor:"transparent" , boxShadow:"none" ,width:"10px"}}
                                variant="contained"
                                onClick={(e) => editForm(row, e)}
                              >
                                <span class="material-icons" color="error">edit</span>
                              </Button>
                            ) : column.id === "picture" &&
                              row.picture !== "" ? (
                              <Link to={row.picture}>View</Link>
                            ) : column.id === "redirectUrl" ? (
                              <Link to={row.redirectUrl}>View</Link>
                            ) : (
                              value
                            )}
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
          rowsPerPageOptions={[5, 10, 25 ]}
          component="div"
          count={rows.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onChangePage={handleChangePage}
          onChangeRowsPerPage={handleChangeRowsPerPage}
        />
      </Paper>
      </center>
      
        




        <Card className={classForForm.root} style={{margin:"15px 0"}}
        //style={ viewModelForm == true ? { display: "block" } : { display: "none" }}
          >
            <center><span style={{ fontSize:"22px", fontWeight: "bold", color:"#505050"}}>AddNew Talking Topics</span></center>
            <CardBody>
            <form
          id="edit_form"
          className={classForForm.root}
          noValidate
          
          autoComplete="off"
        >
          <div
            style={{
              marginLeft: "10%",
              marginRight: "10%",
              padding: "40px",
              textAlign: "center",
            }}
          >


            <center>
              <table>
                
                <tr>
                  <td>
<label className="form__label">Talking Topic Group</label>
                  </td>
                  <td style={{paddingLeft:"80px"}}>
                  <TextField
                select
                value={talking_Topic_Group}
                onChange={handleChange}
                name="displayFrequency"
              >
                {talking_Topic_Group.map((option) => (
                  <MenuItem key={option.value} value={option.value}>
                    {option.label}
                  </MenuItem>
                ))}
              </TextField>
                  </td>
                </tr>

                <tr>
                  <td>
                  <label className="form__label">Talking Topic Title</label>
                  </td>
                  <td style={{paddingLeft:"80px"}}>
                  <TextField
                id="outlined-basic"
                variant="outlined"
                name="programUrl"
                value={redirect__url}
                onChange={handleChange}
                defaultValue="no url"
              />
                  </td>
                </tr>

                <tr><td></td><td></td></tr>
<tr><td colspan="2" style={{textAlign:"center"}}>
            <Button style={{backgroundColor:"#021c49",color:"#fff",minWidth:"100px",marginTop:"20px"}}>ADD</Button>
          </td></tr>
              </table>
            </center>
          </div>
        </form>
            </CardBody>
          </Card>





        

          <Card  //style={ viewOverlay == true ? { display: "block" } : { display: "none" } }
          >
            <center><span style={{ fontSize:"22px", fontWeight: "bold", color:"#505050"}}>EditTalking Topics</span></center>
            <CardBody>
            <form
          id="edit_form"
          className={classForForm.root}
          noValidate
         // style={viewOverlay == true ? { display: "block" } : { display: "none" }}
          autoComplete="off"
        >
          <div
            style={{
              marginLeft: "10%",
              marginRight: "10%",
              padding: "40px",
              textAlign: "center",
            }}
          >
            <div>

              <center>
                <table>
                  
                  <tr>
                    <td>
                    <label className="form__label">Talking Topic Group</label>
                    </td>
                    <td style={{paddingLeft:"80px"}}>
                    <TextField
                select
                value={display__frequency}
                onChange={handleChange}
                name="displayFrequency"
              >
                {talking_Topic_Group.map((option) => (
                  <MenuItem key={option.value} value={option.value}>
                    {option.label}
                  </MenuItem>
                ))}
              </TextField>
                    </td>
                  </tr>
                    <tr>
                    <td>
                    <label className="form__label">Talking Topic Title</label>
                      </td>
                      <td style={{paddingLeft:"80px"}}>
                      <TextField
                id="outlined-basic"
                variant="outlined"
                name="programUrl"
                value={redirect__url}
                onChange={handleChange}
                defaultValue="no url"
              />
                        </td>
                        </tr>

                  <tr><td></td><td></td></tr>
                  <tr><td colspan="2" style={{textAlign:"center"}}>
            <Button style={{backgroundColor:"#021c49",color:"#fff",minWidth:"100px",marginTop:"20px"}}>SAVE</Button>
          </td></tr>
                </table>
              </center>
            </div>
          </div>
        </form>
            </CardBody>
          </Card>


    </div>
  );
}

export default TalkingTopics;
