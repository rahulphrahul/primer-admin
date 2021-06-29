import React from 'react'
import Board from 'react-trello'
import Card from "../../components/Card/Card.js";
import CardHeader from "../../components/Card/CardHeader.js";
import Typography from "@material-ui/core/Typography";
import CardBody from "../../components/Card/CardBody.js";
import ArrowUpwardIcon from '@material-ui/icons/ArrowUpward';
import Button from "@material-ui/core/Button";
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import GridItem from "../../components/Grid/GridItem.js";
import GridContainer from "../../components/Grid/GridContainer.js";





const data = {
    lanes: [
      {
        id: 'lane1',
        title: 'USA',
        current: '[Circular]',
        currentPage: 1,
        style: {
            width: 400,
            boxShadow: '2px 2px 4px 0px rgba(0,0,0,0.75)',
            marginRight:'100px'
          },
        cards: [
          {id: 'Card1', title: 'North Eastern University'},
          {id: 'Card2', title: 'St.  Thomas University'},
          {id: 'Card3', title: 'Norwich University '},
          {id: 'Card4', title: 'Drexel UniversityUniversity of York'},
          {id: 'Card5', title: 'The University of Arizona'},
          {id: 'Card6', title: 'Tulane University'},
          {id: 'Card7', title: 'Bowie University'},
          {id: 'Card8', title: 'University of Louisiana'},
          {id: 'Card9', title: 'St.Johns University'},
        ]
      },
      {
        id: 'lane2',
        title: 'TRENDING INSTITUTIONS IN USA',
        style: {
            width: 400,
            boxShadow: '2px 2px 4px 0px rgba(0,0,0,0.75)'
          },
        cards: [
            {id: 'Card12', title: 'University of Manitoba'},
            {id: 'Card13', title: 'Metropoliton State Ubiversity'},
            {id: 'Card13', title: 'University of Houston'},
            {id: 'Card13', title: 'Boston University'},
            {id: 'Card13', title: 'Harper Adam University'},
            {id: 'Card13', title: 'University of Wiscosin'},]
      }
    ]
  }
export default class TrendingInstitutions extends React.Component {
	render() {
		return <>
    <div style={{margin:"10px"}} className="main">
         <center>
            <GridContainer>
                <GridItem xs={6} sm={6} md={6}>
                <table><tr>
                    <td>
                    <Typography style={{fontSize:"18px"}}> Select Trending Country </Typography>
                    </td>
                    <td style={{paddingLeft:"20px"}}>
                    <FormControl style={{width:"100%"}} variant="outlined" >
        <Select style={{ paddingRight:"10px"}}
          native
          inputProps={{
            name: 'Lession Mode',
            id: 'outlined-age-native-simple',
          }}
        >
          <option value={"usa"}>USA</option>
          <option value={"caneda"}>CANEDA</option>
          <option value={"newzeland"}>NEW ZELAND</option>
          <option value={"japan"}>JAPAN</option>
          <option value={"india"}>INDIA</option>
          <option value={"germany"}>GERMANY</option>
          <option value={"australia"}>AUSTRALIA</option>
          <option value={"uk"}>UK</option>
          <option value={"ireland"}>IRELAND</option>
        </Select>
      </FormControl>
                    </td>
                    </tr></table>
                </GridItem>
                <GridItem xs={6} sm={6} md={6}>
                <Button style={{color:"#fff",backgroundColor:"#021c49",minWidth:"100px"}} >Publish Trending Institutions</Button>
                </GridItem>
                </GridContainer>

            {/* <Typography style={{fontSize:"18px",marginTop:"30px",marginBottom:"-50px",fontWeight:"bold"}}>
       >>   Drag   >>
        </Typography> */}
            <Board style={{backgroundColor:"rgb(255 255 255)",width:"920px"}} data={data} />
          </center>
          </div>
</>
	}
}