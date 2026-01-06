import React from 'react';
import { useLocation } from 'react-router-dom';
import { Container, Table } from 'react-bootstrap';
import LogoandNaviBar from '../Commonfiles/LogoandNaviBar';

const DonarsList = () => {
    const location = useLocation();
    const { matchedUsers, noMatch } = location.state || {};

    return (
        <div>
        
            <LogoandNaviBar/>
            <Container>
        <div>
            {noMatch ? (
                <div className="text-center" style={{color:"red"}}>
                    <h2>No donors matched for your search.</h2>
                    <p style={{textAlign:'center'}}>Please try searching in the nearest cities.</p>
                </div>
            ) : (
                <div>
                    <h2>Matched Donors</h2>
                    <Table striped bordered hover responsive>
                        <thead>
                            <tr>
                                <th>S.No</th>
                                <th>Full Name</th>
                                <th>Phone Number</th>
                                <th>Blood Group</th>
                                <th>Country</th>
                                <th>State</th>
                                <th>District</th>
                                <th>City or Village</th>
                                <th>Pin Code</th>
                            </tr>
                        </thead>
                        <tbody>
                            {matchedUsers.map((user, index) => (
                                <tr key={index}>
                                    <td>{index + 1}</td>
                                    <td>{user.fullName}</td>
                                    <td>{user.mobileNo}</td>
                                    <td>{user.bloodGroup}</td>
                                    <td>{user.country}</td>
                                    <td>{user.state}</td>
                                    <td>{user.district}</td>
                                    <td>{user.cityOrVillage}</td>
                                    <td>{user.pinCode}</td>
                                </tr>
                            ))}
                        </tbody>
                    </Table>
                </div>
            )}
        </div>
        </Container>
        </div>
    );
};

export default DonarsList;
