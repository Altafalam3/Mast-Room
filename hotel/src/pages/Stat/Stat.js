import React from 'react';
import './Stat.css';

const Stat = () => {
    return (
        <div>
            {/* Statistics */}
            <div className="stats">
                <div className="stat">
                    <i className="fas fa-globe stat-icon fa-2x"></i>
                    <div className='text-stat'>
                        <h3>76+</h3>
                        <p>CITIES</p>
                    </div>
                </div>
                <div className="stat">
                    <i className="fas fa-bed stat-icon fa-2x"></i>
                    <div className='text-stat'>
                        <h3>1300+</h3>
                        <p>HOTELS</p>
                    </div>
                </div>
                <div className="stat">
                    <i className="fas fa-heart stat-icon fa-2x"></i>
                    <div className='text-stat'>
                        <h3>26K+</h3>
                        <p>ROOMS</p>
                    </div>
                </div>
                <div className="stat">
                    <i className="fas fa-smile stat-icon fa-2x"></i>
                    <div className='text-stat'>
                        <h3>4M+</h3>
                        <p>HAPPY GUESTS</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Stat;


