import react , {useState, useEffect} from 'react'
import axios from 'axios'
import Button from '@material-ui/core/Button';
import {EmojiTransportation, LocationOn, Call} from '@material-ui/icons/';
import toyota from '../img/toyota.png'
import bmw from '../img/bmw.png'
import mercedes from '../img/mercedes.png'

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useRouteMatch,
  useParams
} from "react-router-dom";




   const Maintenance = () => {
     let [Maintenace, setMaintenance] = useState([])

     // getCompany = () => {
     //     axios.get('http://localhost:4000/companies')
     //     .then(res => {
     //       console.log(res);
     //       this.setState({Company: res.data})
     //       //console.log(res.ID);
     //
     //     })
     //     .catch(err => {
     //       console.log(err);
     //       this.setState({ErrorMsg:"couldnt get data"})
     //     })
     //   }
     // }

     function onClick() {
       alert('clicked')
     }

     useEffect(() => {
       axios.get('http://localhost:4000/companies')
           .then((res) => {
             console.log(res.data);
             setMaintenance(res.data)
           })
           .catch((err) => {
             console.log(err);
           })
         },[0]);

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
    <div className="album py-5 bg-light">
        <div className="container">
          <h2 className="text-center">Maintenace Team</h2>
        </div>
        <div className="container">
          <div className="row">
          { Maintenace.length? Maintenace.map(maintenance =>
            <div className="col-lg-4 col-md-6" key={maintenance._id}>
              <div className="card mb-4 shadow-sm">
                <img className="bd-placeholder-img card-img-top" width="100%" height="225" src={mercedes} alt=""/>
                  <div className="card-body">
                    <p className="card-text"><EmojiTransportation /> {maintenance.name}</p>
                    <p className="card-text"><LocationOn />{maintenance.location}</p>
                    <p className="card-text"><Call />{maintenance.phone}  </p>
                    <div className="d-flex justify-content-between align-items-center">
                    <div className="btn-group">
                      <button type="button" className="btn btn-sm btn-outline-secondary" onClick={onClick}>Call Now</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ): null
        }
        </div>
        </div>

          </div>
       </main>
      )}

export default Maintenance
