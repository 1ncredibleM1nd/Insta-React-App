import React , {Component} from "react";
import Post from "./post";

export default class Posts extends Component{
    render() {
        return(
            <div className="left">
                <Post src="http://thr.ru/public/article/prephoto/9665.jpg" alt="john"/>
                <Post src="http://dkzar.ru/wp-content/uploads/2012/10/bred-pitt-osushhestvit-kazn-nad-iisusom-hristom_1.jpg" alt="inst"/>
            </div>

        );



    }
}
