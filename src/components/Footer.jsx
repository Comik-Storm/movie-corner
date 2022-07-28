import React from 'react';

const Footer = () => {
    return (
        <div className="footer fixed-bottom w-75 mx-auto">
            <footer className="bg-light text-center text-lg-start d-flex justify-content-between border">
                <div className="text-center p-3">
                    <span>© 2022 Copyright </span>
                    <a className="text-dark" href="https://mdbootstrap.com/">Shubham Salunke</a>
                </div>
                <div className="text-end p-3">
                    <span>Powered By TMDB API V3</span>
                </div>
            </footer>
        </div>
    );
};

export default Footer;