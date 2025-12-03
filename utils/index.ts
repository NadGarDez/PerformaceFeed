import { BasicUserInfo } from "@/types/user";

export const getRandomUserInfoFromStaticData = (data:BasicUserInfo[]):BasicUserInfo => {
    const randomIndex = Math.floor(Math.random() * data.length);
    return data[randomIndex];
}