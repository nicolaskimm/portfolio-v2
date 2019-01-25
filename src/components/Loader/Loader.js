import React from 'react';
import './Loader.css';


const Loader = () => {
    return (
        <div className='loader'>
            <div className='loader_outsideCircle'>
                <div className='loader_circle-5'>
                    <div className='loader_circle-4'>
                        <div className='loader_circle-3'>
                            <div className='loader_circle-2'>
                                <div className='loader_circle-1'>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Loader;