// App.js
import React, { useState, useEffect } from 'react';
import './App.css';
import Header from './Header';
import Sidebar from './Sidebar';
import Feed from './Feed';
import Profile from './Profile';

function App() {
  const [user, setUser] = useState(null);
  const [feeds, setFeeds] = useState([]);
  const [profile, setProfile] = useState({});

  useEffect(() => {
    // fetch user data from API
    fetch('/api/user')
      .then(response => response.json())
      .then(data => setUser(data));

    // fetch feeds data from API
    fetch('/api/feeds')
      .then(response => response.json())
      .then(data => setFeeds(data));

    // fetch profile data from API
    fetch('/api/profile')
      .then(response => response.json())
      .then(data => setProfile(data));
  }, []);

  return (
    <div className="App">
      <Header user={user} />
      <Sidebar />
      <div className="main-content">
        <Feed feeds={feeds} />
        <Profile profile={profile} />
      </div>
    </div>
  );
}

export default App;