import React from 'react'
import {Route , Routes} from 'react-router-dom'
import Propertyval from './pages/Propertyval'
import Home from './pages/Home'
import Buy from './pages/Buy'
import Landscaping from './pages/Landscaping'
import Rent from './pages/Rent'
import Propertyreg from './pages/Propertyreg'
import Shortstay from './pages/Shortstay'
import Buildingcon from './pages/Buildingcon'
import Quoteform from './pages/Quoteform'
import Param from './components/Param'



const Router = () => {
  return (
   <Routes>

          <Route path='/'    element={<Home/>}/>
          <Route path='/rent'    element={<Rent/>}/>
          <Route path='/buy'    element={<Buy/>}/>
          <Route path='/shortstay'    element={<Shortstay/>}/>
          <Route path='/propertyvaluation'    element={<Propertyval/>}/>
          <Route path='/propertyregistration'    element={<Propertyreg/>}/>
          <Route path='/landscaping'    element={<Landscaping/>}/>
          <Route path='/buildingconsulting'    element={<Buildingcon/>}/>
          <Route path='/quoteform'     element= {<Quoteform/>}/>
          <Route path='/rent/:id'       element ={<Param/>}/>
          
    </Routes>
        
   
  )
}

export default Router
