import React, { FC } from 'react'
import { CoursePart } from '../types'

const Part: FC<{ part: CoursePart }> = ({ part }) => {
  const assertNever = (value: never): never => {
    throw new Error(
      `Unhandled discriminated union member: ${JSON.stringify(value)}`
    );
  };

  switch(part.name) {
    case "Fundamentals":
      return(
        <>
          Name: {part.name} <br />
          Description: {part.description} <br />
          Exercises: {part.exerciseCount} <br />
          <br />
        </>
      );
    case "Using props to pass data":
      return(
        <>
          Name: {part.name} <br />
          Group exercises: {part.groupProjectCount} <br />
          Exercises: {part.exerciseCount} <br />
          <br />
        </>
      );
    case "Deeper type usage":
      return(
        <>
          Name: {part.name} <br />
          Submission link: {part.exerciseSubmissionLink} <br />
          Exercises: {part.exerciseCount} <br />
          <br />
        </>
      );
    case "Archeology":
        return(
          <>
            Name: {part.name} <br />
            Description: {part.description} <br />
            Exercises: {part.exerciseCount} <br />
            Teacher: {part.teacher} <br />
            <br />
          </>
        )
    default:
      return assertNever(part);
  }
}

export default Part