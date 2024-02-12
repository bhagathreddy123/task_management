import * as React from 'react'
import * as ReactDom from 'react-dom'

const EmptyTaskMessage = (props) => {
	return(
	  <div className="mt-5 alert alert-danger alert-dismissible fade show" role="alert">
        <strong>OOPS</strong> No Task found with this Status.
        <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
      </div>
	)
}

export default EmptyTaskMessage