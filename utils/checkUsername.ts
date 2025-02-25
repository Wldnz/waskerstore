
import {currentGame,userID} from "@/model/Model";
import React, { SetStateAction } from "react";

export const api_url = [
    {
        path : "mobile-legends",
        url : "https://api.isan.eu.org/nickname/ml?",
        params : ["id","server"]
    },
    {
        path : "free-fire",
        url : "https://api.isan.eu.org/nickname//ff?",
        params : ["id"]
    },
    {
        path : "valorant",
        url : "https://api.isan.eu.org/nickname/valo?",
        params : ["id"]
    },
]




export default function checkUsername(currentGame: currentGame, userId: userID, setUserID: React.Dispatch<SetStateAction<userID>>) {
  const { params, url } = api_url.filter(
    (value) => value.path == currentGame.path
  )[0];

  let newParams = "";
  params.forEach((element: any, index: number) => {
    if (params.length == 1) return (newParams += `${element}=${userId.userID}`);
    if (index == 0) {
      newParams += `${element}=${userId.userID}&`;
    } else {
      newParams += `${element}=${userId.zoneID}`;
    }
  });
  fetch(url + newParams)
    .then((response) => response.json())
    .then((response) => {
      if (response.success) {
        setUserID((prev: any) => ({
          ...prev,
          ...{ name: response.name, found: true },
        }));
      } else {
        setUserID((prev: any) => ({ ...prev, ...{ name: "", found: false } }));
      }
    });
}
