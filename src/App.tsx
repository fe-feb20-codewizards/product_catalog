import React from "react"
import {Routes, Route} from 'react-router-dom';
import { PhonesPage } from "./components/PhonesPage";
import { PageNotFound } from "./components/PageNotFound";
import { HomePage } from "./HomePage";

export const App = () => {
    return (
    <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/phones" element={<PhonesPage />} />
        <Route path="/*" element={<PageNotFound />} />
    </Routes>
    )
}