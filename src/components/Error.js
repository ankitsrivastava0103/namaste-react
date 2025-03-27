import { useRouteError } from "react-router-dom";

const Error = () => {
  const error = useRouteError();
  console.log(error);
  return (
    <div>
      <h2>Opps !!! Something Went Wrong!!!</h2>
      <h2>
        {error.code} {error.statusText}
      </h2>
    </div>
  );
};

export default Error;
