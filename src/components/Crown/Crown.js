import classNames from "classnames/bind";
import styles from "./Crown.module.scss";

const cx = classNames.bind(styles);
function Crown() {
  return (
    <img
      src={require("../../assets/crown/crown.png")}
      className={cx("crown-img")}
    />
  );
}

export default Crown;
