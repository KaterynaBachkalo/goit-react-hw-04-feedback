import css from './FeedbackOptions.module.css';

export const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <div className={css.buttonList}>
      {options.map(op => (
        <button
          key={op}
          type="button"
          onClick={() => onLeaveFeedback(op)}
          className={css.button}
        >
          {op}
        </button>
      ))}
    </div>
  );
};
