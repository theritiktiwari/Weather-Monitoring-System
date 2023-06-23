import React from 'react'

const Card = ({ margin, title, value }) => {
    return (
        <>
            <div className={`card glass-effect ${margin} p-3`}>
                <div className="card-body">
                    <h5 className="card-title text-uppercase text-muted text-center">{title}</h5>
                    <hr className='text-muted' />
                    <h6 className="card-subtitle text-center fs-3 fw-bold">{value}</h6>
                </div>
            </div>
        </>
    )
}

export default Card