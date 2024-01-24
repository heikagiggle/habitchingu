
import React from 'react'
import './Tag.css'

const Tag = ({tagName, selectTag , selected }) => {
    const tagStyle= {
      Fair: {backgroundColor: '#fda821'},
      Bad: {backgroundColor: '#15d4c8'},
      Worse: {backgroundColor: '#ffd12c'},
       Due: {backgroundColor: '#4cdafc'},
        default: {backgroundColor: '#f9f9f9'},
    }
  return (
    <button 
        type='button'
        className='tag'
        style={selected ? tagStyle[tagName] : tagStyle.default}
        onClick={() => selectTag (tagName)}>
        {tagName}
    </button>
  )
}

export default Tag
