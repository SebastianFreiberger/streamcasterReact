import React from 'react';


function ChartRow(props){
    return (
        <tr>
            <td>{props.id}</td>
            <td>{props.nombre}</td>
            <td>{props.email}</td>
            <td><a href={`http://localhost:3000${props.detail}`}>{props.detail}</a></td>   
        </tr>
    )
}
    
        

export default ChartRow;