import Header from "components/Header/Header.js";
import HeaderLinks from "components/Header/HeaderLinks.js";
import Footer from "components/Footer/Footer.js";

const Layout = ({ children, props, studioLocations }) => {
    const { ...rest } = props;
    return (
        <div>
            <Header
                brand="Hapkido College of Australia"
                rightLinks={<HeaderLinks studioLocations={studioLocations} />}
                color="dark"
                changeColorOnScroll={{
                    height: 400,
                    color: "white",
                }}
                {...rest}
            />
            { children }  
            <Footer />
        </div>
    );
}

export default Layout;