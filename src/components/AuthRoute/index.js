import React, { useContext } from 'react';
import { Route, Redirect } from 'react-router-dom';

import AuthContext from '../../context/auth';

const AuthRoute = ({ component: Component, ...rest }) => {
  const {
    user,
    setUser,
    sendEmailLink,
    signIn,
    signOut
  } = useContext(AuthContext);
  console.log(user, rest.path.includes('signin'));

  return (
    <Route
      {...rest}
      render={props => {
        if (
          (user && !rest.path.includes('signin')) ||
          (!user && rest.path.includes('signin'))
        ) {
          return (
            <Component
              {...props}
              user={user}
              setUser={setUser}
              sendEmailLink={sendEmailLink}
              signIn={signIn}
              signOut={signOut}
            />
          );
        } else if (user && rest.path.includes('signin')) {
          return (
            <Redirect
              to={{
                pathname: '/',
                state: { from: props.location },
              }}
            />
          )
        } else if (!user && !rest.path.includes('signin')) {
          return (
            <Redirect
              to={{
                pathname: '/signin',
                state: { from: props.location },
              }}
            />
          );
        }
      }}
    />
  );
};

// const AuthRoute = ({ component: Component, ...rest }) => {
//   const {
//     user,
//     setUser,
//     isSignedIn,
//     sendEmail,
//     signIn,
//     signOut
//   } = useContext(AuthContext);
//   console.log(isSignedIn(), rest.path, rest.path.includes('signin'));

//   return (
//     <Route
//       {...rest}
//       render={props => {
//         if (
//           (isSignedIn() && !rest.path.includes('signin')) ||
//           (!isSignedIn() && rest.path.includes('signin'))
//         ) {
//           return (
//             <Component
//               {...props}
//               user={user}
//               setUser={setUser}
//               sendEmail={sendEmail}
//               signIn={signIn}
//               signOut={signOut}
//             />
//           );
//         } else if (isSignedIn() && rest.path.includes('signin')) {
//           return (
//             <Redirect
//               to={{
//                 pathname: '/',
//                 state: { from: props.location },
//               }}
//             />
//           )
//         } else if (!isSignedIn() && !rest.path.includes('signin')) {
//           return (
//             <Redirect
//               to={{
//                 pathname: '/signin',
//                 state: { from: props.location },
//               }}
//             />
//           );
//         }
//       }}
//     />
//   );
// };

export default AuthRoute;
