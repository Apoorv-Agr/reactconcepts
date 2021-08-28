import React, { useState } from "react";
import styles from "./formStyle.module.css";
const Form = () => {
  const [userName, setUserName] = useState("");
  const [comments, setComments] = useState("");
  const [skillSelectedVal, setSkillSelectedVal] = useState("React");
  const onUserNameChange = (event) => {
    setUserName(event.target.value);
  };
  const onCommentsChange = (event) => {
    setComments(event.target.value);
  };
  const onSkillChange = (event) => {
    setSkillSelectedVal(event.target.value);
  };
  const onFormSubmit = (event) => {
    console.log('here')
    event.preventDefault();
  };
  return (
    <form onSubmit={onFormSubmit}>
      <div className={styles.formMainContainer}>
        <div className={`${styles.textAlignCenter}`}>Basic Form</div>
        <div className={styles.inputContainer}>
          <div className={`${styles.margin10}`}>
            <label className={styles.labelStyle}>User Name :</label>
            <input
              type="text"
              placeholder="User Name"
              value={userName}
              className={`${styles.borderRound5}`}
              onChange={onUserNameChange}
            />
          </div>
          <div className={`${styles.margin10}`}>
            <label className={`${styles.labelStyle}  ${styles.floatLeft}`}>
              Comments :
            </label>
            <textarea
              placeholder="comment"
              value={comments}
              className={`${styles.borderRound5}`}
              onChange={onCommentsChange}
            />
          </div>
          <div className={`${styles.margin10}`}>
            <label className={`${styles.labelStyle}  ${styles.floatLeft}`}>
              SKILLS :
            </label>
            {/* <textarea
            placeholder="comment"
            value={comments}
            className={`${styles.borderRound5}`}
          /> */}
            <select
              className={`${styles.borderRound5} ${styles.selectStyle}`}
              value={skillSelectedVal}
              onChange={onSkillChange}
            >
              <option value="Angular">Angular</option>
              <option value="Vue">Vue</option>
              <option value="React">React</option>
            </select>
          </div>
          <div className={`${styles.margin10}`}>
            <button
              className={`${styles.btnCls} ${styles.floatRight} ${styles.btnPrimary} ${styles.btnSmall}`}
              type="submit"
            >
              Submit
            </button>
          </div>
        </div>
      </div>
    </form>
  );
};

export default Form;
