import classNames from "classnames/bind";
import styles from "./Rope.module.scss";

const cx = classNames.bind(styles);
function Rope() {
  return (
    <img
      className={cx("rope")}
      src={require("../../assets/rope/rope.png")}
      alt="error"
    />
  );
}

export default Rope;
