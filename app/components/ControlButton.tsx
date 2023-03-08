interface Props {
  quantity: number;
  handleDecrease: () => void;
  handleIncrease: () => void;
  handleDelete: () => void;
}

const ControlButton = ({ quantity, handleDecrease, handleIncrease, handleDelete }: Props) => {
  return (
    <div>
      <button type='button' onClick={handleDelete}>
        X
      </button>
      <button type='button' onClick={handleDecrease}>
        -
      </button>
      <span>{quantity}</span>
      <button type='button' onClick={handleIncrease}>
        +
      </button>
    </div>
  );
};

export default ControlButton;
