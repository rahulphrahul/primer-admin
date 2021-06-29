import React, { useState } from 'react';

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
import { EmailTemplateData } from "../../assets/data";
import FormLabel from "@material-ui/core/FormLabel";
import CardHeader from "../../components/Card/CardHeader.js";
import CardIcon from "../../components/Card/CardIcon.js";
import CardBody from "../../components/Card/CardBody.js";
import CardFooter from "../../components/Card/CardFooter.js";
import ImageUpload from "../../components/CustomUpload/ImageUpload.js";
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

import Card from '@material-ui/core/Card';
import ReactQuill from 'react-quill';
import { Wrapper } from '../../components';

import "../../views/WhatToStudy/ToStudyitemTable.css";
import '../../pages/Forms/editor.css';



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
        borderColor: '#80bdff',
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


const saveForm = () => {};


const columns = [
  { id: "id", label: "Template Name", minWidth: 10 },
  
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
for (var i in EmailTemplateData) {
  rows.push(
    createData(
        EmailTemplateData[i].id,
        EmailTemplateData[i].discipline,
        EmailTemplateData[i].country,
        EmailTemplateData[i].program,
        EmailTemplateData[i].programTitle
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
  const [text] = useState('');
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
         New Email Template
        </Typography>
        
              <Typography className={classes.cardTitleWhite} style={{color:"rgb(115 107 107)",marginTop:"10px",marginBottom:"20px",fontWeight:"400",fontSize:"18px",lineHeight:"1.0"}}>
        Template Name
        <TextField style={{marginLeft:"10px"}} id="outlined-size-small" label="Template Name" variant="outlined" /></Typography>
        <TextField style={{width:"90%",marginBottom:"15px"}} id="outlined-size-small" label="Topic" placeholder="Enter Message Topic Here" variant="outlined" />
        
        <Wrapper>
      <Card style={{width:"92%"}} className="overflow-visible">
        <ReactQuill style={{minHeight:"270px"}} value={text} placeholder={'Write Message Here'} />
      </Card>
    </Wrapper>
        </center>
              
           
<center><Button style={{color:"#fff",backgroundColor:"#021c49",minWidth:"100px",marginTop:"20px"}} onClick={saveForm}>Create Template</Button></center>
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
