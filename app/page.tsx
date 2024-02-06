import Home from "./home";
import { getSortedPostsData } from "../lib/posts";
import { siteTitle } from "../components/post-layout";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: siteTitle,
};

export default async function Page() {
  // Fetch data directly in a Server Component
  const allPostsData = await getSortedPostsData();
  // Foward fetched data to Client Component
  return <Home allPostsData={allPostsData} />;
}
