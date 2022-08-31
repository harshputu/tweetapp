import React, { useEffect } from 'react';
import { useData } from '../context/data-context';

const UserListing = ({ data }) => {
  console.log(data);
  return (
    <div style={{ width: '60%' }}>
      <p className="section-tweet">@username</p>
    </div>
  );
};

export default function User() {
  const { data, getUsers } = useData();
  useEffect(() => {
    getUsers();
  }, []);
  return (
    <div className="m-1">
      <form className="m-1">
        <input />
        <button className="btn btn-sm">Search</button>
      </form>
      <UserListing users={data} />
    </div>
  );
}
