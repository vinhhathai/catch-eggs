import { Route, Routes } from "react-router";
import { routers } from "./routers/routers";
import classNames from "classnames/bind";
import styles from "./App.module.scss";

const cx = classNames.bind(styles);
function App() {
  return (
    <div className={cx("app")}>
      <Routes>
        {routers.map((item, index) => {
          return <Route path={item.link} element={item.element} key={index} />;
        })}
      </Routes>
    </div>
  );
}

export default App;
