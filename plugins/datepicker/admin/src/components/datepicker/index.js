import React, { Fragment, useState, useEffect, useMemo, forwardRef } from 'react'
import ReactDatepicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'
import './styles.css'
import { BiCalendarPlus } from 'react-icons/bi'

const DatePicker = ({ onChange, name, value }) => {

  const nameStyles = {
    fontSize: '1.3rem',
    fontWeight: '500'
  }

  const startDate = useMemo(() => {
    if (value === null) {
      return 0
    } 
    else if (typeof value === 'string')  {
      let year = parseInt(value.substring(0,4))
      let month = parseInt(value.substring(5,7))
      let day = parseInt(value.substring(8,10))
      let date = new Date(year, month-1, day)
      return date
    } 
    else if (typeof value === 'object') {
      return value
    }
  }, [value, startDate])

  const formatName = (name) => {
    let substrings = name.split('_')
    let str1 = substrings[0].charAt(0).toUpperCase() + substrings[0].slice(1) + ' '
    let str2 = substrings[1].charAt(0).toUpperCase() + substrings[1].slice(1) + ' '
    return str1.concat(str2)
  }

  return (
    <div>
      <div style={nameStyles}>{formatName(name)}</div>
      <span className='icon'><BiCalendarPlus/></span>
      <ReactDatepicker
         calendarClassName='calendar'
         selected={startDate}
         onChange={date => {
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
         popperPlacement="top-end"
         isClearable={true}
       />
    </div>
  )
}

export default DatePicker