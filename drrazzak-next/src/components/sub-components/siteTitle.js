import Head from "next/head";



export default function SiteTitle({title,metaName,metaContent}){

    return <>
    <Head>
        <title>{title}</title>
        <meta name={metaName} content={metaContent} />
      </Head>
    </>
}