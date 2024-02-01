import courses from "../data/courses";
import {Link} from "react-router-dom";

const Courses = () => {
    return (
        <>
            <h1>Courses</h1>
            <ul>
                {courses.map(course => (
                    <li>
                        <Link className="courseLink" key={course.id} to={course.slug}>{course.title}</Link>
                    </li>
                ))}
            </ul>
        </>

    )
}

export default Courses;