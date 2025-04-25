import { NavLink } from "react-router";

function Header() {
    const classes = {
        header: "flex flex-col items-center justify-center p-4",
        h1: "font-bold text-3xl underline align-middle text-center",
        h2: "font-bold text-xl align-middle text-center",
    };

    return (
        <header className={classes.header}>
            <div>
                <h1 className={classes.h1}>Hopa</h1>
                <h2 className={classes.h2}>closet virtual</h2>
            </div>

            <div className="flex gap-10 font-bold align-middle justify-center">
                <NavLink to="/">HOME</NavLink>
                <NavLink to="/add-articles">ADD PECA</NavLink>
                <NavLink to="/outfits">OUTFITS</NavLink>
                <NavLink to="/profile">PERFIL</NavLink>
            </div>
        </header>
    );
}

export default Header;
