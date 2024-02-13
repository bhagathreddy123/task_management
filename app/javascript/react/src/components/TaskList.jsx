import * as React from 'react'
import { useState, useEffect } from 'react'
import * as ReactDom from 'react-dom'
import TaskDetail from './TaskDetail'
import EmptyTaskMessage from './EmptyTaskMessage'
import Loader from './Loader'
import NewTask from './NewTask'

const TaskList = () => {
	const tasksStatuses = [
	  { label: 'To Do', value: 0 },
      { label: 'In Progress', value: 1 },
      { label: 'Done', value: 2 }      
	]
	const [taskList, setTaskList] = useState([])
	const [selectedOption, setSelectedOption] = useState(tasksStatuses[0].value)
	const [isShowAlert, SetIsShowAlert] = useState(false)
    const [isShowLoader, SetIsShowLoader] = useState(true)

	const tasksUrl = 'http://localhost:3000/api/v1/tasks'

	const fetchTaskList = () => {
      SetIsShowLoader(false)
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
		SetIsShowLoader(false)
		SetIsShowAlert(false)
    	setTaskList([])
    	setSelectedOption(event.target.value)
    	console.log(event)
    	fetch(tasksUrl + `?status=${tasksStatuses[event.target.value].label}
    	`)
    	.then((response) => response.json())
    	.then((data) => {
    		console.log(data)
    		setTaskList(data)
    		if(data.length == 0) {
    			SetIsShowAlert(true)
    			SetIsShowLoader(true)
    		}
    	})
    }

	return (
		<div className="row">
			<div className="col-lg-10 mx-auto">
			 <p className="lead fw-bold">Filter Tasks by Status</p>
			 <button type="button" className="btn btn-primary mt-3 mb-3" data-bs-toggle="modal" data-bs-target="#exampleModal">
              Contribute Your Task
            </button>
			 <select className="form-select form-select-lg" value={selectedOption}
			  onChange={event => updateSelectedItem(event)}>
			 {tasksStatuses.map(task=>(
			 	<option key={task.value} value={task.value}>{task.label}</option>
			 	))}
			 </select>	
			 {  taskList.length > 0 ?
			     taskList.map((task) =>  
			 	<TaskDetail task={task} key={task.id} />	
			    ) : <Loader isShowLoader={isShowLoader} />
		     }
		     { isShowAlert && <EmptyTaskMessage status={tasksStatuses[selectedOption].label}/>}
			</div>	
			<NewTask />		
		</div>
		)

}

export default TaskList