import {Routes, Route} from 'react-router-dom'
import Home from "./pages/Home";
import NoMatch from "./pages/NoMatch";
import DefaultLayout from "./components/DefaultLayout";
import {ChakraProvider} from "@chakra-ui/react";
import SignIn from "./pages/auth/SignIn";
import SignUp from "./pages/auth/SignUp";
import DashboardLayout from "./components/DashboardLayout";
import DashboardHome from "./pages/dashboard/Home";
import DashboardSettings from "./pages/dashboard/Settings";
import Features from "./pages/Features";
import DashboardActivities from "./pages/dashboard/Activities";
import DashboardCourses from "./pages/dashboard/courses/Courses";
import DashboardPayments from "./pages/dashboard/Payments";
import DashboardCourseDetails from "./pages/dashboard/courses/Details";
import Class from "./pages/Class";
import DashboardAvailability from "./pages/dashboard/Availability";

export default function App() {
  // @ts-ignore
    return (
      <ChakraProvider>
        <Routes>
            <Route path="/sign-in" element={<SignIn />} />
            <Route path="/sign-up" element={<SignUp />} />
            <Route path="*" element={<NoMatch/>} />
            <Route path="/" element={<DefaultLayout/>}>
                <Route index element={<Home/>} />
                <Route path='/features' element={<Features />} />
            </Route>
            <Route path="/dashboard" element={<DashboardLayout/>}>
                <Route index element={<DashboardHome />} />
                <Route path="/dashboard/settings" element={<DashboardSettings />} />
                <Route path="/dashboard/activities" element={<DashboardActivities />} />
                <Route path="/dashboard/courses" element={<DashboardCourses />} />
                <Route path="/dashboard/availability" element={<DashboardAvailability />} />
                <Route path="/dashboard/course/:course" element={<DashboardCourseDetails />} />
                <Route path="/dashboard/payments" element={<DashboardPayments />} />
            </Route>
            <Route path="/class/:class" element={<Class />} />
        </Routes>
      </ChakraProvider>
  );
}
