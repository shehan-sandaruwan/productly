import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

// This component uses as Layout template so this will be increase the re usability
const MainLayout = (props) => {
  return (
    <React.Fragment>
      <Navbar itemCount={props.itemCount} />
      {props.children}
      <Footer />
    </React.Fragment>
  );
};

export default MainLayout;
