import {useParams} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import {getPosts} from "./PostsSlice";
import "./Posts.scss";
import ReturnLink from "../../sharedComponents/returnLink/ReturnLink";


export default function Posts(){

    const { userId } = useParams();

    const dispatch = useDispatch();

    useEffect(()=>{
        dispatch(getPosts())
    },[dispatch])

    const posts = useSelector(state=>state.posts.posts);

    const filteredPosts = posts.filter(post=>post.userId==userId)

    return(
        <main className="posts container">
            <div className="posts__wrapper">
                <span className="posts__title">Posts</span>
                <ReturnLink text={"Users"}/>
                <div className="posts__cards">
                {filteredPosts &&
                    filteredPosts.map(post=><div key={post.id} className="posts__card custom-card">
                    <div className="posts__card">
                        <span className="posts__card__title">{post.title}</span>
                        <span>{post.body}</span>
                    </div>
                </div>)}
                </div>
            </div>
        </main>
    )
}