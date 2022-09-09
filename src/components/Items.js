import React from 'react'

const Items = (props) => {
    return (
        <div>
            <ul>
                <img src={props.src} />
                <li>{props.name}</li>
                <li>{props.price}</li>
            </ul>
        </div>
    )
}

export default Items