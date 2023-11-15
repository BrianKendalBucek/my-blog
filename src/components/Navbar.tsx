import React from 'react';

const Navbar: React.FC = () => {
    return (
        <nav>
            <h1>My Blog</h1>
            <div>
                <a href="/">Home</a>
                <a href="/about">About</a>
            </div>
        </nav>
    );
}

export default Navbar;