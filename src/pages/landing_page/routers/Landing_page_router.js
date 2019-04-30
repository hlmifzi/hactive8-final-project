import React, { Fragment } from 'react'
import { Route } from 'react-router-dom'
import LandingPageView from '../components/Landing_page_view'
import Navbar from '../../../MyComponents/navbars/LandingPageNavbar'
import PricingView from '../../pricing/components/Pricing_view'
import VendorView from '../../vendor/components/Vendor_view'
import WeddingEvent from '../../wedding_event/components/WeddingEvent'
import WeddingEventDetail from '../../wedding_event/components/WeddingEventDetail'
import Footer from '../../../MyComponents/footer/Footer'
import WeddingEventDetailKonfirmasi from '../../wedding_event/components/WeddingEventDetailKonfirmasi'


const Root_router = () => {
   return (
      <Fragment>
         <Navbar />
         <Route exact path="/" component={LandingPageView} />
         <Route path="/pricing" component={PricingView} />
         <Route path="/rekanan" component={VendorView} />
         <Route exact path="/acara" component={WeddingEvent} />
         <Route exact path="/acara/:kodeAcara" component={WeddingEventDetail} />
         <Route exact path="/acara/:kodeAcara/:id_diundang" component={WeddingEventDetailKonfirmasi} />
         <Footer />
      </Fragment>
   )
}

export default Root_router
