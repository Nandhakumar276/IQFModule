import { useContext, useState } from "react";
import {MyContext} from "../../Pages/Dashboard";
import { Link,useNavigate } from 'react-router-dom'; 

const DashboardContent = () =>{
    const context = useContext(MyContext);

    return(
        <>
            <div className={`content ${context.isToggleSidebar===true ? 'toggle' : ''}`}>
              <div className='right-content w-100'>
                  <div className="row">
                    <div className="col-12">
                        <div className='dashboardboxWrapper'>
                            <div className="mc-card">
                                <div className="mc-breadcrumb d-flex justify-content-between align-items-center ">
                                    <h3 class="mc-card-title">Welcome to ABC Fruits (IQF Frozen Unit)</h3>
                                    <ul className="mc-list">
                                        <li className="mc-item">
                                            <Link className="mc-link" to="/dashboard">Home</Link>
                                        </li>
                                        <li className="mc-item">Dashboard</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                  </div>
                </div>
            </div>
        </>
    )
}


export default DashboardContent;