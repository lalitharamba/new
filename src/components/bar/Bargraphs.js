import "./bargraphs.css";
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
const data = [
  
  {name: 'Jan', Total:20000},
  {name: 'Feb', Total:25000},
  {name: 'Mar', Total:18000},
  {name: 'Apr', Total:17000},
  {name: 'May', Total:15000},
  {name: 'Jun', Total:35000},
  {name: 'Jul', Total:19000},
];


const Bargraphs = () => {
  return (
    <div className="bargraph">
      <div className="bar-up">
        <h1 className="bar-head">Overview</h1>
        <div className="year">
          <div className="yearly"><strong>Sort By:</strong>yearly</div>
          <KeyboardArrowDownIcon/>
        </div>
      </div>
      <div className="split">
        <div className="sideleft">
          <div className="bar-current">
            <div className="tally">This Month</div>
          </div>
          <div className="currency">
            <div className="numbers">$24,568</div>
            <div className="per">+2.65%</div>
          </div>
          <div className="bar-squar">
            <div className="bar-left">
              <div className="pro">Orders</div>
              <div className="bar-dollar"><strong>5,643</strong></div>
            </div>
            <div className="bar-right">
              <div className="pro">Sales</div>
              <div className="bar-dollar"><strong>16,273</strong></div>
            </div>
          </div>
          <div className="bar-squar">
            <div className="bar-left">
              <div className="pro">Order Value</div>
              <div className="bar-dollar"><strong>12.03%</strong></div>
            </div>
            <div className="bar-right">
              <div className="pro">Customers</div>
              <div className="bar-dollar"><strong>21,456</strong></div>
            </div>
          </div>
          <div className="bar-squar">
            <div className="bar-left">
              <div className="pro">Income</div>
              <div className="bar-dollar"><strong>$35,652</strong></div>
            </div>
            <div className="bar-right">
              <div className="pro">Expenses</div>
              <div className="bar-dollar"><strong>$12,248</strong></div>
            </div>
          </div>
        </div>
        <ResponsiveContainer width="100%" height={250}>
        <BarChart
        width={500}
        height={300}
        data={data}
        margin={{
          top: 35,
          right: 50,
          left: 100,
          bottom: 5,
        }}
        barSize={12}
        >
          <XAxis dataKey="name" scale="point" padding={{ left: 10, right:10 }} />
          <YAxis />
          <Tooltip />
          <Legend />
          <CartesianGrid strokeDasharray="3 3" />
          <Bar dataKey="Total" fill="#8884d8" background={{ fill: '#eee' }} />
          </BarChart>
      </ResponsiveContainer>
      </div>
      
      
    </div>
    
     
    
  )
}

export default Bargraphs;



