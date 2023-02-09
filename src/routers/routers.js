import GameOver from "../layouts/GameOver/GameOver";
import MenuLayout from "../layouts/MenuLayout/MenuLayout";
import PlayingLayout from "../layouts/PlayingLayout/PlayingLayout";

export const routers = [
  {
    link: "/",
    element: <MenuLayout />,
  },

  {
    link: "/playing",
    element: <PlayingLayout />,
  },
  {
    link: "/gameover",
    element: <GameOver />,
  },
];
