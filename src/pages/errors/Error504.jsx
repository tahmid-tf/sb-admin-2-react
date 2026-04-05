import timeoutImage from "../../assets/img/illustrations/504-error-gateway-timeout.svg";
import { ErrorShell } from "../../component/PageHelpers.jsx";

function Error504() {
  return <ErrorShell code="504" title="Gateway Timeout" description="The server took too long to respond. Please try again in a moment." image={timeoutImage} />;
}

export default Error504;
