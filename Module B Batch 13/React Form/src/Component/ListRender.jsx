import React from "react";
import styles from "./ListRender.module.css";

const ListRender = ({ users }) => {
  return (
    <div className={styles.user_list}>
      {users.map((user, index) => (
        <div key={index} className={styles.user_card}>
          <h3>
            {user.firstName} {user.lastName}
          </h3>
          <p>
            <strong>Email:</strong> {user.email}
          </p>
          <p>
            <strong>Organization:</strong> {user.organization}
          </p>
          <p>
            <strong>Organization Size:</strong> {user.organizationSize}
          </p>
          <p>
            <strong>Industry:</strong> {user.industry}
          </p>
          <p>
            <strong>Agree to Terms:</strong> {user.agree ? "Yes" : "No"}
          </p>
        </div>
      ))}
    </div>
  );
};

export default ListRender;
