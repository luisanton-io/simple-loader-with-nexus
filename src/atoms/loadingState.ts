import { atom } from "recoil";

export const loadingState = atom<boolean>({
    key: "LOADING",
    default: false,
    effects: [
        ({ onSet }) => {
            onSet(newValue => { console.log(newValue); });
        }
    ]
});
