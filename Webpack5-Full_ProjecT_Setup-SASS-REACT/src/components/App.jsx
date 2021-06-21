import "../styles/index.scss";
import Counter from './Counter'
import turkishFlag from "../images/turkishflag.jpg"

const App = () => {
    return (
        <>
            <img src={turkishFlag} alt="turkishFlag" width="250"/>
            <section className="bg-image"></section>
            <main>
                <section>
                    <h1>Hello, React JS</h1>
                </section>
                <Counter />
            </main>
        </>
    )
}

export default App
