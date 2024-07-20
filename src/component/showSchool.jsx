import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

function ShowSchool() {
    const [hero, setHero] = useState("");
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        axios.get(`http://localhost:8081/`)
            .then((res) => {
                setHero(res.data);
                setIsLoading(false);
            })
            .catch((err) => {
                console.error(err);
                setError(err.message || "An error occurred while fetching data.");
                setIsLoading(false);
            });
    }, []); // Empty dependency array ensures this runs only once

    return (
        <div className="d-flex vh-100 bg-light flex justify-content-center align-items-center">
            <div className="w-75 bg-white rounded p-3">
                <Link to="/addSchool" className='btn btn-success'>Add Data</Link>

                <table className='table'>
                    <thead>
                        <tr>
                            <th>Id</th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Address</th>
                            <th>City</th>
                            <th>State</th>
                            <th>Contact</th>
                        </tr>
                    </thead>
                    <tbody>
                        {isLoading ? (
                            <tr><td colSpan="7">Loading...</td></tr>
                        ) : error ? (
                            <tr><td colSpan="7" className="text-danger">Error: {error}</td></tr>
                        ) : (
                            hero.map((data,i) => (
                                <tr key={i}> 
                                    <td>{data.Id}</td>
                                    <td>{data.Name}</td>
                                    <td>{data.Email}</td>
                                    <td>{data.Address}</td>
                                    <td>{data.City}</td>
                                    <td>{data.State}</td>
                                    <td>{data.Contact}</td>
                                </tr>
                            ))
                        )}
                    </tbody>
                </table>
            </div>
        </div>
    );
}

export default ShowSchool;

