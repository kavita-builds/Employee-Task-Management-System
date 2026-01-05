import React from 'react'
import { setLocalStorage } from '../../utlis/localstorage'

const Header = (props) => {

  const logOutUser = () => {
    localStorage.setItem('loggedInUser','')
   props.changeUser('')
  }

  return (
    <div className="flex items-end justify-between">
      <h1 className="text-3xl font-semibold text-white">
        Hello <br />
        <span className="text-3xl">
          {props.data?.firstName || "Admin"}
        </span>
      </h1>

      <button
        onClick={logOutUser}
        className="text-white text-lg font-medium bg-red-600 px-5 py-2 rounded"
      >
        Log Out
      </button>
    </div>
  )
}

export default Header
