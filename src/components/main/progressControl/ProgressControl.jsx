import rightArrow from "../../../assets/icons/right-arrow.svg";
import leftArrow from "../../../assets/icons/left-arrow.svg";
import styles from "../../styles/ProgressControl.module.scss";

export function ButtonGroup({isShown, dataPhase, children}) {
  if (isShown) {
    return (<section className={`${styles.buttonGroup}`} data-phase={dataPhase}>
      {children}
    </section>)
  }
}

export function ControlNext({onClick}) {
  return (
    <button className={`${styles.btnNext}`} onClick={onClick}>
      下一步
      <img
        className={`cursor-point ${styles.arrow}`}
        src={rightArrow}
        alt="left-arrow.svg"
      />
    </button>
  );
}

export function ControlPrevious({onClick}) {
  return (
    <button className={styles.btnPrevious} onClick={onClick}>
      <img
        className={`cursor-point ${styles.arrow}`}
        src={leftArrow}
        alt="left-arrow.svg"
      />
      上一步
    </button>
  );
}

export function ControlSubmit({onSubClick}) {
  return <button className={styles.btnNext} onClick={onSubClick}>確認下單</button>;
}

export default function ProgressControl({step, onPrevClick, onNextClick}) {
  return (
    <section className={styles.progressControlContainer}>
      <ButtonGroup isShown={step === 0? true : false} dataPhase={"address"}>
        <ControlNext onClick={onNextClick}/>
      </ButtonGroup>
      <ButtonGroup isShown={step === 1? true : false} dataPhase={"shipping"}>
        <ControlPrevious onClick={onPrevClick}/>
        <ControlNext onClick={onNextClick}/>
      </ButtonGroup>
      <ButtonGroup isShown={step === 2? true : false} dataPhase={"credit-card"}>
        <ControlPrevious onClick={onPrevClick}/>
        <ControlSubmit onSubClick={() => alert("submit")}/>
      </ButtonGroup>
    </section>
  );
}
