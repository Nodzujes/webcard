type Props = {
    isDark: boolean;
    setIsDark: (value: boolean) => void;
};

function Footer({ isDark, setIsDark }: Props){
    const toggleTheme = () => {
        const newTheme = !isDark;
        setIsDark(newTheme);

        document.body.classList.toggle("dark", newTheme);
    };

    return(
        <footer>
            <button id="theme" onClick={toggleTheme}>
                <img src={isDark ? "/icons/dark.svg" : "/icons/sun-line.png"} alt=""/>
            </button>
            <button id="sound"><img src="/icons/volume.png" alt=""/></button>
        </footer>
    )
}

export default Footer;