import { loadingState } from "atoms/loadingState";
import { Spinner } from "react-bootstrap";
import { useRecoilValue } from "recoil";

export default function Loader() {
    const loading = useRecoilValue(loadingState);

    return <div className="text-center my-4">
        {loading && (
            <Spinner animation="border" variant="primary" />
        )}
    </div>
}
