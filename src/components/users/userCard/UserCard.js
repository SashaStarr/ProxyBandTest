import "./UserCard.scss";
import {Link} from "react-router-dom";
import {useDispatch} from "react-redux";
import {albumsModalVisible} from "../UsersSlice";


export default function UserCard({id,name,username,email,address,phone,website,company}){

    const dispatch = useDispatch();

   return(
       <div className="user-card custom-card">
           <span className="user-card__username">{username}</span>
           <span className="user-card__name">{name}</span>
           <span><strong>Email:</strong> {email}</span>
           <span><strong>Phone:</strong> {phone}</span>
           <span><strong>Website:</strong> {website}</span>
           <span></span>
           <div className="user-card__buttons">
               <Link to={`/posts/${id}`} className="user-card__posts-link">Posts</Link>
           <button onClick={()=>dispatch(albumsModalVisible({visible:true,currentUserId:id}))}
                   className="user-card__albums">
               Albums
           </button>
           </div>
       </div>
   )
}