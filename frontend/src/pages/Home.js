import React from 'react'
import { Link } from "react-router-dom"
const Home = () => {
    return (
        <>
            <header>
                <h1>User Management Dashboard</h1>
            </header>
            <main>
                <Link to="/users">User Details</Link>
                <Link to="/account">Account Creation</Link>
            </main>
        </>
    )
}

export default Home