import { ClientProps } from '@/interfaces/props'
import Link from 'next/link'
import React from 'react'

function Client({ img }: ClientProps) {
    return (
        <div>
            <div className="col-lg-3 col-md-4 col-sm-6 col-6">
                <Link href="contact/" className="client-logo-pic">
                    <img src={img} alt="" />
                    <div>
                        <span className="sx-circle-btn"><i className="fa fa-long-arrow-right"></i></span>
                    </div>
                </Link>
            </div>


        </div>
    )    
}

export default Client
