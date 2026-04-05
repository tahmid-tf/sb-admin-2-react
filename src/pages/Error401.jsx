import unauthorizedImage from "../assets/img/illustrations/401-error-unauthorized.svg";
import { ErrorShell } from "../component/PageHelpers.jsx";

function Error401() {
  return <ErrorShell code="401" title="Unauthorized" description="You need to sign in before accessing this page." image={unauthorizedImage} />;
}

export default Error401;
