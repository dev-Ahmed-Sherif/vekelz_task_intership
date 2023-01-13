import React from "react";
import Head from "next/head";
import Image from "next/image";
import { Inter } from "@next/font/google";
import styles from "../../styles/Home.module.css";
import Link from "next/link";

export default function index() {
  return (
    <>
      <Head>
        <title>Car Dashboard</title>
        <meta
          name="description"
          content="Designed by Ahmed Sherif Front-End and Cross Platform Mobile Developer"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        {/* <link rel="icon" href="/favicon.ico" /> */}
        <link rel="icon" href="/icon.svg" />
      </Head>
      <main className={styles.main_con}>
        <div className={styles.left}>
          <div className={styles.main_nav}>
            <div className={styles.topNav}>
              <Link href="/">
                <img src="/icon.svg" width="30" height="30" />
              </Link>

              <h2> Motiv. </h2>
            </div>
            <div className={styles.middleNav}>
              <ul>
                <li>
                  {" "}
                  <Link href="/">
                    <img src="/dash.svg" /> <p>Dashboard</p>
                  </Link>{" "}
                </li>
                <li>
                  {" "}
                  <img src="/assets.svg" /> <p>Assets</p>{" "}
                </li>
                <li className={styles.active}>
                  {" "}
                  <Link href="/booking">
                    <img src="/booking.svg" /> <p>Booking</p>
                  </Link>{" "}
                </li>
                <li>
                  {" "}
                  <img src="/sellcar.svg" /> <p>Sell Cars</p>{" "}
                </li>
                <li>
                  {" "}
                  <img src="/buycar.svg" /> <p>Buy Cars</p>{" "}
                </li>
                <li>
                  {" "}
                  <img src="/services.svg" /> <p>Services</p>{" "}
                </li>
                <li>
                  {" "}
                  <img src="/calender.svg" /> <p>Calender</p>{" "}
                </li>
                <li>
                  {" "}
                  <img src="/messages.svg" /> <p>Messages</p>{" "}
                </li>
              </ul>
            </div>
            <div className={styles.bottomNav}>
              <ul>
                <li>
                  <Link href="/">
                    <img src="/settings.svg" /> <p>Settings</p>
                  </Link>{" "}
                </li>
                <li>
                  <Link href="/sign-in">
                    <img src="/logout.svg" /> <p>Logout</p>{" "}
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className={styles.right}>
          <div className={styles.top}>
            <div className={styles.search_input}>
              <img src="/search.svg" />
              <hr />
              <input defaultValue="Search or type" />
            </div>
            <div className={styles.user}>
              <img src="/notify.svg" />
              <img src="/person.svg" className={styles.person} />
            </div>
          </div>
          <div className={styles.content_booking}>
            <h2> Booking </h2>
            <div className={styles.filter}>
              <div className={styles.one}>
                <button>
                  {" "}
                  New <img src="/arrow.svg" />{" "}
                </button>
                <button>
                  {" "}
                  Toyota <img src="/arrow.svg" />{" "}
                </button>
              </div>
              <div className={styles.two}>
                <button>
                  {" "}
                  <img src="/dash.svg" />{" "}
                </button>
                <button>
                  {" "}
                  <img src="/sellect.svg" />{" "}
                </button>
              </div>
            </div>
            <div className={styles.carCards}>
              <div className={styles.carCard}>
                <div className={styles.top}>
                  <h3> Porshe 718 Cayman S </h3>
                  <img src="/heartempty.svg" />
                </div>
                <h4> Coupe </h4>
                <img src="/carbook1.svg" />
                <div className={styles.bottom}>
                  <div className={styles.details}>
                    <div className={styles.person}>
                      <img src="/personshape.svg" />
                      <p> 4 </p>
                    </div>
                    <div className={styles.man}>
                      <img src="/rotate3.svg" />
                      <p> Manual </p>
                    </div>
                  </div>
                  <div className={styles.price}>
                    <p> $400 </p>
                    <p> /d </p>
                  </div>
                </div>
              </div>
              <div className={styles.carCard}>
                <div className={styles.top}>
                  <h3> Porshe 718 Cayman S </h3>
                  <img src="/heartfill.svg" />
                </div>
                <h4> Coupe </h4>
                <img src="/carbook2.svg" />
                <div className={styles.bottom}>
                  <div className={styles.details}>
                    <div className={styles.person}>
                      <img src="/personshape.svg" />
                      <p> 4 </p>
                    </div>
                    <div className={styles.man}>
                      <img src="/rotate3.svg" />
                      <p> Manual </p>
                    </div>
                  </div>
                  <div className={styles.price}>
                    <p> $400 </p>
                    <p> /d </p>
                  </div>
                </div>
              </div>
              <div className={styles.carCard}>
                <div className={styles.top}>
                  <h3> Porshe 718 Cayman S </h3>
                  <img src="/heartempty.svg" />
                </div>
                <h4> Coupe </h4>
                <img src="/carbook3.svg" />
                <div className={styles.bottom}>
                  <div className={styles.details}>
                    <div className={styles.person}>
                      <img src="/personshape.svg" />
                      <p> 4 </p>
                    </div>
                    <div className={styles.man}>
                      <img src="/rotate3.svg" />
                      <p> Manual </p>
                    </div>
                  </div>
                  <div className={styles.price}>
                    <p> $400 </p>
                    <p> /d </p>
                  </div>
                </div>
              </div>
              <div className={styles.carCard}>
                <div className={styles.top}>
                  <h3> Porshe 718 Cayman S </h3>
                  <img src="/heartempty.svg" />
                </div>
                <h4> Coupe </h4>
                <img src="/carbook4.svg" />
                <div className={styles.bottom}>
                  <div className={styles.details}>
                    <div className={styles.person}>
                      <img src="/personshape.svg" />
                      <p> 4 </p>
                    </div>
                    <div className={styles.man}>
                      <img src="/rotate3.svg" />
                      <p> Manual </p>
                    </div>
                  </div>
                  <div className={styles.price}>
                    <p> $400 </p>
                    <p> /d </p>
                  </div>
                </div>
              </div>
              <div className={styles.carCard}>
                <div className={styles.top}>
                  <h3> Porshe 718 Cayman S </h3>
                  <img src="/heartempty.svg" />
                </div>
                <h4> Coupe </h4>
                <img src="/carbook5.svg" />
                <div className={styles.bottom}>
                  <div className={styles.details}>
                    <div className={styles.person}>
                      <img src="/personshape.svg" />
                      <p> 4 </p>
                    </div>
                    <div className={styles.man}>
                      <img src="/rotate3.svg" />
                      <p> Manual </p>
                    </div>
                  </div>
                  <div className={styles.price}>
                    <p> $400 </p>
                    <p> /d </p>
                  </div>
                </div>
              </div>
              <div className={styles.carCard}>
                <div className={styles.top}>
                  <h3> Porshe 718 Cayman S </h3>
                  <img src="/heartempty.svg" />
                </div>
                <h4> Coupe </h4>
                <img src="/carbook6.svg" />
                <div className={styles.bottom}>
                  <div className={styles.details}>
                    <div className={styles.person}>
                      <img src="/personshape.svg" />
                      <p> 4 </p>
                    </div>
                    <div className={styles.man}>
                      <img src="/rotate3.svg" />
                      <p> Manual </p>
                    </div>
                  </div>
                  <div className={styles.price}>
                    <p> $400 </p>
                    <p> /d </p>
                  </div>
                </div>
              </div>
              <div className={styles.carCard}>
                <div className={styles.top}>
                  <h3> Porshe 718 Cayman S </h3>
                  <img src="/heartempty.svg" />
                </div>
                <h4> Coupe </h4>
                <img src="/carbook7.svg" />
                <div className={styles.bottom}>
                  <div className={styles.details}>
                    <div className={styles.person}>
                      <img src="/personshape.svg" />
                      <p> 4 </p>
                    </div>
                    <div className={styles.man}>
                      <img src="/rotate3.svg" />
                      <p> Manual </p>
                    </div>
                  </div>
                  <div className={styles.price}>
                    <p> $400 </p>
                    <p> /d </p>
                  </div>
                </div>
              </div>
              <div className={styles.carCard}>
                <div className={styles.top}>
                  <h3> Porshe 718 Cayman S </h3>
                  <img src="/heartempty.svg" />
                </div>
                <h4> Coupe </h4>
                <img src="/carbook8.svg" />
                <div className={styles.bottom}>
                  <div className={styles.details}>
                    <div className={styles.person}>
                      <img src="/personshape.svg" />
                      <p> 4 </p>
                    </div>
                    <div className={styles.man}>
                      <img src="/rotate3.svg" />
                      <p> Manual </p>
                    </div>
                  </div>
                  <div className={styles.price}>
                    <p> $400 </p>
                    <p> /d </p>
                  </div>
                </div>
              </div>
              <div className={styles.carCard}>
                <div className={styles.top}>
                  <h3> Porshe 718 Cayman S </h3>
                  <img src="/heartempty.svg" />
                </div>
                <h4> Coupe </h4>
                <img src="/carbook9.svg" />
                <div className={styles.bottom}>
                  <div className={styles.details}>
                    <div className={styles.person}>
                      <img src="/personshape.svg" />
                      <p> 4 </p>
                    </div>
                    <div className={styles.man}>
                      <img src="/rotate3.svg" />
                      <p> Manual </p>
                    </div>
                  </div>
                  <div className={styles.price}>
                    <p> $400 </p>
                    <p> /d </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
