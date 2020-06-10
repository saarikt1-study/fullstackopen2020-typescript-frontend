import React, { FC } from 'react'
import Part from './Part'
import { CoursePart } from '../types'

const Content: FC<{courseParts: CoursePart[]}> = ({ courseParts }) => {
  return (
    <>
      {courseParts.map(p => 
        <Part key={p.name} part={p} />
      )}
    </>
  )
}


export default Content

