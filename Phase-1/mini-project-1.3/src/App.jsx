import { useState } from "react";
import "./App.css";
import UserCard from "./components/UserCard";
import UserData from "./data/UserData";
import UserSearch from "./components/UserSearch";

function App() {
  // Storing query and data in variable
  const [searchQuery, setSearchQuery] = useState("");
  const [userData, setUserData] = useState(UserData);

  // Function to delete user based on their ID by creating a new array from unmatched values
  const removeUser = (userId) => {
    setUserData(userData.filter((user) => user.id !== userId));
  };

  // Filter users based on search query (done during render, not modifying state)
  const filteredUsers = userData.filter((user) =>
    user.username.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="w-full h-screen p-5 flex flex-col gap-5 items-center">
      {/* Passing query and setQuery to search component */}
      <UserSearch query={searchQuery} setQuery={setSearchQuery} />
      <div className="cardsWrapper flex gap-10 flex-wrap justify-around">
        {/* Display filtered users or "no users found" message */}
        {filteredUsers.length > 0 ? (
          filteredUsers.map((user) => (
            <UserCard user={user} key={user.id} removeUser={removeUser} />
          ))
        ) : (
          <p className="text-white text-xl">No users found</p>
        )}
      </div>
    </div>
  );
}

export default App;
