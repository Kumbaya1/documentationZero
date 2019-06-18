import React from "react"

export default function Explain(props){
    return (
        <div>
            这是说明
            {props.children}
        </div>
    )
}