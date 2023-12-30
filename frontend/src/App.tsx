import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} 

from "react-router-dom";
import Layout from "./layouts/Layout";
import Register from "./pages/Register";
import SignIn from "./pages/Signin";
import AddHotel from "./pages/AddHotel";
import { useAppContext } from "./contexts/AppContext";
import MyHotels from "./pages/MyHotels";
import EditHotel from "./pages/EditHotel";
import Search from "./pages/Search";
import Detail from "./pages/Detail";
import Booking from "./pages/Booking";
import MyBookings from "./pages/MyBookings";
import Home from "./pages/Home";

const App = () => {
  
  const { isLoggedIn } = useAppContext();
  return(
  
  <Router>
    <Routes>
      <Route path="/" element= 
      {
      <Layout>
        <Home/>
      </Layout> 
      }/>  

      <Route path="/search" element=
      { 
      <Layout>
        <Search/>
      </Layout>
      } /> 

      <Route path="/detail/:hotelId" element=
      { 
      <Layout>
        <Detail/>
      </Layout>
      } /> 

     <Route path="/register" element=
      { 
        <Layout>
               <Register/>
         </Layout>
      } /> 

     <Route path="/sign-in" element=
      { 
        <Layout>
               <SignIn/>
         </Layout>
      } /> 
        
        { isLoggedIn && (
          <>

          <Route 
          path='/hotels/:hotelId/bookings'
          element={
            <Layout>
            <Booking/>
          </Layout>
          }> 
          </Route>



          <Route 
          path='/add-hotels'
          element={
            <Layout>
            <AddHotel/>
          </Layout>
          }> 
          </Route>

          <Route 
          path='/edit-hotels/:hotelId'
          element={
            <Layout>
            <EditHotel/>
          </Layout>
          }> 
          </Route>

          <Route 
          path='/my-hotels'
          element={
            <Layout>
            <MyHotels/>
          </Layout>
          }> 
          </Route>

          <Route 
          path='/my-bookings'
          element={
            <Layout>
            <MyBookings/>
          </Layout>
          }> 
          </Route>
          </>
        )}

      
      <Route path="/" element={<Navigate to='/'/>} ></Route>
    </Routes>
   </Router>
   )
 
  
}
export default App;