import './App.css';
import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home';
import Navbar from './components/Navbar';
import Login from './pages/Login/index';
import { AuthProvider } from './context/AuthContext';
import ProtectedRoute from './routes/ProtectedRoute';
import Register from './pages/Register/index';
import Admin from './pages/Admin';
import AddProduct from './pages/AddProduct/index';
import EditProduct from './pages/EditProduct/index';


function App() {
  return (
    <>
      <AuthProvider>
        <Navbar/>
        <Routes>
          <Route path='/' element={
            <ProtectedRoute>
              <Home/>
            </ProtectedRoute>
          }/> 
          <Route path='/login' element={<Login/>}/>
          <Route path='/register' element={<Register/>}/>
          <Route path='/admin' element={
            <ProtectedRoute>
              <Admin/>
            </ProtectedRoute>
          }/>
          <Route path='/admin/add-product' element={
            <ProtectedRoute>
              <AddProduct/>
            </ProtectedRoute>
          }/>
          <Route path='/admin/edit-product/:id' element={
            <ProtectedRoute>
              <EditProduct/>
            </ProtectedRoute>
          }/>
        </Routes>
      </AuthProvider>
    </>
  );
}

export default App;
