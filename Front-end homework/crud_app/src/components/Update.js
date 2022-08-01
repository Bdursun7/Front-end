import React, { useEffect, useState } from 'react'
import { Button, Form } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import array from './array';
import { Link} from 'react-router-dom';
import {useNavigate} from 'react-router-dom';


function Update() {

	// Here usestate has been used in order
	// to set and get values from the jsx
	const [taskid, settaskid] = useState('');
	const [projectName, setprojectname] = useState('');
	const [taskName, settaskname] = useState('');
	const [status, setstatus] = useState('');
    const[id,setid] = useState('');

	// used for navigation with logic in javascript
	let history = useNavigate()
	
	// getting an index of an entry with an id
	var index = array.map(function(e) { return e.id; }).indexOf(id);

	// function for handling the edit and
	// pushing changes of editing/updating
	const handelSubmit = (e) =>{
		e.preventDefault(); // preventing from reload
		
		let a = array[index] // getting an index of an array

		// putting the value from the input textfield and
		// replacing it from existing for updation
		a.Taskid = taskid
		a.ProjectName = projectName
        a.TaskName = taskName
        a.Status = status

		// redirecting to main page
		history('/ShowTasks')
	}


	// Useeffect take care that page will be rendered only once
	useEffect(() => {
		settaskid(localStorage.getItem('Taskid'))
		setprojectname(localStorage.getItem('ProjectName'))
		settaskname(localStorage.getItem('TaskName'))
        setstatus(localStorage.getItem('Status'))
        setid(localStorage.getItem('id'))
	}, [])
	
return (
	<div>
		<Form className="d-grid gap-2" style={{margin:'12rem'}}>

			{/* setting a name from the input textfiled */}
			<Form.Group className="mb-3" controlId="formBasicName">
            <Form.Control value={taskid}
                        onChange={e => settaskid(e.target.value)}
                        type="number"
                        placeholder="Enter task id" />
              </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicName">
            <Form.Control value={projectName}
                        onChange={e => setprojectname(e.target.value)}
                        type="text"
                        placeholder="Enter Project Name" />
             </Form.Group>

            {/* Fetching a value from input textfirld in
            a setage using usestate*/}
            <Form.Group className="mb-3" controlId="formBasicAge">
            <Form.Control value={taskName}
                        onChange={e => settaskname(e.target.value)}
                        type="text"
                        placeholder="Enter Task Name" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicName">
            <Form.Control value={status}
                        onChange={e => setstatus(e.target.value)}
                        type="text"
                        placeholder="Enter Status" />
            </Form.Group>



			{/* Hadinling an onclick event running an edit logic */}
			<Button
			onClick={e => handelSubmit(e)}
			variant="outline-success" type="submit" size="lg">
				Update
			</Button>

			{/* Redirecting to main page after editing */}
			<Link className="d-grid gap-2" to='/'>
			<Button variant="warning" size="lg">Home</Button>
			</Link>
		</Form>
	</div>
)
}

export default Update
