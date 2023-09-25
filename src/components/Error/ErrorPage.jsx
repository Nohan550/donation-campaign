import { Link, useRouteError } from "react-router-dom";

const ErrorPage = () => {
    const error = useRouteError();
    console.error(error);
  
    return (
        <div className="text-center " >
             <div id="error-page" className="pt-56 pb-11" >
      <h1 className="text-3xl font-semibold py-3">Oops!</h1>
      <p className="text-2xl font-normal py-3">Sorry, an unexpected error has occurred.</p>
      <p className="text-4xl font-bold">
        <i>{error.statusText || error.message}</i>
      </p>
    
    </div>
    <Link to="/">
        <button className="btn btn-primary">Go Home</button>
      </Link>
        </div>
    );
};

export default ErrorPage;