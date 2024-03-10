import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Aboutt from "../components/Aboutt";
import Contact from "../components/Contact";
import CandidateReg from "../components/CandidateReg";
import ForgotPass from "../components/ForgotPass";
import Helpp from "../components/Helpp";
import Login from "../components/Login";
import UserReg from "../components/UserReg";
import VotingSys from "../components/VotingSys";
import Home from "../Home";
import Dashboard from "../components/Dashboard";
import Candidate from "../components/Candidate_list";
import Voters from "../components/Voters_list";
import Side_bar from "../components/Sidebar";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/aboutt",
        element: <Aboutt />,
      },
      {
        path: "/candidate-registration",
        element: <CandidateReg />,
      },
      {
        path: "/forgot-pass",
        element: <ForgotPass />,
      },
      {
        path: "/helpp",
        element: <Helpp />,
      },
      {
        path: "/voting",
        element: <VotingSys />,
      },
      {
        path: "/user-registration",
        element: <UserReg />,
      },
      {
        path: "/admin-panel",
        element: <Dashboard />,
      },
      {
        path: "/side-bar",
        element: <Side_bar />,
      },
      {
        path: "/candidate-list",
        element: <Candidate />,
      },
      {
        path: "/voters-list",
        element: <Voters />,
      },
    ],
  },

  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/admin-panel",
    element: <Dashboard />,
  },
  // {

  // Admin dashboard route
  //   path: "/admin/dashboard",
  //   element: <Dashboard/>,
  //   children: [
  //     {
  //       // Main dashboard route with private route handling
  //       path: "/admin/dashboard",
  //       element: <Privateroute><Maindash/></Privateroute>
  //     },
  //     {
  //       // Upload book route
  //       path: "/admin/dashboard/upload",
  //       element: <Uploadbook />,
  //     },
  //     {
  //       // Manage book route
  //       path: "/admin/dashboard/manage",
  //       element: <Managebook />,
  //     },
  //     {
  //       // Edit book route with dynamic loader for fetching single book data
  //       path: "/admin/dashboard/edit-book/:id",
  //       element: <Editbook/>,
  //     //   loader: ({params}) => fetch(`http://localhost:5000/single-book/${params.id}`)
  //     },
  //   ],
  // },
  // {
  //   // Signup route
  //   path: "/signup",
  //   element: <Signup/>
  // },
  // {
  //   // Login route
  //   path: "/login",
  //   element: <Login/>
  // },
]);

export default router;
