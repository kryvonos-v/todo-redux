import { Link as OriginalLink } from "react-router-dom";

export function Link({ children, ...props }) {
  return (
    <OriginalLink {...props}>{children}!</OriginalLink>
  );
}
