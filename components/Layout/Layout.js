import Header from "components/Header/Header.js";
import HeaderLinks from "components/Header/HeaderLinks.js";
import Footer from "components/Footer/Footer.js";

const Layout = ({ children, props, studioLocations, services, aboutPages }) => {
    const { ...rest } = props;
    return (
        <div>
            <Header
                brand="Hapkido College of Australia"
                rightLinks={<HeaderLinks studioLocations={studioLocations} services={services} aboutPages={aboutPages} />}
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