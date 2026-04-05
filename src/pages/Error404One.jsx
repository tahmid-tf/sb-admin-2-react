import notFoundAnimalImage from "../assets/img/illustrations/404-error-with-a-cute-animal.svg";
import { ErrorShell } from "../component/PageHelpers.jsx";

function Error404One() {
  return <ErrorShell code="404" title="Page Not Found" description="We couldn't find the page you were looking for." image={notFoundAnimalImage} />;
}

export default Error404One;
