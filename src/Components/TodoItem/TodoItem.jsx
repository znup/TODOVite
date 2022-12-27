import './TodoItem.css';

const TodoItem = (props) => {
  const onComplete = () => {
    console.log('Tarea Completada' + props.text);
  };

  const onDelete = () => {
    console.log('Borraste el Tudu' + props.text);
  };

  return (
    <>
      <li className="TodoItem">
        <span
          className={`Icon Icon-check ${
            props.isCompleted && 'Icon-check--active'
          }`}
          onClick={onComplete}
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
        <span className="Icon Icon-delete" onClick={onDelete}>
          ✘
        </span>
      </li>
    </>
  );
};

export default TodoItem;
