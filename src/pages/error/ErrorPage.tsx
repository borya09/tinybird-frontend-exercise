import { useRouteError } from "react-router-dom";
import Root from "../../components/layout";

type Error = {
  statusText: string;
  message: string;
};

export default function Error() {
  const error = useRouteError() as Error;
  console.error(error);

  return (
    <Root>
      <h1>Oops!</h1>
      <p>Sorry, an unexpected error has occurred.</p>
      <p>
        <i>{error.statusText || error.message}</i>
      </p>
    </Root>
  );
}
