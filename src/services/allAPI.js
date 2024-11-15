import commonAPI from "./commonAPI"
import SERVERURL from "./serverURL"

// saveEmployeeAPI
export const saveEmployeeAPI = async (employeeDetails)=>{
    return await commonAPI("POST",`${SERVERURL}/uploadEmployee`,employeeDetails)
}

// getAllEmployeeAPI
export const getAllEmployeeAPI = async ()=>{
    return await commonAPI("GET",`${SERVERURL}/uploadEmployee`,"")
}

// deleteEmployeeAPI
export const deleteEmployeeAPI = async (id) =>{
    return await  commonAPI("DELETE",`${SERVERURL}/uploadEmployee/${id}`,{})
  }

// updateEmployeeAPI
export const updateEmployeeAPI = async (employeeDetails) =>{
    return await  commonAPI("PUT",`${SERVERURL}/uploadEmployee/${employeeDetails.id}`,employeeDetails)
  }