import css from "./FeedbackOptions.module.css";

const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <ul className={css.btn_list}>
      {options.map(option => {
        return (
          <li key={option}>
            <button
              key={option}
              className={css.btn}
              type="button"
              value={option}
              children={option}
              onClick={() => onLeaveFeedback(option)}
            >
              {option}
            </button>           
          </li>
        )
      })}
    </ul>
  )
}


export default FeedbackOptions;