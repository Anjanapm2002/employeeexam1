import React, { useState } from 'react'
import { Modal,Button,Form,FloatingLabel,Dropdown } from 'react-bootstrap';
import { saveEmployeeAPI } from '../services/allAPI';

const Add = ({setAddResponseFromHome}) => {
  const [invalidEmail,setInvalidEmail] =useState(false)
  const [employeeDetails,setEmployeeDetails] = useState({
    id:0,userName:"",email:"",status:""
  })
  console.log(employeeDetails);
  
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleEmailAddress = (userInputEmailAddress) => {
    if(userInputEmailAddress.endsWith("@gmail.com")){
      console.log(userInputEmailAddress);
      setInvalidEmail(false)
      setEmployeeDetails({...employeeDetails,email:userInputEmailAddress})
    }else{
      setInvalidEmail(true)
      setEmployeeDetails({...employeeDetails,email:""})
    }
  }

  const handleStatusSelect = (userSelectedStatus)=>{
    console.log(userSelectedStatus);
    setEmployeeDetails({ ...employeeDetails, status:userSelectedStatus });
  }

  const handleAddEmployee = async ()=>{
    const {id,userName,email,status} = employeeDetails
    if(id && userName && email && status){
      try {
        const result = await saveEmployeeAPI(employeeDetails)
        console.log(result);
        if(result.status>=200 && result.status<300){
          alert("Stored Employee Details...")
          handleClose()
          setAddResponseFromHome(result)
        }else{
          console.log(result);
        }      
      } catch (err) {
        console.log(err);        
      }
    }else{
      alert("Please Fill Form!!!")
    }
  }
  return (
    <>
      <div className="d-flex align-items-center ">
        <button onClick={handleShow} className='btn btn-info  rounded fw-bolder fs-5 text-dark'><i class="fa-solid fa-plus"></i>Add Employee</button>
      </div>
      {/* Modal */}
      <Modal show={show} onHide={handleClose} backdrop="static" keyboard={false}>
        <Modal.Header closeButton>
          <Modal.Title>Uploading Employee Details</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="border rounded p-3">
            <FloatingLabel controlId="floatingId" label="ID">
              <Form.Control onChange={e=>setEmployeeDetails({...employeeDetails,id:e.target.value})}  type="text" placeholder="ID" />
            </FloatingLabel>
            <FloatingLabel onChange={e=>setEmployeeDetails({...employeeDetails,userName:e.target.value})}  className='mt-2' controlId="floatingUsername" label="Username">
              <Form.Control type="text" placeholder="Username" />
            </FloatingLabel>
            <FloatingLabel onChange={e=>handleEmailAddress(e.target.value)} className='mt-2' controlId="floatingEmail address" label="Email address">
              <Form.Control  type="text" placeholder="Email address" />
            </FloatingLabel>
            <FloatingLabel onChange={e=>handleStatus(e.target.value)} className='mt-2' controlId="floatingStatus" >
            <Dropdown onSelect={handleStatusSelect}>
              <Dropdown.Toggle variant="success" id="dropdown-basic">
                  {employeeDetails.status || 'Status'}
              </Dropdown.Toggle>
              <Dropdown.Menu>
                  <Dropdown.Item eventKey="Active">Active</Dropdown.Item>
                  <Dropdown.Item eventKey="Inactive">Inactive</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
            </FloatingLabel>
            {
              // conditional rendering
              invalidEmail &&
              <div className="text-warning fw-bolder mt-2">Invalid Email address</div>
            }            
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Cancel
          </Button>
          <Button onClick={handleAddEmployee}  className='btn btn-info' variant="primary">Add</Button>
        </Modal.Footer>
      </Modal>
    </>
  )
}

export default Add