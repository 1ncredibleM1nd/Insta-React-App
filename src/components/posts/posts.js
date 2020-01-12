import React , {Component} from "react";

import InstaService from "../../services/instaServices";
import User from "../user/user";
import ErrorMessage from "../error";

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
    renderItems(arr){
        return arr.map(item=>{
           const {name,altname,photo,src,alt,descr,id}=item;
           return(
               <div key={id} className="post">
                   <User src={photo}
                         alt={altname}
                         name={name}
                         min
                   />
                   <img src={src} alt={alt}/>
                   <div className="post__name">
                       {name}
                   </div>
                   <div className="post__descr">
                       {descr}
                   </div>
               </div>
           );
        });
    }

    render() {
        const {error,posts}=this.state;
        if (error){
            return <ErrorMessage/>
                }
        const items=this.renderItems(posts);
        return(
            <div className="left">
                {items}
            </div>
        );
    }
}
