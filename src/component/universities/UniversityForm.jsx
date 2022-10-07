import React, {useState, useMemo} from 'react';
import {useNavigate} from "react-router-dom";

const UniversityForm = () => {

    const load = () => {
        if(localStorage.getItem('query'))
            return localStorage.getItem('query')
        return ""
    }

    const [query, setQuery] = useState(load());

    const result = useMemo(() => ("/search/"+query), 0);
    console.log(result)

    const navigate = useNavigate();

    const change = (event) => {
        console.log(localStorage.getItem('query'))
        setQuery(event.target.value);
    }
    const search = () => {
        localStorage.setItem('query', query);
        navigate("/search/" + query);
    }

    return (
        <form className='d-flex'>
            <input className="form-control me-2" type="text"  placeholder="Search" aria-label="Search" value={query} onChange={change}/>
            <button className="btn btn-outline-success" type="submit" onClick={search}>Search</button>
        </form>
    );
};

export default UniversityForm;