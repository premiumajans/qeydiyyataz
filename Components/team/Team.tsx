import { TeamProps } from '@/interfaces/props'
import React from 'react'

function Team({ img, position, name}: TeamProps) {
    
    return (
        <div>

            <div className="col-lg-3 col-md-6 col-sm-6">
                <div className="our-team-2">
                    <div className="profile-image">
                        <img src={img} alt="" />

                    </div>
                    <div className="figcaption">
                        <p>{position}</p>
                        <h4 className="sx-title"><a href="">{name}</a></h4>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Team
