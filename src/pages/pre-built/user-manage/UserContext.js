import React, { useState, createContext } from "react";
import { userData } from "./UserData";
import PropTypes from 'prop-types';

export const UserContext = createContext();
UserContextProvider.propTypes = {
  children: PropTypes.object
}
export const UserContextProvider = (props) => {
  const [data, setData] = useState(userData);

  return <UserContext.Provider value={{ contextData: [data, setData] }}>{props.children}</UserContext.Provider>;
};
