import { useDispatch, useSelector } from "react-redux";
import { changeFilter, selectNameFilter } from "../../redux/filtersSlice";
import css from "./SearchBox.module.css";

export default function SearchBox() {
  const handleChange = (e) => {
    // useDisp
    // inputValue = useSelect
  };

  return (
    <div className={css["input-container"]}>
      <label htmlFor="">Find contacts by name</label>
      <input
        type="text"
        value={inputValue}
        onChange={handleChange}
        className={css["input-search"]}
      />
    </div>
  );
}
