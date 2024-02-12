import * as React from 'react'
import { useState, useEffect } from 'react'
import * as ReactDom from 'react-dom'
import TaskDetail from './TaskDetail'

const TaskList = () => {
	const [taskList, setTaskList] = useState([])
	const tasksUrl = 'http://localhost:3000/api/v1/tasks'

	const fetchTaskList = () => {
	  fetch(tasksUrl)
	    .then((response) => response.json())
		.then((data) => {
			setTaskList(data)
		})
	}
	useEffect(() => {
		fetchTaskList()
	}, [])

	return (
		<div className="row">
			<div className="col-lg-10 mx-auto">
			 {taskList.map((task) =>  
	             < TaskDetail task={task} key={task.id} />
		     )}
			</div>		
		</div>
		)

}

export default TaskList