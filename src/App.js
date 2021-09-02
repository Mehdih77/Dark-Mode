import logo from './logo.svg';
import {Link} from 'react-router-dom';

function App() {

    return (
        <div className="App">
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo"/>
                <Link to='/second'>
                    go second page
                </Link>
            </header>
        </div>
    );
}

export default App;
