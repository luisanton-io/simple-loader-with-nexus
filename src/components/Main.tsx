import { loadingState } from "atoms/loadingState";
import React from "react";
import { Button } from "react-bootstrap";
import { useRecoilValue } from "recoil";
import { toggleLoading } from "toggleLoading";

export default function Main() {
    const loading = useRecoilValue(loadingState);

    return (
        <div className="d-flex">
            <div className="mx-auto my-5">
                <Button onClick={toggleLoading}>{loading ? "Unload" : "Load"}</Button>
            </div>
        </div>
    );
}
