// access node js server

import React, { createContext, useContext } from 'react';
import { useCookies } from 'react-cookie';

export const AuthContext = createContext();

const authenticateUser = (user, password) => {
  var token = user + ":" + password;

  // Base64 Encoding -> btoa
  var hash = btoa(token); 

  return "Basic " + hash;
}

export const AuthProvider = ({ children }) => {
  const [cookies, setCookie, removeCookie] = useCookies(['username', 'password']);
  const [user, setUser] = React.useState(null);

  const fetchWithAuth = async (url) => await fetch(url, {
    method: 'GET', // *GET, POST, PUT, DELETE, etc.
    headers: {
      'Content-Type': 'application/json',
      'Authorization': authenticateUser(cookies.username, cookies.password)
    },
    mode: 'cors',
  });

  const login = async (username, password) => {
    console.log('pressed');
    try {
      const response = await fetch('http://localhost:8080/user', {
        method: 'GET', // *GET, POST, PUT, DELETE, etc.
        headers: {
          'Content-Type': 'application/json',
          'Authorization': authenticateUser(username, password)
        },
        mode: 'cors',
      });

      if (!response.ok) {    
        const message = `An error has occured: ${response.status}`;
        console.log(message);
        setUser(null);
        return;
      }

      const user = await response.json();
      setUser(user);
      setCookie('username', username);
      setCookie('password', password);
      console.log('logged in!')
    } catch (err) {
      console.log(err);
      setUser(null)
      removeCookie('username');
      removeCookie('password');
      throw new Error(err);
    }
  }

  const logout = () => {
    console.log('pressed');
    setUser(null);
    removeCookie('username');
    removeCookie('password');
  }

  const subjects = async () => {
    console.log('pressed');
    try {
      const response = await fetchWithAuth('http://localhost:8080/subjects')
      
      if (!response.ok) {    
        const message = `An error has occured: ${response.status}`;
        console.log(message);
        throw new Error(message);
      }

      const subjects = await response.json();
      return subjects;
    } catch (err) {
      console.log(err);
      throw new Error(err);
    }
  }

  const grades = async () => {
    console.log('pressed');
    try {
      const response = await fetchWithAuth('http://localhost:8080/grades')
      
      if (!response.ok) {    
        const message = `An error has occured: ${response.status}`;
        console.log(message);
        throw new Error(message);
      }

      const grades = await response.json();
      return grades;
    } catch (err) {
      console.log(err);
      throw new Error(err);
    }
  }

  const curriculum = async () => {
    console.log('pressed');
    try {
      const response = await fetchWithAuth('http://localhost:8080/curriculum')
      
      if (!response.ok) {    
        const message = `An error has occured: ${response.status}`;
        console.log(message);
        throw new Error(message);
      }

      const curriculum = await response.json();
      return curriculum;
    } catch (err) {
      console.log(err);
      throw new Error(err);
    }
  }

  return (
    <AuthContext.Provider value={{
        user,
        login,
        logout,
        subjects,
        grades,
        curriculum
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const auth = useContext(AuthContext);
  return auth;
};