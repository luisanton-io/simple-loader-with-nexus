import React from "react";
import { Spinner } from "react-bootstrap";
import { useRecoilValue } from "recoil";
import { loadingState } from "atoms/loadingState";

export default function Loader() {
    const loading = useRecoilValue(loadingState);

    return loading ? (
        <div className="text-center my-4">
            <Spinner animation="border" variant="primary" />
            <h5>Loading...</h5>
        </div>
    ) : null;
}
