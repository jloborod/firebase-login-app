import React from 'react';

const HomePage = ({ user, setUser, signOut }) => {
  const handleClick = () => {
    signOut()
      .then(resp => console.log('ehhmm', resp))
      .catch(err => console.log(err));
    setUser(null);
  };

  return (
    <div className='HomePage'>
      <span>You are logged in as {user.email}</span>
      <button onClick={handleClick}>Logout</button>
    </div>
  );
};

export default HomePage;
