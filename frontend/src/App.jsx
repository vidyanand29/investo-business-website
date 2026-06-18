import React from 'react'
import {lazy,Suspense} from "react"
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom"
import Loading from "./components/Loading"
 const Landing = lazy(()=>import("./pages/Landing")) 
const Signup = lazy(()=>import("./pages/Signup")) 
const Login = lazy(()=>import("./pages/Login")) 
const EntrepreneurDash = lazy(()=>import("./pages/EntrepreneurDash")) 
const InvestorDash = lazy(()=>import("./pages/InvestorDash")) 
const IntrestedInvestors = lazy(()=>import("./pages/IntrestedInvestors")) 
const Idea = lazy(()=>import("./pages/Idea")) 
import Footer from "./components/Footer"
const NotFound = lazy(()=>import("./pages/NotFound"))  
const ForgotPassword = lazy(()=>import("./pages/ForgotPassword")) 

const App = () => {
  return (
    <BrowserRouter>
<Suspense fallback={<Loading/>}>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/forgotPassword" element={<ForgotPassword />} />
        <Route path="/entrepreneurDash" element={<EntrepreneurDash />} />
        <Route path="/investorDash" element={<InvestorDash />} />
        <Route path="/intrestedInvestors" element={<IntrestedInvestors />} />
        <Route path="/idea" element={<Idea />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
</Suspense>
    </BrowserRouter>
  )
}

export default App