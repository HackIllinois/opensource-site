const Footer = () => (
    <div className="footer">
        <div className="social">
            <a href="https://www.github.com/hackillinois/">
                GitHub
            </a>
            <a href="https://blog.hackillinois.org">
                Blog
            </a>
            <a href="https://www.facebook.com/hackillinois/">
                Facebook
            </a>
            <a href="https://www.instagram.com/hackillinois/">
                Instagram
            </a>
            <a href="https://twitter.com/hackillinois">
                Twitter
            </a>
        </div>
        <style jsx>{`
            .footer {
                position: absolute;
                bottom: 0;
                width: 100%;
                display: flex;
                height: 30px;
                justify-content: center;
                align-items: center;
                padding-bottom: 10px;
            }
            a {
                padding: 0px 10px;
                text-decoration: none;
            }
            p {
                text-align: center;
                font-family: "Arial";
            }
            a:hover {
                color: black;
            }
        `}</style>
    </div>
)

export default Footer