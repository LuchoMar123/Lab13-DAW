const Layout = ({ children }) => {
    return(
        <div>
            <h2>Nav</h2>
            <div>{children}</div>
            <footer>
                <p>Footer</p>
            </footer>
        </div>
    );
};