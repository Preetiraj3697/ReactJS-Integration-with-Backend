import React, { useState, useEffect } from "react";
import axios from "axios";
import { API_BASE_URL } from "../helper/constant";

const AllUser = () => {
  const [data, setData] = useState([]);
  const [selectedUser, setSelectedUser] = useState(null);
  const [name, setName] = useState('');
  const [userData, setUserData] = useState('');
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    fetchUser();
  }, []);

  const fetchUser = async () => {
    try {
      const response = await axios.get(`${API_BASE_URL}`);
      setData(response.data);
    } catch (error) {
      console.log('error', error);
    }
  };

  const handleUpdateClick = (user) => {
    setSelectedUser(user);
    setName(user.name);
    setUserData(user.data);
    setShowModal(true);
  };

  const handleUpdate = async () => {
    try {
      await axios.post(`${API_BASE_URL}/update/${selectedUser._id}`, { name, data: userData });
      console.log('User data updated successfully');
      setShowModal(false);
      fetchUser(); // Refresh user data after update
    } catch (error) {
      console.error('Error updating user data:', error);
    }
  };

  const handleCancel = () => {
    setShowModal(false);
  };

  return (
    <div>
      
      <div className="user-container">
        {data.map((item) => (
          <div key={item._id} className="user-card">
            <h3>Name: {item.name}</h3>
            <p>Data: {item.data}</p>
            <button onClick={() => handleUpdateClick(item)}>Update</button>
          </div>
        ))}
      </div>

      {/* Modal for update */}
      {selectedUser && showModal && (
        <div className="modal">
          <div className="modal-content">
            <h2>Update User Data</h2>
            <div>
              <label>Name:</label>
              <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
            </div>
            <div>
              <label>Data:</label>
              <input type="text" value={userData} onChange={(e) => setUserData(e.target.value)} />
            </div>
            <div>
              <button onClick={handleUpdate}>Update</button>
              <button onClick={handleCancel}>Cancel</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default AllUser;
