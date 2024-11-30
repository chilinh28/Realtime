import "./card.css";
import Heart from "../../img/heart.svg";
import HeartFilled from "../../img/heartFilled.svg";
import Share from "../../img/share.svg";
import Info from "../../img/info.svg";
import Comment from "../../img/comment.svg";
import { useState } from "react";

const Card = ({ post }) => {
    const[liked, setLiked]  = useState(false);
    const handleNotification = () =>{
        setLiked(true);
    }
    return (
        <div className="card">
            <div className="info">
                <img src={post.userImg} alt="123" className="userImg" />
                <span>{post.username}</span>
            </div>
            <img src={post.postImg} alt="" className="postImg" />
        <div className="interaction">
            {liked ? (
                <img src={HeartFilled} alt="Heart Filled Icon" className="cardIcon"/>
            ) : (
            <img src={Heart} alt="Heart Icon" className="cardIcon"  onClick={handleNotification}/>
            )}
            <img src={Comment} alt="Comment Icon" className="cardIcon" />
            <img src={Share} alt="Share Icon" className="cardIcon" />
            <img src={Info} alt="Info Icon" className="cardIcon infoIcon" />
        </div>
        </div>
    );
};

export default Card;
