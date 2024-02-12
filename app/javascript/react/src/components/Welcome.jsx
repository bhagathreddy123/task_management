import * as React from 'react'
import * as ReactDom from 'react-dom/client'
import TaskList from './TaskList'
class Welcome extends React.Component {
	render() {
	  return(
		<div className="container"> 
		     <h1>Task management application</h1>
		     <TaskList />
		</div>
	  )
	}
	

}

const root = ReactDom.createRoot(document.getElementById('welcome'))
root.render(
	<React.StrictMode>
      <Welcome />
    </React.StrictMode>
)

export default Welcome