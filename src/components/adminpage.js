import react , {useState, useEffect} from 'react'
import axios from 'axios'
import Booking from './booking';
import {Table} from 'react-bootstrap'

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useRouteMatch,
  useParams
} from "react-router-dom";


const AdminPage = () => {
  let [Booking, setBooking] = useState([])
  let [Error, setError] = useState('')



useEffect(() => {
  axios.get('http://localhost:4000/Reservations')
      .then((res) => {
        console.log(res.data);
        setBooking(res.data)
      })
      .catch((err) => {
        console.log(err);
      })
    },[0]);


  return (
    <Table striped bordered hover>
<thead>
  <tr>
    <th>#</th>
    <th>Name</th>
    <th>Email</th>
    <th>Phone</th>
    <th>Date</th>
    <th>Location</th>
  </tr>
</thead>
<tbody>
    {Booking.length? Booking.map(booking =>
      <tr>
        <td>{booking.FullName}</td>
        <td>{booking.Email}</td>
        <td>{booking.Phone}}</td>
        <td>{booking.Datetime}}</td>
        <td>{booking.Location}}</td>
    </tr>): null
   }
    </tbody>
  </Table>
  )
}

export default AdminPage;
