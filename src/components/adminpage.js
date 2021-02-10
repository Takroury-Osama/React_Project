import react , {useState, useEffect} from 'react'
import axios from 'axios'
import Booking from './booking';
import {Table, Button} from 'react-bootstrap'

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
  let [Update, setUpdate] = useState({
    Name:'osa',
    Email:'osa',
    Phone:'99999',
    Datetime:'',
    Location:'',
  });




    let DeleteData =() => {

  //  console.log(props.ID);
  //  axios.delete('http://localhost:4000/booking/'+ ID)
  //      .then((res) => {
  //        console.log(res);
  //      })
  //      .catch((err) => {
  //        console.log(err);
  //      })
  // }
    alert("delete");

    }

  let UpdateData = (event) => {

    setUpdate(Update)


    //  axios.put('http://localhost:4000/booking/'+ ID)
    //      .then((res) => {
    //        console.log(res);
    //      })
    //      .catch((err) => {
    //        console.log(err);
    //      })
    // }
  }

useEffect(() => {
  axios.get('http://localhost:4000/bookings')
      .then((res) => {
        console.log(res.data);
        setBooking(res.data)
      })
      .catch((err) => {
        console.log(err);
      })
    },[]);


  return (

    <Table striped bordered hover className='mt-5'>
      <thead>
        <tr>
          <th>Name</th>
          <th>Email</th>
          <th>Phone</th>
          <th>Date</th>
          <th>Location</th>
          <th>Update</th>
          <th>Delete</th>
        </tr>
      </thead>
      <tbody>
          {Booking.length? Booking.map(booking =>
            <tr key={booking._id}>
              <td>{booking.fullname}</td>
              <td>{booking.email}</td>
              <td>{booking.phone}</td>
              <td>{booking.datetime}</td>
              <td>{booking.location}</td>
              <td><Button variant="primary" onClick={() => UpdateData()}>
            Update
          </Button></td>
              <td><Button variant="danger" onClick={() => DeleteData()}>
            Delete
          </Button></td>

          </tr>): null
         }
          </tbody>
  </Table>
  )
}

export default AdminPage;
