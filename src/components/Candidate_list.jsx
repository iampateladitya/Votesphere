import React from 'react'
import { BsFillArchiveFill, BsFillGrid3X3GapFill, BsPeopleFill, BsFillBellFill }
    from 'react-icons/bs'
import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, LineChart, Line }
    from 'recharts';

function Home() {

    return (
        <>
            <div className="table-container" style={{margin: '3vw 5vw'}}> 
            <h1 className='my-0 mx-1' style={{color:'black'}}>Candidate List</h1>
            <table className="table my-5 mx-5" style={{border:'2px solid black'}} >
                <thead style={{border:'2px solid black'}}>
                    <tr>
                        <th scope="col">S.no.</th>
                        <th scope="col">Candidate Name</th>
                        <th scope="col">Political Party</th>
                        <th scope="col">Position</th>
                        <th scope="col">Educational Background</th>
                        <th scope="col">Experience</th>
                        <th scope="col">Constituency</th>
                        <th scope="col">Date of Birth</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <th scope="row">1</th>
                        <td>Narendra Modi</td>
                        <td>Bharatiya Janata Party (BJP)</td>
                        <td>Prime Minister</td>
                        <td>MA in Political Science, Delhi University</td>
                        <td>20 years in politics, including Chief Minister of Gujarat</td>
                        <td>Varanasi</td>
                        <td>17/09/1950</td>
                    </tr>
                    <tr>
                        <th scope="row">2</th>
                        <td>Rahul Gandhi</td>
                        <td>Congress</td>
                        <td>Prime Minister</td>
                        <td>BA in Economics, XYZ University</td>
                        <td>10 years in public service</td>
                        <td>Delhi</td>
                        <td>xx/xx/xxxx</td>
                    </tr>
                    <tr>
                        <th scope="row">3</th>
                        <td>Sonia Kapoor</td>
                        <td>Bharatiya Janata Party (BJP)</td>
                        <td>Chief Minister</td>
                        <td>MA in Political Science, ABC College</td>
                        <td>15 years in governance</td>
                        <td>Mumbai</td>
                        <td>yy/yy/yyyy</td>
                    </tr>
                    <tr>
                        <th scope="row">4</th>
                        <td>Amit Patel</td>
                        <td>Aam Aadmi Party (AAP)</td>
                        <td>Member of Parliament</td>
                        <td>Ph.D. in Environmental Science, LMN Institute</td>
                        <td>5 years in environmental activism</td>
                        <td>Chandigarh</td>
                        <td>zz/zz/zzzz</td>
                    </tr>
                </tbody>
            </table>
            </div>
        </>
    )

}

export default Home
