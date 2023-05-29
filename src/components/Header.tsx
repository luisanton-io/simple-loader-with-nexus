
export default function Header() {
    return (
        <header className="row">
            <div className="col-10 col-md-6 mx-auto my-5">
                <h1 className="fs-3">Simple Loader with <code>recoil-nexus</code></h1>
                <p className="mt-4">
                    Toggle states via <code>atom</code> (clicking the button) or via <code>selector</code> (clicking the "loading/not loading" <code>{"<h5>"}</code>).
                </p>
                <p className="bg-warning rounded-0 p-3">
                    <strong>⚠️ NOTE: </strong>
                    <span>
                        these handlers are for example purposes only! You should always use <a href="https://recoiljs.org/docs/api-reference/core/useRecoilState" className="text-danger">native Recoil hooks</a> to handle Recoil atoms within your own components.
                        Use <code className="text-danger">recoil-nexus</code> only to interact with your Recoil state from <em>outside</em> of React.
                    </span>
                </p>
            </div>
        </header>
    );
}
