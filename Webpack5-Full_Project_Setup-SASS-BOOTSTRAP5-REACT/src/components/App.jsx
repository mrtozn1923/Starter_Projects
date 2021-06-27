import "../scss/index.scss";
import turkishFlag from "../images/turkishflag.jpg"

const App = () => {
    return (
        <>
            <img src={turkishFlag} alt="turkishFlag" width="250"/>
            <section></section>
            <main className="mt-3">
                 <h1>Hello, <span className="bg-primary">React JS</span></h1>
            </main>
        </>
    )
}

export default App
