import React, { Fragment, useState, useEffect, useMemo, forwardRef } from 'react'
import ReactDatepicker from 'react-datepicker'
import "react-datepicker/dist/react-datepicker.css";

const DatePicker = ({ onChange, name, value }) => {

  const startDate = useMemo(() => {
    if (value === null) {
      console.log('value===null')
      return new Date()
    } 
    else if (typeof value === 'string')  {
      let year = parseInt(value.substring(0,4))
      let month = parseInt(value.substring(5,7))
      let day = parseInt(value.substring(8))
      console.log(`string value: ${value}`)
      return new Date(Date.UTC(year, month-1, day+2))
    } 
    else if (typeof value === 'object') {
      console.log('OBJECT')
      console.log(value)
      return value
    }
  }, [value, startDate])

  console.log(`startDate:  ${startDate}`)
  return (
    <div>
      <div>{name}</div>
      <ReactDatepicker
         selected={startDate}
         onChange={date => {
           console.log(`changing date to: ${date}`)
           onChange(
             { 
               target: 
               { 
                 name, 
                 value: date
               } 
             }
           )
         }}
         dateFormat="MMMM d, yyyy"
       />
    </div>
  )
}

export default DatePicker