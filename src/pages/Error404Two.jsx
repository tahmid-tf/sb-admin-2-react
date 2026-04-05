import notFoundImage from "../assets/img/illustrations/404-error.svg";
import { ErrorShell } from "../component/PageHelpers.jsx";

function Error404Two() {
  return <ErrorShell code="404" title="Nothing Here" description="The link you followed may be broken or the page may have moved." image={notFoundImage} />;
}

export default Error404Two;
