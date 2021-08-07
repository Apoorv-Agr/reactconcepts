import React from 'react'
import { UserConsumer } from './userContext';

const ComponentE = () =>{
    return (
        <UserConsumer>
            {data=>{
                return <p>In Component E : Hello {data.name}, your age is {data.age}</p>
            }}
        </UserConsumer>
    )
}
export default ComponentE;
