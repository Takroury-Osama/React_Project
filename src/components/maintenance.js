import react, {Component} from 'react'
import Button from '@material-ui/core/Button';
import {EmojiTransportation, LocationOn, Call} from '@material-ui/icons/';
import toyota from '../img/toyota.png'
import bmw from '../img/bmw.png'
import mercedes from '../img/mercedes.png'


 class Maintenance extends Component {

  constructor(props) {
    super(props)

    }

    render() {
      return(
        <main role="main">
    <section className="squareDiv text-center">
      <div className="container">
        <h1 className="font-weight-bold pt-3">Our Services</h1>
        <p className="lead text-muted">We Offer to our customer to check and fix their car. Mecanical part and Electrician part. Best service and Best price</p>

          <Button variant="contained"  href="consultation" color="secondary">Consultations</Button>
          <Button variant="contained"  href="maintenance" color="secondary">Maintenace</Button>

      </div>
    </section>
    <div class="album py-5 bg-light">
        <div class="container">
          <h2 class="text-center">Maintenace Team</h2>
          <div class="row">
            <div class="col-md-4">
              <div class="card mb-4 shadow-sm">
                <img class="bd-placeholder-img card-img-top" width="100%" height="225" src={mercedes} alt=""/>
                <div class="card-body">
                  <p class="card-text "><EmojiTransportation /> T. Gargour Co. Mercedes-Benz</p>
                  <p class="card-text "><LocationOn /> Amman - Wadi As-Seir</p>
                  <p class="card-text "><Call /> 00962 7 1234567</p>
                  <div class="d-flex justify-content-between align-items-center">
                    <div class="btn-group">
                      <button type="button" class="btn btn-sm btn-outline-secondary" onclick="window.open('tel:0096271234567');">Call Now</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-md-4">
              <div class="card mb-4 shadow-sm">
                <img class="bd-placeholder-img card-img-top" width="100%" height="225" src={toyota} alt=""/>
                <div class="card-body">
                  <p class="card-text"><EmojiTransportation />  Al-Markazyah Toyota</p>
                  <p class="card-text"><LocationOn />  Amman - Al-madina Almunwarah</p>
                  <p class="card-text"><Call /> 00962 7 1234454</p>
                  <div class="d-flex justify-content-between align-items-center">
                    <div class="btn-group">
                      <button type="button" class="btn btn-sm btn-outline-secondary" onclick="window.open('tel:0096271234454');">Call Now</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-md-4">
              <div class="card mb-4 shadow-sm">
                <img class="bd-placeholder-img card-img-top" width="100%" height="225" src={bmw} alt=""/>
                <div class="card-body">
                  <p class="card-text"><EmojiTransportation />  Abo-Khader Co. BMW</p>
                  <p class="card-text"><LocationOn />  Amman - Wadi As-Seir</p>
                  <p class="card-text"><Call /> 00962 7 1234222</p>
                  <div class="d-flex justify-content-between align-items-center">
                    <div class="btn-group">
                      <button type="button" class="btn btn-sm btn-outline-secondary" onclick="window.open('tel:0096271234222');">Call Now</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            </div>
            </div>
            </div>

       </main>
      )
    }
}

export default Maintenance
