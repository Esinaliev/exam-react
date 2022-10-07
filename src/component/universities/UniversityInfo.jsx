import React, {useState} from 'react';
import {useEffect} from "react";
import {useParams, useNavigate} from "react-router-dom";
// useHistory = useNavigate

const UniversityInfo = () => {
    const [university, setUniversity] = useState();
    const params = useParams("name");
    const [loaded, setLoaded] = useState(false);
    useEffect(() => {
        //http://universities.hipolabs.com/search?name=Marywood%20University
        console.log("http://universities.hipolabs.com/search?name=" + params.name);
        fetch("http://universities.hipolabs.com/search?name=" + params.name)
            .then(res => res.json())
            .then(data => {
                console.log(data[0])
                setUniversity(data[0]);
                setLoaded(true);
            });
    }, [params.id]);

    return (
        <div>
            {
                (loaded && university) ?
                <div className="card">
                    <div className="">
                        <img className='card-img-top' src={"https://logo.clearbit.com/" + university.domains[0]} alt=""/>
                        <h3 className='card-title'>{university.name}</h3>
                    </div>
                    <div>
                        <p>.  Country: {university.country} ({university.alpha_two_code})</p>
                        <p>.  Site: 
                            <ul className="list-group-flush">
                                {university.web_pages.map((domain) => <li className="list-group-item">{domain}</li>)}
                            </ul>
                        </p>
                    </div>
                </div>

                    : <h3>loading...</h3>
            }
        </div>
    );
};

export default UniversityInfo;