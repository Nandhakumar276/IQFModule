import { BrowserRouter, Routes,Route,useNavigate } from 'react-router-dom'; 
import Header from '../../Compenents/Header';
import Sidebar from '../../Compenents/Sidebar';
import DashboardContent from '../../Compenents/Content';
import { createContext,useEffect,useState } from 'react';


const MyContext = createContext();

const Dashboard = () =>{
  const [isToggleSidebar, setIsToggleSidebar]=useState(false);
  const [themeMode, setthemeMode] = useState(true);
  const navigate = useNavigate();
  const values={
    isToggleSidebar,
    setIsToggleSidebar,
    themeMode,
    setthemeMode
  }

  useEffect(()=>{
    if(themeMode===true){
      document.body.classList.remove('dark');
      document.body.classList.add('light');
      localStorage.setItem('themeMode','light');
    }
    else{
      document.body.classList.remove('light');
      document.body.classList.add('dark');
      localStorage.setItem('themeMode','dark');
    }
    window.scrollTo(0,0);
  },[themeMode])
    return(
        <MyContext.Provider value={values}>
        <Header/>
          <div className='main d-flex'>
            <div className={`sidebarWrapper ${isToggleSidebar===true ? 'toggle' : ''}`}>
              <Sidebar/>
            </div>
            <DashboardContent/>
          </div>
        </MyContext.Provider>
    )
}


export default Dashboard;
export {MyContext};