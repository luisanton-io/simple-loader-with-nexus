import { getRecoil, setRecoil } from "recoil-nexus";
import { loadingState } from "atoms/loadingState";
import { stringSelector } from "atoms/stringSelector";

export const toggleLoading = () => {
    const loading = getRecoil(loadingState);
    console.log("Before", loading);
    setRecoil(loadingState, (l) => !l);
    console.log("After", getRecoil(loadingState));
};

export const toggleLoadingString = () => {
    const loading = getRecoil(stringSelector);
    console.log("Before", loading);
    setRecoil(stringSelector, (l) => l === "Loading" ? "Not loading" : "Loading");
    console.log("After", getRecoil(stringSelector));
}