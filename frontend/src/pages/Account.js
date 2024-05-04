import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Profile = () => {
  const [username, setUsername] = useState('');
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProfile = async () => {
      const token = localStorage.getItem('token');
      if (token) {
        try {
          const response = await axios.get('http://localhost:4200/users', {
            headers: { Authorization: `Bearer ${token}` },
          });
          console.log(response.data);
          setUsername(token.data);
        } catch (error) {
          setError(error.message);
        }
      }
    };
    fetchProfile();
  }, []);

  return (
    <div>
      <h1>Profile</h1>
      {error? (
        <p>Error: {error}</p>
      ) : (
        <p>Welcome, {username}!</p>
      )}
    </div>
  );
};

export default Profile;