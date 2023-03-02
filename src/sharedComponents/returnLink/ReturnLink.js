import "./ReturnLink.scss";
import Arrow from "../../resourses/img/arrow-left.svg";
import {useNavigate} from "react-router-dom";


export default function ReturnLink({text}){

    const navigate = useNavigate();

    return(
        <button className="return-link" onClick={() => navigate(-1)}>
            <img src={Arrow} alt="return arrow"/>
            <span>{text}</span>
        </button>
    )
}