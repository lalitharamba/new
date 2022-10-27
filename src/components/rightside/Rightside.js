import "./rightside.css"
import ErrorOutlineIcon from '@mui/icons-material/ErrorOutline';
// import { CircularProgressbar } from "react-circular-progressbar";
// import "react-circular-progressbar/dist/styles.css";
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import {
  CircularProgressbar,
  CircularProgressbarWithChildren,
  buildStyles
} from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

var percentage=69;
const Rightside = () => {
  return (
    <div className='rightside'>
      <div className="right-top">
      
        <div className="rt">
        <MoreHorizIcon  className="right-icon"/>
          <div className="rt-img">
            <img src="https://images.unsplash.com/photo-1597223557154-721c1cecc4b0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8ZmFjZXN8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60" width={70} height={70}
            alt='person image'className='laaral' />
          </div>
          <div className="world">
            <div><strong>laaral</strong> </div>
            <div className="rl">WORLD</div>
          </div>
          <div className="top-split">
            <div className="top-left">
              <div><strong>1,269</strong></div>
              <div className="top-pro">Products</div>
            </div>
            <div className="top-right">
              <div><strong>5.2k</strong></div>
              <div className="top-follo">Followers</div>
            </div>
          </div>
        </div>
        
        <div></div>
      </div><hr/>
      <div className="right-middle">
        <div className="middle-top">
          <h1 className="middle-title">Earning</h1>
          <ErrorOutlineIcon  fontSize="small"/>
        </div>
        <div className="middle-bottom">
          <div className="middle-featuredChart">
          <CircularProgressbar
            value={percentage}
            text={`${percentage}%`}
            styles={buildStyles({
                rotation: 0.5 + (1 - percentage / 100) / 2
            })}/>
            {/* <CircularProgressbar value={59} text={76}  strokeWidth={15}/> */}
          </div>
          <div className="text">
            <div><strong>$26256</strong> </div>
            <div className="texts">Earning This Month</div>
          </div>
          <div className="right-per">
            <div className="percentage">+2.65%</div>
            <div className="right-texts">From previous period</div>

          </div>
        </div>
      </div><hr/>
      <div className="right-bottom">
        <div>Rcent Activity</div>
        <div className="squares">
          <div className="right-squares">
            <div className="right-leftside">12</div>
            <div className="mes">sep</div>
          </div>
          <div className="right-median">
            <div className="right-header">
              <div className="cap">Responded to need "Volunteer Activity"</div>
            </div>
          </div>
        </div>
        <div className="squares">
          <div className="right-squares">
            <div className="right-leftside">11</div>
            <div className="mes">sep</div>
          </div>
          <div className="right-median">
            <div className="right-header">
              <div className="cap">Every one Realizes would be desirable</div>
            </div>
          </div>
        </div>
        <div className="squares">
          <div className="right-squares">
            <div className="right-leftside">10</div>
            <div className="mes">sep</div>
          </div>
          <div className="right-median">
            <div className="right-header">
              <div className="cap">Joined the group "Boards man ship Forum"</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Rightside
