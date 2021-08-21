import { getRecoil, setRecoil } from "recoil-nexus";
import { loadingState } from "atoms/loadingState";

export const toggleLoading = () => {

    const loading = getRecoil(loadingState);
    setRecoil(loadingState, !loading);

};
