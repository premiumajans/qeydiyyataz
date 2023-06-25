import React from 'react'
import { ServiceProps } from "@/interfaces/props";

function Service({ icon, head, desc }: ServiceProps) {
  return (
    <>
      
        <div style={{height:'100%'}} className="sx-icon-bx-1">
          <div className="sx-icon-box-wraper">
            <div className="sx-icon-bx-icon ">
              <span className="sx-text-primary"><i className={icon}></i></span>
            </div>
            <div className="icon-content">
              <h4 className="sx-tilte">{head}</h4>
              <p>{desc}</p>
            </div>
          </div>
        </div>
   
    </>
  )
}

export default Service
