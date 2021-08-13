import { atom } from "recoil";

export const loadingState = atom({
    key: "LOADING",
    default: false
});
