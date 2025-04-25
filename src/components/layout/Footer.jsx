function Footer() {
    const classes = {
        footerWrapper:
            "bg-slate-900 text-white max-h-[80px] flex flex-col flex-grow-1",
        footerLinks: "flex justify-center gap-4",
        footerLink: "hover:text-slate-400",
        footerCopyright:
            "flex gap-3 justify-center py-2 text-center text-sm text-slate-400",
    };

    return (
        <footer className={classes.footerWrapper}>
            <nav className={classes.footerLinks}>
                <div className={classes.footerLink}>Privacy</div>
                <div className={classes.footerLink}>Terms</div>
                <div className={classes.footerLink}>Ad Choices</div>
                <div className={classes.footerLink}>Contact</div>
            </nav>
            <div className={classes.footerCopyright}>
                <div>Gozil © {new Date().getFullYear()}</div>
            </div>
        </footer>
    );
}

export default Footer;
