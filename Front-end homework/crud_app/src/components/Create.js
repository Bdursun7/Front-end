import React, { useState } from 'react'
import { Button, Form } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';
import array from './array';
import { Link, useNavigate } from 'react-router-dom';

function Create() {

	// settings for dataset's parameters
	const [Taskid, settaskid] = useState('');
	const [ProjectName, setprojectname] = useState('');
	const [TaskName, settaskname] = useState('');
	const [Status, setstatus] = useState('');

	// Using useNavigation for redirecting to pages
	let history = useNavigate();

	// Function for creating a post
	const handelSubmit = (e) =>{
		e.preventDefault(); // Prevent reload

		// Pushing the new object to array
		let a = Taskid, b=ProjectName, c=TaskName, d=Status
 		array.push({Taskid:a, ProjectName:b, TaskName:c, Status: d})


	// Redirecting to Showtasks page after creation done
	history('/ShowTasks')
		
	}

return (
	<div >
		<Form className="d-grid gap-2" style={{margin:'15rem'}}>

		{/*Taking parameter's new values from the input and fetching*/}

<Form.Group className="mb-3" controlId="formBasicName">
	<Form.Control onChange={e => settaskid(e.target.value)}
				type="number"
				placeholder="Enter task id" required/>
</Form.Group>

<Form.Group className="mb-3" controlId="formBasicName">
	<Form.Control onChange={e => setprojectname(e.target.value)}
				type="text"
				placeholder="Enter Project Name" required/>
</Form.Group>

	
<Form.Group className="mb-3" controlId="formBasicAge">
	<Form.Control onChange={e => settaskname(e.target.value)}
				type="text"
				placeholder="Enter Task Name" required/>
</Form.Group>

<Form.Group className="mb-3" controlId="formBasicName">
	<Form.Control onChange={e => setstatus(e.target.value)}
				type="text"
				placeholder="Enter Status" required/>
</Form.Group>


<Button
onClick={e => handelSubmit(e)}
	variant="outline-success" type="submit">
	Submit
</Button>


<Link className="d-grid gap-2" to='/'>
	<Button variant="secondary" size="lg">
	Home
	</Button>
</Link>

</Form>
	</div>
)
}

export default Create
