import "./card.css"
import Heart from "../../img/heart.png"
import HeartFilled from "../../img/heartfilled.png"
import Share from "../../img/share.png"
import Info from "../../img/info.png"
import Comment from "../../img/comment.svg"

const Card = ({post})=>{
    return (
        <div className="card">
            <div className="info">
                <img src={post.userImg} alt="" className="userImg"/>
                <span>{post.fullname}</span>
            </div>
            <image src={post.postImg} alt="" className="postImg"/>
            <div className="interactive">
                <image src={Heart} alt="" className="cardIcon"/>
                <image src={Comment} alt="" className="cardIcon"/>
                <image src={Share} alt="" className="cardIcon"/>
                <image src={Info} alt="" className="cardIcon"/>
            </div>

        </div>
    )
}
export default Card