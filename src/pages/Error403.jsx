import forbiddenImage from "../assets/img/illustrations/403-error-forbidden.svg";
import { ErrorShell } from "../component/PageHelpers.jsx";

function Error403() {
  return <ErrorShell code="403" title="Forbidden" description="You don’t have permission to access this resource." image={forbiddenImage} />;
}

export default Error403;
