import React , {Component} from "react";

import InstaService from "../../services/instaServices";

export default class Posts extends Component{

    InstaService =new InstaService();
    state ={
        posts:[],
        error:false
    };
    updatePosts(){
        this.InstaService.getAllPost()
            .then(this.onPostsLoaded)
            .catch(this.onError);
    }
    onPostsLoaded=(posts)=>{
        this.setState({
            posts,
            error:false
        });
    };
    onError=()=>{
        this.setState({
            error:true
        });
    };
    componentDidMount() {
        this.updatePosts();
    }

    render() {
        return(
            <div className="left">

            </div>

        );



    }
}
