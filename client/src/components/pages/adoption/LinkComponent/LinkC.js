import FiberManualRecordIcon from '@material-ui/icons/FiberManualRecord';
import './css/LinkC.css'
import React from "react"

export default function LinkC(props) {
  return (
    <span className="linkC">
      <FiberManualRecordIcon id="circle-svg" className="linkC__circle" fontSize="small" />
      <a className="ml-2 linkC__anchor" href={props.link}>
        {props.title}
      </a>
    </span>
  )
}
