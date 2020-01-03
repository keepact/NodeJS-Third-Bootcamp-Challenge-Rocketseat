import styled from 'styled-components';

import Select from 'react-select';

export const MySelector = styled(Select)`
  width: 198px;
  padding-bottom: 15px;

  .react-select__control {
    margin-top: 4px;
  }
  .react-select__value-container {
    height: 45px;
  }

  .react-select__single-value {
    opacity: 0.6;
  }
`;
