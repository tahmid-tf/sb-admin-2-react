import unavailableImage from "../assets/img/illustrations/503-error-service-unavailable.svg";
import { ErrorShell } from "../component/PageHelpers.jsx";

function Error503() {
  return <ErrorShell code="503" title="Service Unavailable" description="The service is temporarily unavailable while we perform maintenance." image={unavailableImage} />;
}

export default Error503;
