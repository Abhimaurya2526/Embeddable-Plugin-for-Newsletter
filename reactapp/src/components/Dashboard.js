import React from 'react'
import { useState, useEffect } from 'react';
import toast from 'react-hot-toast';
import "./Dashboard.css"

const Dashboard = () => {

  const [subscriberList, setSubscriberList] = useState([]);
  const [currentUser, setCurrentUser] = useState(JSON.parse(sessionStorage.getItem('user')));
  const [mailText, setMailText] = useState("");

  const pluginText = `<link rel="stylesheet" href="http://localhost:5000/index.css">
  <div id="plugin" owner="yourkey"></div>
  <script src="http://localhost:5000/index.js"></script>`

  const getDataFromBackend = async () => {
    const response = await fetch('http://localhost:5000/subscriber/getall');
    const data = await response.json();
    console.log(data);
    setSubscriberList(data);
  }

  const deletesubscriber = async (id) => {
    console.log(id);
    const response = await fetch('http://localhost:5000/subscriber/delete/' + id, { method: 'DELETE' })
    if (response.status === 200) {
      console.log('user deleted');
      toast.success('User Deleted 😎');
      getDataFromBackend();
    }
  }


  useEffect(() => {
    getDataFromBackend();
  }, []);

  const displaySubscriber = () => {
    return <table className='table bg-white'>
      <thead>
        <tr>
          <th>Name</th>
          <th>Email</th>

        </tr>
      </thead>
      <tbody>
        {
          subscriberList.map((subscriber) => (
            <tr>
              <td>{subscriber.name}</td>
              <td>{subscriber.email}</td>
              <td>
                <button className='btn btn-outline-danger' onClick={() => { deletesubscriber(subscriber._id) }}>
                  <i className="fas fa-trash"></i>
                </button>
              </td>
            </tr>
          ))
        }
      </tbody>
    </table>
  }

  const sendMail = () => {
    for(let sub of subscriberList){
      fetch('http://localhost:5000/util/sendmail', {
        method : 'POST',
        body : JSON.stringify({
          from : 'newsletterproject974@gmail.com',
          to : sub.email,
          subject : 'newsletter from Abhishek',
          html : mailText
        }),
        headers: {
          'Content-Type' : 'application/json'
        }
      })
    }
    console.log('mail sent');
  }


  return (
    <div>
      <div className='container'>
        <h1 className='text-center'>subscriber Manager</h1>

        <div className="card mt-5 mb-5">
          <div className="card-header">
            Account Details
          </div>
          <div className="card-body">
            <h5>Your Plugin Key : {currentUser._id} </h5>
            <label>Copy Code below and paste it on your website</label>

            <textarea className='form-control'
              value={pluginText}
              disabled
              rows={4}
            ></textarea>
          </div>
        </div>

        <div className="row">
          <div className='card-detail'>
            <div className='card'>
              <div className="col-md">
                {displaySubscriber()}
              </div>
            </div>
          </div>
        </div>

        <textarea className='form-control mt-5' rows={5} onChange={e => setMailText(e.target.value)}>

        </textarea>
        <button className='btn btn-primary' onClick={sendMail}>Send Mail</button>

      </div>
    </div>
  )
}

export default Dashboard