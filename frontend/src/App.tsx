import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import Layout from "./layouts/Layout";
import Register from "./pages/Register";
import SignIn from "./pages/Signin";

const App = () => {
  
  return(
  
  <Router>
    <Routes>
      <Route path="/" element= 
      {
      <Layout>
        <p>Home page</p>
      </Layout> 
      }/>  

      <Route path="/search" element=
      { 
      <Layout>
        <p>Search Page </p>
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
      
      <Route path="/" element={<Navigate to='/'/>} ></Route>
    </Routes>
   </Router>)
 
  
}
export default App;