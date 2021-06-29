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

import "../../assets/css/InnerPages.css";





const data = {
    lanes: [
      {
        id: 'lane1',
        title: 'ALL PROGRAMS',
        current: '[Circular]',
        currentPage: 1,
        style: {
            width: 400,
            boxShadow: '2px 2px 4px 0px rgba(0,0,0,0.75)',
            marginRight:'100px'
          },
        cards: [
          {id: 'Card1', title: 'USA'},
          {id: 'Card2', title: 'CANADA'},
          {id: 'Card3', title: 'UNITED KINGDOM'},
          {id: 'Card4', title: 'GERMANY'},
          {id: 'Card5', title: 'SINGAPORE'},
          {id: 'Card6', title: 'POLAND'},
          {id: 'Card7', title: 'SWEDEN'},
          {id: 'Card8', title: 'ITALY'},
          {id: 'Card9', title: 'JAPAN'}
        ]
      },
      {
        id: 'lane2',
        title: 'TRENDING PROGRAMS',
        style: {
            width: 400,
            boxShadow: '2px 2px 4px 0px rgba(0,0,0,0.75)'
          },
        cards: [
            {id: 'Card12', title: 'AUSTRALIA'},
            {id: 'Card13', title: 'NEW ZELAND'},]
      }
    ]
  }
export default class TrendingCountries extends React.Component {
	render() {
		return <><div className="main">
         <center>
            <GridContainer>
                <GridItem xs={6} sm={6} md={6}> </GridItem>
                <GridItem xs={6} sm={6} md={6}>
                <Button style={{color:"#fff",backgroundColor:"#021c49",minWidth:"100px"}} >Publish Trending Countries</Button>
                </GridItem>
                </GridContainer>
            {/* <Typography style={{fontSize:"18px",marginTop:"20px",marginTop:"30px",marginBottom:"-50px",fontWeight:"bold"}}>

        </Typography> */}
            <Board style={{backgroundColor:"rgb(255 255 255)"}} data={data} />
          </center>
</div>
</>
	}
}
