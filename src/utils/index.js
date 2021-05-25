import axios from 'axios'
const url="http://localhost:4000"

export function _get(str)
{
	console.log(str,"get request")
	return axios.get(`${url}/${str}`).then(response=>response.data)
}
export function _delete(str)
{
	console.log(str,"delete request")
	return axios.delete(`${url}/${str}`).then(response=>response.data)
}

export function _post(str,data)
{
	console.log(str,"post request",data)
	return axios.post(`${url}/${str}`,data).then(response=>response.data)
}
export function _patch(str,data)
{
	console.log(str,"patch request",data)
	return axios.patch(`${url}/${str}`,data).then(response=>response.data)
}
