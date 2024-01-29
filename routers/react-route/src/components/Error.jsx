import { useRouteError } from "react-router-dom";

export default function ErrorPage(){
    const error = useRouteError()
    return(
        <>
            {/* <h1>Sorry, page not found!!</h1> */}
            <p>{error.message}</p>
        </>
    )
}