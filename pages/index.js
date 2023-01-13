import Head from "next/head";
import Image from "next/image";
import { Inter } from "@next/font/google";
import styles from "../styles/Home.module.css";
import Link from "next/link";
import google from "../public/icon.svg";
// import { AnimatedTheme } from "@amcharts/amcharts5/themes/Animated";
import * as am5 from "@amcharts/amcharts5";
import * as am5xy from "@amcharts/amcharts5/xy";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
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
                <li className={styles.active}>
                  {" "}
                  <Link href="/">
                    <img src="/dash.svg" /> <p>Dashboard</p>
                  </Link>{" "}
                </li>
                <li>
                  {" "}
                  <img src="/assets.svg" /> <p>Assets</p>{" "}
                </li>
                <li>
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
          <div className={styles.content}>
            <div className={styles.first}>
              <div className={`${styles.card} ${styles.active}`}>
                <div className={`${styles.activeCard} ${styles.topCard}`}>
                  <img src="/1.svg" />
                </div>
                <h3> Energy </h3>
                <div className={styles.bottom}>
                  <p>45%</p>
                  <img src="/curvepurp.svg" />
                  <img className={styles.one} src="/curvewhitesmall.svg" />
                </div>
              </div>
              <div className={styles.card}>
                <div className={`${styles.topCard} ${styles.com}`}>
                  <img src="/2.svg" />
                </div>
                <h3> Range </h3>
                <div className={styles.bottom}>
                  <p>157%</p>
                  <img src="/curvewhite.svg" />
                  <img className={styles.two} src="/curvemov.svg" />
                </div>
              </div>
              <div className={styles.card}>
                <div className={`${styles.topCard} ${styles.com}`}>
                  <img src="/3.svg" />
                </div>
                <h3> Break fluid </h3>
                <div className={styles.bottom}>
                  <p>9%</p>
                  <img src="/curvewhite.svg" />
                  <img className={styles.three} src="/curvepurpsmall.svg" />
                </div>
              </div>
              <div className={styles.card}>
                <div className={`${styles.topCard} ${styles.com}`}>
                  <img src="/4.svg" />
                </div>
                <h3> Tire Wear </h3>
                <div className={styles.bottom}>
                  <p>25%</p>
                  <img src="/curvewhite.svg" />
                  <img className={styles.four} src="/curvegold.svg" />
                </div>
              </div>
            </div>
            <div className={styles.second}></div>
            <div className={styles.third}>
              <div className={`${styles.First} ${styles.card}`}>
                <div className={styles.topThird}>
                  <img src="/rotate.svg" />
                  <h3> 64% Recommend </h3>
                </div>
                <div className={styles.middle}>
                  <img src="/carDash1.svg" />
                  <h2> Mini Cooper </h2>
                </div>
                <div className={styles.bottomThird}>
                  <div>
                    <img src="/rotate2.svg" />
                    <p>132k</p>
                    <img src="/sett.svg" />
                    <img src="/elec.svg" />
                  </div>
                  <p>$32/h</p>
                </div>
              </div>
              <div className={`${styles.Sec} ${styles.card}`}>
                <div className={styles.topThird}>
                  <img src="/rotate.svg" />
                  <h3> 74% Recommend </h3>
                </div>
                <div className={styles.middle}>
                  <img src="/carDash2.svg" />
                  <h2> Porsch 911 Carrera </h2>
                </div>
                <div className={styles.bottomThird}>
                  <div>
                    <img src="/rotate2.svg" />
                    <p>130k</p>
                    <img src="/sett.svg" />
                    <img src="/elec.svg" />
                  </div>
                  <p>$28/h</p>
                </div>
              </div>
              <div className={`${styles.Third} ${styles.card}`}>
                <div className={styles.topThird}>
                  <img src="/rotate.svg" />
                  <h3> 74% Recommend </h3>
                </div>
                <div className={styles.middle}>
                  <img src="/carDash3.svg" />
                  <h2> Porsch 911 Carrera </h2>
                </div>
                <div className={styles.bottomThird}>
                  <div>
                    <img src="/rotate2.svg" />
                    <p>130k</p>
                    <img src="/sett.svg" />
                    <img src="/elec.svg" />
                  </div>
                  <p>$28/h</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div id="chartdiv"></div>
      </main>
    </>
  );
}
