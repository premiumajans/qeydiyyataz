import { LegalServiceProps } from '@/interfaces/props'
import Link from 'next/link'
import React from 'react'

function LegalService({icon, head, desc}:LegalServiceProps) {
  return (
    <div>
      
      <div className="col-lg-4 col-md-6 wow fadeInDown" data-wow-duration="1000ms">
                    <div className="sx-service-bx-1">
                      <div className="sx-icon-box-wraper">
                        <div className="sx-service-bx-icon scale-in-center">
                          <span className="sx-text-primary">{icon}</span>
                        </div>
                        <div className="icon-content">
                          <h4 className="sx-tilte">{head}</h4>
                          <p>{desc}</p>
                          <div className="sx-center-btn">
                            <Link href="services-detail/" className="site-button-circle">
                              <i className="fa fa-long-arrow-right"></i>
                            </Link>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>



    </div>
  )
}

export default LegalService
