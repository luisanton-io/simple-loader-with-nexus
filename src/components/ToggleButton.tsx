import { loadingState } from "atoms/loadingState";
import { Button } from "react-bootstrap";
import { useRecoilValue } from "recoil";
import { toggleLoading } from "toggleLoading";

export default function ToggleButton() {
    const loading = useRecoilValue(loadingState);

    return (
        <div className="col-10 col-md-6 mx-auto d-flex justify-content-center">
            <Button onClick={toggleLoading}>{loading ? "Unload" : "Load"}</Button>
        </div>
    )
}