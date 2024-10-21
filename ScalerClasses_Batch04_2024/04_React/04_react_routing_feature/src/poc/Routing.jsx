import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import { Link, Navigate, Route, Routes, useParams } from 'react-router-dom'

function Routing() {
    return (
        <div style={
            {
                textAlign: 'center'
            }
        }>
            <h2>Routing Example</h2>
            <nav>
                <ul>
                    <li><Link to='/home'>Home</Link></li>
                    <li><Link to='/about'>About</Link></li>
                </ul>
            </nav>

            <Routes>
                <Route path="/home" element={<Home></Home>}></Route>
                <Route path="/house" element={<Navigate to="/home" />}></Route>

                <Route path="/about/*" element={<About></About>}></Route>

                {/* Dynamic Route example */}
                <Route path="/user/:id" element={<User></User>}></Route>

                <Route path="/*" element={<PageNotFound></PageNotFound>}></Route>
            </Routes>
        </div>
    )
}

function Home() {
    return <h3>I am home</h3>
}

function About() {
    return (
        <>
            <h3>I am about page.</h3>
            <ul>
                <li><Link to='/about/company'>Company</Link></li>
                <li><Link to='/about/founder'>Founder</Link></li>
            </ul>
            <Routes>
                <Route path="/company" element={<Company />}></Route>
                <Route path="/founder" element={<Founder />}></Route>
                <Route path="/*" element={<PageNotFound></PageNotFound>}></Route>
            </Routes>
        </>
    )

}

function User(props) {
    let params = useParams();
    // console.log(params);
    // console.log(`https://jsonplaceholder.typicode.com/users/${params.id}`);

    const [user, setUser] = useState(null);

    useEffect(() => {
        (async function () {
            const response = await fetch(`https://jsonplaceholder.typicode.com/users/${params.id}`);
            const userData = await response.json();

            setUser(userData);
        })();
    }, []);

    return (
        <>
            {
                user === null ?
                    <h2> Placeholder loading relevent user data....</h2> :
                    <>
                        <h1> Data get loaded</h1>
                        <h2> Name: {user.name}</h2>
                        <h2> Email: {user.email}</h2>
                        <h2> Phone Number: {user.phone}</h2>
                    </>
            }

        </>
    )


}

function PageNotFound() {
    return <h3>Page Not Found</h3>
}

function Company() {
    return <h3>We are a good firm</h3>
}

function Founder() {
    return <h3>Our founder is a good person, Please invest in our company</h3>
}

/**
 * link  -> It is done
 * Routes and route -> It is done
 * Template route/Dynamic Route -> It is done
 * Redirect Routes.  -> It is done.
 * Nested Routes.  -> It is done.
 */


export default Routing