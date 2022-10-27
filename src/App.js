import Bargraphs from './components/bar/Bargraphs'
import Chart from './components/charts/Chart'
import Featured from './components/featured/Featured'
import History from './components/history/History'
import Navbar from './components/navbar/Navbar'
import Rightside from './components/rightside/Rightside'
import Sidebar from './components/Sidebar'
import Widget from './components/widget/Widget'

function App() {
  return (
    <div className="main">
      
      <Sidebar/>
      <div className="container">
        <Navbar/>
        <div className="two">
          <div className="wrapper">
            <div className="widgets">
              <Widget type="revenue"/>
              <Widget type="orders"/>
              <Widget type="customers"/>
            </div>
            <div className='bargraphs'>
              <Bargraphs/>
              
            </div>
            <div className="charts">
              <Chart/>
              <Featured/>
              
              <History />
            </div>
          </div>
          <div className='sides'>
            <Rightside/>
            hi
          </div> 

        </div>
      {/* * <div className='side'>
          <Rightside/>
          hi
        </div>  */}
        
        
        
      
      </div>
    </div>
  )
}

export default App