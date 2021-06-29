import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import { data } from "../../assets/data";
import Card from "../../components/Card/Card.js";
import CardHeader from "../../components/Card/CardHeader.js";
import CardBody from "../../components/Card/CardBody.js";

import Typography from "@material-ui/core/Typography";
import BackupIcon from "@material-ui/icons/Backup";
import EmaillImageUpload from "../../components/CustomUpload/EmailImageUpload.js";

import "../../views/WhatToStudy/ToStudyitemTable.css";

const styles = makeStyles((theme) => ({
  root: {
    "& .MuiTextField-root": {
      margin: theme.spacing(2),
      width: "50ch",
    },
  },
}));

const saveForm = () => {};



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

export default function ProgramEdit() {
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
  const [previewImage, setpreviewImage] = React.useState('');


  const previewHandler = (e) =>{
    console.log(e.target.files[0]);
  setpreviewImage(URL.createObjectURL(e.target.files[0]))
}
  return (
    <div>
<div>
<Card style={{marginTop:"5px"}}>
<center>
        <CardHeader style={{padding:"12px",marginBottom:"20px", width:"100%" ,boxShadow:"rgb(0 0 0 / 14%) 0px 4px 20px 0px, rgb(70 70 70 / 40%) 0px 7px 10px -5px",borderRadius:"5px"}}>
        <Typography className={classes.cardTitleWhite} style={{fontWeight:"bold",fontSize:"23px",lineHeight:"1.0"}}>
        Edit Program
        </Typography>
            </CardHeader></center>
            <CardBody>
            <form
        id="edit_form"
        className={classForForm.root}
        noValidate
        autoComplete="off"
      >
        <div><center>
        <table >
          <tr>
            <td><label className='form__label'>Program Name</label></td>
            <td style={{paddingLeft:"80px"}}><TextField
              id="outlined-basic"
              variant="outlined"
              name="programTitle"
              value={programTitle}
              onChange={handleChange}
              defaultValue="jobin"
            /></td>
          </tr>
          <tr>
            <td><label className='form__label'>Program Icon (Current)</label></td>
            <td style={{paddingLeft:"80px"}}>
<Paper style={{height:"150px",width:"150px",marginLeft:"25px"}}>
<img style={{height:"150px",width:"150px"}} src={require("../../assets/img/settingsIcon.jpeg")} />
</Paper>

            </td>
            </tr>
          <tr>
            <td><label className='form__label'>Upload Cource Icon</label></td>
            <td style={{padding:"15px 0 15px 80px"}}>
            <EmaillImageUpload style={{width:"100px"}}
            avatar={{}}
              addButtonProps={{round:true}}
              changeButtonProps={{round:true}}
              removeButtonProps={{round:true, color:"danger"}} />
              </td>
            </tr>

          <tr>
            <td><label className='form__label'>Program Description</label></td>
            <td style={{paddingLeft:"80px"}}><TextField
                  id="outlined-multiline-static"
                  className={classes.textBox}
                  multiline
                  rows={8}
                  variant="outlined"
                /></td>
          </tr>
         
          <tr><td colspan="2" style={{textAlign:"center"}}>
            <Button style={{backgroundColor:"#021c49",color:"#fff",minWidth:"100px",marginTop:"20px"}} onClick={saveForm}>Save</Button>
          </td></tr>
          </table>
        </center>
        </div>
      </form>
            </CardBody>
          </Card>




      
</div>

    </div>
  );
}
