import React, { Component } from 'react'
import {
   MDBNavbar, MDBNavbarBrand, MDBNavbarNav, MDBNavItem, MDBNavLink, MDBNavbarToggler, MDBCollapse, MDBIcon
} from "mdbreact";
import logo from '../../assets/images/undangan-online.png'

class LandingPageNavbar extends Component {
   state = {
      Beranda: "",
      Harga: "",
      Rekanan: "",
      Acara: ""
   };


   toggleCollapse = collapseID => () =>
      this.setState(prevState => ({
         collapseID: prevState.collapseID !== collapseID ? collapseID : ""
      }))



   render() {
      return (
         <MDBNavbar color="pink" dark expand="md">
            <MDBNavbarBrand>
               <img src={logo} alt='logo' />
            </MDBNavbarBrand>
            <MDBNavbarToggler onClick={this.toggleCollapse} />
            <MDBCollapse id="navbarCollapse3" isOpen={this.state.isOpen} navbar>
               <MDBNavbarNav left>
                  <MDBNavItem onClick={e => this.setState({ Beranda: 'active' })}>
                     <MDBNavLink to="/">Beranda</MDBNavLink>
                  </MDBNavItem>
                  <MDBNavItem onClick={e => this.setState({ Harga: 'active' })}>
                     <MDBNavLink to="/pricing">Harga</MDBNavLink>
                  </MDBNavItem>
                  <MDBNavItem onClick={e => this.setState({ Rekanan: 'active' })}>
                     <MDBNavLink to="/rekanan">Rekanan</MDBNavLink>
                  </MDBNavItem>
                  <MDBNavItem onClick={e => this.setState({ Acara: 'active' })}>
                     <MDBNavLink to="/acara">Acara</MDBNavLink>
                  </MDBNavItem>
               </MDBNavbarNav>
               <MDBNavbarNav right>
                  <MDBNavItem>
                     <MDBNavLink className="waves-effect waves-light" to="#!">
                        <MDBIcon fab icon="google-plus-g" /> Login With Gmail
                     </MDBNavLink>
                  </MDBNavItem>
               </MDBNavbarNav>
            </MDBCollapse>
         </MDBNavbar>
      );
   }
}

export default LandingPageNavbar
