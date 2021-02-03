import react, {Component} from 'react'

import { Mood ,EmojiPeople ,Business, EmojiTransportation } from '@material-ui/icons';
import { green, orange } from '@material-ui/core/colors';
import consult from '../img/consult.jpg';
import maint from '../img/maint.jpg'
import goldCard from '../img/gold.jpg'
import silverCard from '../img/silver.jpg'
import bronzeCard from '../img/bronze.jpg'
import blueCard from '../img/blue.jpg'


class Home extends Component {

  render () {
    return(
<main className="pt-5">
<div className="bg-cover text-dark header-pic">
    <div className="container py-5 mt-4 text-center">
        <h1 className="display-4 mt-5 font-weight-bold">TrusTk Car Vehicle..</h1>
        <p className="font-italic mb-5 text-light">Your Trusted road to license your car in your home. </p>
        <a href="booking" className="btn publicBgColor px-5">Reserve Now</a>
    </div>
</div>
  <section className="py-5 bg-light">
        <div className="container">
          <h4 className="pb-3 align-center display-2">
              Our Services
          </h4>
          <div className="row">
            <div className="col-md-5 mb-4">
              <img src={consult} className="w-100 rounded"/>
            </div>
            <div className="col-md-1"> </div>
            <div className="col-md-6 mb-4">
              <h3 className="h3 mb-3">Consultations Parnter</h3>
              <p>We are the first and the only company offer this service. If you will check or upgrade your car.
               You can contact with us, So we will send on of our professional member to give you the the most appropriate suggestion for you.</p>
              <p>For more details  <a href="maintenance"><strong>Click Here.</strong></a></p>
              <p>Believe that the consultant will give you an exactly what you need and more..</p>
            </div>
        </div>
    </div>
  </section>
  <section className="py-4 bg-light">
        <div className="container">
          <div className="row">
            <div className="col-md-6 mb-4">
              <h3 className="h3 mb-3">Maintenance Parnter</h3>
              <p>We know that it's hard to maintain your car or find someone you trust to check your car. No waste time and effort any more.
               You can contact with us to or one of our partnership and will send on of our professional team</p>
              <p>For more details <a href="maintenance"><strong>Click Here.</strong></a></p>
            </div>
              <div className="col-md-1"> </div>
          <div className="col-md-5 mb-4">
              <img src={maint} className="w-100 rounded"/>
          </div>
        </div>
    </div>
  </section>
  <section className="bg-cover bg-center">
    <div className="primary-overlay py-5">
      <div className="overlay-content">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-7 text-center text-lg-left mb-4 mb-lg-0">
              <h2 className="text-white mb-2">You Always Get The <b>Best Guidance</b></h2>
              <p className="text-white mb-0">Our policy is to give you the best option in Jordan. Your Car isin  safe with us. We will take care for it with best price.</p>
            </div>
            <div className="col-lg-3 ml-auto text-center text-lg-right"></div>
          </div>
        </div>
      </div>
    </div>
  </section>
  <hr className="my-4"/>
  <section>
    <div className="container">
        <h2 className="pb-3 align-center display-2">Our New Big Offers</h2>
        <h3 className=" display-5 align-center"> Check out our best chioce for YOU. Here are best coupon for YOU.</h3>
          <div className="row pt-5 mt-2">
            <div className="col-12 col-md-6 col-lg-3 mb-4 flip-card">
                <div className="card flip-card align-center flip-card-inner">
                    <div className="flip-card-front">
                        <img src={goldCard} alt="gold card" media-simple="true"/>
                    </div>
                    <div className="flip-card-back gold">
                        <h4 className="card-title display-5 py-2 mbr-fonts-style">
                            Golden Coupon
                        </h4>
                        <p className="mbr-text mbr-fonts-style">- Discount 25% </p>
                        <p className="mbr-text mbr-fonts-style">- One Free Consultation</p>
                        <p className="mbr-text mbr-fonts-style">- 12 Car washing</p>
                        <p className="mbr-text mbr-fonts-style">- Change Oil For free</p>
                    </div>
                </div>
            </div>
            <div className="col-12 col-md-6 col-lg-3 mb-4 flip-card">
                <div className="card flip-card align-center flip-card-inner">
                    <div className="flip-card-front">
                        <img src={silverCard} alt="silver card" media-simple="true"/>
                    </div>
                    <div className="flip-card-back silver">
                        <h4 className="card-title display-5 py-2 mbr-fonts-style">
                          Silver Coupon
                        </h4>
                        <p className="mbr-text mbr-fonts-style">- Discount 15% </p>
                        <p className="mbr-text mbr-fonts-style">- One Free Consultation</p>
                        <p className="mbr-text mbr-fonts-style">- 6 Car washing</p>
                        <p className="mbr-text mbr-fonts-style">- Change Oil For free</p>
                    </div>
                </div>
            </div>
            <div className="col-12 col-md-6 col-lg-3 mb-4 flip-card">
                <div className="card flip-card align-center flip-card-inner">
                    <div className="flip-card-front">
                        <img src={bronzeCard} alt="Bronze card" media-simple="true"/>
                    </div>
                    <div className="flip-card-back bronze">
                        <h4 className="card-title py-2 mbr-fonts-style display-5">
                          Bronze Coupon
                        </h4>
                        <p className="mbr-text mbr-fonts-style"> -Discount 10% </p>
                        <p className="mbr-text mbr-fonts-style">- One Free Consultation</p>
                        <p className="mbr-text mbr-fonts-style">- 6 Car washing</p>
                    </div>
                </div>
            </div>
            <div className="col-12 col-md-6 col-lg-3 mb-4 flip-card">
                <div className="card flip-card align-center flip-card-inner">
                    <div className="flip-card-front">
                        <img src={blueCard} alt="Blue Card" media-simple="true"/>
                    </div>
                    <div className="flip-card-back blue">
                        <h4 className="card-title py-2 mbr-fonts-style display-5">
                          Blue Coupon
                        </h4>
                        <p className="mbr-text mbr-fonts-style">- Discount 15% </p>
                        <p className="mbr-text mbr-fonts-style">- 10 Car washing</p>
                        <p className="mbr-text mbr-fonts-style">- Change Oil For free</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
  </section>
    <hr className="mt-4"/>
  <section className="bg-light">
        <div className="container" id="counterDiv">
          <div className="row">
            <div className="four col-md-3">
              <div className="counter-box colored">
              <Mood style={{ fontSize: 35 }}/>
              <span className="counter">+35000</span>
              <p>Happy Customers</p>
            </div>
        </div>
        <div className="four col-md-3">
            <div className="counter-box">
               <EmojiPeople style={{ fontSize: 35 }} color="action"/>
               <span className="counter">+22000</span>
                <p>Registered Members</p>
            </div>
        </div>
        <div className="four col-md-3">
            <div className="counter-box">
              <Business style={{ fontSize: 35 }} color="action"/>
              <span className="counter">+35</span>
              <p>Company</p>
            </div>
        </div>
        <div className="four col-md-3">
            <div className="counter-box">
            <EmojiTransportation style={{ fontSize: 35 }} color="action"/>
            <span className="counter">25</span>
            <p>Partners</p>
            </div>
        </div>
      </div>
    </div>
  </section>
</main>
  )}
}
export default Home
