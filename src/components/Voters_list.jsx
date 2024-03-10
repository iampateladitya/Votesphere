import React from 'react'

const Voters_list = () => {
    return (
        <>
            <div className="table-container" style={{ margin: '3vw 8vw' }}>
                <h1 className='my-0 mx-1' style={{ color: 'black' }} >Voters List</h1>
                <table className="table my-5 mx-5" style={{ border: '2px solid black' }} >
                    <thead style={{ border: '2px solid black' }} >
                        <tr>
                        <th scope="col">S.no.</th>
                            <th scope="col">Voters Name</th>
                            <th scope="col">Phone number</th>
                            <th scope="col">State</th>
                            <th scope="col">District</th>
                            <th scope="col">gender</th>
                            <th scope="col">DOB</th>
                            <th scope="col">Age</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                        <th scope="row">1</th>
                            <td>Alice Johnson</td>
                            <td>555-1234-5678</td>
                            <td>New York</td>
                            <td>Manhattan</td>
                            <td>Female</td>
                            <td>01/15/1985</td>
                            <td>38</td>
                        </tr>
                        <tr>
                        <th scope="row">2</th>
                            <td>Bob Smith</td>
                            <td>555-5678-1234</td>
                            <td>California</td>
                            <td>Los Angeles</td>
                            <td>Male</td>
                            <td>03/22/1990</td>
                            <td>32</td>
                        </tr>
                        <tr>
                        <th scope="row">3</th>
                            <td>Charlie Brown</td>
                            <td>555-8765-4321</td>
                            <td>Texas</td>
                            <td>Houston</td>
                            <td>Male</td>
                            <td>08/10/1980</td>
                            <td>41</td>
                        </tr>
                        <tr>
                        <th scope="row">4</th>
                            <td>Diana Miller</td>
                            <td>555-4321-8765</td>
                            <td>Florida</td>
                            <td>Miami</td>
                            <td>Female</td>
                            <td>05/03/1995</td>
                            <td>26</td>
                        </tr>
                        <tr>
                        <th scope="row">5</th>
                            <td>Edward Davis</td>
                            <td>555-9876-5432</td>
                            <td>Illinois</td>
                            <td>Chicago</td>
                            <td>Male</td>
                            <td>11/18/1982</td>
                            <td>39</td>
                        </tr>
                        <tr>
                        <th scope="row">6</th>
                            <td>Fiona Wilson</td>
                            <td>555-3456-7890</td>
                            <td>Washington</td>
                            <td>Seattle</td>
                            <td>Female</td>
                            <td>09/27/1993</td>
                            <td>28</td>
                        </tr>
                        <tr>
                        <th scope="row">7</th>
                            <td>George Harris</td>
                            <td>555-6789-0123</td>
                            <td>Georgia</td>
                            <td>Atlanta</td>
                            <td>Male</td>
                            <td>02/08/1988</td>
                            <td>33</td>
                        </tr>
                        <tr>
                        <th scope="row">8</th>
                            <td>Hannah Turner</td>
                            <td>555-9012-3456</td>
                            <td>Michigan</td>
                            <td>Detroit</td>
                            <td>Female</td>
                            <td>07/14/1997</td>
                            <td>24</td>
                        </tr>
                        <tr>
                        <th scope="row">9</th>
                            <td>Ivan Rodriguez</td>
                            <td>555-2109-8765</td>
                            <td>Tennessee</td>
                            <td>Nashville</td>
                            <td>Male</td>
                            <td>04/30/1987</td>
                            <td>34</td>
                        </tr>
                        <tr>
                        <th scope="row">10</th>
                            <td>Jasmine Lee</td>
                            <td>555-6543-2109</td>
                            <td>Arizona</td>
                            <td>Phoenix</td>
                            <td>Female</td>
                            <td>12/09/1991</td>
                            <td>30</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </>
    )
}

export default Voters_list
