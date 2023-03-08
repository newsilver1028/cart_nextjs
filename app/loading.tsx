import { PulseLoader } from 'react-spinners';

const Loading = ({ loading }: { loading?: boolean }) => {
  return <PulseLoader loading={loading} speedMultiplier={1} />;
};

export default Loading;
