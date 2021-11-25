// @ts-nocheck
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getUsers } from "../store/actions/user";

const ReduxExample = () => {
	const [users, setUsers] = useState([]);
  const dispatch = useDispatch();
  const { usersList, isLoading } = useSelector((state) => state.users);

  useEffect(() => {
    dispatch(getUsers());
  }, []);

  useEffect(() => {
		setUsers(usersList);
	}, [usersList]);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      {users?.map((item) => (
        <div key={item.id}>
          {item.name} - {item.email}
        </div>
      ))}
    </div>
  );
};

export default ReduxExample;
