import { createBrowserRouter, RouterProvider } from "react-router";
import AppLayout from "./components/layout/AppLayout.jsx";
import Home from "./components/pages/Home.jsx";
import AddArticle from "./components/pages/AddArticle.jsx";
import Outfits from "./components/pages/Outfits.jsx";
import Profile from "./components/pages/Profile.jsx";

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
                    path: "add-articles",
                    element: <AddArticle />,
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
