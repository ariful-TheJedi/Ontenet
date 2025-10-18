import Gallery from "./gallery";

export const metadata = {
  title: "Photo Gallery",
  alternates: {
    canonical: "https://www.drabdurrazzak.com/blogs",
  },
};



export default function Page(){

  return <>
  <Gallery/>
  </>
}