import { useRouteError } from "react-router-dom"

const Error = () => {
    const err = useRouteError();
    return (
        <>
        <div>Opps somthing went wrong</div>
        <h3>{err?.status}</h3>
        </>
    )
}

export default Error