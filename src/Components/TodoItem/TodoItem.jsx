import './TodoItem.css';

const TodoItem = (props) => {
  return (
    <>
      <li className="TodoItem">
        <span
          className={`Icon Icon-check ${
            props.isCompleted && 'Icon-check--active'
          }`}
        >
          ✔
        </span>
        <p
          className={`TodoItem-p ${
            props.isCompleted && 'TodoItem-p--complete'
          }`}
        >
          {props.isCompleted}
          {props.text}
        </p>
        <span className="Icon Icon-delete">✘</span>
      </li>
    </>
  );
};

export default TodoItem;
