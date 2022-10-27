import "./history.css";
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
const History = () => {
  return (
    <div className="history">
      <div className="up">
        <h1 className="head">Top Product</h1>
        <div className="month">
          <div className="monthly">Monthly</div>
          <KeyboardArrowDownIcon fontSize="small"/>
        </div>
        
      </div>
      <div className="square">
        <div className="leftside">#1</div>
        <div className="median">
          <div className="header">
            <div className="cap">polo blue T-shirt</div>
            <div className="dollar">$ 25</div>
          </div>
        </div>
        <div className="rightsid">3.82k</div>
        
      </div>
      <div className="square">
        <div className="leftside">#2</div>
        <div className="median">
          <div className="header">
            <div className="cap">saree for women</div>
            <div className="dollar">$24.5</div>
          </div>
        </div>
        <div className="rightsid">3.14k</div>
        
      </div>
      <div className="square">
        <div className="leftside">#3</div>
        <div className="median">
          <div className="header">
            <div className="cap">Red color Cap</div>
            <div className="dollar">$ 2.84</div>
          </div>
        </div>
        <div className="rightsid">3.82k</div>
        
      </div>
      <div className="square">
        <div className="leftside">#4</div>
        <div className="median">
          <div className="header">
            <div className="cap">Pocket T-shirt</div>
            <div className="dollar">$ 21.5</div>
          </div>
        </div>
        <div className="rightsid">2.06k</div>
        
      </div>

    </div>
  )
}

export default History