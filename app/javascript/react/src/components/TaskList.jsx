import * as React from 'react'
import * as ReactDom from 'react-dom'
import TaskDetail from './TaskDetail'

const TaskList = () => {
	const tasksList = [
	{ 
		id: 1,
		title: "React",
		description: "open-source front-end JavaScript library"
	},
	{ 
		id: 2,
		title: "major features of React",
		description: "JSX syntax"
	},
	{ 
		id: 3,
		title: "DevTools",
		description: "open Chrome Extensions and check Allow access to file URLs"
	},
	{ 
		id: 4,
		title: "Chrome for local files",
		description: "open Chrome Extensions and check Allow access to file URLs"
	},
	{ 
		id: 5,
		title: "advantages of React over Vue.js",
		description: "Gives more flexibility in large apps developing"
	}

	]

	return (
		<div className="row">
			<div className="col-lg-10 mx-auto">
			 {tasksList.map((task) =>  
	             < TaskDetail task={task} key={task.id} />
		     )}
			</div>		
		</div>
		)

}

export default TaskList