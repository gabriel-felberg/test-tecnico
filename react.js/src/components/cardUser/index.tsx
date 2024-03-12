
import React from "react";
import { IUserType } from "../../context/userProvider";

interface ICardUser {
  user: IUserType
}

export default function CardUser(user: ICardUser) {
  const { cellphone, name, email } = user.user
  return (
    <div className="flex flex-col p-5 min-w-80 rounded-lg border-black border-2 bg-gray-300">
      <h1 className="">{name}</h1>
      <ul>
        <li>Telefone: {cellphone}</li>
        <li>Email: {email}</li>
      </ul>
    </div>
  )
}