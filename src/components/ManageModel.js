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
import { manageModelData } from "../assets/data";
import DeleteIcon from "@material-ui/icons/Delete";
//import DatePicker from "react-date-picker";
import DateRangeIcon from "@material-ui/icons/DateRange";
import BackupIcon from "@material-ui/icons/Backup";

const styles = makeStyles((theme) => ({
  root: {
    "& .MuiTextField-root": {
      margin: theme.spacing(1),
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
  { id: "id", label: "ID", minWidth: 50 },
  { id: "edit", label: "Edit", minWidth: 30 },
  {
    id: "windowType",
    label: "Window Type",
    minWidth: 70,
    align: "right",
  },
  {
    id: "layoutType",
    label: "Layout Type",
    minWidth: 70,
    align: "right",
  },
  {
    id: "layoutText",
    label: "Layout Text",
    minWidth: 70,
    align: "right",
  },
  {
    id: "picture",
    label: "Picture",
    minWidth: 30,
    align: "right",
  },
  {
    id: "displayFrequency",
    label: "Display Frequency",
    minWidth: 70,
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
    minWidth: 70,
  },
  {
    id: "redirectUrl",
    label: "Redirect URL",
    minWidth: 50,
  },
  {
    id: "userInpuType",
    label: "User Input Type",
    minWidth: 70,
  },
  {
    id: "delete",
    label: "Delete",
    minWidth: 50,
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
    width: "100%",
    alignItems: "center",
  },
  container: {
    maxHeight: 440,
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

  const [previewImage, setpreviewImage] = React.useState('')

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
      <Paper className={classes.root}>
        <TableContainer className={classes.container}>
          <Table stickyHeader aria-label="sticky table">
            <TableHead>
              <TableRow>
                {columns.map((column) => (
                  <TableCell
                    key={column.id}
                    align={column.align}
                    style={{ minWidth: column.minWidth }}
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
                              <Button
                                variant="contained"
                                onClick={(e) => editForm(row, e)}
                              >
                                <span class="material-icons">edit</span>
                              </Button>
                            ) : column.id === "delete" ? (
                              <Button variant="contained">
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
          rowsPerPageOptions={[10, 25, 100]}
          component="div"
          count={rows.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onChangePage={handleChangePage}
          onChangeRowsPerPage={handleChangeRowsPerPage}
        />
      </Paper>
      <Paper
        className={classes.root}
        style={
          viewModelForm === true || viewOverlay === true
            ? { display: "block" }
            : { display: "none" }
        }
      >
        <h3
          style={{
            color: "#44eb70",
            textAlign: "center",
            fontWeight: "bold",
            paddingTop: "20px",
          }}
        >
          New Model & overlay Window
        </h3>
        <form
          id="edit_form"
          className={classForForm.root}
          noValidate
          style={
            viewModelForm == true ? { display: "block" } : { display: "none" }
          }
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
              <label className="form__label">Layout Text</label>
              <TextField
                id="outlined-basic"
                className="form__textField"
                value={layout__text}
                onChange={handleChange}
                name="layoutText"
              ></TextField>
            </div>
            <div>
              <label className="form__label">Display Frequency</label>
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
            </div>
            <div>
              <label className="form__label">Window Duration</label>
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
              <Button variant="contained" color="secondary">
                {" "}
                No End Date
              </Button>
            </div>
            <div>
              <label className="form__label">Window Position</label>
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
            </div>
            <div>
              <label className="form__label">Window Fading Time</label>
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
            </div>
            <div>
              <label className="form__label">Program URL</label>
              <TextField
                id="outlined-basic"
                variant="outlined"
                name="programUrl"
                value={redirect__url}
                onChange={handleChange}
                defaultValue="no url"
              />
            </div>
            <div>
              <Button variant="contained" color="primary">
                Save Overlay Window
              </Button>
            </div>
          </div>
        </form>
        <form
          id="edit_form"
          className={classForForm.root}
          noValidate
          style={
            viewOverlay == true ? { display: "block" } : { display: "none" }
          }
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
              <label className="form__label">Upload Overlay Image</label>
              <input
                style={{ display: "none" }}
                accept="image/*"
                className={classes.input}
                id="contained-button-file"
                multiple
                onChange={previewHandler}
                type="file"
              />
              <label htmlFor="contained-button-file">
                <Button
                  variant="contained"
                  color="primary"
                  startIcon={<BackupIcon />}
                  component="span"
                >
                  Upload
                </Button>
              </label>
            </div>
            <div>
              <label className="form__label">Overlay Image selected</label>
              <img style={{width: '250px'}} src={previewImage}/>
            </div>
            <div>
              <label className="form__label">Display Frequency</label>
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
            </div>
            <div>
              <label className="form__label">Window Duration</label>
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
              <Button variant="contained" color="secondary">
                {" "}
                No End Date
              </Button>
            </div>
            <div>
              <label className="form__label">Window Position</label>
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
            </div>
            <div>
              <label className="form__label">Window Fading Time</label>
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
            </div>
            <div>
              <label className="form__label">Program URL</label>
              <TextField
                id="outlined-basic"
                variant="outlined"
                name="programUrl"
                value={redirect__url}
                onChange={handleChange}
                defaultValue="no url"
              />
            </div>
            <div>
              <Button variant="contained" color="primary">
                Save Overlay Window
              </Button>
            </div>
          </div>
        </form>
      </Paper>
    </div>
  );
}

export default ManageModel;
