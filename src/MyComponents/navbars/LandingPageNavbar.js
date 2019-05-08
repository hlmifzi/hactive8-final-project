import React, { Component } from 'react'
import {
   MDBNavbar, MDBNavbarBrand, MDBNavbarNav, MDBNavItem, MDBNavLink, MDBNavbarToggler, MDBCollapse, MDBIcon
} from "mdbreact";
import logo from '../../assets/images/undangan-online.png'

class LandingPageNavbar extends Component {
   constructor() {
      super()
      this.state = {
         Beranda: "",
         Harga: "",
         Rekanan: "",
         Acara: "",
         isSignedIn: null
      };

   }


   async componentDidMount() {
      console.log('componentDidMount')
      await window.gapi.load('client:auth2', () => {
         window.gapi.client.init({
            clientId: '138686560480-6r6a11uf3qjhgjisgr3ccdb1l3g6sb6t.apps.googleusercontent.com',
            scope: 'email'
         }).then(() => {
            this.auth = window.gapi.auth2.getAuthInstance()
            this.setState({ isSignedIn: this.auth.isSignedIn.get() })
            this.auth.isSignedIn.listen(this.onAuthChange)
            console.log('then')
         })
      })
   }

   onAuthChange = () => {
      console.log('onAuthChange')

      this.setState({ isSignedIn: this.auth.isSignedIn.get() })
   }

   onSignIn = () => {
      console.log('onSignIn')
      this.auth.signIn()
   }

   onSignOut = () => {
      console.log('onSignOut')
      this.auth.signOut()
   }

   renderAuthButton = () => {
      if (this.state.isSignedIn === null) {
         return null
      } else if (this.state.isSignedIn) {
         return (
            <MDBNavLink onClick={this.onSignOut} className="waves-effect waves-light" to="#!">
               <MDBIcon fab icon="google-plus-g" /> Sign Out
            </MDBNavLink>
         )
      } else {
         return (
            <MDBNavLink onClick={this.onSignIn} className="waves-effect waves-light" to="#!">
               <MDBIcon fab icon="google-plus-g" /> Sign In With Gmail
            </MDBNavLink>
         )
      }
   }

   toggleCollapse = collapseID => () =>
      this.setState(prevState => ({
         collapseID: prevState.collapseID !== collapseID ? collapseID : ""
      }))



   render() {
      console.log('render')
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
                     {this.renderAuthButton()}
                  </MDBNavItem>
               </MDBNavbarNav>
            </MDBCollapse>
         </MDBNavbar>
      );
   }
}

export default LandingPageNavbar
