import React,{setState} from "react";
import ReactDOM from "react-dom";
import ToggleSwitch1 from "./ToggleSwitch.js";
import Grid from "@material-ui/core/Grid";
import AddIcon from "@material-ui/icons/Add";
import Button from "@material-ui/core/Button";
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import IconButton from '@material-ui/core/IconButton';










export default function MeetingDateComponent(){
    
   
  const state = {
    selectedDate: null
  };

  const componentDidMount = () => {
    setDate();
  }





  const setDate = (newDate) => {
    const date = newDate || new Date();
    setState = () => {
      selectedDate:
        date.getFullYear() + "-" + (date.getMonth() + 1) + "-" + date.getDate()
        
    };
  };




  const getPreviousDate = () => {
    const { selectedDate } = state

    const currentDayInMilli = new Date(selectedDate).getTime()
    const oneDay = 1000 * 60 *60 *24
    const previousDayInMilli = currentDayInMilli - oneDay
    const previousDate = new Date(previousDayInMilli)

    setDate(previousDate)

  }

  const getNextDate = () => {
    const { selectedDate } = state

    const currentDayInMilli = new Date(selectedDate).getTime()
    const oneDay = 1000 * 60 *60 *24
    const nextDayInMilli = currentDayInMilli + oneDay
    const nextDate = new Date(nextDayInMilli)

    setDate(nextDate)

  }

  
    return (

      <div>

        <div style={{width:"500px",height:'500px',border:"2px solid"}}>
          <div style={{width:"100%",padding:"10px 0",color:"#fff",backgroundColor:"#505050"}}>
          <center>Meeting Calender</center>
          </div>
          
                  <table style={{width:"100%"}}>
                    <tr>
                      <td><center><IconButton  onClick={getPreviousDate} aria-label="next" color="primary">
                                      <ArrowBackIosIcon  fontSize="large"/>
                                  </IconButton>
                      </center></td>

                      <td style={{width:"30%"}}><center>
                        <span style={{fontWeight:"bold"}}>DATE</span> <br />
                        <span>{state.selectedDate}</span>
                        </center></td>
                      
                      <td><center><IconButton  onClick={getNextDate} aria-label="next" color="primary">
                                      <ArrowForwardIosIcon  fontSize="large"/>
                                  </IconButton>
                        </center></td>
                    </tr>
                  </table>
        </div>




          <ToggleSwitch1 />
        <h3>Date: {state.selectedDate}</h3>
        <button onClick={getPreviousDate}>Previous</button>
        <button onClick={getNextDate}>Next</button>
      </div>
    );
  
}

