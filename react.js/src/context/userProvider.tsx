import axios from 'axios';
import React, { createContext, ReactNode, useEffect, useState } from 'react';

export interface IUserType {
  id: number;
  name: string;
  email: string;
  cellphone: string;
  coordinate: { x: number, y: number }
}

interface ISearchUser {
  email?: string;
  name?: string;
  cellphone?: string;
}

interface IUserContext {
  User: IUserType[];
  fetchUsers: (searchUser?: ISearchUser) => Promise<void>;
  fetchSequenceUsers: IUserType[]; 
  fetchequenceUsersFunction: () => Promise<void>;
}


export const UserContext = createContext<IUserContext>({ User: [], fetchUsers: async () => { }, fetchSequenceUsers: [], fetchequenceUsersFunction: async () => { } });

export const UserProvider = ({ children }: { children: ReactNode }) => {
  const [users, setUsers] = useState<IUserType[]>([]);
  const [fetchSequenceUsers, setFetchSequenceUsers] = useState<IUserType[]>([]);

  

  const fetchequenceUsersFunction = async (): Promise<any> => {
    const response = await axios.get<IUserType[]>('http://localhost:3000/sequence/');
    setFetchSequenceUsers(response.data)
  };

  const fetchUsers = async (searchUser?: ISearchUser) => {
    const response = await axios.get<IUserType[]>('http://localhost:3000', { params: searchUser });
    setUsers(response.data);
  };

  useEffect(() => {
    fetchUsers();
    fetchequenceUsersFunction();
  }, []);

  return (
    <UserContext.Provider value={{ User: users, fetchUsers, fetchSequenceUsers: fetchSequenceUsers, fetchequenceUsersFunction}}>{children}</UserContext.Provider>
  );
};
