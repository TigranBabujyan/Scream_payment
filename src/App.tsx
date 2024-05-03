import React, {Suspense} from 'react';
import './App.css';
import Agreement from "./components/agreement/Agreement";
import SOSForm from "./components/form/SoSForm";

import Admin from "./components/admin/Admin";

import {Link, Route, Routes} from "react-router-dom";
const App: React.FC = () => {

    return (
        <div className='App'>
            <Suspense fallback={<div>Loading... </div>}>
                <Routes>
                    <Route path="/" element={<SOSForm/>}>
                    </Route>
                </Routes>
            </Suspense>
        </div>
    );
};

export default App;
