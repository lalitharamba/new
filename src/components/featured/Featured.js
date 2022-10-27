import "./featured.css"
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

const Featured = () => {
  return (
    <div className="featured">
      <div className="top">
        <h1 className="title">Order Status</h1>
        <MoreHorizIcon fontSize="small"/>
      </div>
      <div className="bottom">
        <div className="featuredChart">
          <CircularProgressbar value={70}  strokeWidth={15}/>

        </div>
        <div className="summary">
          <div className="item">
            <div className="completed">Completed</div>
          </div>
          <div className="item">
            <div className="pending">Pending</div>
          </div>
          <div className="item">
            <div className="cancel">Cancel</div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Featured