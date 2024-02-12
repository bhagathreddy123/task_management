import * as React from 'react'
import * as ReactDom from 'react-dom'

const TaskDetail = (props) => {
	return(

        <div className="card rounded-0 mt-3">
	        <h3 className="card-tile">{props.task.title}</h3>
	        <p className="lead">
	          <span className="badge bg-primary">{props.task.description}</span>
	        </p>
	    </div>
	)

}


export default TaskDetail