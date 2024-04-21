import { FunctionComponent } from "react";

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