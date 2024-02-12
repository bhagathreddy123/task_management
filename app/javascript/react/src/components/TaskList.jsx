import * as React from 'react'
import * as ReactDom from 'react-dom'

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
			 	<div className="card rounded-0 mt-3" key={task.id}>
	              <h3 className="card-tile">{task.title}</h3>
	              <p className="lead">
	              <span className="badge bg-primary">{task.description}</span>
	              </p>
	            </div>
			)}
			</div>		
		</div>
		)

}

export default TaskList