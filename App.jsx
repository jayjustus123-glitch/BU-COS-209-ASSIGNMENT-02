//App.jsx
//This is the main App component where we combine all sections

import Banner from "./Banner";
import About from "./About";
import Product from "./Product";
import Contact from "./Contact";

function App() {
    return (
        <div>
            <Banner />
            <About />
            <Product />
            <Contact />
        </div>
    );
}

export default App;