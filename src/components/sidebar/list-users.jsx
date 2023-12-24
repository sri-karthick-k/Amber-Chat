import { useState, useEffect } from "react";
import userlist from "../../assets/user-list.json";

const ListUsers = () => {
  const [users, setUsers] = useState([]);
  const [selectedUser, setSelectedUser] = useState(null);

  useEffect(() => {
    setUsers(userlist);
  }, []);

  const handleUserClick = (user) => {
    setSelectedUser(user.id === selectedUser ? null : user.id);
    // focus the chat window and show their name and email
  };


  return (
    <div className="non-selectable-text list-users">
      <ul>
        {users.map((user) => (
          <li
            key={user.id}
            className={user.id === selectedUser ? "selected" : ""}
            onClick={()=>handleUserClick(user)}
          >
            {user.username} - {user.email}
          </li>
        ))}
      </ul>
    </div>
  );
};


export default ListUsers;
