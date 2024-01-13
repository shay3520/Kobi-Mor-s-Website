import "./header.css"
import { Navbar, Nav, NavDropdown } from 'react-bootstrap';
import ElectricalServicesIcon from '@mui/icons-material/ElectricalServices';
import PhoneEnabledIcon from '@mui/icons-material/PhoneEnabled';

function header(){
    return(
        <div className="header">
            <div className="botton">
            <Navbar className="custom-navbar"  expand="lg">
             <Navbar.Brand href="/">ק.מור<ElectricalServicesIcon className="ElectricalServicesIcon"/></Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                 <Navbar.Collapse id="basic-navbar-nav">
                 <Nav className="mr-auto">
                 <Nav.Link href="/">דף הבית</Nav.Link>
                 <Nav.Link href="/about">אודות</Nav.Link>
                <Nav.Link href="/services">שירותים</Nav.Link>
                 <NavDropdown title="אזורי עבודה   " id="basic-nav-dropdown">
                     <NavDropdown.Item>חשמלאי באור יהודה</NavDropdown.Item>
                     <NavDropdown.Divider />
                    <NavDropdown.Item>חשמלאי בתל אביב</NavDropdown.Item>
                    <NavDropdown.Divider />
                <NavDropdown.Item >חשמלאי ברמת גן</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item >חשמלאי בגבעתיים</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item >חשמלאי ברמת השרון</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item >חשמלאי בהרצליה</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item >חשמלאי בהוד השרון</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item >חשמלאי בקריית אונו</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item >חשמלאי בגני תקווה</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item >חשמלאי בסביון</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item >חשמלאי בראשון לציון</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item >חשמלאי בחולון</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item >חשמלאי בפתח תקווה</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item >חשמלאי במרכז</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item >חשמלאי בבקעת אונו</NavDropdown.Item>
                
                  </NavDropdown>
                 <Nav.Link href="/contact">צור קשר</Nav.Link>
                </Nav>
                </Navbar.Collapse>
                <button class="name noselect"><a href="tel:+972542266843" className="phone">
                    <PhoneEnabledIcon className="icon" /> 054-226-6843
                </a></button>
             </Navbar>
            </div>
        </div>
    )
}

export default header;