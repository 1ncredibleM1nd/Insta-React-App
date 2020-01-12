import React from "react";
import Posts from "../posts/posts"
import Users from "../users/users";

export  default function Feed() {
    return(
        <div className="container feed">
            <Posts/>
            <Users/>
        </div>
    );
}
