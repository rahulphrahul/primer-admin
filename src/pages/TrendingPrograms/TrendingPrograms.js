import React from 'react'
import Board from 'react-trello'
import Card from "components/Card/Card.js";
import CardHeader from "components/Card/CardHeader.js";
import Typography from "@material-ui/core/Typography";
import CardBody from "components/Card/CardBody.js";
import ArrowUpwardIcon from '@material-ui/icons/ArrowUpward';
import Button from "@material-ui/core/Button";
import GridItem from "components/Grid/GridItem.js";
import GridContainer from "components/Grid/GridContainer.js";





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
          {id: 'Card1', title: 'Engineering'},
          {id: 'Card2', title: 'Computer Science'},
          {id: 'Card3', title: 'Psychology'},
          {id: 'Card4', title: 'Data Analytics'},
          {id: 'Card5', title: 'Cyber Security'},
          {id: 'Card6', title: 'Medicine'},
          {id: 'Card7', title: 'Criminology'},
          {id: 'Card8', title: 'Law'},
          {id: 'Card9', title: 'Information Technology'},
          {id: 'Card10', title: 'Education'},
          {id: 'Card11', title: 'Arts'}
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
            {id: 'Card12', title: 'Business & Management'},
            {id: 'Card13', title: 'Mathematics'},]
      }
    ]
  }
export default class TrendingPrograms extends React.Component {
	render() {
		return <>
         <center>
            <GridContainer>
                <GridItem xs={6} sm={6} md={6}> </GridItem>
                <GridItem xs={6} sm={6} md={6}>
                <Button style={{color:"#fff",backgroundColor:"#ff9800",minWidth:"100px"}} >Publish Trending Cources</Button>
                </GridItem>
                </GridContainer>
            <Typography style={{fontSize:"18px",marginTop:"30px",marginBottom:"-50px",fontWeight:"bold"}}>
       >>   Drag   >>
        </Typography>
            <Board style={{backgroundColor:"rgb(255 255 255)",width:"920px"}} data={data} />
          </center>
</>
	}
}
