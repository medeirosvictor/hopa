import { Outlet } from "react-router";
import Footer from "./Footer";
import Header from "./Header";

function AppLayout() {
    const classes = {
        root: "flex flex-col min-h-screen",
        main: "flex-1",
    };

    return (
        <div className={classes.root}>
            <Header />
            <main className={classes.main}>
                <Outlet />
            </main>
            <Footer />
        </div>
    );
}

export default AppLayout;
