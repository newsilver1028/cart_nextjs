import { Button, Radio } from 'antd';
import { CloseOutlined, MinusOutlined, PlusOutlined } from '@ant-design/icons';
import styles from './controlButton.module.scss';

interface Props {
  quantity: number;
  handleDecrease: () => void;
  handleIncrease: () => void;
  handleDelete: () => void;
}

const ControlButton = ({ quantity, handleDecrease, handleIncrease, handleDelete }: Props) => {
  return (
    <div className={styles.buttonWrapper}>
      <Button onClick={handleDelete} style={{ border: 'none', marginBottom: '10px' }}>
        <CloseOutlined />
      </Button>
      <Radio.Group optionType='button' className={styles.buttonGroup} size='small'>
        <Radio.Button onClick={handleDecrease}>
          <MinusOutlined />
        </Radio.Button>
        <Radio.Button>{quantity}</Radio.Button>
        <Radio.Button onClick={handleIncrease}>
          <PlusOutlined />
        </Radio.Button>
      </Radio.Group>
    </div>
  );
};

export default ControlButton;
