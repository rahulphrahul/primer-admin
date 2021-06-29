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
import { data } from "../../../assets/data";
import FormLabel from "@material-ui/core/FormLabel";
import Card from "../../../components/Card/Card.js";
import CardHeader from "../../../components/Card/CardHeader.js";
import CardIcon from "../../../components/Card/CardIcon.js";
import CardBody from "../../../components/Card/CardBody.js";
import CardFooter from "../../../components/Card/CardFooter.js";
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

import Typography from "@material-ui/core/Typography";
import GridContainer from "../../../components/Grid/GridContainer.js";
import GridItem from "../../../components/Grid/GridItem.js";
import AddIcon from "@material-ui/icons/Add";
import Grid from "@material-ui/core/Grid";
import classNames from "classnames";
import Tasks from "../../../components/Tasks/Tasks.js";
import CustomTabs from "../../../components/CustomTabs/CustomTabs.js";


const styles = makeStyles((theme) => ({
  root: {
    "& .MuiTextField-root": {
      margin: theme.spacing(2),
      width: "50ch",
    },
    "& .MuiTableCell-root": {
      padding:"1px 10px",
    },
  },
}));

const disciplines = [
  {
    value: "Bachelor",
    label: "Bachelor",
  },
  {
    value: "Mastor",
    label: "Mastor",
  },
  {
    value: "Doctorate",
    label: "Doctorate",
  },
];

const countries = [
  {
    value: "IND",
    label: "IND",
  },
  {
    value: "Canada",
    label: "Canada",
  },
  {
    value: "USA",
    label: "USA",
  },
  {
    value: "Germeny",
    label: "Germeny",
  },
  {
    value: "New Zealand",
    label: "New Zealand",
  },
  {
    value: "Australia",
    label: "Australia",
  },
  {
    value: "UK",
    label: "UK",
  },
  {
    value: "Ireland",
    label: "Ireland",
  },
];

const programs = [
  {
    value: "Computer Science",
    label: "Computer Science",
  },
];
const saveForm = () => {};


const columns = [
  { id: "id", label: "ID", minWidth: 10 },
  { id: "discipline", label: "Discipline", minWidth: 70, maxWidth: 70 },

  {
    id: "country",
    label: "Country",
    minWidth: 20,
    align: "center",
  },
  {
    id: "program",
    label: "Program",
    minWidth: 50,
    align: "center",
  },
  {
    id: "programTitle",
    label: "Program Title",
    minWidth: 50,
    maxWidth: 55,
    align: "center",
  },
  {
    id: "view",
    label: "View",
    minWidth: 30,
  },
  {
    id: "edit",
    label: "Edit",
    minWidth: 10,
    align: "center",
  },
];

function createData(id, discipline, country, program, programTitle) {
  const view = `/view/${id}`;
  return { id, discipline, country, program, programTitle, view };
}

const rows = [];
for (var i in data) {
  rows.push(
    createData(
      data[i].id,
      data[i].discipline,
      data[i].country,
      data[i].program,
      data[i].programTitle
    )
  );
}

const useStyles = makeStyles({
  root: {
   // width: "100%",
    marginLeft:"10px",
    marginRight:"0px",
    marginTop:"10px",
    marginBottom:"10px",
  },
  container: {
  },
});

export default function ReachUs() {
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
    console.log(data);
    setdicipline(data.discipline)
    setcountry(data.country)
    setprogram(data.program)
    setprogramTitle(data.programTitle)
    setprogramURL(data.view)
  };
  const classForForm = styles();

  const [dicipline, setdicipline] = React.useState("");
  const [country, setcountry] = React.useState("");
  const [program, setprogram] = React.useState("");
  const [programTitle, setprogramTitle] = React.useState('')
  const [programURL, setprogramURL] = React.useState('')

  const handleChange = (event) => {
    let name = event.target.name;
    if (name === "discipline") {
      this.setState({ discipline: event.target.name });
      console.log(this.state.text);
      setdicipline(event.target.value);
    } else if (name === "country") {
      setcountry(event.target.value);
    } else if (name === "program") {
      setprogram(event.target.value);
    }else if(name === "programTitle"){
      setprogramTitle(event.target.value)
    }else if(name === 'programUrl'){
      setprogramURL(event.target.value)
    }
  };

  return (
    <div>
      <form
                    id="edit_form"
                    className={classForForm.root}
                    noValidate
                    autoComplete="off"
                  >
                      <center><span style={{fontSize:"22px",fontWeight:"bold",color:"#505050"}}>Contact Details</span></center>
                    <div><center>
                    <table >
                       
                      <tr>
                        <td><label className='form__label'>Contact Number (Primary)</label></td>
                        <td style={{paddingLeft:"80px"}}><FormControl style={{width:"25%"}} variant="outlined" className={classes.formControl}>
                    <Select
                    style={{padding:"0px 0px",margin:"16px 0"}}
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
                              style={{width:"65%",marginLeft:"5%"}}
                              id="outlined-basic"
                              variant="outlined"
                              label="PH Number"
                              type="number"
                              InputLabelProps={{
                                shrink: true,
                              }}
                              className={classes.textBox}
                            /></td>
                      </tr>
                      <tr>
                        <td><label className='form__label'>Contact Number (Secondary)</label></td>
                        <td style={{paddingLeft:"80px"}}><FormControl style={{width:"25%"}} variant="outlined" className={classes.formControl}>
                    <Select
                    style={{padding:"0px 0px",margin:"16px 0"}}
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
                              style={{width:"65%",marginLeft:"5%"}}
                              id="outlined-basic"
                              variant="outlined"
                              label="PH Number"
                              type="number"
                              InputLabelProps={{
                                shrink: true,
                              }}
                              className={classes.textBox}
                            /></td>
                        </tr>
                      
                      <tr>
                      <td><label className='form__label'>Email Address</label></td>
                      <td style={{paddingLeft:"65px"}}><TextField
                          id="outlined-basic"
                          variant="outlined"
                          name="programTitle"
                          value={programTitle}
                          onChange={handleChange}
                          defaultValue=""
                        /></td>
                      </tr>
                      <tr>
                      <td><label className='form__label'>Address</label></td>
                      <td style={{paddingLeft:"65px"}}><TextField
                              style={{width:"93%"}}
                              id="outlined-multiline-static"
                              className={classes.textBox}
                              multiline
                              rows={3}
                              variant="outlined"
                            />
                      </td></tr>
                      <tr><td colSpan="2" style={{textAlign:"center"}}>
                        <Button style={{color:"#fff",backgroundColor:"#021c49",minWidth:"100px",marginTop:"20px"}} onClick={saveForm}>Save</Button>
                      </td></tr>
                      </table>
                    </center>
                    </div>
                  </form>
    </div>
  );
}
