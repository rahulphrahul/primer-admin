import React, { useState } from "react";
import { makeStyles, withStyles } from '@material-ui/core/styles';
import Paper from "@material-ui/core/Paper";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TablePagination from "@material-ui/core/TablePagination";
import TableRow from "@material-ui/core/TableRow";
import { Link } from "react-router-dom";
import Button from "../../components/CustomButtons/Button.js";
import TextField from "@material-ui/core/TextField";
import MenuItem from "@material-ui/core/MenuItem";
import { EmailSignatureData } from "../../assets/data";
import FormLabel from "@material-ui/core/FormLabel";
import Card from "../../components/Card/Card.js";
import CardHeader from "../../components/Card/CardHeader.js";
import CardIcon from "../../components/Card/CardIcon.js";
import CardBody from "../../components/Card/CardBody.js";
import CardFooter from "../../components/Card/CardFooter.js";
import EmaillImageUpload from "../../components/CustomUpload/EmailImageUpload.js";
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import InputLabel from '@material-ui/core/InputLabel';
import InputBase from '@material-ui/core/InputBase';

import Typography from "@material-ui/core/Typography";
import GridContainer from "../../components/Grid/GridContainer.js";
import GridItem from "../../components/Grid/GridItem.js";
import AddIcon from "@material-ui/icons/Add";
import Grid from "@material-ui/core/Grid";
import classNames from "classnames";
import Checkbox from '@material-ui/core/Checkbox';

import "../../views/WhatToStudy/ToStudyitemTable.css";



const BootstrapInput = withStyles((theme) => ({
    
    input: {
      borderRadius: 4,
      position: 'relative',
      backgroundColor: theme.palette.background.paper,
      border: '1px solid #ced4da',
      fontSize: 16,
      padding: '10px 26px 10px 12px',
      transition: theme.transitions.create(['border-color', 'box-shadow']),
      // Use the system font instead of the default Roboto font.
      fontFamily: [
        '-apple-system',
        'BlinkMacSystemFont',
        '"Segoe UI"',
        'Roboto',
        '"Helvetica Neue"',
        'Arial',
        'sans-serif',
        '"Apple Color Emoji"',
        '"Segoe UI Emoji"',
        '"Segoe UI Symbol"',
      ].join(','),
      '&:focus': {
        borderRadius: 4,
        borderColor: '#021c49',
        boxShadow: '0 0 0 0.2rem rgba(0,123,255,.25)',
      },
    },
  }))(InputBase);

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


const socialmedia = [
    {
        label: "None",
        value:"None"
      },{
      value: "Facebook",
      label: "Facebook",
    },
    {
      value: "Twitter",
      label: "Twitter",
    },
    {
      value: "Instagram",
      label: "Instagram",
    },
    {
        value: "Blogger",
        label: "Blogger",
      },
  ];
  


const saveForm = () => {};


const columns = [
  { id: "id", label: "Signature Name", minWidth: 10 },
  
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
for (var i in EmailSignatureData) {
  rows.push(
    createData(
        EmailSignatureData[i].id,
        EmailSignatureData[i].discipline,
        EmailSignatureData[i].country,
        EmailSignatureData[i].program,
        EmailSignatureData[i].programTitle
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

export default function EmailSignature() {
    const [inputList, setInputList] = useState([{ socialmedia: "None", link: "" }]);
// handle input change
const handleInputChange = (e, index) => {
    const { name, value } = e.target;
    const list = [...inputList];
    list[index][name] = value;
    setInputList(list);
  };
 
  // handle click event of the Remove button
  const handleRemoveClick = index => {
    const list = [...inputList];
    list.splice(index, 1);
    setInputList(list);
  };
 
  // handle click event of the Add button
  const handleAddClick = () => {
    setInputList([...inputList, { socialmedia: "", link: "" }]);
  };


    
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
      <div>
    
          <Grid container spacing={1}>
              <Grid item xs={3}>
              <Card style={{ margin: "0 0 80px 0"}}>
              <CardBody>
              <Grid container spacing={1}>
              <Grid item xs={9}>
                  <center>
              <Typography className={classes.cardTitleWhite} style={{color:"rgb(115 107 107)",fontWeight:"bold",fontSize:"23px",lineHeight:"1.0"}}>
         Email Signature
        </Typography></center>
                    </Grid>
                    <Grid item xs={3}>
                    <Button style={{padding:"0px 0px" ,backgroundColor:"#021c49"}} justIcon round>
                <AddIcon style={{width:"38px",height:"38px"}}/>
              </Button>
                    </Grid>
                  </Grid>
            <Paper className={classes.root} style={{maxWidth:"100%"}}>
        <TableContainer className={classes.container}>
          <Table stickyHeader aria-label="sticky table" className={classForForm.root}>
            <TableHead>
              <TableRow>
                {columns.map((column) => (
                  <TableCell
                    key={column.id}
                    align={column.align}
                    style={{ minWidth: column.minWidth ,padding:"8px",color:"#fff",backgroundColor:"#a5a6b1"}}
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
                    <TableRow
                      hover
                      role="checkbox"
                      tabIndex={-1}
                      key={row.code}
                    >
                      {columns.map((column) => {
                        const value = row[column.id];
                        return (
                          <TableCell key={column.id} align={column.align}>
                            {column.id === "edit" ? (
                              <Button
                                variant="contained"
                                style={{backgroundColor:"transparent",color:"rgb(68 68 68)",boxShadow:"none"}}
                                onClick={(e) => editForm(row, e)}
                              >
                                <span class="material-icons">edit</span>
                              </Button>
                            ) : column.id === "view" ? (
                              <Link to={row.view}>View</Link>
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
        
      </Paper>
              </CardBody>
              </Card>
              
              </Grid>
              <Grid item xs={9}>
              <Card style={{ margin: "0 0 80px 0"}}>
              <CardBody>
              <center>
        <Typography className={classes.cardTitleWhite} style={{color:"rgb(115 107 107)",marginTop:"10px",marginBottom:"20px",fontWeight:"bold",fontSize:"23px",lineHeight:"1.0"}}>
         New Email Signature
        </Typography></center>

              <Grid container spacing={1}>
              <Grid item xs={3}>
              <center><Typography className={classes.cardTitleWhite} style={{color:"rgb(115 107 107)",marginTop:"10px",marginBottom:"20px",fontWeight:"400",fontSize:"18px",lineHeight:"1.0"}}>
        Email Signature Name</Typography></center>
              <EmaillImageUpload
              addButtonProps={{round:true}}
              changeButtonProps={{round:true}}
              removeButtonProps={{round:true, color:"danger"}} />
              </Grid>
              <Grid item xs={1} style={{paddingLeft:"20px"}}>
              <div style={{width:"2px",marginTop:"50px",height:"80%",backgroundColor:"rgb(187 184 184)"}} /> 
             </Grid>
              <Grid item xs={8}>
              <TextField id="outlined-size-small" label="Signature Name" variant="outlined" />
              <table style={{width:"100%",marginTop:"20px"}}>
              <tr>
                  <td> <TextField id="outlined-basic" label="Name" variant="outlined" /> </td>
              </tr>
              <tr>
                  <td style={{padding:"15px 0"}}> <TextField id="outlined-size-small" label="Designation" variant="outlined" /> </td>
              </tr>
              <tr>
                  <td> <TextField style={{width:"37"}} id="outlined-size-small" label="Phone Number" variant="outlined" /><TextField style={{marginLeft:"6px",width:"37%"}} id="outlined-size-small" label="Email ID" variant="outlined" /> </td>
              </tr>
              <tr>
                  <td style={{padding:"15px 0"}}>
                      <div style={{width:"80%",height:"2px",backgroundColor:"rgb(187 184 184)"}} />
                  </td>
              </tr>
              <tr>
                  <td style={{padding:"15px 0"}}>
                  <Typography className={classes.cardTitleWhite} style={{padding:"0px 0",color:"rgb(115 107 107)",fontWeight:"bold",fontSize:"20px",lineHeight:"1.0"}}> ERXA </Typography>
                  </td>
              </tr>
              <tr>
                  <td> <TextField style={{width:"80%"}} id="outlined-textarea" label="Address" placeholder="Enter Address" multiline variant="outlined"
                    defaultValue="#364 Nungambakkam High Road,
                    Nungambakkam, Chennai - 600034" /></td>
              </tr>
              <tr><td style={{paddingTop:"15px 0"}}>Follow Us</td></tr>
              <tr>
                  <td> 
                  {inputList.map((x, i) => {
        return (
          <div className="box">

<FormControl className={classes.margin} style={{width:"25%"}}>
        <InputLabel id="demo-customized-select-label">Social Media</InputLabel>
        <Select
          labelId="demo-customized-select-label"
          label="Social Media"
          id="demo-customized-select"
          value={x.socialmedia}
              onChange={e => handleInputChange(e, i)}
              name="socialmedia"
          input={<BootstrapInput />}
          
        >
          {socialmedia.map((option) => (
                <MenuItem  key={option.value} value={option.value}>
                  {option.label}
                </MenuItem>
              ))}
        </Select>
      </FormControl>
            



      <TextField style={{marginLeft:"2%",width:"53%"}} id="outlined-size-small" label="Link" variant="outlined" className="ml10"
              name="link"
   placeholder="Profile Link  "
              value={x.link}
              onChange={e => handleInputChange(e, i)}/>

              {inputList.length !== 1 && 
              <Button style={{color:"#f44336", padding:"0px 0px" ,backgroundColor:"transparent",boxShadow:"none"}} justIcon round
              className="mr10"
              variant="contained"
                onClick={() => handleRemoveClick(i)}><i className="fas fa-times" />
            </Button>
                }
              {inputList.length - 1 === i && 

<Button style={{color:"rgb(63 199 67)", padding:"0px 0px" ,backgroundColor:"transparent",boxShadow:"none"}} justIcon round
 onClick={handleAddClick}><i class="fas fa-plus"></i>
</Button>}
          </div>
        );
      })}
      {/* { <div style={{ marginTop: 20 }}>{JSON.stringify(inputList)}</div> } */}
                  </td>
              </tr>
              </table>
              
              </Grid>
              </Grid>
<center><Button style={{color:"#fff",backgroundColor:"#021c49",minWidth:"100px",marginTop:"20px"}} onClick={saveForm}>Create</Button></center>
              </CardBody>
              </Card>


        </Grid>
        </Grid>

                </div>
<div>
</div>
    </div>
  );
}
