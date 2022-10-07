import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import {Link} from "react-router-dom";

const UniversityItem = ({university}) => {

    const img_link = "https://logo.clearbit.com/" + university.domains[0];
    return (
        <div className="card">
            <Link to={`/Universities/${university.name}`} title={university.overview}>
                <div className="btn">
                    <img className='card-img-top' src={img_link} alt=""/>
                    <h3 className='card-title'>{university.name}</h3>
                </div>
            </Link>
        </div>
    );
};

export default UniversityItem;