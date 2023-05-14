
import { createBrowserRouter, createHashRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import About from './component/About/About';
import Contact from './component/Contact/Contact';
import MasterLayout from './component/MasterLayout/MasterLayout';
import Portfolio from './component/Start/Start';
import Start from './component/Portfolio/Portfolio';


const router=createHashRouter([
  {path:'',element:<MasterLayout/>,children:[
    {path:'star',element:<Start/>},
    {path:'portfolio',element:<Portfolio/>},
    {path:'about',element:<About/>},
    {path:'contact',element:<Contact/>}

  ]}
])

function App() {
  return (
   <>
   <RouterProvider router={router}/>
   </>
   
   
  );
}

export default App;
