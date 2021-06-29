import Button from "@material-ui/core/Button";
import Card from "../../components/Card/Card.js";
import React from "react";
import TextField from "@material-ui/core/TextField";
import Typography from "@material-ui/core/Typography";



const ChangePassword = () => {
  return (
    <div>
        <center>
      <Card style={{padding:"60px",maxWidth:"800px"}}>
      
              <Typography style={{color:"rgb(80 80 80)",fontWeight:"bold",fontSize:"23px",lineHeight:"1.0",marginBottom:"20px"}}>
        Change Password
        </Typography>

        <table style={{marginTop:"10px",width:"100%"}}>
          <tr>
            <td style={{width:"40%"}}><Typography style={{fontSize:"20px",fontWeight:"400",color:"rgb(111 104 104)"}}> Current Password </Typography> </td>
            <td style={{padding:"15px 15px"}}><TextField style={{width:"70%"}} id="outlined-basic" label=" Current Password" variant="outlined" /></td>
          </tr>
          <tr>
            <td style={{width:"40%"}}><Typography style={{fontSize:"20px",fontWeight:"400",color:"rgb(111 104 104)"}}> New Password </Typography> </td>
            <td style={{padding:"15px 15px"}}><TextField style={{width:"70%"}} id="outlined-basic" label=" New Password" variant="outlined" /></td>
          </tr>
          <tr>
            <td style={{width:"40%"}}><Typography style={{fontSize:"20px",fontWeight:"400",color:"rgb(111 104 104)"}}> Confirm New Password </Typography> </td>
            <td style={{padding:"15px 15px"}}><TextField style={{width:"70%"}} id="outlined-basic" label=" Confirm New Password" variant="outlined" /></td>
          </tr>
          <tr>
            <td colSpan="2"><center><Button style={{color:"#fff",backgroundColor:"#021c49",minWidth:"100px",marginTop:"20px"}} >Change Password </Button></center> </td>
          </tr>

        </table>

       
      </Card>
      </center>

      </div>
  );
};

export default ChangePassword;
