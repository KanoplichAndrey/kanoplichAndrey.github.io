import React from 'react';
// import { Routes} from 'react-router-dom';
// import  {Layout} from './Components/Layout/Layout' 
import './App.css';
import Headerr from './Components/Header/Headerr';
import Cover from './Components/Cover/Cover';
import DigitalPaket from './Components/DigitalPaket/DigitalPaket';
import Benefits from './Components/Benefits';
import BestSolutions from './Components/BestSolutions copy/BestSolutions';
import CaruselCard from './Components/CaruselCard/CaruselCard';
import CTA from './Components/CTA/CTA';
import OurCompany from './Components/OurCompany/OurCompany';
import OurComand from './Components/OurComand/OurComand';
import OurResult from './Components/OurResult/OurResult';
import OurClients from './Components/OurClients/OurClients';
import Reviews from './Components/Slider/Reviews';
import WorkWithUs from './Components/WorkWithUs/WorkWithUs';
import SalesDepartment from './Components/SalesDepartment/SalesDepartment';
import FormBlock from './Components/FormBlock/FormBlock';
import Footer from './Components/Footer/Footer';
import Pages2 from './Components/Pages2/Pages2';
// import Pages from './Components/Pages/Pages';
// import { Outlet } from './Layout/Layout';


function App() {
  return (
      
      <div className="App">
  {/* <Routes> */}
        
    
        
        {/* <Route index path="/headerr" element={<Headerr />} />
        <Route path="/cover" element={<Cover />} />
        <Route path="/digitalPaket" element={<DigitalPaket />} />
        <Route path="/bestSolutions" element={<BestSolutions />} />
        <Route path="/benefits" element={<Benefits />} />
        <Route path="/caruselCard" element={<CaruselCard />} />
        <Route path="/CTA" element={<CTA />} />
        <Route path="/ourCompany" element={<OurCompany />} />
        <Route path="/ourComand" element={<OurComand />} />
        <Route path="/ourResult" element={<OurResult />} />
        <Route path="/ourClients" element={<OurClients />} />
        <Route path="/reviews" element={<Reviews />} />
        <Route path="/workWithUs" element={<WorkWithUs />} />
        <Route path="/salesDepartment" element={<SalesDepartment />} />
        <Route path="/ourResFormBlockult" element={<FormBlock />} />
        <Route index path="/footer" element={<Footer />} /> */}
        {/* <Route path="/Pages" element={<Pages1 />} /> */}

        <Headerr />
        <Cover />
        <DigitalPaket />
        <BestSolutions />
        <Benefits />
        <CaruselCard />
        <CTA />
        <OurCompany />
        <OurComand />
        <OurResult />
        <OurClients />
        <Reviews />
        <WorkWithUs />
        <SalesDepartment />
        <FormBlock />
        <Footer />
        <Pages2 />
        

    
       
   {/* </Routes>  */}
    </div>
     
  );
}

export default App;
