import * as React from 'react'
import { useState, useEffect } from 'react'
import * as ReactDom from 'react-dom'
import TaskDetail from './TaskDetail'
import EmptyTaskMessage from './EmptyTaskMessage'

const TaskList = () => {
	const tasksStatuses = [
	  { label: 'All', value: 0 },
      { label: 'To Do', value: 1 },
      { label: 'In Progress', value: 2 },
      { label: 'Done', value: 3 }      
	]
	const [taskList, setTaskList] = useState([])
	const [selectedOption, setSelectedOption] = useState(tasksStatuses[0].value)
	const [isShowAlert, SetIsShowAlert] = useState(false)

	const tasksUrl = 'http://localhost:3000/api/v1/tasks'

	const fetchTaskList = () => {
	  fetch(tasksUrl)
	    .then((response) => response.json())
		.then((data) => {
			setTaskList(data)
			if(data.length == 0) {
    			SetIsShowAlert(true)
    		} else {
    			SetIsShowAlert(false)
    		}
		})
	}
	useEffect(() => {
		fetchTaskList()
	}, [])

	const updateSelectedItem = (event) => {
    	setTaskList([])
    	setSelectedOption(event.target.value)
    	fetch(tasksUrl + `?status=${tasksStatuses[event.target.value].label}
    	`)
    	.then((response) => response.json())
    	.then((data) => {
    		console.log(data)
    		setTaskList(data)
    		if(data.length == 0) {
    			SetIsShowAlert(true)
    		} else {
    			SetIsShowAlert(false)
    		}
    	})
    }

	return (
		<div className="row">
			<div className="col-lg-10 mx-auto">
			 <p className="lead fw-bold">Filter Tasks by Status</p>
			 <select className="form-select form-select-lg" value={selectedOption}
			  onChange={event => updateSelectedItem(event)}>
			 {tasksStatuses.map(task=>(
			 	<option key={task.value} value={task.value}>{task.label}</option>
			 	))}
			 </select>	
			 {  taskList.length > 0 ?
			     taskList.map((task) =>  
			 	<TaskDetail task={task} key={task.id} />	
			    ) : ''
		     }
		     { isShowAlert && <EmptyTaskMessage status={tasksStatuses[selectedOption].label}/>}
			</div>		
		</div>
		)

}

export default TaskList