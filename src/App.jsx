import { createBrowserRouter, RouterProvider } from "react-router";
import AppLayout from "./components/layout/AppLayout.jsx";
import Home from "./components/pages/Home.jsx";
import Outfits from "./components/pages/Outfits.jsx";
import Profile from "./components/pages/Profile.jsx";
import AddApparel from "./components/pages/AddApparel.jsx";

function App() {
    const router = createBrowserRouter([
        {
            path: "/",
            element: <AppLayout />,
            children: [
                {
                    path: "/",
                    element: <Home />,
                },
                {
                    path: "add-apparel",
                    element: <AddApparel />,
                },
                {
                    path: "outfits",
                    element: <Outfits />,
                },
                {
                    path: "profile",
                    element: <Profile />,
                },
            ],
        },
    ]);

    return <RouterProvider router={router} />;
}

export default App;
