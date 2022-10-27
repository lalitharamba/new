import React from 'react'
import './navbar.css'
import SearchIcon from '@mui/icons-material/Search';
import LanguageIcon from '@mui/icons-material/Language';
import GridViewIcon from '@mui/icons-material/GridView';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import SettingsIcon from '@mui/icons-material/Settings';

const Navbar = () => {
  return (
    <div className="navbar">
        <div className= "wrapper">
            <div className='content'>Dashboard</div>
            
            <div className= "items">
                <div className= "search item">
                    <input type="text" placeholder='search' /><SearchIcon/>
                </div>

                <div className= "item">
                    <LanguageIcon/>
                </div>
                <div className= "item">
                    <GridViewIcon/>
                </div>
                <div className= "item">
                    <NotificationsNoneIcon className='icon'/>
                    <div className="counter">1</div>
                </div>
                <div className= "item">
                    <SettingsIcon/>
                </div>
                <div className="item">
                    <img src="https://images.unsplash.com/photo-1597223557154-721c1cecc4b0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8ZmFjZXN8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60" width={30} height={30}
                    alt='person image'
                    className='laara' />

                </div>
                
            </div>

            
        </div>

    </div>
  )
}

export default Navbar;


