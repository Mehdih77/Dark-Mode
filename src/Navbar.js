export default function Navbar({toggleTheme, isDark}) {

    return (
        <nav className='App'>

            <label className="switch">
                <input onChange={toggleTheme} type="checkbox" checked={isDark}/>
                <span className="slider round"></span>
            </label>

            <p> Its {isDark ? 'Dark' : 'Light'} Theme </p>
        </nav>
    )
}
