import React, { useEffect, useState } from 'react'
import { deleteEmployeeAPI, getAllEmployeeAPI, updateEmployeeAPI } from '../services/allAPI';

const View = ({addResponseFromHome}) => {
  const [deleteResponse,setDeleteResponse] = useState("")
  const [allEmployees,setAllEmployees] = useState([])
  const [editEmployee, setEditEmployee] = useState(null)
  const [updatedDetails, setUpdatedDetails] = useState({ userName: '', email: '', status: '' })

  useEffect(()=>{
    getAllEmployee()
  },[addResponseFromHome,deleteResponse])
  console.log(allEmployees);
  

  const getAllEmployee = async ()=>{
    try {
      const result = await getAllEmployeeAPI()
      console.log(result);

      if(result.status>=200 && result.status<300){
        setAllEmployees(result.data);
      }
    } catch (err) {
      console.log(err);      
    }
  }

  const deleteEmployee = async (id)=>{
    try {
      const result = await deleteEmployeeAPI(id)
      setDeleteResponse(result)
    } catch (err) {
      console.log(err);      
    }
  }

   const handleEditClick = (employeeDetails) => {
    setEditEmployee(employeeDetails);
    setUpdatedDetails({
      userName: employeeDetails.userName,
      email: employeeDetails.email,
      status: employeeDetails.status,
    });
  };

  const handleUpdateChange = (e) => {
    const { name, value } = e.target;
    setUpdatedDetails({
      ...updatedDetails,
      [name]: value,
    });
  };
  const handleStatusChange = (e) => {
    setUpdatedDetails({
      ...updatedDetails,
      status: e.target.value,
    });
  };


  const updateEmployee = async () => {
      try {
          const result = await updateEmployeeAPI({
                id: editEmployee.id,
                ...updatedDetails 
            });
    
            if (result.status >= 200 && result.status < 300) {
                setEditEmployee(null) 
                getAllEmployee()
            } else {
                console.error(result);
            }
        } catch (err) {
            console.error(err);
        }
      }

  return (
    <>
      <h3 className='container text-dark text-center'>EMPLOYEE LIST</h3>
      {editEmployee && (
        <div className="container">
          <h5 className='text-info'>Edit Employee</h5>
          <input className='p-2 rounded ms-1 '
            type="text"
            name="userName"
            value={updatedDetails.userName}
            onChange={handleUpdateChange}
            placeholder="Username"
          />
          <input className='p-2 rounded ms-1 '
            type="email"
            name="email"
            value={updatedDetails.email}
            onChange={handleUpdateChange}
            placeholder="Email"
          />
          <select
            name="status"
            value={updatedDetails.status}
            onChange={handleStatusChange}
            className="p-2  rounded ms-1 "
          >
            <option value="Active">Active</option>
            <option value="Inactive">Inactive</option>
          </select>

          <button className='btn btn-success ms-2' onClick={updateEmployee}>Save</button>
          <button className='btn btn-danger ms-1' onClick={()=> setEditEmployee(null)}>Cancel</button>
        </div>
      )}
      <table className='container table shadow my-4'>
        <thead>
          <tr>
            <th>#</th>
            <th>ID</th>
            <th>USERNAME</th>
            <th>EMAIL </th>
            <th>STATUS</th>
            <th>MODIFICATION</th>
          </tr>
        </thead>
        <tbody>
          {
            allEmployees?.length>0?
            allEmployees?.map((employeeDetails,index)=>(
              <tr>
                <td> {index+1} </td>
                <td> {employeeDetails?.id} </td>
                <td> <span className='text-info'>{employeeDetails?.userName}</span>  </td>
                <td><span className='text-warning'> {employeeDetails?.email} </span></td>
                <td><span className='text-success'> {employeeDetails?.status} </span></td>
                <td>
                  <button onClick={()=>deleteEmployee(employeeDetails?.id)} className='btn me-1 '><i className="fa-solid fa-trash text-danger"></i></button>
                  <button onClick={() => handleEditClick(employeeDetails)} className='btn '><i class="fa-solid fa-pen-to-square"></i> </button>
                </td>
              </tr>
            ))
            :
            <div className="fw-bolder text-danger">Employees Not Added Yet</div>
          }
        </tbody>
      </table>
    </>
  )
}

export default View