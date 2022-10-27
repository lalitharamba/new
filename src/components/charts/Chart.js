import "./chart.css";
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
const data = [
    {
      name: 'Page A',
      uv: 40,
      pv: 24,
      amt: 24,
    },
    {
      name: 'Page B',
      uv: 30,
      pv: 13,
      amt: 22,
    },
    {
      name: 'Page C',
      uv: 20,
      pv: 98,
      amt: 22,
    },
    {
      name: 'Page D',
      uv: 27,
      pv: 39,
      amt: 20,
    },
    {
      name: 'Page E',
      uv: 18,
      pv: 48,
      amt: 21,
    },
    {
      name: 'Page F',
      uv: 23,
      pv: 38,
      amt: 25,
    },
    {
      name: 'Page G',
      uv: 34,
      pv: 43,
      amt: 21,
    },
  ];

const Chart = () => {
  return (
    <div className="chart">
        <div className="upper">
            <h1 className="title">User Activity</h1>
            <div className="weeks">
                <div className="weekly">weekly</div>
                <KeyboardArrowDownIcon />
            </div>
        </div>
        <div className="current">
            <div>This Month</div>
            <div>16,543</div>
        </div>
        <div className="analysis">
            <div><span class="dot"></span>Current</div>
            <div><span class="dot1"></span>Prevoius</div>
        </div>
    
        <ResponsiveContainer width="90%" height="90%">
        <AreaChart width={730} height={250} data={data}
  margin={{ top: 50, right: 30, left: 0, bottom: 45 }}>
  <defs>
    <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
      <stop offset="5%" stopColor="#8884d8" stopOpacity={0.8}/>
      <stop offset="95%" stopColor="#8884d8" stopOpacity={0}/>
    </linearGradient>
    <linearGradient id="colorPv" x1="0" y1="0" x2="0" y2="1">
      <stop offset="5%" stopColor="#82ca9d" stopOpacity={0.8}/>
      <stop offset="95%" stopColor="#82ca9d" stopOpacity={0}/>
    </linearGradient>
  </defs>
  <XAxis dataKey="name" />
  <YAxis />
  <CartesianGrid strokeDasharray="3 3" />
  <Tooltip />
  <Area type="monotone" dataKey="uv" stroke="#8884d8" fillOpacity={1} fill="url(#colorUv)" />
  <Area type="monotone" dataKey="pv" stroke="#82ca9d" fillOpacity={1} fill="url(#colorPv)" />
</AreaChart>

        </ResponsiveContainer>


    </div>
  )
}

export default Chart