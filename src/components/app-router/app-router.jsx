import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { router } from '../../services/router'

const AppRouter = () => {
  return (
    <Routes>
        {router.map(item=>{
            return <Route path={item.path} element={item.component}/>
        })}
    </Routes>
  )
}

export default AppRouter