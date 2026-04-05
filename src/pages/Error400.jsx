import badRequestImage from "../assets/img/illustrations/400-error-bad-request.svg";
import { ErrorShell } from "../component/PageHelpers.jsx";

function Error400() {
  return <ErrorShell code="400" title="Bad Request" description="The request could not be understood by the server." image={badRequestImage} />;
}

export default Error400;
