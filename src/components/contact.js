import react, {Component} from 'react'
import axios from 'axios'


 class Contact extends Component {

  constructor(props) {
    super(props)

    this.state = {
                  Fullname:'',
                  Email:'',
                  Phone:'',
                  Title:'',
                  Message:'',
                  }
  }

  formHandler = (event) => {
      this.setState({[event.target.name]: event.target.value}, () => this.validateForm())
  }

validateForm = () => {
    let allData = true
    return allData
}

  submitForm = (event) => {
    if(this.validateForm()) {

      axios.post('http://localhost:4000/contact', this.state)
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
      <section className="py-5 bg-light shadow-sm index-forward">
          <div className="container py-5">
            <div className="card rounded-0 border-0">
              <div className="card-body p-4 p-lg-5">
                <div className="row py-5">
                  <div className="col-lg-5">
                    <h2><b>Request a <span> Call </span> Back</b></h2>
                    <p className="mb-5" id="parItem">Let's keep in touch. We will be happy to help you. </p>
                    <ul className="list-unstyled mb-0">
                      <li>
                        <h5 className="text-muted">Address</h5>
                        <p className="text-muted">Al-Jubaiha - Amman</p>
                      </li>
                      <li>
                        <h5 className="text-muted">Email</h5>
                        <p className="text-muted">osama-tak@hotmail.com</p>
                      </li>
                      <li>
                        <h5 className="text-muted">Phone</h5>
                        <p className="text-muted">+962 78 578 2795</p>
                      </li>
                    </ul>
                  </div>
                  <div className="col-lg-7">
                    <form action="mailto:osama-tak@hotmail.com" method="get" enctype="text/plain" >
                      <div className="row">
                        <div className="form-group col-lg-6">
                          <input className="form-control" type="text" name="Fullname" placeholder="Full name" onChange={this.formHandler} required/>
                        </div>
                        <div className="form-group col-lg-6">
                          <input className="form-control" type="email" name="Email" placeholder="Email address" onChange={this.formHandler} required/>
                        </div>
                        <div className="form-group col-lg-6">
                          <input className="form-control" type="tel" name="Phone" placeholder="Phone number" onChange={this.formHandler}/>
                        </div>
                        <div className="form-group col-lg-6">
                          <input className="form-control" type="text" name="Title" placeholder="title"onChange={this.formHandler}/>
                        </div>
                        <div className="form-group col-lg-12">
                          <textarea className="form-control" name="Message" rows="5" placeholder="Leave your message" onChange={this.formHandler} required></textarea>
                        </div>
                        <div className="form-group col-lg-12">
                          <button className="btn buttonStyle" onClick={this.submitForm} type="submit">Submit now</button>
                        </div>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
)
  }
}

export default Contact
