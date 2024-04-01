import { FaArrowUp } from "react-icons/fa"; // Імпортуємо іконку стрілки вгору з бібліотеки react-icons
import ScrollToTop from "react-scroll-up";
import css from "./ScrollUp.module.css"; // імпорт стилів

const ScrollUpButton = () => {
  return (
    <ScrollToTop showUnder={160}>
      <span className={css.scrollUp}>
        <FaArrowUp />
      </span>{" "}
      {/* Використовуємо іконку стрілки вгору */}
    </ScrollToTop>
  );
};

export default ScrollUpButton;
