import "./Input.css";

const Input = ({ title, content, onChangeHandler, onSubmitHandler }) => {
  return (
    <div className="input">
      <input
        name="title"
        value={title}
        onChange={onChangeHandler}
        placeholder="TODO"
      />
      <input
        name="content"
        value={content}
        onChange={onChangeHandler}
        placeholder="PLAN"
      />
      <button onClick={onSubmitHandler}>+</button>
    </div>
  );
};

export default Input;
