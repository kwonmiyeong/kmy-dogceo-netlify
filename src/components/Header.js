import '../css/Header.css';

function Header(){
    return(
        <div id='header'>
            <h1>
                <img src='/dog-api-logo.svg' alt='로고'/>
                <span>Dog Search API</span>
            </h1>
        </div>
    )
}

export default Header;