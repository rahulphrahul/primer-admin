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
import { PostCommentData } from "../../assets/data";
import FormLabel from "@material-ui/core/FormLabel";
import Card from "../../components/Card/Card.js";
import CardHeader from "../../components/Card/CardHeader.js";
import CardIcon from "../../components/Card/CardIcon.js";
import CardBody from "../../components/Card/CardBody.js";
import CardFooter from "../../components/Card/CardFooter.js";

import Typography from "@material-ui/core/Typography";
import GridContainer from "../../components/Grid/GridContainer.js";
import GridItem from "../../components/Grid/GridItem.js";
import AddIcon from "@material-ui/icons/Add";
import Grid from "@material-ui/core/Grid";
import classNames from "classnames";
import ArrowRightAltIcon from '@material-ui/icons/ArrowRightAlt';


import ".//PostComments.css";

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


const columns = [
  { id: "id", label: "ID", minWidth: 10 },
  {
    id: "edit",
    label: "View",
    width: "90%",
    align: "center",
  },
];

function createData(id, discipline, country, program, programTitle) {
  const view = `${id}`;
  return { id, discipline, country, program, programTitle, view };
}

const rows = [];
for (var i in PostCommentData) {
  rows.push(
    createData(
        PostCommentData[i].id,
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

export default function PostComments() {
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

    setprogramTitle(data.programTitle)
    setprogramURL(data.view)
  };
  const classForForm = styles();

  const [programTitle, setprogramTitle] = React.useState('')
  const [programURL, setprogramURL] = React.useState('')

  const handleChange = (event) => {
    let name = event.target.name;
    if (name === "discipline") {
      this.setState({ discipline: event.target.name });
      console.log(this.state.text);
     
    }else if(name === "programTitle"){
      setprogramTitle(event.target.value)
    }else if(name === 'programUrl'){
      setprogramURL(event.target.value)
    }
  };

  return (
    <div>
      <div>
        <Card style={{ margin: "10px 0",height:"100%"}}>
        <center>
        <CardHeader style={{padding:"12px",marginBottom:"20px", width:"100%" ,boxShadow:"rgb(0 0 0 / 14%) 0px 4px 20px 0px, rgb(70 70 70 / 40%) 0px 7px 10px -5px",borderRadius:"5px"}}>
        <Typography className={classes.cardTitleWhite} style={{fontWeight:"bold",fontSize:"23px",lineHeight:"1.0"}}>
        Post Comments
        </Typography>
            </CardHeader></center>
          
          <CardBody>
            <Grid container spacing={1} style={{height:"100%"}}>
              <Grid item xs={5}>
              <Paper className={classes.root} style={{maxWidth:"100%"}}>
              <div style={{width:"100%"}}>
    <div style={{float:"left",width:"50%",backgroundColor:"rgb(177 177 177)"}}><center>All Comemnts </center></div>
    <div style={{float:"right",width:"50%",backgroundColor:"rgb(177 177 177)"}}><center>New Comments </center></div>
</div>
        <TableContainer className={classes.container}>
          <Table stickyHeader aria-label="sticky table" className={classForForm.root}>
            <TableHead>
              <TableRow>
             
                  <TableCell colspan={2}><center>
                    SELECT POST</center>
                  </TableCell>
              
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
                                style={{backgroundColor:"transparent",boxShadow:"none"}}
                                onClick={(e) => editForm(row, e)}
                              >
                                <ArrowRightAltIcon />
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
        <TablePagination style={{color:"#000",backgroundColor:"#65646352"}}
          rowsPerPageOptions={[10, 25, 50, 100]}
          component="div"
          count={rows.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onChangePage={handleChangePage}
          onChangeRowsPerPage={handleChangeRowsPerPage}
        />
      </Paper>
                    </Grid>
                    <Grid item xs={7}>
                      

<table style={{width:"100%",minHeight:"450px",height:"100%",margin:"0px 10px",padding:"0px",border:"1px solid rgb(100, 98, 98)",  borderCollapse: "collapse"}}>
<tr>
    <td colspan={10} style={{backgroundColor:"rgb(214 209 196)",fontWeight:"bold",border:"1px solid rgb(100, 98, 98)"}}>
        <center>Post Description</center>
    </td>
</tr>
<tr>
<td colspan={10} style={{border:"1px solid rgb(100, 98, 98)"}}>
<p><span style={{fontWeight:"bold",fontSize:"15px"}}>Post : </span>
{String(programURL)}</p>
</td>
</tr>
<tr>
    <td rowSpan={2} style={{width:"20px",border:"1px solid rgb(100, 98, 98)"}}></td>
    <th style={{border:"1px solid rgb(100, 98, 98)"}}><span style={{fontSize:"12px"}}>Posted By</span></th>
    <th style={{border:"1px solid rgb(100, 98, 98)"}}><span style={{fontSize:"12px"}}>Talking Topic</span></th>
    <th style={{border:"1px solid rgb(100, 98, 98)"}}><span style={{fontSize:"12px"}}>Post Date</span></th>
    <th style={{border:"1px solid rgb(100, 98, 98)"}}><span style={{fontSize:"12px"}}>User Replies</span></th>
    <th style={{border:"1px solid rgb(100, 98, 98)"}}><span style={{fontSize:"12px"}}>Admin Replies</span></th>
    <th style={{border:"1px solid rgb(100, 98, 98)"}}><span style={{fontSize:"12px"}}>Total Likes</span></th>
    <th style={{border:"1px solid rgb(100, 98, 98)"}}><span style={{fontSize:"12px"}}>Total Unlikes</span></th>
    <th style={{border:"1px solid rgb(100, 98, 98)"}}><span style={{fontSize:"12px"}}>Total Shared</span></th>
    <th style={{border:"1px solid rgb(100, 98, 98)"}}><span style={{fontSize:"12px"}}>Times Abused</span></th>
</tr>
<tr>
    <td style={{border:"1px solid rgb(100, 98, 98)"}}><center>Priya cotah</center></td>
    <td style={{border:"1px solid rgb(100, 98, 98)"}}><center>Admission</center></td>
    <td style={{border:"1px solid rgb(100, 98, 98)"}}><center>18-Feb-2021</center></td>
    <td style={{border:"1px solid rgb(100, 98, 98)"}}><center>5</center></td>
    <td style={{border:"1px solid rgb(100, 98, 98)"}}><center>3</center></td>
    <td style={{border:"1px solid rgb(100, 98, 98)"}}><center>24</center></td>
    <td style={{border:"1px solid rgb(100, 98, 98)"}}><center>2</center></td>
    <td style={{border:"1px solid rgb(100, 98, 98)"}}><center>3</center></td>
    <td style={{border:"1px solid rgb(100, 98, 98)"}}><center>1</center></td>
</tr>
<tr>
    <td colSpan={10} style={{height:"60%"}}></td>
</tr>
<tr>
    <td colSpan={8} style={{padding:"5px"}}>
    <Typography>
                Reply
                <TextField
                 style={{width:"100%",margin:"5px",padding:"0px"}}
                  id="outlined-multiline-static"
                  multiline
                  rows={2}
                  variant="outlined"
                />
              </Typography>

    </td>
    <td colSpan={2} >
    <center><Button
    onClick={() => { alert.success("Booking Successful"); }}
    style={{backgroundColor:"#021c49",color:"#fff",margin:"5px"}}>POST</Button></center>

    </td>
</tr>


</table>
                    </Grid>
                  </Grid>
            
            </CardBody>
          </Card>
                </div>
               
      

<div>







      
</div>

    </div>
  );
}
