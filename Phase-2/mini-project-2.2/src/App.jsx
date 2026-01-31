import { useState, useEffect } from "react";
import "./App.css";

function App() {
  // storing variables for required items
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  // Async function for fetching API with try catch for error handling
  const fetchFunc = async () => {
    // fetching data and converting it into JSON for mapping on page
    try {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/users",
      );
      const users = await response.json();
      setData(users);
    } catch (err) {
      // Catching error and logging it in console for more information and setting error for displaying
      setError(
        "Something unexpected happened! Check console for more information.",
      );
      console.log(err);
    } finally{
      setLoading(false)
    }
  };

  // useEffect for fetching data on page mount
  useEffect(() => {
    fetchFunc();
  }, []);

  // nested ifelse routing which chcek for error at first than check if the state is loading or not
  if (error.length > 0) {
    return (
      <>
        {/* Navbar containing a button which refresh the data */}
        <div className="h-[10vh] bg-neutral-800 drop-shadow-xl drop-shadow-white/15 flex items-center justify-center">
          <button
            className="text-white bg-blue-500 px-3 py-1 rounded-2xl active:bg-white active:text-blue-500 hover:scale-105 transition-all duration-400"
            onClick={() => {
              // setting error blank and loading true than calling th efunction again
              setError("");
              setLoading(true);
              fetchFunc();
            }}
          >
            Refresh
          </button>
        </div>
        <div className="errorWrapper w-[50%] mx-auto mt-10 font-semibold text-2xl">
          <p>{error}</p>
        </div>
      </>
    );
  } else {
    if (!loading) {
      return (
        <>
          <div className="w-full h-screen">
            {/* Navbar containing a button which refresh the data */}
            <div className="h-[10vh] bg-neutral-800 drop-shadow-xl drop-shadow-white/15 flex items-center justify-center">
              <button
                className="text-white bg-blue-500 px-3 py-1 rounded-2xl active:bg-white active:text-blue-500 hover:scale-105 transition-all duration-400"
                onClick={() => {
                  setError("");
                  setLoading(true);
                  fetchFunc();
                }}
              >
                Refresh
              </button>
            </div>
            <div className="cardContainer mx-auto py-10 w-[80%] flex gap-4 flex-wrap justify-center">
              {data.map((user) => (
                <div
                  key={user.id}
                  className="bg-white text-black h-max px-3 py-2 rounded-2xl w-[300px]"
                >
                  <h1 className="text-2xl font-semibold">{user.name}</h1>
                  <p className="text-neutral-800 mb-3">@{user.username}</p>
                  <div className="linksContainer flex flex-col mb-2">
                    <span>
                      Mail:{" "}
                      <a
                        className="text-blue-700 underline underline-offset-4"
                        href={`mailto:${user.email}`}
                      >
                        {user.email}
                      </a>
                    </span>
                    <span>
                      Website:
                      <a
                        className="text-blue-700 underline underline-offset-4"
                        href={`http://${user.website}`}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        {user.website}
                      </a>
                    </span>
                  </div>
                  <div className="addressWrapper mb-2">
                    <div className="flex gap-5">
                      <p>{user.address.street},</p>
                      <p>{user.address.suite}</p>
                    </div>
                    <p>{user.address.city}</p>
                    <p className="font-semibold">
                      Zipcode: {user.address.zipcode}
                    </p>
                  </div>
                  <p className="mb-2">
                    <span className="font-semibold">Contact:</span> {user.phone}
                  </p>
                  <p className="font-bold">{user.company.name}</p>
                </div>
              ))}
            </div>
          </div>
        </>
      );
    } else {
      return (
        <div className="flex items-center justify-center h-screen">
          <div className="w-12 h-12 border-4 border-gray-300 border-t-blue-500 rounded-full animate-spin"></div>
        </div>
      );
    }
  }
}

export default App;
