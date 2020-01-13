import React from "react";
import User from "../user/user";
import Palette from "../palette/palette";

const Profile = ()=>{
    return(
        <div className="container profile">
            <User src="https://s3.amazonaws.com/uifaces/faces/twitter/k/128.jpg"
                  alt="man"
                  name="Scott"/>
            <Palette/>
        </div>
    )
};
export default Profile;