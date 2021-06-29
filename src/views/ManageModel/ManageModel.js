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
import { manageModelData } from "../../assets/data";
import DeleteIcon from "@material-ui/icons/Delete";
//import DatePicker from "react-date-picker";
import DateRangeIcon from "@material-ui/icons/DateRange";
import BackupIcon from "@material-ui/icons/Backup";

import Card from "../../components/Card/Card.js";
import CardHeader from "../../components/Card/CardHeader.js";
import CardBody from "../../components/Card/CardBody.js";
import Typography from "@material-ui/core/Typography";
import ImageUpload from "../../components/CustomUpload/ImageUpload.js";

const styles = makeStyles((theme) => ({
  root: {
    "& .MuiTextField-root": {
      margin: theme.spacing(2),
      width: "25ch",
    },
  },
}));

const Frequencies = [
  {
    value: "DAILY",
    label: "DAILY",
  },
  {
    value: "EVERY 15 MINUTES",
    label: "EVERY 15 MINUTES",
  },
  {
    value: "EVERY 30 MINUTES",
    label: "EVERY 30 MINUTES",
  },
  {
    value: "EVERY 1 HOUR",
    label: "EVERY 1 HOUR",
  },
  {
    value: "EVERY 8 HOURS",
    label: "EVERY 8 HOURS",
  },
  {
    value: "MONTHLY",
    label: "MONTHLY",
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
    label: "Window Type",
    minWidth: 20,
    align: "center",
  },
  {
    id: "layoutType",
    label: "Layout Type",
    minWidth: 20,
    align: "center",
  },
  {
    id: "layoutText",
    label: "Layout Text",
    minWidth: 20,
    align: "center",
  },
  {
    id: "picture",
    label: "Picture",
    minWidth: 10,
    align: "center",
  },
  {
    id: "displayFrequency",
    label: "Display Frequency",
    minWidth: 30,
  },
  {
    id: "start",
    label: "Start",
    minWidth: 50,
  },
  {
    id: "end",
    label: "End",
    minWidth: 50,
  },
  {
    id: "position",
    label: "Position",
    minWidth: 30,
  },
  {
    id: "redirectUrl",
    label: "Redirect URL",
    minWidth: 20,
  },
  {
    id: "userInpuType",
    label: "User Input Type",
    minWidth: 40,
  },
  {
    id: "delete",
    label: "Delete",
    minWidth: 10,
  },
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
for (var i in manageModelData) {
  rows.push(
    createData(
      manageModelData[i].id,
      manageModelData[i].windowType,
      manageModelData[i].layoutType,
      manageModelData[i].layoutText,
      manageModelData[i].picture,
      manageModelData[i].displayFrequency,
      manageModelData[i].start,
      manageModelData[i].end,
      manageModelData[i].position,
      manageModelData[i].redirectUrl,
      manageModelData[i].userInpuType
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

function ManageModel() {
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
      <center>
        <CardHeader style={{padding:"12px", width:"100%" ,boxShadow:"rgb(0 0 0 / 14%) 0px 4px 20px 0px, rgb(70 70 70 / 40%) 0px 7px 10px -5px",borderRadius:"5px"}}>
            
        <Typography className={classes.cardTitleWhite} style={{fontWeight:"bold",fontSize:"23px",lineHeight:"1.0"}}>
        Model & Overlays
        </Typography>
            </CardHeader></center>
      <Paper className={classes.root}>
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
                            ) : column.id === "delete" ? (
                              <Button variant="contained" style={{backgroundColor:"transparent" , boxShadow:"none"}}>
                                <DeleteIcon />
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
      
        




        <Card className={classForForm.root} style={
            viewModelForm == true ? { display: "block" } : { display: "none" }
          }>
            <center><span style={{ fontSize:"22px", fontWeight: "bold", color:"#505050"}}>Model Window</span></center>
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
                  <label className="form__label">Layout Text</label>
                  </td>
                  <td style={{paddingLeft:"80px"}}>
                  <TextField
                id="outlined-basic"
                className="form__textField"
                value={layout__text}
                onChange={handleChange}
                name="layoutText"
              ></TextField>
                  </td>
                </tr>
                <tr>
                  <td>
<label className="form__label">Display Frequency</label>
                  </td>
                  <td style={{paddingLeft:"80px"}}>
                  <TextField
                select
                value={display__frequency}
                onChange={handleChange}
                name="displayFrequency"
              >
                {Frequencies.map((option) => (
                  <MenuItem key={option.value} value={option.value}>
                    {option.label}
                  </MenuItem>
                ))}
              </TextField>
                  </td>
                </tr>

                <tr>
                  <td>
                  <label className="form__label">Window Duration</label>
                  </td>
                  <td style={{paddingLeft:"80px"}}>
                    {/* <DatePicker
                onChange={handleStart}
                value={start__}
                calendarIcon={<DateRangeIcon />}
                clearIcon={null}
                format={"d-M-y"}
                name="start"
              />
              <DatePicker
                onChange={handleEnd}
                value={end__}
                calendarIcon={<DateRangeIcon />}
                clearIcon={null}
                name="end"
                format={"d-M-y"}
              /> */}
              <Button style={{backgroundColor:"#021c49",color:"#fff",minWidth:"100px",marginTop:"20px"}}>
                {" "}
                No End Date
              </Button>
                  </td>
                </tr>

                <tr>
                  <td>
                  <label className="form__label">Window Position</label>
                  </td>
                  <td style={{paddingLeft:"80px"}}>
                  <TextField
                select
                value={window__position}
                onChange={handleChange}
                name="displayFrequency"
              >
                {windowPositions.map((option) => (
                  <MenuItem key={option.value} value={option.value}>
                    {option.label}
                  </MenuItem>
                ))}
              </TextField>
                  </td>
                </tr>

                <tr>
                  <td>
                  <label className="form__label">Window Fading Time</label>
                  </td>
                  <td style={{paddingLeft:"80px"}}>
                  <TextField
                select
                value={fading__time}
                onChange={handleChange}
                name="windowFading"
              >
                {fadingTimes.map((option) => (
                  <MenuItem key={option.label} value={option.value}>
                    {option.label}
                  </MenuItem>
                ))}
              </TextField>
                  </td>
                </tr>

                <tr>
                  <td>
                  <label className="form__label">Program URL</label>
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
            <Button style={{backgroundColor:"#021c49",color:"#fff",minWidth:"100px",marginTop:"20px"}}>Save Model Window</Button>
          </td></tr>
              </table>
            </center>
          </div>
        </form>
            </CardBody>
          </Card>





        

          <Card className={classForForm.root} id="edit_form"
          className={classForForm.root}
          noValidate
          style={
            viewOverlay == true ? { display: "block" } : { display: "none" }
          }>
        <center><span style={{ fontSize:"22px", fontWeight: "bold", color:"#505050"}}>Overlay Window</span></center>
            
            <CardBody>
            <form
          
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
                    <label className="form__label">Upload Overlay Image</label>
                    </td>
                    <td style={{paddingLeft:"80px"}}>
                    <ImageUpload style={{width:"100px"}}
              addButtonProps={{round:true}}
              changeButtonProps={{round:true}}
              removeButtonProps={{round:true, color:"danger"}} />
                    </td>
                  </tr>

                  <tr>
                    <td>
                    <label className="form__label">Display Frequency</label>
                    </td>
                    <td style={{paddingLeft:"80px"}}>
                    <TextField
                select
                value={display__frequency}
                onChange={handleChange}
                name="displayFrequency"
              >
                {Frequencies.map((option) => (
                  <MenuItem key={option.value} value={option.value}>
                    {option.label}
                  </MenuItem>
                ))}
              </TextField>
                    </td>
                  </tr>

                  <tr>
                    <td>
                    <label className="form__label">Window Duration</label>
                    </td>
                    <td style={{paddingLeft:"80px"}}>
{/* <DatePicker
                onChange={handleStart}
                value={start__}
                calendarIcon={<DateRangeIcon />}
                clearIcon={null}
                format={"d-M-y"}
                name="start"
              />
              <DatePicker
                onChange={handleEnd}
                value={end__}
                calendarIcon={<DateRangeIcon />}
                clearIcon={null}
                name="end"
                format={"d-M-y"}
              /> */}
              <Button style={{color:"#fff",backgroundColor:"#021c49"}} variant="contained" color="secondary">
                {" "}
                No End Date
              </Button>
                    </td>
                  </tr>

                  <tr>
                    <td>
                    <label className="form__label">Window Position</label>
                    </td>
                    <td style={{paddingLeft:"80px"}}>
                    <TextField
                select
                value={window__position}
                onChange={handleChange}
                name="displayFrequency"
              >
                {windowPositions.map((option) => (
                  <MenuItem key={option.value} value={option.value}>
                    {option.label}
                  </MenuItem>
                ))}
              </TextField>
                    </td>
                  </tr>
                  <tr>
                    <td>
                    <label className="form__label">Window Fading Time</label>
                      </td>
                      <td style={{paddingLeft:"80px"}}>
                      <TextField
                select
                value={fading__time}
                onChange={handleChange}
                name="windowFading"
              >
                {fadingTimes.map((option) => (
                  <MenuItem key={option.label} value={option.value}>
                    {option.label}
                  </MenuItem>
                ))}
              </TextField>
                        </td>
                        </tr>

                        <tr>
                    <td>
                    <label className="form__label">Program URL</label>
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
            <Button style={{backgroundColor:"#021c49",color:"#fff",minWidth:"100px",marginTop:"20px"}}>Save Overlay Window</Button>
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

export default ManageModel;
