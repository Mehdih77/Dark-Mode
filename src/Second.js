import {Link} from 'react-router-dom';
import logo from './logo.svg';

function Second() {
    return (
        <div className="App">
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo"/>
                <p>ITS SECOND PAGE</p>
                <Link to='/'> go first page </Link>
            </header>
        </div>
    )
}

export default Second
