import utilStyles from "../../../styles/utils.module.css";
import Date from "../../../components/date";
import PostLayout from "../../../components/post-layout";
import { getPostData } from "../../../lib/posts";
import Head from "next/head";

export const dynamicParams = true;

export async function generateStaticParams() {
  return [{ id: "1" }, { id: "2" }];
}

export async function generateMetadata({ params }) {
  const postData = await getPostData(params.id);
  return {
    title: postData.title,
  };
}

export default async function Post({ params }) {
  const postData = await getPostData(params.id);
  return (
    <PostLayout>
      <article>
        <h1 className={utilStyles.headingXl}>{postData.title}</h1>
        <div className={utilStyles.lightText}>
          <Date dateString={postData.date} />
        </div>
        <div dangerouslySetInnerHTML={{ __html: postData.contentHtml }}></div>
      </article>
    </PostLayout>
  );
}
