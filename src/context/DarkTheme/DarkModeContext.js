import { createContext, useContext, useEffect, useState } from "react"

const DarkTheme = createContext();

export const useDarkModeContext = () => {
    const context = useContext(DarkTheme);
    if (!context) {
        throw Error('Error in useDarkModeContext')
    };
    return context;
}

const themes = {
    dark: {
        backgroundColor: "#282c34",
        color: "white"
    },
    light: {
        backgroundColor: "#dddddd",
        color: "black"
    },
}

function DarkModeContext({ children }) {

    const [isDark, setIsDark] = useState(true);
    const theme = isDark ? themes.dark : themes.light;
    const toggleTheme = () => {
        localStorage.setItem('darkThemeStorage', JSON.stringify(!isDark))
        setIsDark(!isDark);
    }

    useEffect(() => {
        const darkk = localStorage.getItem('darkThemeStorage') === 'true';
        setIsDark(darkk)
    }, [])

    return (
        <DarkTheme.Provider value={ [theme,isDark, toggleTheme] }>
            {children}
        </DarkTheme.Provider>
    )
}

export default DarkModeContext
