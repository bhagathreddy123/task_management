import * as React from 'react'
import {useState, useEffect } from 'react'
import * as ReactDOM from 'react-dom'
import ServerSideError from './ServerSideError'

const NewTask = () => {
	const tasksStatuses = [
      { label: 'To Do', value: 'To Do' },
      { label: 'In Progress', value: 'In Progress' },
      { label: 'Done', value: 'Done' }
	]

	const [isServerSideError, setIsServerSideError] = useState(false)
	const [serverErrors, setServerErrors] = useState([])

	const [formField, setFormField] = useState({
		title: '',
		status: tasksStatuses[0].value
	})

	const handleTaskSubmit = (event) => {
      event.preventDefault();
      console.log(formField)
      createTask(formField)
    }

    const handleFormFields = (event) => {
    	setFormField({...formField, [event.target.name]: event.target.value})
    }
    
    const createTask = (data) => {
    	fetch(`/api/v1/tasks`, {
    		method: 'POST',
    		headers: {
    			'Content-Type': 'application/json'
    		},
    		body: JSON.stringify(data)
    	})
    	.then((response) => response.json())
    	.then((data) => {
    		console.log('Success:', data)
    		if(data['status'] === 'failure'){
    			setIsServerSideError(true)
    			setServerErrors(data['data'])
    		} else {
    			setIsServerSideError(false)
    			setServerErrors([])
    		}
    	})
    	.catch((error) => {
    		console.log('Error:', error)
    	})
    }

	return(
		<div className="modal fade" id="exampleModal" tabIndex="-1" 
		aria-labelledby="exampleModalLabel" aria-hidden="true">
		  <div className="modal-dialog modal-lg">
		    <div className="modal-content">
		      <div className="modal-header">
		        <h1 className="modal-title fs-5" id="exampleModalLabel">Write Your Question ad help the world to grow</h1>
		        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
		      </div>
		        <form onSubmit={handleTaskSubmit}>
			      <div className="modal-body">
			        <div className="form-group">
			           <label className="form-label mt-3 mb-3"> Title</label>
			           <input type="text" className="form-control form-control-lg rounded-0" value={formField.title}
			            onChange={event => handleFormFields(event)} name="title" />
			        </div>
			        <div className="form-group">
			           <label className="form-label mt-3 mb-3"> Task Status</label>
			           <select className="form-select form-slect-lg rounded-0" value={formField.status} 
			             onChange={ event => handleFormFields(event)} name="tag">
			           	{ tasksStatuses.map(status => (
			           		<option key={status.value} value={status.value}>{status.label}</option>
			           		))}
			           </select>
			        </div>
			      </div>
			      <div className="modal-footer">
		           <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
		           <button type="submit" className="btn btn-primary">Submit Task</button>
		         </div>
			   </form>		      
		    </div>
		  </div>
        </div>
	)

}

export default NewTask