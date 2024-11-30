import "./navbar.css"
import Notifications from "../../img/notification.png"
import Message from "../../img/message.png"
import Settings from "../../img/settings.png"
const Navbar = ()=>{
    return (
        <div className="navbar">
            <span className="logo">Lama App</span>
            <div className="icons">
                <div className="icon">
                    <img src={Notifications} className="iconImg" alt=""/>
                    <div className="counter">2</div>
                </div>
                <div className="icon">
                    <img src={Message} className="iconImg" alt=""/>
                    <div className="counter">2</div>
                </div>
                <div className="icon">
                    <img src={Settings} className="iconImg" alt=""/>
                    <div className="counter">2</div>
                </div>
            </div>
        </div>
    )
}
export default Navbar