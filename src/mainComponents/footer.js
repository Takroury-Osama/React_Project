import react, {useState} from 'react'


import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

const Footer = (props) => {



  return (
    <footer className="text-white darkColor">
    <div className="container pt-4">
      <div className="row mb-5 pb-4">
        <div className="col-md-3 col-sm-12">
          <h5 className="mb-4 mt-3">Contact Us</h5>
          <p className="text-small text-muted"> Trusted Company Since 2013. We offer Our services in Jordan for more than 8 years.</p>
          <p className="text-small text-muted"> We will be soon in UAE and Egypt</p>
        </div>
        <div className="col-md-6 col-sm-12">
          <h5 className="mb-4 mt-3 text-center pr-lg-5">Partnership & Agents</h5>
          <div className="row">
          <div className="col-md-2"> </div>
            <div className="col-sm-6 col-md-4">
              <ul className="list-unstyled">
                <li className="mb-2">
                  <h6 className="mb-1"> <a className="reset-anchor publicOrangeColor" href="#">T. Gargour</a></h6>
                  <p className="text-muted text-small text-fancy mb-0">Mercedes</p>
                </li>
                <li className="mb-2">
                  <h6 className="mb-1"><a className="reset-anchor publicOrangeColor" href="#">Abo-Khader</a></h6>
                  <p className="text-muted text-small text-fancy mb-0">BMW</p>
                </li>
              </ul>
            </div>
            <div className="col-sm-6">
              <ul className="list-unstyled">
                <li className="mb-2">
                  <h6 className="mb-1"> <a className="reset-anchor publicOrangeColor" href="#">Abo-Haikal</a></h6>
                  <p className="text-muted text-small text-fancy mb-0">Mazda</p>
                </li>
                <li className="mb-2">
                  <h6 className="mb-1"><a className="reset-anchor publicOrangeColor" href="#">Al-Markazia</a></h6>
                  <p className="text-muted text-small text-fancy mb-0">Toyota</p>
                </li>
              </ul>
            </div>
          </div>
        </div>



        <div className="col-md-3 col-sm-12">
          <h5 className="mb-4 mt-3">Our news</h5>
          <p className="text-small text-muted">Follow our news. We will send you new offers and our to the news about TrusTK.</p>
          <div className="input-group">
            <input className="form-control border-dark text-white rounded-0" type="search" placeholder="Enter your email"/>
            <div className="input-group-append">
              <button className="btn btn-primary px-4 publicBgColor" type="submit"><i className="fas fa-paper-plane"></i></button>
            </div>
          </div>
        </div>
      </div>
      <div className="py-3 border-top border-dark text-center">
        <p className="mb-0 text-white">&copy; Designed by Osama Al-Takroury.</p>
    </div>
  </div>
</footer>

  )
}

export default Footer
