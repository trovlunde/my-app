import "./RandomUserDisp.css";
import { useState, useEffect } from "react";
import Users from "../types/user";
import Popup from "reactjs-popup";
import "reactjs-popup/dist/index.css";

export default function RandomUserDisp() {
  const [users, setUsers] = useState<Users>({
    results: [],
    info: { seed: "", results: 0, page: 0, version: "" },
  });
  const [maxTableWidth, setMaxTableWidth] = useState<number>(0);

  useEffect(() => {
    const api = async () => {
      try {
        const data = await fetch("https://randomuser.me/api/?results=5", {
          method: "GET",
        });
        const jsonData = await data.json();
        const usersWithDetails = jsonData.results.map((user: []) => ({
          ...user,
          showDetails: false,
        }));
        setUsers({ results: usersWithDetails, info: jsonData.info });

        console.log(jsonData.results[0].name.first.length);

        const tableWidths = users.results.map((value) => {
          const firstNameWidth = value.name.first.length * 10; // Adjust the factor as needed
          const lastNameWidth = value.name.last.length * 10;
          const cityWidth = value.location.city.length * 10;
          return Math.max(firstNameWidth, lastNameWidth, cityWidth);
        });
        const maxTableWidth = Math.max(...tableWidths);
        setMaxTableWidth(maxTableWidth);
      } catch (error) {
        console.error("Error fetching:", error);
      }
      // Calculate the maximum width dynamically
    };

    api();
  }, []);

  function dispAdvanced(user: Users["results"][0]) {
    return (
      <div>
        <table className="user-table">
          <tbody>
            <tr>
              <th className="header-cell">Field</th>
              <th className="header-cell">Value</th>
            </tr>
            <tr>
              <td className="data-cell">Country:</td>
              <td className="data-cell">{user.location.country}</td>
            </tr>
            <tr>
              <td className="data-cell">Latitude:</td>
              <td className="data-cell">
                {user.location.coordinates.latitude}
              </td>
            </tr>
            <tr>
              <td className="data-cell">Longitude:</td>
              <td className="data-cell">
                {user.location.coordinates.longitude}
              </td>
            </tr>
            {/* Add more rows to display additional information */}
          </tbody>
        </table>
      </div>
    );
  }

  // Check if users.results is defined before using map
  if (!users.results) {
    return <div>Loading...</div>; // Or some loading indicator
  }

  return (
    <div className="App">
      <div className="table-container">
        {users.results.map((value, index) => (
          <div key={index} className="table-button-pair">
            <table
              className="user-table"
              style={{ width: maxTableWidth + "px" }}
            >
              <tbody>
                <tr>
                  <th className="header-cell">Field</th>
                  <th className="header-cell">Value</th>
                </tr>
                <tr>
                  <td className="data-cell">First Name:</td>
                  <td className="data-cell">{value.name.first}</td>
                </tr>
                <tr>
                  <td className="data-cell">Last Name:</td>
                  <td className="data-cell">{value.name.last}</td>
                </tr>
                <tr>
                  <td className="data-cell">City:</td>
                  <td className="data-cell">{value.location.city}</td>
                </tr>
              </tbody>
            </table>
            <button
              className="button"
              key={index}
              onClick={() => {
                const updatedUsers = [...users.results];
                updatedUsers[index].showDetails =
                  !updatedUsers[index].showDetails;
                setUsers({ ...users, results: updatedUsers });
              }}
            >
              {value.showDetails
                ? "Close Details for User" + (index + 1)
                : "View Details for User" + (index + 1)}
            </button>
            {value.showDetails && dispAdvanced(value)}
          </div>
        ))}
      </div>
      <div></div>
      <div>
        <Popup
          trigger={(open) => (
            <button className="button">
              Trigger - {open ? "Opened" : "Closed"}
            </button>
          )}
          position="right center"
          offsetX={100}
          arrow={true}
          closeOnDocumentClick
        >
          <span>
            <table
              className="user-table"
              style={{ width: maxTableWidth + "px" }}
            >
              <tbody>
                <tr>
                  <th className="header-cell">Field</th>
                  <th className="header-cell">Value</th>
                </tr>
                <tr>
                  <td className="data-cell">First Name:</td>
                  <td className="data-cell">Ola</td>
                </tr>
                <tr>
                  <td className="data-cell">Last Name:</td>
                  <td className="data-cell">Nordmann</td>
                </tr>
                <tr>
                  <td className="data-cell">City:</td>
                  <td className="data-cell">Norgeby</td>
                </tr>
              </tbody>
            </table>
          </span>
        </Popup>
      </div>
    </div>
  );
};
