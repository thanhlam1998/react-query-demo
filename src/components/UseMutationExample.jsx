import React, { useState } from "react";
import { useMutation, useQuery, useQueryClient } from "react-query";
import { addUserApi, getUsersApi } from "../apis/User";

const UseMutationExample = () => {
  const [user, setUser] = useState({
    name: "",
    email: "",
  });

  const queryClient = useQueryClient();
  const { data: users, isLoading, isFetching } = useQuery("users", getUsersApi);

  const { mutate, isLoading: addUserLoading } = useMutation(addUserApi, {
    onSuccess: () => {
      setUser({
        name: "",
        email: "",
      });
      queryClient.invalidateQueries("users");
    },
  });

  const onChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const onSubmit = (e) => {
    e.preventDefault();
    mutate(user);
  };

  return (
    <div>
      {isLoading
        ? "Loading users..."
        : users?.map((item) => (
            <div key={item.id}>
              {item.name} - {item.email}
            </div>
          ))}
      {isFetching && "Fetching ..."}
      <br />
      <br />
      <form onSubmit={onSubmit}>
        <div>
          <label>Name</label>
          <input value={user?.name} name="name" onChange={onChange} />
        </div>
        <div>
          <label>Email</label>
          <input value={user?.email} name="email" onChange={onChange} />
        </div>
        <button type="submit">Add new user</button>
      </form>
      {addUserLoading && "Adding user ..."}
    </div>
  );
};

export default UseMutationExample;
