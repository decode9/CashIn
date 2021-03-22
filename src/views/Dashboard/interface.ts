import { RouteComponentProps } from '@reach/router';

export interface StateProps extends RouteComponentProps {
}

export interface Props extends StateProps {
  action: any
}
