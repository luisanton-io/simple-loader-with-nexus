import { getRecoil, setRecoil } from "recoil-nexus";
import { loadingState } from "atoms/loadingState";

export const toggleLoading = async () => {

    const loading = await getRecoil(loadingState);
    setRecoil(loadingState, !loading);

};
