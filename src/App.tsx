import React, {Suspense} from 'react';
import './App.css';
import Agreement from "./components/agreement/Agreement";
import CanyoningRequirements from "./components/agreement/CanyoningRequirements";

import SOSForm from "./components/form/SoSForm";

import Admin from "./components/admin/Admin";
import { Route, Routes } from "react-router-dom";
const App: React.FC = () => {

    return (
        <div className='App'>
            <Suspense fallback={<div>Loading... </div>}>
                <Routes>
                    <Route path="/" element={<SOSForm/>}/>
                    <Route path="/agreement" element={<Agreement/>}/>
                    <Route path="/requirements" element={<CanyoningRequirements/>}/>
                    <Route path="/generacrac_tandzs" element={<Admin/>}/>
                </Routes>
            </Suspense>
        </div>
    );
};

export default App;
