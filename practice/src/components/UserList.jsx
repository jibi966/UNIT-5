import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export const UserList = () => {
  const [user, setUser] = useState([]);
  const { id } = useParams();
  useEffect(() => {
    axios.get(`https://reqres.in/api/users/${id}`).then(({ data }) => {
      setUser(data.data);
    });
  }, []);
  return (
    <div>
      <h2>
        {user.first_name} {user.last_name}
      </h2>
      <img src={user.avatar} alt="" />
    </div>
  );
};
