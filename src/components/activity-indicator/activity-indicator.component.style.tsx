import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styled from 'styled-components';

interface ActivityIndicatorStyledProps {
  light?: boolean;
}

export const ActivityIndicatorStyled = styled(FontAwesomeIcon)<ActivityIndicatorStyledProps>`
  color: ##46535B;
  display: inline-block;
`;
