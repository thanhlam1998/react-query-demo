import React from "react";
import { useQuery } from "react-query";
import { getUsersApi } from "../apis/User";

const UseQueryExample = () => {
  const {
    data: users,
    isLoading,
    isError,
  } = useQuery("users", getUsersApi);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isError) {
    return <div>Something went wrong</div>;
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

export default UseQueryExample;
