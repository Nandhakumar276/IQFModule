import { BrowserRouter,Navigate, Routes, Route } from 'react-router-dom'; 
import { ThemeProvider } from '@mui/material/styles';
import { createTheme } from '@mui/material/styles';
import theme from './theme';
import 'bootstrap/dist/css/bootstrap.min.css';
import './assets/CSS/responsive.css';
import Login from './Pages/authentication/Login';

import Dashboard from './Pages/Dashboard';
import ForgetPassword from './Pages/authentication/ForgetPassword';
import ProductionItemList from './Pages/master/ProductionItem/ProductionItemList';
import ResetPassword from './Pages/authentication/ResetPassword';

function App() {
  return (
    <ThemeProvider theme={theme}>
        <BrowserRouter>
          <Routes>
                <Route path="/" element={<Login />} />
                <Route path="/dashboard" element={<Dashboard />} />
                <Route path="/forget-password" element={<ForgetPassword />} />
                <Route path="/reset-password" element={<ResetPassword />} />
                <Route path="/productionItemList" element={<ProductionItemList />} />
          </Routes>
        </BrowserRouter>
    </ThemeProvider>
  )
}

export default App
