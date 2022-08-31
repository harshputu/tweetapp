import React, { useState, useEffect } from "react";
import { useData } from "../context/data-context";

const UserListing = ({ users }) => {
  const { loginId, firstName, lastName } = users;
  return (
    <div style={{ width: "60%", paddingBottom: 10 }}>
      <div className="section-tweet">
        <span>@{loginId}</span>
        <span className=" text-sm">{firstName}</span>
        <span className=" text-sm">{lastName}</span>
      </div>
    </div>
  );
};

export default function User() {
  const { userData, getUsers } = useData();
  const [inputValue, setInputValue] = useState('')
  const [searchUser, setSearchUser] = useState('')
  useEffect(() => {
    getUsers();
  }, []);
  const changeHandler =  (e) => {
    setInputValue(e.target.value)
    setSearchUser(e.target.value)
  }
  const filteredData = userData?.filter((user) => { 
    return user?.loginId?.includes(searchUser)
  })
  return (
    <div className="m-1">
      <h2>Users</h2>
      <form className="m-1">
        <input name="searchUser"
        type='text'
        placeholder="Enter user"
          id="searchUser" onChange={changeHandler}/>
        <button className="btn btn-sm">Search</button>
      </form>
      {filteredData?.map((user, index) => {
        return <UserListing users={user} key={index} />;
      })}
    </div>
  );
}
