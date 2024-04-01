import css from "./ErrorMessage.module.css";

const ErrorMessage = () => {
  return (
    <div>
      <p className={css.error}>Something wrong! Please try reload this page!</p>
    </div>
  );
};

export default ErrorMessage;
