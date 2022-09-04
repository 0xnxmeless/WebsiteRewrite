import Head from "next/head";
import styles from "../styles/Home.module.css";
import { FaSpotify } from "react-icons/fa";
import {
    AiFillInstagram,
    AiFillGithub,
    AiFillLinkedin,
    AiFillMail,
} from "react-icons/ai";

export default function Home() {
    return (
        <div className={styles.container}>
            <Head>
                <title>Dominic Hoe</title>
                <meta
                    name="viewport"
                    content="width=device-width, initial-scale=1, shrink-to-fit=no"
                />
                <meta httpEquiv="x-ua-compatible" content="ie=edge" />
                <meta
                    property="og:description"
                    content="Dominic Hoe: developer, tech enthusiast and creator"
                />
                <meta
                    name="description"
                    content="Dominic Hoe: developer, tech enthusiast and creator"
                />
                <meta
                    property="twitter:description"
                    content="Dominic Hoe: developer, tech enthusiast and creator"
                />
                <meta property="theme-color" content="#14bee0" />
                <meta property="og:title" content="Dominic Hoe" />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <div className={styles.main}>
                <h1>
                    Hello! My name&apos;s <span>Dom</span>.{" "}
                    <span className={styles.wave}>👋</span>
                </h1>
                <p>
                    I&apos;m a 17 year old full-stack developer based in{" "}
                    <span>Peterborough, England</span>. I&apos;m currently
                    studying a <span>Level 3 Computing</span> diploma at{" "}
                    <span>Peterborough Regional College</span>.
                </p>
                <ul className={styles.socials}>
                    <li>
                        <a href="https://github.com/Dominic-Hoe">
                            <AiFillGithub size={30} />
                        </a>
                    </li>
                    <li>
                        <a href="#">
                            <FaSpotify size={30} />
                        </a>
                    </li>
                    <li>
                        <a href="https://instagram.com/domhoe__dev_">
                            <AiFillInstagram size={30} />
                        </a>
                    </li>
                    <li>
                        <a href="#">
                            <AiFillLinkedin size={30} />
                        </a>
                    </li>
                    <li>
                        <a href="mailto:hello@domhoe.dev">
                            <AiFillMail size={30} />
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    );
}
