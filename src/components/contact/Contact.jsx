import { FaPhone, FaUser } from "react-icons/fa";
import css from "./Contact.module.css";

export default function Contact({ id, name, number }) {
  const handleDelete = () => {
    //    dispatch
  };

  return (
    <div className={css["container-contact"]}>
      <div key={id} className={css["contact-info"]}>
        <div>
          <FaUser /> {name}
        </div>
        <div>
          <FaPhone /> {number}
        </div>
      </div>
      <button onClick={handleDelete} className={css["btn-delete"]}>
        Delete
      </button>
    </div>
  );
}
