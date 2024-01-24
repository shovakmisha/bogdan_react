import {ways} from "../data";
import WayToTeach from "./WayToTeach";

function TeachingSection() {


    return (
        <section>
            <h3>Наш подход к обучению</h3>

            <ul>
                {ways.map((value, index) => {
                    return <WayToTeach {...value} key={index}/>;
                })}
            </ul>
        </section>
    )
}

export default TeachingSection;