import React from "react";
import Link from "next/link";
import styles from "../../styles/Sign.module.css";

export default function index() {
  return (
    <>
      <div className={styles.container}>
        <div className={styles.content}>
          <h2> Get's started </h2>
          <p>
            {" "}
            Don't have an account?{" "}
            <Link href="/sign-up" className={styles.page_link}>
              Sign Up
            </Link>{" "}
          </p>
          <div className={styles.buttons}>
            <button className={styles.button}>
              {" "}
              <img width="25" height="25" src="/google.png" /> Sign in with
              Google{" "}
            </button>

            <button className={`${styles.button} ${styles.fa}`}>
              <img width="17" height="17" src="/facebook.svg" />
              Sign in with Facebook{" "}
            </button>
          </div>
          <div className={styles.or}>
            <hr />
            <p>or</p>
            <hr />
          </div>
          <div className={styles.form}>
            <div className={styles.form_input}>
              <label> Email </label>
              <input type="email" defaultValue="uistore@gmail.com" />
            </div>
            <div className={styles.form_input}>
              <label> Password </label>
              <input type="email" defaultValue="************" />
              <img src="/eye.svg" />
            </div>
          </div>
          <div className={styles.form_buttom}>
            <div className={styles.check}>
              <input type="checkbox" />
              <label> Remember me </label>
            </div>
            <a className={styles.page_link}> Forget your password? </a>
          </div>
          <Link className={`${styles.button} ${styles.login}`} href="/">
            Sign in
          </Link>
        </div>
      </div>
    </>
  );
}
