import { useDarkModeContext } from './context/DarkTheme/DarkModeContext';
import Navbar from './Navbar';

export default function Layout({children}) {

    const [{theme,isDark}, toggleTheme] = useDarkModeContext();

    return (
        <>
        <section style={{ backgroundColor:theme.backgroundColor, color:theme.color}}>
            <Navbar toggleTheme={toggleTheme} isDark={isDark} />       
            {children}
        </section>
        </>
    )
}
