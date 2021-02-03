import react, {Component} from 'react'
import {Alert} from 'react-bootstrap'
import axios from 'axios'


  class Booking extends Component {
    constructor(props) {
      super(props)

      this.state = {
                    Name:'',
                    Email:'',
                    Phone:'',
                    Datetime:'',
                    Location:'',
                //    NameValidationClass:'',
                  //  NameValidationErr:''
                    }
    }

  formHandler = (event) => {
      this.setState({[event.target.name]: event.target.value}, () => this.validateForm())
  }

validateForm = () => {
    let allData = true
    //
    // if(this.state.Name.length == 0) {
    //   console.log("must enter your name");
    //   this.setState({NameValidationErr: 'Please Enter Your Name', NameValidationClass:'danger'})
    //   allData= false
    // }
    // else {
    //   this.setState({NameValidationErr: 'Name is good',  NameValidationClass:'primary'})
    //   console.log("all data good");
    // }
    return allData
}

    submitForm = (event) => {
      if(this.validateForm()) {

        axios.post('http://localhost:4000/booking', this.state)
        .then((res) => {
          console.log(res);
        })
        .catch((err) => {
          console.log(err);
        })
        console.log(this.state);
      }
      else {
        console.log('somthing error');
      }
    }

    render() {
      return (
        <div id="booking" className="section">
    		<div className="section-center">
    			<div className="container">
    				<div className="row">
    					<div className="booking-form">
    						<div className="form-header">
    							<h1>Make your reservation</h1>
    						</div>
    						<form>
    							<div className="row">
    								<div className="col-md-6">
    									<div className="form-group">
    										<span className="form-label">Your Full Name</span>
    										<input className="form-control" type="text" name="Name" value={this.state.Name} onChange={this.formHandler} required/>
                  {/*      <Alert key='NameValidation' variant={this.state.NameValidationClass}>{this.state.NameValidationErr}</Alert>
                                                                                                                                          */}
    									</div>
    								</div>
    								<div className="col-md-6">
    									<div className="form-group">
    										<span className="form-label">Your Email</span>
    										<input className="form-control" type="email" name="Email" onChange={this.formHandler} required/>
                        {/*      <Alert key='NameValidation' variant={this.state.NameValidationClass}>{this.state.NameValidationErr}</Alert>
                                                                                                                                                */}
    									</div>
    								</div>
    							</div>
    							<div className="row">
    								<div className="col-md-4">
    									<div className="form-group">
    										<span className="form-label">Your Phone</span>
    										<input className="form-control" type="text" name="Phone" onChange={this.formHandler} required/>
                        {/*      <Alert key='NameValidation' variant={this.state.NameValidationClass}>{this.state.NameValidationErr}</Alert>
                                                                                                                                                */}
    										<span className="select-arrow"></span>
    									</div>
    								</div>
    								<div className="col-md-4">
    									<div className="form-group">
    										<span className="form-label">Location</span>
    										<input className="form-control" type="text" name="Location" onChange={this.formHandler} required/>
                        {/*      <Alert key='NameValidation' variant={this.state.NameValidationClass}>{this.state.NameValidationErr}</Alert>
                                                                                                                                                */}
    										<span className="select-arrow"></span>
    									</div>
    								</div>
    								<div className="col-md-4">
    									<div className="form-group">
    										<span className="form-label">Date and Time</span>
    											<input className="form-control" type="Date" name="Datetime" onChange={this.formHandler} required/>
                          {/*      <Alert key='NameValidation' variant={this.state.NameValidationClass}>{this.state.NameValidationErr}</Alert>
                                                                                                                                                  */}
    										<span className="select-arrow"></span>
    									</div>
    								</div>
    							</div>
    							<div className="form-btn">
    								<button className="submit-btn publicBgColor" onClick={this.submitForm}>Submit Reservation</button>
    							</div>
    						</form>
    					</div>
    				</div>
    			</div>
    		</div>
    	</div>
      )
    }
  }

export default Booking
