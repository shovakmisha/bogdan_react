import {useState} from "react";

function Header() {

    let [currentDate, setCurrentDate] = useState(new Date().toLocaleTimeString())


    setInterval(() => {
        setCurrentDate(new Date().toLocaleTimeString());
    }, 1000);

    return (
        <header>
            <h3>Result University</h3>
            <span>Тут будет время: {currentDate}</span>
        </header>
    )
}

export default Header;