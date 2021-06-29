import React from 'react';
import Accordion from '../../components/Accordion'
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TablePagination from '@material-ui/core/TablePagination';
import TableRow from '@material-ui/core/TableRow';
import Card from "../../components/Card/Card.js";
import CardHeader from "../../components/Card/CardHeader.js";
import CardBody from "../../components/Card/CardBody.js";
import AddIcon from "@material-ui/icons/Add";
import Grid from "@material-ui/core/Grid";
import GridItem from "../../components/Grid/GridItem.js";
import GridContainer from "../../components/Grid/GridContainer.js";
import Typography from "@material-ui/core/Typography";
import Button from "../../components/CustomButtons/Button.js";
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import TextField from "@material-ui/core/TextField";

const columns = [
  { id: 'id', label: 'id',align: 'center', minWidth: 10 },
  { id: 'ProgramName', label: 'Program Name',align: 'center', minWidth: 100 },
  {
    id: 'Description',
    label: 'Description',
    minWidth: 10,
    align: 'center',
    format: (value) => value.toLocaleString('en-US'),
  },
  {
    id: 'Country',
    label: 'Country',
    minWidth: 10,
    align: 'center',
    format: (value) => value.toLocaleString('en-US'),
  },
  {
    id: 'Institution',
    label: 'Institution',
    minWidth: 10,
    align: 'center',
    format: (value) => value.toFixed(2),
  },
  {
    id: 'TotalCourses',
    label: 'Total Courses',
    minWidth: 10,
    align: 'center',
    format: (value) => value.toFixed(2),
  },
  {
    id: 'UnderGraduate',
    label: 'Under Graduate',
    minWidth: 10,
    align: 'center',
    format: (value) => value.toFixed(2),
  },
  {
    id: 'Graduate',
    label: 'Graduate',
    minWidth: 10,
    align: 'center',
    format: (value) => value.toFixed(2),
  },
  {
    id: 'Doctorate',
    label: 'Doctorate',
    minWidth: 10,
    align: 'center',
    format: (value) => value.toFixed(2),
  },
  {
    id: 'Status',
    label: 'Status',
    minWidth: 10,
    align: 'center',
    format: (value) => value.toFixed(2),
  },
];

function createData(id, ProgramName, Description, Country, Institution,TotalCourses,UnderGraduate,Graduate,Doctorate, Status,size ,population) {
  const density = population / size;
  return { id, ProgramName, Description,Country, Institution,TotalCourses,UnderGraduate,Graduate, Doctorate, Status, size, density };
}

const rows = [
    createData(30, 'Engineering', 'View', '6', '21', '104', '46', '31', '1','Active'),
           createData(31, 'Computer &I T', 'View', '7', '21', '104', '46', '38', '3','Active'),
         createData(32, 'Phychology', 'View', '8', '21', '104', '46', '45', '0','Active'),
    createData(33, 'Law', 'View', '6', '21', '104', '46', '52', '0','Inactive'),
   createData(34, 'Criminology', 'View', '8', '21', '104', '46', '59', '0','Active'),
 createData(35, 'Accounting', 'View', '7', '21', '104', '46', '0', '0','Active'),
     createData(36, 'Business Management', 'View', '5', '21', '0', '46', '73', '0','Inactive'),
       createData(37, 'Analytics', 'View', '4', '21', '0', '46', '0', '0','Inactive'),
     createData(38, 'Medicine', 'View', '8', '21', '0', '46', '87', '17','Active')
        
 
];

const useStyles = makeStyles({
  root: {
    width: '100%',
  },
  container: {
    maxHeight: 440,
  },
});

export default function AccordionPage() {
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

  return (
      <>


            <Grid container spacing={1} style={{marginBottom:"15px"}}>
              <Grid item xs={10}>
              
                    </Grid>
                    <Grid item xs={2}>
                      <Button style={{backgroundColor:"#021c49",color:"#fff"}}
                        variant="contained"
                        startIcon={<AddIcon />}
                      >
                        Add
                      </Button>
                    </Grid>
                  </Grid>
                  <center><div style={{width:"90%",backgroundColor:"#a5a6b1",padding:"8px 0px"}}><center>
                    <span style={{fontWeight:"bold",color:"#fff",fontSize:"22px"}}>Programs</span>
                    </center></div>
    <Paper className={classes.root} style={{marginBottom:"70px",maxWidth:"90%"}}>
      <TableContainer className={classes.container}>
        <Table stickyHeader aria-label="sticky table">
          <TableHead>
            <TableRow >
              {columns.map((column) => (
                <TableCell style={{margin:"0px 0px",padding:"0px 0px"}}
                  key={column.id}
                  align={column.align}
                  style={{ maxWidth: 10 }}
                >
                  {column.label}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((row) => {
              return (
                <TableRow hover role="checkbox" tabIndex={-1} key={row.code}>
                  {columns.map((column) => {
                    const value = row[column.id];
                    return (
                      <TableCell key={column.id} align={column.align} style={{margin:"0px 0px",padding:"8px 0px"}}>
                        {column.format && typeof value === 'number' ? column.format(value) : value}
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
        rowsPerPageOptions={[5, 10, 25, 100]}
        component="div"
        count={rows.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onChangePage={handleChangePage}
        onChangeRowsPerPage={handleChangeRowsPerPage}
      />
    </Paper>
<Card style={{width:"90%"}}>
<CardHeader color="warning" >
            <center>
        <Typography className={classes.cardTitleWhite} style={{fontSize:"25px"}}>
       Program Matics
        </Typography></center>
            </CardHeader>
            <CardBody style={{padding:"15px 50px"}}>

            <Accordion />

            </CardBody>
</Card></center>
    
    </>
  );
}