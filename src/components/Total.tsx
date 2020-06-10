import React, { FC } from 'react'

interface CoursePartProps {
  courseParts: Array<{
    name: string;
    exerciseCount: number;
  }>;
}

const Total: FC<CoursePartProps> = (props) => {
  return (
    <p>
      Number of exercises{" "}
      {props.courseParts.reduce((carry, part) => carry + part.exerciseCount, 0)}
    </p>
  )
}


export default Total