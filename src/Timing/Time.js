import React from 'react'
import './Time.css'

function Time() {
    const mydate=new Date()
    const fmt= new Intl.DateTimeFormat('en-us',{
        dateStyle:'long'
    })
  return (
    <div>
        {fmt.format(mydate)}
    </div>
  )
}

export default Time