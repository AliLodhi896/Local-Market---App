import React, {createContext, useState} from 'react';

export const AuthContext = createContext({});

export const AuthProvider = props => {

  const [isSignin, setIsSignin] = useState(false)
  const [role, setRole] = useState(null)
  const [description, setDescription] = useState(false)
  
 
  return (
    <AuthContext.Provider
      value={{
        isSignin, 
        setIsSignin,
        setDescription,
        description,
        setRole,
        role
      }}>
      {props.children}
    </AuthContext.Provider>
  );
};