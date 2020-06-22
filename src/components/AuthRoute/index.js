import React from 'react';
import { Route, Redirect } from 'react-router-dom';

function AuthRoute(props) {
  
  const {
    isAuthenticated = false, 
    render, 
    component: Component,  
    
    ...restProps
  } = props;

//   console.log(restProps);
  return (
    <Route
      {...restProps}
      render={(routeProps) => {
        
        if (isAuthenticated) {
          if (typeof render === 'function') {
            return render(routeProps);
          } else {
            return <Component {...routeProps} />
          }
        } else {
          // if `isAuthenticated` is falsey then we will force a redirect by rendering out the <Redirect/> Component.
          return <Redirect to='/sign_in'/>
        }
      }}
    />
  )
}

export default AuthRoute