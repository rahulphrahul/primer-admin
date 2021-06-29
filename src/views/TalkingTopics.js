import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TablePagination from '@material-ui/core/TablePagination';
import TableRow from '@material-ui/core/TableRow';
import Card from "components/Card/Card.js";
import CardHeader from "components/Card/CardHeader.js";
import CardBody from "components/Card/CardBody.js";
import AddIcon from "@material-ui/icons/Add";
import Grid from "@material-ui/core/Grid";
import GridItem from "components/Grid/GridItem.js";
import GridContainer from "components/Grid/GridContainer.js";
import Typography from "@material-ui/core/Typography";
import Button from "components/CustomButtons/Button.js";
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import TextField from "@material-ui/core/TextField";

const columns = [
  { id: 'id', label: 'id',align: 'center', minWidth: 10 },
  { id: 'TalkingTopicsGroup', label: 'Talking Topics Group',align: 'center', minWidth: 100 },
  {
    id: 'TalkingTopic',
    label: 'Talking Topic',
    minWidth: 10,
    align: 'center',
    format: (value) => value.toLocaleString('en-US'),
  },
  {
    id: 'TotalDiscussionTopic',
    label: 'Total Discussion Topic',
    minWidth: 10,
    align: 'center',
    format: (value) => value.toLocaleString('en-US'),
  },
  {
    id: 'TotalReplaysPosted',
    label: 'Total Replays Posted',
    minWidth: 10,
    align: 'center',
    format: (value) => value.toFixed(2),
  },
  {
    id: 'TotalLikes',
    label: 'Total Likes',
    minWidth: 10,
    align: 'center',
    format: (value) => value.toFixed(2),
  },
  {
    id: 'TotalUnlikes',
    label: 'Total Unlikes',
    minWidth: 10,
    align: 'center',
    format: (value) => value.toFixed(2),
  },
  {
    id: 'TimesShared',
    label: 'Times Shared',
    minWidth: 10,
    align: 'center',
    format: (value) => value.toFixed(2),
  },
  {
    id: 'TotalAbuseReported',
    label: 'Total Abuse Reported',
    minWidth: 10,
    align: 'center',
    format: (value) => value.toFixed(2),
  },
];

function createData(id, TalkingTopicsGroup, TalkingTopic, TotalDiscussionTopic, TotalReplaysPosted,TotalLikes,TotalUnlikes,TimesShared,TotalAbuseReported,size ,population) {
  const density = population / size;
  return { id, TalkingTopicsGroup, TalkingTopic,TotalDiscussionTopic, TotalReplaysPosted,TotalLikes,TotalUnlikes,TimesShared, TotalAbuseReported, size, density };
}

const rows = [
    createData(30, 'Institution', 'Canadien Universities', '12-jan-21', '21', '104', '46', '31', '1'),
           createData(31, 'Visa', 'Visa Guidence for USA', '12-jan-21', '21', '104', '46', '38', '3'),
         createData(32, 'Admission', 'Common Application', '12-jan-21', '21', '104', '46', '45', '5'),
    createData(33, 'Institution', 'American Universities', '12-jan-21', '21', '104', '46', '52', '7'),
   createData(34, 'Profile', 'Free Education Councelling', '12-jan-21', '21', '104', '46', '59', '9'),
 createData(35, 'Institution', 'Australien Universities', '12-jan-21', '21', '104', '46', '66', '11'),
     createData(36, 'Test Preparation', 'IELTS Training', '12-jan-21', '21', '104', '46', '73', '13'),
       createData(37, 'Visa', 'Visa Guidence for German', '12-jan-21', '21', '104', '46', '80', '15'),
     createData(38, 'Institution', 'German Universities', '12-jan-21', '21', '104', '46', '87', '17'),
         createData(39, 'Pre-Departure', 'Pre-Departure', '12-jan-21', '21', '104', '46', '94', '19')
 
];

const useStyles = makeStyles({
  root: {
    width: '100%',
  },
  container: {
    maxHeight: 440,
  },
});

export default function StickyHeadTable() {
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


<CardHeader color="warning" style={{marginBottom:"20px"}}>
            <center>
        <Typography className={classes.cardTitleWhite} style={{fontSize:"25px"}}>
        Manage Admin Discussions
        </Typography></center>
            </CardHeader>
            <Grid container spacing={1} style={{marginBottom:"20px"}}>
              <Grid item xs={9}>
                      <h3 style={{ color: "rgb(49 49 49 / 79%)", textAlign: "center" ,fontWeight: "bold" }}>
                      
                      </h3>
                    </Grid>
                    <Grid item xs={3}>
                      <Button
                        variant="contained"
                        color="warning"
                        startIcon={<AddIcon />}
                      >
                        New Discussion
                      </Button>
                    </Grid>
                  </Grid>
    <Paper className={classes.root} style={{marginBottom:"70px"}}>
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
            {rows.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((row) => {
              return (
                <TableRow hover role="checkbox" tabIndex={-1} key={row.code}>
                  {columns.map((column) => {
                    const value = row[column.id];
                    return (
                      <TableCell key={column.id} align={column.align}>
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
        rowsPerPageOptions={[10, 25, 100]}
        component="div"
        count={rows.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onChangePage={handleChangePage}
        onChangeRowsPerPage={handleChangeRowsPerPage}
      />
    </Paper>

    <Card >
            <CardHeader color="warning" >
            <center>
        <Typography className={classes.cardTitleWhite} style={{fontSize:"25px"}}>
       Admin Discussion
        </Typography></center>
            </CardHeader>
            <CardBody>

            <GridContainer>
        <GridItem xs={12} sm={6} md={6}>
        <Typography className={classes.griditems} style={{marginTop:"20px",marginBottom:"15px"}}>
                Talking Topic Group
              <FormControl style={{width:"100%", marginBottom:"10px", marginBottom:"10px"}} variant="outlined" className={classes.formControl}>
        <Select
          native
          inputProps={{
            name: 'Lession Mode',
            id: 'outlined-age-native-simple',
          }}
        ><option value={""}>Select Talking Topic Group</option>
          <option value={"skype"}>Institution</option>
          <option value={"zoom"}>Visa</option>
          <option value={"telephonic"}>Admission</option>
          <option value={"in-personal"}>Profile</option>
          <option value={"webinar"}>Test Preparation</option>
          <option value={"classroom"}>Pre-Departure</option>
        </Select>
      </FormControl>
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
              <center><Button style={{backgroundColor:"#ff9800",minWidth:"100px",marginTop:"20px"}}>Publish Description</Button></center>
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
                color="white"
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
    </>
  );
}