import { getRecoil, setRecoil } from "recoil-nexus";
import { loadingState } from "atoms/loadingState";

export const toggleLoading = () => {
    const loading = getRecoil(loadingState);
    console.log("Before", loading);
    setRecoil(loadingState, (l) => !l);
    console.log("After", getRecoil(loadingState));
};
