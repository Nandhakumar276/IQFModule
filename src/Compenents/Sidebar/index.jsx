import Button from '@mui/material/Button';
import { IoHome } from "react-icons/io5";
import { BiSolidFactory } from "react-icons/bi";
import { IoIosArrowForward } from "react-icons/io";
import { FaGears } from "react-icons/fa6";
import { FaTruckArrowRight } from "react-icons/fa6";
import { FaCartArrowDown } from "react-icons/fa";
import { FaGear } from "react-icons/fa6";
import { TbCertificate } from "react-icons/tb";
import { LuBarChart4 } from "react-icons/lu";
import { Link } from 'react-router-dom'; 
import { useContext, useState } from 'react';
import { IoIosLock } from "react-icons/io";
import {MyContext} from "../../Pages/Dashboard";
import { useNavigate } from 'react-router-dom';

const Sidebar = () =>{

   const [activeTab, setActiveTab] = useState(0);
   const[isToggleSubmenu, setIsToggleSubmenu] = useState(null);
   
   const context = useContext(MyContext);
   const navigate = useNavigate();
   const isOpenSubMenu=(index) =>{
        setActiveTab(index);
        setIsToggleSubmenu(!isToggleSubmenu)
   }

   const handleSignOut = () => {
    sessionStorage.removeItem('user');
    localStorage.removeItem('user');
    localStorage.removeItem('token');
    sessionStorage.removeItem('token');
    navigate('/'); // Use navigate function from useNavigate
  };

    return(
        <>
          <aside className="sidebar">
             <h5 class="sidebar-menu-title">main pages</h5>
             <ul>
             <li>
                    <Link>
                        <Button className='w-100'>
                            <span className='icon'> <IoHome/> </span>
                                Dashboard
                        </Button>
                    </Link>
                </li>
                <li>
                        <Button className={`w-100 ${activeTab===1 && isToggleSubmenu===true ? 'active' : ''}`} onClick={()=>isOpenSubMenu(1)}>
                            <span className='icon'> <BiSolidFactory/> </span>
                                Masters
                            <span class="arrow"> <IoIosArrowForward/> </span>
                        </Button>
                        <div className={`submenuWrapper ${activeTab===1 && isToggleSubmenu===true ? 'colapse' : 'colapsed' }`}>
                            <ul className='submenu'>
                                <li><Link to="/productionItemList">Production Item</Link></li>
                                <li><Link to="#">WareHouse</Link></li>
                                <li><Link to="#">Production Line</Link></li>
                                <li><Link to="#">Contracter</Link></li>
                                <li><Link to="#">Product Size</Link></li>
                            </ul>
                        </div>
                </li>
                <li>
                    <Button className={`w-100 ${activeTab===2 && isToggleSubmenu===true ? 'active' : ''}`} onClick={()=>isOpenSubMenu(2)}>
                            <span className='icon'> <FaGears/> </span>
                                Production
                            <span class="arrow"> <IoIosArrowForward/> </span>
                    </Button>
                    <div className={`submenuWrapper ${activeTab===2 && isToggleSubmenu===true ? 'colapse' : 'colapsed' }`}>
                            <ul className='submenu'>
                                <li><Link to="#">Raw Material</Link></li>
                                <li><Link to="#">Fruit Feeding</Link></li>
                                <li><Link to="#">Production Cost</Link></li>
                                <li><Link to="#">Reprocessing</Link></li>
                            </ul>
                    </div>
                </li>
                <li>
                        <Button className={`w-100 ${activeTab===3 && isToggleSubmenu===true ? 'active' : ''}`} onClick={()=>isOpenSubMenu(3)}>
                            <span className='icon'> <FaTruckArrowRight/> </span>
                                Dispatch
                            <span class="arrow"> <IoIosArrowForward/> </span>
                        </Button>
                        <div className={`submenuWrapper ${activeTab===3 && isToggleSubmenu===true ? 'colapse' : 'colapsed' }`}>
                            <ul className='submenu'>
                                <li><Link to="#">Daily Dispatch</Link></li>
                            </ul>
                        </div>
                </li>
                <li>
                        <Button className={`w-100 ${activeTab===4 && isToggleSubmenu===true ?  'active' : ''}`} onClick={()=>isOpenSubMenu(4)}>
                            <span className='icon'> <FaCartArrowDown/> </span>
                                Inventory
                            <span class="arrow"> <IoIosArrowForward/> </span>
                        </Button>
                        <div className={`submenuWrapper ${activeTab===4 && isToggleSubmenu===true ? 'colapse' : 'colapsed' }`}>
                            <ul className='submenu'>
                                <li><Link to="#">Intent Requsition</Link></li>
                                <li><Link to="#">Store Inward</Link></li>
                                <li><Link to="#">Store Outward</Link></li>
                                <li><Link to="#">Store Stock Transfer Inward</Link></li>
                                <li><Link to="#">Store Bill</Link></li>
                            </ul>
                        </div>
                </li>
                <li>
                    <Link>
                        <Button className='w-100'>
                            <span className='icon'> <TbCertificate/> </span>
                                Quality
                        </Button>
                    </Link>
                </li>
                <li>
                    <Link>
                        <Button className='w-100'>
                            <span className='icon'> <LuBarChart4/> </span>
                                Reports
                        </Button>
                    </Link>
                </li>
                <li>
                    <Link>
                        <Button className='w-100'>
                            <span className='icon'> <FaGear/> </span>
                                Settings
                        </Button>
                    </Link>
                </li>
             </ul>

             <br></br>

             <div className='logoutWrapper'>
                <div className='logoutBox'>
                    <Button variant="contained" onClick={handleSignOut}><IoIosLock /> LogOut</Button>
                </div>
             </div>
          </aside>
        </>
    )
}


export default Sidebar;