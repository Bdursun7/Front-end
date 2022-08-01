import React from 'react'
import { Button} from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';

function HomePage () {
    
    return(
    <div style={{margin:'10rem'}}>
        <h1>
        CRUD Operations
        
        </h1>
        <div style={{margin: '5rem'}}>
            <Link className='' to='/ShowTasks'>
            <Button variant='info'  size='lg'>ShowTasks</Button>
            </Link>
            
            <Link className='offset-1' to='/Create'>
            <Button variant='info' size='lg'>CreateTasks</Button>
            </Link>

        </div>
   
       
    </div>
     )
}

export default HomePage
