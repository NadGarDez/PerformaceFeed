import { BasicUserInfo } from "@/types";

export const getRandomUserInfoFromStaticData = (data:BasicUserInfo[]):BasicUserInfo => {
    const randomIndex = Math.floor(Math.random() * data.length);
    return data[randomIndex];
}