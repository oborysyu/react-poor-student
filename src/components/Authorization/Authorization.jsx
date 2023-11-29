import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import { logIn } from "../../store/userSlice";
import styles from "./Authorization.module.css";

const Authorization = () => {
  const isUserLogged = useSelector((state) => state.user.isLogged);
  const dispatch = useDispatch();
  const [creds, setCreds] = useState({
    username: "",
    password: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(logIn(creds));
    setCreds({ username: "", password: "" });
  };

  if (isUserLogged) return <Navigate to="/settings" />;

  return (
    <>
      <div className={styles.bg} />
      <div className={styles.Auth_form_container}>
        <form className={styles.Auth_form} onSubmit={handleSubmit}>
          <div className={styles.Auth_form_content}>
            <div className={styles.form_field}>
              <input
                type="text"
                placeholder="Username"
                required
                value={creds.username}
                onChange={(e) =>
                  setCreds({ ...creds, username: e.target.value })
                }
              />
            </div>
            <div className={styles.form_field}>
              <input
                type="password"
                placeholder="Password"
                required
                value={creds.password}
                onChange={(e) =>
                  setCreds({ ...creds, password: e.target.value })
                }
              />
            </div>
            <div className={styles.form_field}>
              <button className={styles.button} type="submit">
                Log in
              </button>
            </div>
          </div>
        </form>
      </div>
    </>
  );
};

export { Authorization };
