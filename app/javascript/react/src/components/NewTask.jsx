import * as React from 'react'
import {useState, useEffect } from 'react'
import * as ReactDOM from 'react-dom'

const NewTask = () => {
	const tasksStatuses = [
      { label: 'To Do', value: 0 },
      { label: 'In Progress', value: 1 },
      { label: 'Done', value: 2 }
	]

	const [title, setTitle] = useState('')
	const [status, setStatus] = useState(tasksStatuses[0].value)

	const handleTitleChange = (event) => {
		setTitle(event.target.value)
	}

	const handleStatusChange = (event) => {
		setTag(event.target.value)
	}

	const handleTaskSubmit = (event) => {
      event.preventDefault();
      console.log({title: title, status: status})
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
			           <input type="text" className="form-control form-control-lg rounded-0" value={title}
			            onChange={event => handleTitleChange(event)} name="title" />
			        </div>
			        <div className="form-group">
			           <label className="form-label mt-3 mb-3"> Task Status</label>
			           <select className="form-select form-slect-lg rounded-0" value={status} 
			             onChange={ event => handleStatusChange(event)} name="tag">
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