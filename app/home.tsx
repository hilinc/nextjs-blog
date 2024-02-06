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
        <p>Hi, I'm Lynch, I'm a front-end engineer with many years of experience. You can contact me at lync201y@gmail.com</p>
        <p>
          (This is a sample website - you’ll be building a site like this on <a href="https://nextjs.org/learn">our Next.js tutorial</a>.)
        </p>
      </section>
      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
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
      </section>
    </Layout>
  );
}
