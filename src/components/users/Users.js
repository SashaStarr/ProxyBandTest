import "./Users.scss";
import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import {albumsModalVisible, getAlbums, getUsers} from "./UsersSlice";
import UserCard from "./userCard/UserCard";
import PrimaryModal from "../../sharedComponents/primaryModal/PrimaryModal";
import Albums from "../albums/Albums";

export default function Users(){

    const dispatch = useDispatch();

    useEffect(()=>{
        dispatch(getUsers())
        dispatch(getAlbums())
    },[dispatch])

    const usersData = useSelector(state=>state.users);
    const { users, albums, albumsModal} = usersData;

    return (<>
        <main className="users container">
            <div className="users__wrapper">
                <span className="users__title">Users</span>
                <div className="users__cards">
                {users && users.map(user=><UserCard key={user.id} {...user}/>)}
                </div>
            </div>
        </main>
            {albumsModal.visible && <PrimaryModal
                title={"Albums"}
                onClose={()=>dispatch(albumsModalVisible({visible:false,currentUserId:0}))}>
                    <Albums albums={albums} userId={albumsModal.currentUserId}/>
            </PrimaryModal>}
        </>
    )
}