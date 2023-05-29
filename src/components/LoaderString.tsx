import { stringSelector } from "atoms/stringSelector"
import { useRecoilValue } from "recoil"
import { toggleLoadingString } from "toggleLoading"

export default function LoaderString() {
    const loadingString = useRecoilValue(stringSelector)

    return (
        <h5 onClick={toggleLoadingString}
            style={{ cursor: "pointer", textAlign: "center" }}
        >
            {loadingString}
        </h5>
    )
}