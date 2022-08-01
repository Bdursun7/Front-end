import React, { useState } from 'react'
import { Button, Table} from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';
import array from './array';
import { Link, useNavigate } from 'react-router-dom';


function ShowTasks() {
    let history = useNavigate();

function setID(Taskid,ProjectName,TaskName,Status){
    localStorage.setItem('Taskid', Taskid);
    localStorage.setItem('Project Name', ProjectName);
    localStorage.setItem('Task Name', TaskName);
    localStorage.setItem('Status', Status);
}

function deleted(id){
	
	var index = array.map(function(e) { return e.id; }).indexOf(id);

	// deleting the entry with index
	array.splice(index,1)

	// We need to re-render the page for getting
	// the results so redirect to same page.
	history('/ShowTasks')
}

return(
    <div style={{margin:'5rem'}}>
        <Table striped bordered hover size='sm'>

            <thead> 
                <tr>
                <th>Task id</th>
                <th>Project Name</th>
                <th>Task Name</th>
                <th>Status</th>
                </tr>
            </thead>
            <tbody>
                {array.map((item) => {

                    return(
                        <tr>
                            <td>{item.Taskid}</td>
                            <td>{item.ProjectName}</td>
                            <td>{item.TaskName}</td>
                            <td>{item.Status}</td>
                            <td><Link to={`/Update`}><Button onClick={(e) =>
                                setID(item.Taskid,item.ProjectName,item.TaskName,item.Status)} variant="outline-dark">
                                Update</Button></Link></td>
                            <td><Button onClick={e => deleted(item.id)}
                            variant="danger">Delete</Button></td>   
                        </tr>
                    )
                })}
            </tbody>
        </Table>

        <Link className="d-grid gap-2" to='/'>
	    <Button variant="success" size="lg">
	    Home
	    </Button>
        </Link>
    </div>
)
}

export default ShowTasks