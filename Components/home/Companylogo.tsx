import { CompanylogoProps } from '@/interfaces/props'
import React from 'react'

function Companylogo({ src ,link }: CompanylogoProps) {
    
    
    return <>
        <div>
            <a href={link} className="client-logo-pic2">
                <img src={src} />
            </a>
        </div>
    </>
}

export default Companylogo
