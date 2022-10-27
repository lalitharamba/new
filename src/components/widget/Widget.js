import "./widget.css"
import DonutSmallIcon from '@mui/icons-material/DonutSmall';
import Inventory2Icon from '@mui/icons-material/Inventory2';
import PersonIcon from '@mui/icons-material/Person';


const Widget = ({type}) => {
    let data;
    // temporary
    const amount = 100;
    const diff = 20;


    switch(type){
        case "revenue":
            data={
                title:"Revenue",
                isMoney: true,
                icon:<DonutSmallIcon className="icon"/>
            };
            break;
        case "orders":
            data={
                title:"Orders",
                isMoney:false,
                icon:<Inventory2Icon className="icon"/>
            };
            break;
        case "customers":
            data={
                title:"Customers",
                isMoney:false,
                icon:<PersonIcon className="icon"/>
            };
            break;
            default:
                break;
    }
  return (
    <div className="widget">
        <div className="left">
            {data.icon}
        </div>
        <div className="middle">
            <span className="title">{data.title}</span>
            <span className="money">{data.isMoney && "$"} {amount}</span>
        </div>
        <div className="right">
            <div className="percent positive">
                
                {diff}%

            </div>
        </div>
    </div>
  )
}

export default Widget