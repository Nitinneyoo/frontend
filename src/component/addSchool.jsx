import React,{useState} from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

function AddSchool() {

  const [Id,setId] = useState('')
  const  [Name,setName] = useState('')
  const [Email,setEmail] = useState('')
  const [Address,setAddress] = useState('')
  const [City,setCity] = useState('')
  const [State,setState] = useState('')
  const [Contact,setContact] = useState('')
  const navigate = useNavigate()
  

  function handleSubmit(event){
    event.preventDefault()
    axios.post(`http://localhost:8081/addSchool`,{Id,Name,Email,Address,City,State,Contact})
    .then((res) =>{
      console.log(res.data)
      navigate('/')
    } )
    .catch((err) => console.log(err));
  }
  return (
    <div className='d-flex vh-100 bg-light flex justify-content-center align-items-center'>
      <div className='w-50 bg-white rounded p-3'>
        <form onSubmit={handleSubmit}>
          <h2>
            Add Data
          </h2>
          <div className='mb-3'>
            <label className='form-label'>ID</label>
            <input type="text" placeholder="Enter Id" className='form-control' 
            onChange={e=>setId(e.target.value)}
            />
          </div>
          <div className='mb-3'>
            <label className='form-label'>Name</label>
            <input type="text" placeholder="Enter Name" className='form-control'
            onChange={e=>setName(e.target.value)}
            />
          </div>
          <div className='mb-3'>
            <label className='form-label'>Email</label>
            <input type="email" placeholder="Enter Email" className='form-control' 
            onChange={e=>setEmail(e.target.value)}/>
          </div>
          <div className='mb-3'>
            <label className='form-label'>Address</label>
            <input type="text" placeholder="Enter Address" className='form-control' 
            onChange={e=>setAddress(e.target.value)}/>
          </div>
          <div className='mb-3'>
            <label className='form-label'>City</label>
            <input type="text" placeholder="Enter City" className='form-control' 
            onChange={e=>setCity(e.target.value)}/>
          </div>
          <div className='mb-3'>
            <label className='form-label'>State</label>
            <input type="text" placeholder="Enter State" className='form-control'
            onChange={e=>setState(e.target.value)} />
          </div>
          <div className='mb-3'>
            <label className='form-label'>Contact</label>
            <input type="text" placeholder="Enter Contact" className='form-control' 
            onChange={e=>setContact(e.target.value)}/>
          </div>
          <button onSubmit={handleSubmit} className='btn btn-success'>Submit</button>
        </form>
      </div>
    </div>
  )
}

export default AddSchool
