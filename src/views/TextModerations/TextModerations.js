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
import { TestModerationsData } from "../../assets/data";
import DeleteIcon from "@material-ui/icons/Delete";
//import DatePicker from "react-date-picker";
import DateRangeIcon from "@material-ui/icons/DateRange";
import BackupIcon from "@material-ui/icons/Backup";
import Grid from "@material-ui/core/Grid";
import GridItem from "../../components/Grid/GridItem.js";
import GridContainer from "../../components/Grid/GridContainer.js";
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

import ToggleSwitch1 from "../../views/MeetingNew/ToggleSwitch.js";

import Card from "../../components/Card/Card.js";
import CardHeader from "../../components/Card/CardHeader.js";
import CardBody from "../../components/Card/CardBody.js";
import Typography from "@material-ui/core/Typography";

const styles = makeStyles((theme) => ({
  root: {
    "& .MuiTextField-root": {
      margin: theme.spacing(2),
      width: "25ch",
    },
  },
}));

const columns = [
  { id: "id", label: "ID", minWidth: 2 ,align: "center",},
  {
    id: "talkingTopicGroup",
    label: "Talking Topic Group",
    minWidth: 20,
    align: "center",
  },
  {
    id: "talkingTopic",
    label: "Talking Topic",
    minWidth: 20,
    align: "center",
  },
  {
    id: "firstComment",
    label: "first Comment",
    minWidth: 20,
    align: "center",
  },
  {
    id: "CommentAbused",
    label: "Comment Abused",
    minWidth: 10,
    align: "center",
  },
  { id: "edit", label: "Check Text Moderation", minWidth: 2 ,maxWidth:10,align: "center",},
  {
    id: "AbusiveComment",
    label: "Abusive Comment",
    minWidth: 10,
    align: "center",
  },
  
];

function createData(
  id,
  talkingTopicGroup,
  talkingTopic,
  firstComment,
  CommentAbused,
  AbusiveComment
) {
  return {
    id,
    talkingTopicGroup,
  talkingTopic,
  firstComment,
  CommentAbused,
  AbusiveComment
  };
}

const rows = [];
for (var i in TestModerationsData) {
  rows.push(
    createData(
        TestModerationsData[i].id,
        TestModerationsData[i].talkingTopicGroup,
        TestModerationsData[i].talkingTopic,
        TestModerationsData[i].firstComment,
        TestModerationsData[i].CommentAbused,
        TestModerationsData[i].AbusiveComment
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

function TextModerations() {
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
   
      setviewModeration(false);
     
    console.log(data);
    setTalkigTopicGroup(data.talkingTopicGroup);
    setTalkingTopic(data.talkingTopic);
    setFirstComment(data.firstComment);
    setCommentAbused(data.CommentAbused);
    setAbusiveComment(data.AbusiveComment);
  };
  const classForForm = styles();

  const [TalkigTopicGroup, setTalkigTopicGroup] = React.useState("");
  const [TalkingTopic, setTalkingTopic] = React.useState("");
  const [FirstComment, setFirstComment] = React.useState("");
  const [CommentAbused, setCommentAbused] = React.useState("");
  const [AbusiveComment, setAbusiveComment] = React.useState("");

  const [viewModeration, setviewModeration] = React.useState(false);

  const [previewImage, setpreviewImage] = React.useState('');

 



  const previewHandler = (e) =>{
      console.log(e.target.files[0]);
    setpreviewImage(URL.createObjectURL(e.target.files[0]))
  }

  return (
    <div>

<center>
<center><CardHeader style={{padding:"12px",marginBottom:"20px", width:"100%" ,boxShadow:"rgb(0 0 0 / 14%) 0px 4px 20px 0px, rgb(70 70 70 / 40%) 0px 7px 10px -5px",borderRadius:"5px"}}>
        <Typography className={classes.cardTitleWhite} style={{fontWeight:"bold",fontSize:"23px",lineHeight:"1.0"}}>
        Manage Text Moderations
        </Typography>
            </CardHeader></center>
      <Paper className={classes.root} style={{width:"80%"}}>
        <TableContainer className={classes.container}>
          <Table stickyHeader aria-label="sticky table">
            <TableHead>
              <TableRow>
                {columns.map((column) => (
                  <TableCell
                    key={column.id}
                    align={column.align}
                    style={{ minWidth: column.minWidth , color:"#fff" ,backgroundColor:"#a5a6b1",padding:"5px 5px 5px 8px",fontSize:"14px"}}
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
                          <TableCell
                                style={{ minWidth: "10px",padding:"2px 5px",fontSize:"12px"}}
                                key={column.id} align={column.align}>
                            {column.id === "edit" ? (
                              <Button style={{backgroundColor:"transparent" , boxShadow:"none" ,width:"5px"}}
                                variant="contained"
                                onClick={(e) => editForm(row, e)}
                              >
                                <span class="material-icons" color="error">edit</span>
                              </Button>
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


      
        




      <Card style={{margin:"20px 0"}}>
      <center><span style={{ fontSize:"22px", fontWeight: "bold", color:"#505050"}}>Perform Text Moderation</span></center>
            <CardBody>

            <GridContainer>
        <GridItem xs={12} sm={6} md={6}>

        <GridContainer>
        <GridItem xs={12} sm={6} md={6}>
        <Typography className={classes.griditems} style={{fontSize:"20px"}}>
                Abusive Comment 
              </Typography>
              </GridItem>
              <GridItem xs={12} sm={6} md={6}> <ToggleSwitch1 /></GridItem>
              </GridContainer>

        <Typography className={classes.griditems} style={{marginTop:"20px",marginBottom:"15px"}}>
                Talking Topic Group
                <TextField
                  disabled
                 style={{width:"100%",fontWeight:"bold"}}
                  id="outlined-basic"
                  defaultValue=" "
                  InputProps={{ readOnly: true, }}
                  variant="outlined"
                  className={classes.textBox}
                />
      </Typography>

      <Typography className={classes.griditems} style={{marginBottom:"20px"}}>
                Discussion Description
                <TextField style={{width:"100%"}}
                  id="outlined-multiline-static"
                  className={classes.textBox}
                  multiline
                  rows={8}
                  variant="outlined"
                />
              </Typography>
              <center><Button style={{backgroundColor:"#021c49",color:"#fff",minWidth:"100px",marginTop:"20px"}}> Moderate</Button></center>
        </GridItem>
        <GridItem xs={12} sm={6} md={6}>
        <Typography className={classes.griditems} style={{marginTop:"20px",textAlign:"center"}}>
                Test Moderation Results
              </Typography>
              <Paper><Card>
              <CardBody style={{padding:"10px",Width:"100%",minHeight:"300px"}}>
              <Typography className={classes.griditems} style={{marginTop:"20px",marginBottom:"10px"}}>
                PROFANITY
              </Typography>
              <GridContainer>
        <GridItem xs={12} sm={12} md={12}>
        <Button
                color="white"
                round
                size="sm"
                rel="noopener noreferrer"
              >
              no insult
              </Button>

              <Button
                color="white"
                round
                size="sm"
                rel="noopener noreferrer"
              >
              no discriminatory content
              </Button>
              <Button
                color="white"
                round
                size="sm"
                rel="noopener noreferrer"
              >
                no sexual content
              </Button>
        
        <Button
                color="white"
                round
                size="sm"
                rel="noopener noreferrer"
              >
              no inappropriate content
              </Button>
              <Button
                color="white"
                round
                size="sm"
                rel="noopener noreferrer"
              >
              no grawlix
              </Button>
              <Button
                style={{backgroundColor:"rgb(193 54 54)",borderRadius:"24px",color:"#fff"}}
                round
                size="sm"
                rel="noopener noreferrer"
              >
                no other profanity
              </Button>
        </GridItem>
        </GridContainer>

              <Typography className={classes.griditems} style={{marginTop:"20px",marginBottom:"10px"}}>
                Personal DETAILS
              </Typography>

              <GridContainer>
        <GridItem xs={12} sm={12} md={12}>
        <Button
                color="white"
                round
                size="sm"
                rel="noopener noreferrer"
              >
              email
              </Button>
              <Button
                color="white"
                round
                size="sm"
                rel="noopener noreferrer"
              >
              no phone number content
              </Button>
              <Button
                color="white"
                round
                size="sm"
                rel="noopener noreferrer"
              >
                no ip address
              </Button>

        </GridItem>
        </GridContainer>
        

              <Typography className={classes.griditems} style={{marginTop:"20px",marginBottom:"10px"}}>
                LINKS/URLS
              </Typography>
              <Button 
              color="white"
              round
                size="sm"
                rel="noopener noreferrer"
              >
                url
              </Button>
             
              </CardBody>
              </Card></Paper>
        </GridItem>
        </GridContainer>

            </CardBody>
          </Card>






      


        

          

    </div>
  );
}

export default TextModerations;
