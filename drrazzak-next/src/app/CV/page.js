import Resume from "./cv";

export const metadata = {
  title: "Resume",
  alternates: {
    canonical: "https://www.drabdurrazzak.com/CV",
  },
};



export default function Page(){

  return <>
  <Resume/>
  </>
}