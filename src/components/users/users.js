import React from "react";
import User from "../user/user";


export default  function Users() {
    return(
        <div className="right">
            <User src="https://s3.amazonaws.com/uifaces/faces/twitter/k/128.jpg"
                  alt="man"
                  name="Scott"
                  min={true}
            />
            <div className="users__block">
                <User src="https://s3.amazonaws.com/uifaces/faces/twitter/k/128.jpg"
                      alt="man"
                      name="Scott"
                      min={true}
                />
                <User src="https://s3.amazonaws.com/uifaces/faces/twitter/k/128.jpg"
                      alt="man"
                      name="Scott"
                      min={true}
                />
                <User src="https://s3.amazonaws.com/uifaces/faces/twitter/k/128.jpg"
                      alt="man"
                      name="Scott"
                      min={true}
                />
                <User src="https://s3.amazonaws.com/uifaces/faces/twitter/k/128.jpg"
                      alt="man"
                      name="Scott"
                      min={true}
                />


            </div>
        </div>
    )

}

