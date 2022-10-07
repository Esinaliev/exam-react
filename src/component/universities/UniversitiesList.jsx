import React from 'react';
import {useState, useEffect} from "react";
import UniversityItem from './UniversitiesItem';

const UniversitiesList = () => {
    const [university, setUniversities] = useState([]);
    const [loaded, setLoaded] = useState(false);
    useEffect(() => {
        fetch("http://universities.hipolabs.com/search")
            .then(res => res.json())
            .then(data => {
                data = data.slice(0,30)
                console.log(data);
                console.log(data.length);
                setUniversities(data);
                setLoaded(true);
            })
    }, []);
    return (
            <div>
                {/*<UniversityForm/>*/}
                {
                    !loaded ? <h3>Loading</h3> :
                        <div>
                            <h1>Popular films</h1>
                            <div className="university-list">
                                {
                                    university.map((university) =>
                                        <UniversityItem key={university.name} university={university} />
                                    )
                                }
                            </div>
                        </div>
                }
            </div>
    );
};

export default UniversitiesList;