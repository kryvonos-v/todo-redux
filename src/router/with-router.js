import { useParams } from 'react-router-dom';

export function withRouter(Component) {
  return function WithRouter(props) {
    const params = useParams();
    return <Component params={params} {...props} />
  };
}
