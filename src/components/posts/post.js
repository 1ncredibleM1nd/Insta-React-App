import React ,{Component} from "react";
import User from "../user/user";

export default  class Post extends Component{
    render() {
        return(
            <div className="post">
                <User src="https://s3.amazonaws.com/uifaces/faces/twitter/k/128.jpg"
                      alt="man"
                      name="Scott"
                      min={true}
                />
                <img src={this.props.src} alt={this.props.alt}/>
                <div className="post__name">
                    Some account
                </div>
                <div className="post__descr">
                    Lorem ipsum dolor sit amet, consectetur
                    adipisicing elit. A ad aliquid dignissimos id ipsa non quam quasi sequi, velit vero?
                </div>
            </div>
        )
    }
}