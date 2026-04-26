import Footer from "../components/Footer.tsx";

type Props = {
    isDark: boolean;
    setIsDark: (value: boolean) => void;
};

function HomePage({ isDark, setIsDark }: Props){
    return(
        <>
            <main>
                <section className="window">
                    <div className="window__header">
                        <h2>главная</h2>
                    </div>
                    <div className="wrapper">
                        <div className="window__main__txt">
                            <h1>ПРИВЕТ! <span>Я Nodzujes</span></h1>
                            <p>fullstack developer, designer</p>
                        </div>
                        <div className="window__btn">
                            <button>
                                <img src={isDark ? "/icons/account-dark.svg" : "/icons/account-light.svg"} alt="picture"/>
                                <span>обо мне</span>
                            </button>
                            <button>
                                <img  src={isDark ? "/icons/link-dark.svg" : "/icons/link-light.svg"} alt="picture"/>
                                <span>ссылки</span>
                            </button>
                            <button>
                                <img src={isDark ? "/icons/folder-dark.svg" : "/icons/folder-light.svg"} alt="picture"/>
                                <span>работы</span>
                            </button>
                            <button>
                                <img src={isDark ? "/icons/mail-dark.svg" : "/icons/mail-light.svg"} alt="picture"/>
                                <span>контакты</span>
                            </button>
                        </div>
                    </div>
                </section>
            </main>
            <Footer isDark={isDark} setIsDark={setIsDark} />
        </>
    );
}
export default HomePage;