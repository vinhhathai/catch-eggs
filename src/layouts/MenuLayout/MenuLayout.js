import classNames from "classnames/bind";
import { Link } from "react-router-dom";
import styles from "./MenuLayout.module.scss";

const cx = classNames.bind(styles);
function MenuLayout() {
  return (
    <div className={cx("wrapper")}>
      <Link to="/playing">
        <img
          className={cx("play-btn")}
          src={require("../../assets/button/play.png")}
          alt="error"
        />
      </Link>
    </div>
  );
}

export default MenuLayout;
