import { Navigate, useRoutes } from "react-router-dom";
import SideBar from "./components/sidebar/SideBar";
import EmptyWindow from "./components/chat/EmptyWindow";

export default function Router() {
    const routes = useRoutes([
      {
        path: '/',
        element: <SideBar />,
        children: [
        //   { element: <Navigate to="/dashboard/app" />, index: true },
        //   { path: 'app', element: <DashboardAppPage /> },
        //   { path: 'user', element: <UserListTable /> },
        //   { path: 'managers', element: <ManagerListTable /> },
        //   { path: 'devices', element: <DevicesListTable /> },
        //   { path: 'add-device', element: <AddDevice /> },
        //   { path: 'add-manager', element: <AddUser /> },
        //   { path: 'add-user', element: <h1>user add</h1> },
        
        { element: <Navigate to="/xyz" />, index: true },
        { path: 'chat', element: <EmptyWindow /> },

        ],
      },
    //   {path: 'sensor-value/:device_id', element: <SensorValuePage/>},
      {
        path: 'login',
        // element: <LoginPage />,
      },
      {
        // element: <SimpleLayout />,
        children: [
        //   { element: <Navigate to="/dashboard/app" />, index: true },
        //   { path: '404', element: <Page404 /> },
          // { path: '*', element: <Navigate to="/404" /> },
        ],
      },
      // {
      //   path: '*',
      //   element: <Navigate to="/404" replace />,
      // },
    ]);
  
    return routes;
  }