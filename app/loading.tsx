import { PulseLoader } from 'react-spinners';
import styles from './loading.module.scss';

const Loading = ({ loading }: { loading?: boolean }) => {
  return (
    <div className={styles.wrapper}>
      <PulseLoader loading={loading} speedMultiplier={1} color='lightsteelblue' />
    </div>
  );
};

export default Loading;
