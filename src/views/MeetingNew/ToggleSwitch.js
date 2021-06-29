import React, { useState } from "react";
import ReactDOM from "react-dom";
import ToggleSwitch from "../../components/CustomSwitch/CustomSwitch.js";


export default function ToggleSwitch1() {
    let [newsletter, setNewsletter] = useState(false);
    const onNewsletterChange = (checked) => {
        setNewsletter(checked);
        if (!checked) {

        }
      };

 

    return (

      <div>
          
          <ToggleSwitch
          id="newsletter1"
          checked={newsletter}
          onChange={onNewsletterChange}
        />
      </div>
    );
  
}

