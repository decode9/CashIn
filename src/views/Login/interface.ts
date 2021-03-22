import { RouteComponentProps } from '@reach/router';

export interface StateProps extends RouteComponentProps {
  auth: any
}

export interface Props extends StateProps {
  action: any
}
