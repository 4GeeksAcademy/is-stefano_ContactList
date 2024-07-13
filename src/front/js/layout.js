import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ScrollToTop from "./component/scrollToTop.jsx";
import { BackendURL } from "./component/backendURL.jsx";

import { Home } from "./pages/home.jsx";
import { Demo } from "./pages/demo.jsx";
import { Single } from "./pages/single.jsx";
import injectContext from "./store/appContext.js";

import { Navbar } from "./component/navbar.jsx";
import { Footer } from "./component/footer.jsx";
import { Contact } from "./pages/Contact.jsx";
import { ContactDetails } from "./pages/ContactDetails.jsx";
import CreateContact from "./pages/CreateContact.jsx";
import ContactEdit from "./pages/ContactEdit.jsx";

//create your first component
const Layout = () => {
    //the basename is used when your project is published in a subdirectory and not in the root of the domain
    // you can set the basename on the .env file located at the root of this project, E.g: BASENAME=/react-hello-webapp/
    const basename = process.env.BASENAME || "";

    if(!process.env.BACKEND_URL || process.env.BACKEND_URL == "") return <BackendURL/ >;

    return (
        <div>
            <BrowserRouter basename={basename}>
                <ScrollToTop>
                    <Navbar />
                    <Routes>
                        <Route element={<Home />} path="/" />
                        <Route element={<Contact />} path="/Contact" />
                        <Route element={<ContactDetails />} path="/Contact-details" />
                        <Route element={<CreateContact />} path="/CreateContact" />
                        <Route element={<ContactEdit />} path="/ContactEdit" />
                        <Route element={<h1>Not found!</h1>} />
                    </Routes>
                </ScrollToTop>
            </BrowserRouter>
        </div>
    );
};

export default injectContext(Layout);
