import serverErrorImage from "../assets/img/illustrations/500-internal-server-error.svg";
import { ErrorShell } from "../component/PageHelpers.jsx";

function Error500() {
  return <ErrorShell code="500" title="Internal Server Error" description="Something went wrong on our side. Please try again later." image={serverErrorImage} />;
}

export default Error500;
