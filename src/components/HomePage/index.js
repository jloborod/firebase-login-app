import React from 'react';

const HomePage = () => (
  <div className='HomePage'>
    <span>You are logged in via email link ;)</span>
    <button onClick={() => console.log('loggin out... ;)')}>Logout</button>
  </div>
);

export default HomePage;
