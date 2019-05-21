import React from "react"

const VoteList = (props) => {
    const { courses, onClick } = props

    const handleClick = (course) => {
        onClick.apply(null, [course]);
    }

    return (
        <React.Fragment>
            <ul class="course-list">
            {courses.map(course =>                     
                <li class="d-flex justify-content-between" key={course.name}>
                    <span>{course.name} ({course.votes.length} votes)</span>
                    <button type="button" class="btn btn-primary" onClick={handleClick.bind(this, course)}>Vote</button>
                </li>
            )}
            </ul>
        </React.Fragment>
    )
}

export default VoteList