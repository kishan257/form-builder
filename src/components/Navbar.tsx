import React, { FunctionComponent } from "react";
import {
  isMobile as libIsMobile,
  isTablet as libIsTablet
} from "react-device-detect";
let isMobile:Boolean;
if (process.env.NODE_ENV === "localhost") {
  isMobile = window.innerWidth < 1024;
} else {
   // @typescript-eslint/no-unused-vars
  isMobile = libIsMobile || libIsTablet || window.innerWidth < 1024; 
};
interface NavbarProps {
  window?: ()=>Window
}
 
const Navbar: FunctionComponent<NavbarProps> = (props) => {

  return (
    <>
      <header
        id="header"
        className="header-sticky sticky-active"
        data-fullwidth="true"
      >
        <div className="header-inner">
          <div className="container">
            <div id="logo">
              <a
                href="/"
                className="logo vcenter"
              >
                
                Form Builder
              </a>
            </div>
          </div>
        </div>
      </header>
    </>
  );
}
 
export default Navbar;