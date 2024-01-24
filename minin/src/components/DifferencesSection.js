import Button from "./Button/Button";
import {differences} from "../data";
import {useState} from "react";

function DifferencesSection() {

    const [contentType, setContentType] = useState('Нажми на кнопку');
    function handleClick(type) {
        setContentType(type);
    }

    return (
        <section>
            <h3>Чем мы отличаемся от дрегих</h3>
            <Button isActive={contentType === differences.way}
                    onClick={() => handleClick(differences.way)}>Подход</Button>
            <Button isActive={contentType === differences.easy}
                    onClick={() => handleClick(differences.easy)}>Доступность</Button>
            <Button isActive={contentType === differences.program}
                    onClick={() => handleClick(differences.program)}>Консентрация</Button>

            <p style={{marginTop: '50px'}}>{contentType}</p>
        </section>
    )
}

export default DifferencesSection;