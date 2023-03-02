import "./PrimaryModal.scss";
import Close from "../../resourses/img/close.svg";

export default function PrimaryModal(props){
    const {onClose,children,title} = props;
    return(
        <div className="primary-modal__container" onClick={onClose}>
            <div className="primary-modal__wrapper" onClick={e => e.stopPropagation()}>
                <span className="primary-modal__title">{title}</span>
                <button className="primary-modal__close"
                onClick={onClose}>
                    <img src={Close} alt="close modal"/>
                </button>
                <div className="primary-modal__content">
                    {children}
                </div>
            </div>
        </div>
    )
}