import { RouteComponentProps } from '@reach/router';

export interface StateProps extends RouteComponentProps {
  table?: any
}

export interface Props extends StateProps {
  action: any
}
