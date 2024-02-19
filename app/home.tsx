// `app/home.tsx`
"use client";
import Link from "next/link";
import Date from "../components/date";
import Layout from "../components/post-layout";
import utilStyles from "../styles/utils.module.css";

// This is a Client Component (same as components in the `pages` directory)
// It receives data as props, has access to state and effects, and is
// prerendered on the server during the initial page load.
export default function Home({ allPostsData }) {
  return (
    <Layout home>
      <section className={utilStyles.headingMd}>
        <p>Hi, I'm a front-end engineer and I plan to offer many useful tools to help you complete your daily tasks more quickly</p>
        <p>We have only one goal, and that is to leave work early</p>
        <p>If you have some good ideas or special requests, you are very welcome to email me. My email is lync201y@gmail.com</p>
      </section>
      {/* <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <h2 className={utilStyles.headingLg}>Blog</h2>
        <ul className={utilStyles.list}>
          {allPostsData.map(({ id, date, title }) => (
            <li className={utilStyles.listItem} key={id}>
              <Link href={`/posts/${id}`}>{title}</Link>
              <br />
              <small className={utilStyles.lightText}>
                <Date dateString={date} />
              </small>
            </li>
          ))}
        </ul>
      </section> */}
    </Layout>
  );
}
