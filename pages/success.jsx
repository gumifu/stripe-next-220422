import Link from 'next/link'

export async function getServerSideProps(context) {
    try {
        const host = context.req.headers.host || 'localhost:3000'
        const protocol = /^localhost/.test(host) ? 'http' : 'https'
        const products = await fetch(`${protocol}://${host}/api/products`)
            .then(data => data.json())
        return {
            props: {
                products,
            }
        }
    } catch (e) {
        console.log(e)
        return {
            props: {
                products: [],
            }
        }
    }
}

import Head from "next/head";

export default function HelloWorld(props) {
   return (
       <>
           <Head>
               <title>Success</title>
               <meta name="description" content="検索エンジン用の説明文" />
           </Head>
           <Link href="/">
           <h1>Thank you✨</h1>
           </Link>

            {/* <pre><code>{JSON.stringify(props,null,2)}</code></pre> */}
       </>
   )
}
