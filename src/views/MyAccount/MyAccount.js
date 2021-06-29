import Button from "@material-ui/core/Button";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import { Link } from "react-router-dom";
import React from "react";
import TextField from "@material-ui/core/TextField";
import Typography from "@material-ui/core/Typography";
import classNames from "classnames";
import { makeStyles } from "@material-ui/core/styles";
import ImageUpload from "../../components/CustomUpload/ImageUpload.js";



const MyProfile = () => {
  return (
    <div>
      <Card style={{padding:"20px"}}>
      <center>
              <Typography style={{color:"rgb(80 80 80)",fontWeight:"bold",fontSize:"23px",lineHeight:"1.0",marginBottom:"20px"}}>
        MY PROFILE
        </Typography>
        <Typography style={{fontSize:"17px",fontWeight:"600",color:"rgb(111 104 104)"}}> Profile Picture </Typography>
        <ImageUpload style={{width:"100px"}}
              addButtonProps={{round:true}}
              changeButtonProps={{round:true}}
              removeButtonProps={{round:true, color:"danger"}} />
              
        <table style={{marginTop:"10px",width:"80%"}}>
          <tr>
            <td style={{width:"20%"}}><Typography style={{fontSize:"20px",fontWeight:"600",color:"rgb(111 104 104)"}}>  First Name</Typography> </td>
            <td style={{padding:"10px 15px"}}><TextField style={{width:"70%"}} id="outlined-basic" label="First Name" variant="outlined" /></td>
          </tr>
          <tr>
            <td style={{width:"20%"}}><Typography style={{fontSize:"20px",fontWeight:"600",color:"rgb(111 104 104)"}}> Last Name </Typography> </td>
            <td style={{padding:"10px 15px"}}><TextField style={{width:"70%"}} id="outlined-basic" label="Last Name" variant="outlined" /></td>
          </tr>
          <tr>
            <td style={{width:"20%"}}><Typography style={{fontSize:"20px",fontWeight:"600",color:"rgb(111 104 104)"}}> Contact Number </Typography> </td>
            <td style={{padding:"10px 15px"}}><TextField style={{width:"70%"}} id="outlined-basic" label="Phone Number" variant="outlined" /></td>
          </tr>
          <tr>
            <td colSpan="2"><center><Button style={{color:"#fff",backgroundColor:"#021c49",minWidth:"100px",marginTop:"20px"}} >Save Profile</Button></center> </td>
          </tr>

        </table>

        </center>
      </Card>






      </div>
  );
};

export default MyProfile;
