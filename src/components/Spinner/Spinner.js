import { Dna } from 'react-loader-spinner';
import { SpinnerStyle } from './Spinner.styled';

export const SpinnerLoader = () => {
  return (
    <SpinnerStyle>
      <Dna
        visible={true}
        height="80"
        width="80"
        ariaLabel="dna-loading"
        wrapperStyle={{}}
        wrapperClass="dna-wrapper"
      />
    </SpinnerStyle>
  );
};
