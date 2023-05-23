import React from 'react'
import SearchHeader from '../components/Header/SearchHeader'
import { Outlet } from 'react-router-dom'

export default function SearchLayout() {
  return (
    <>
        <SearchHeader/>

        <Outlet />
    
    
    </>
  )
}
