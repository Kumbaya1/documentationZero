import React from "react"

export default function Explain(props){
    return (
        <div className="wrap">
            这是说明
            {props.children}
        </div>
    )
}