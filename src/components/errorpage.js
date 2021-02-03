import react , {useEffect,useState} from 'react'
import axios from 'axios'


import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useRouteMatch,
  useParams
} from "react-router-dom";


const ErrorPage = () => {

  return (
  <div className="bgBody">
    <div className="container ">
    <div className="row">
      <div className="col-md-12 mt-5">
        <h2 className="mt-5 pt-5">Oops... Page Not Found!</h2>
        <p>You can go back to Home Page <a href="home">Click Here</a></p>
        </div>
      </div>
    </div>
  </div>
  )
}

export default ErrorPage
