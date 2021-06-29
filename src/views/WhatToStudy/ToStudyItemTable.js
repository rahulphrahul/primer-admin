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
import { data } from "../../assets/data";
import Card from "../../components/Card/Card.js";
import CardHeader from "../../components/Card/CardHeader.js";
import CardBody from "../../components/Card/CardBody.js";

import Typography from "@material-ui/core/Typography";
import AddIcon from "@material-ui/icons/Add";
import Grid from "@material-ui/core/Grid";

import "./ToStudyitemTable.css";

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
// const EditForm = (props) => {
//   const classes = styles();

//   const [dicipline, setdicipline] = React.useState("");
//   const [country, setcountry] = React.useState("");
//   const [program, setprogram] = React.useState("");

//   const handleChange = (event) => {
//     let name = event.target.name
//     if(name === 'discipline'){
//       this.setState({discipline:event.target.name})
//       console.log(this.state.text);
//       setdicipline(event.target.value);
//     }else if(name === 'country'){
//       setcountry(event.target.value)
//     }else if(name === 'program'){
//       setprogram(event.target.value)
//     }

//   };
//   return (
//     <form id='edit_form' className={classes.root} noValidate autoComplete="off">
//       <div>
//         <div>
//           <label>Select Discipline</label>
//           <TextField select value={dicipline} onChange={handleChange} name='discipline'>
//             {disciplines.map((option) => (
//               <MenuItem key={option.value} value={option.value}>
//                 {option.label}
//               </MenuItem>
//             ))}
//           </TextField>
//         </div>
//         <div>
//           <label>Select Trending Country</label>
//           <TextField select value={country} onChange={handleChange} name='country'>
//             {countries.map((option) => (
//               <MenuItem key={option.value} value={option.value}>
//                 {option.label}
//               </MenuItem>
//             ))}
//           </TextField>
//         </div>
//         <div>
//           <label>Select Trending Program</label>
//           <TextField select value={program} onChange={handleChange} name='program'>
//             {programs.map((option) => (
//               <MenuItem key={option.value} value={option.value}>
//                 {option.label}
//               </MenuItem>
//             ))}
//           </TextField>
//         </div>
//         <div>
//           <label>Program Title</label>
//           <TextField id="outlined-basic" variant='outlined'  name='programTitle' defaultValue='jobin' />
//         </div>
//         <div>
//           <label>Program URL</label>
//           <TextField id="outlined-basic" variant='outlined'  name='programUrl' defaultValue='jobin' />
//         </div>
//         <div>
//           <Button onClick={saveForm} >Save Study Items</Button>
//         </div>
//       </div>
//     </form>
//   );
// };

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

export default function ToStudyItemTable() {
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
        <Card style={{ margin: "20px 0"}}>
          <center>
        <CardHeader style={{padding:"12px", width:"90%" ,boxShadow:"rgb(0 0 0 / 14%) 0px 4px 20px 0px, rgb(70 70 70 / 40%) 0px 7px 10px -5px",borderRadius:"5px"}}>
            
        <Typography className={classes.cardTitleWhite} style={{fontWeight:"bold",fontSize:"23px",lineHeight:"1.0"}}>
        Manage What To Study
        </Typography>
            </CardHeader></center>
          
          <CardBody>
            <Grid container spacing={1}>
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
                                style={{backgroundColor:"transparent",boxShadow:"none"}}
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
            </CardBody>
          </Card>
        
                  
                </div>
               
      

<div>



<Card ><center>
            <CardHeader style={{padding:"12px", width:"90%" ,boxShadow:"rgb(0 0 0 / 14%) 0px 4px 20px 0px, rgb(70 70 70 / 40%) 0px 7px 10px -5px",borderRadius:"5px"}} >
            
        <Typography className={classes.cardTitleWhite} style={{fontWeight:"bold",fontSize:"23px",lineHeight:"1.0"}}>
        ADD How To Study
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
            <td><label className='form__label'>Select Discipline</label></td>
            <td style={{paddingLeft:"80px"}}><TextField
              select
              value={dicipline}
              onChange={handleChange}
              name="discipline"
            >
              {disciplines.map((option) => (
                <MenuItem key={option.value} value={option.value}>
                  {option.label}
                </MenuItem>
              ))}
            </TextField></td>
          </tr>
          <tr>
            <td><label className='form__label'>Select Trending Country</label></td>
            <td style={{paddingLeft:"80px"}}><TextField
              select
              value={country}
              onChange={handleChange}
              name="country"
            >
              {countries.map((option) => (
                <MenuItem key={option.value} value={option.value}>
                  {option.label}
                </MenuItem>
              ))}
            </TextField></td>
            </tr>
          <tr>
            <td><label className='form__label'>Select Trending Program</label></td>
            <td style={{paddingLeft:"80px"}}><TextField
              select
              value={program}
              onChange={handleChange}
              name="program"
            >
              {programs.map((option) => (
                <MenuItem  key={option.value} value={option.value}>
                  {option.label}
                </MenuItem>
              ))}
            </TextField></td>
          </tr>
          <tr>
          <td><label className='form__label'>Program Title</label></td>
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
          <td><label className='form__label'>Program URL</label></td>
          <td style={{paddingLeft:"80px"}}><TextField
              id="outlined-basic"
              variant="outlined"
              name="programUrl"
              value={programURL}
              onChange={handleChange}
              defaultValue="jobin"
            />
          </td></tr>
          <tr><td colspan="2" style={{textAlign:"center"}}>
            <Button style={{color:"#fff",backgroundColor:"#021c49",minWidth:"100px",marginTop:"20px"}} onClick={saveForm}>Save</Button>
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
