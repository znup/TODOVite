import './TodoItem.css';

const TodoItem = (props) => {
  const { onDelete, isCompleted, onComplete, text } = props;

  return (
    <>
      <li className="TodoItem">
        <span
          className={`Icon Icon-check ${isCompleted && 'Icon-check--active'}`}
          onClick={onComplete}
        >
          ✔
        </span>
        <p className={`TodoItem-p ${isCompleted && 'TodoItem-p--complete'}`}>
          {isCompleted}
          {text}
        </p>
        <span className="Icon Icon-delete" onClick={onDelete}>
          ✘
        </span>
      </li>
    </>
  );
};

export default TodoItem;
