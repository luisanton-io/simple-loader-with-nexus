import { selector } from "recoil";
import { loadingState } from "./loadingState";

export const stringSelector = selector<"Loading" | "Not loading">({
    key: "STRING",
    get: ({ get }) => {
        return get(loadingState) ? "Loading" : "Not loading"
    },
    set: ({ set }, newValue) => {
        set(loadingState, newValue === "Loading")
    }
});
