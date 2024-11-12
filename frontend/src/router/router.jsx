import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "../pages/Home/Home";
import About from "../pages/miniPage/About";
import PrivacyPolicy from "../pages/miniPage/PrivacyPolicy";
import ContactUs from "../pages/miniPage/ContactUs";
import SingleBlog from "../pages/Blogs/singleBlog/SingleBlog";
import Login from "../pages/User/Login";
import Register from "../pages/User/Register";
import AdminLayout from "../admin/AdminLayout";
import Dashboard from "../admin/dashboard/Dashboard";
import AddPost from "../admin/post/AddPost";
import ManagePosts from "../admin/post/ManagePosts";
import ManageUser from "../admin/user/ManageUser";
import PrivateRouter from "./PrivateRouter";
import UpdatePost from "../admin/post/UpdatePost";


const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />
      },
      {
        path: "/about-us",
        element: <About />
      },
      {
        path: "/privacy-policy",
        element: <PrivacyPolicy />
      },
      {
        path: "/contact-us",
        element: <ContactUs />
      },
      {
        path: "/blogs/:id",
        element: <SingleBlog />
      },
      {
        path: "/login",
        element: <Login />
      },
      {
        path: "/register",
        element: <Register />
      },
      {
        path: "dashboard",
        element: <PrivateRouter><AdminLayout /></PrivateRouter>, // it will be protected by the admin: Use Private Routes
        children: [
          {
            path: '',
            element: <Dashboard />
          },
          {
            path: 'add-new-post',
            element: <AddPost />
          },
          {
            path: 'manage-items',
            element: <ManagePosts />
          },
          {
            path: 'users',
            element: <ManageUser />
          },
          {
            path: 'update-items/:id',
            element: <UpdatePost />
          }
        ]
      }
    ]
  },
]);

export default router;