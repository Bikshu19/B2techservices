import React from 'react';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Homepage from './pages/Homepage'
import Expertise from './pages/Expertise';
import Contact from './pages/Contact';
{/* About page*/}
import Companyphilosophy from './pages/About/companyphilosophy';
import Corevalues from './pages/About/corevalues';
import Founder from './pages/About/founder';
import Growth from './pages/About/growthjourney';
{/* services page*/}
import Recruitmentservice from './pages/services/Recruitmentservices';
import Resumeservices from './pages/services/Resumeservices';
import SoftwareTraining from './pages/services/softwaretrainingprograms';
import Ui from './pages/services/Uiuxdesign';
import Whatssets from './pages/services/whatssets';
{/* backend coming routes*/}
import Sendotp from "./backend/pages/sendotp";
import VerifyOtp from "./backend/pages/verifyotp";
import Dashboard from "./backend/pages/dashboard";
import ProtectedRoute from "./backend/protected/protectedroute";


function App() {
  return (
    <div>
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<Homepage/>}/>
        <Route path='/expertise' element={<Expertise/>}/>
        <Route path='/contact' element={<Contact/>}/>
        <Route path='/companyphilosopy' element={<Companyphilosophy/>}/>
        <Route path='/corevalues' element={<Corevalues/>}/>
        <Route path='/founders Vision' element={<Founder/>}/>
        <Route path='/Growth Journey' element={<Growth/>}/>
        <Route path='/recruitmentservice' element={<Recruitmentservice/>}/>
        <Route path='/resumeservices' element={<Resumeservices/>}/>
        <Route path='/softwaretraining' element={<SoftwareTraining/>}/>
        <Route path='/UI/UX Design Thinking' element={<Ui/>}/>
        <Route path='/what sets Us Apart' element={<Whatssets/>}/>

        {/* */}
        <Route path="/sendotp" element={<Sendotp />} />
        <Route path="/verify-otp" element={<VerifyOtp />} />
        <Route
          path="/dashboard"
          element={
            <ProtectedRoute>
              <Dashboard />
            </ProtectedRoute>
          }
        />
      </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App