import Article from '@/components/Article'
import Layout from '@/components/Layout'
import config from '@/functions/config'
import {BOOKS_PATH} from '@/functions/getMdx'
import {getPostData, getPostsPath} from '@/functions/getPosts'
import hydrate from 'next-mdx-remote/hydrate'
import {NextSeo} from 'next-seo'

/**
 * Dynamically import components into MDX files.
 *
 * @see https://github.com/vercel/next.js/tree/canary/examples/with-mdx-remote#conditional-custom-components
 */
const components = {}

export default function BookPost({source, frontMatter}) {
  const content = hydrate(source, {components})
  return (
    <Layout>
      <NextSeo
        title={`${frontMatter.title} - ${config?.siteName}`}
        description={frontMatter?.excerpt}
        openGraph={{
          title: `${frontMatter.title} - ${config?.siteName}`,
          description: frontMatter?.excerpt,
          images: [
            {
              url: `${config.siteUrl}${frontMatter?.ogImage?.url}`,
              alt: frontMatter?.excerpt
            }
          ]
        }}
      />
      <Article frontMatter={frontMatter}>{content}</Article>
    </Layout>
  )
}

export async function getStaticPaths() {
  const paths = getPostsPath(BOOKS_PATH)

  return {
    paths,
    fallback: false
  }
}

export async function getStaticProps({params}) {
  const post = await getPostData(BOOKS_PATH, params.slug, components)

  return {
    props: {
      source: post?.mdx,
      frontMatter: post?.data
    }
  }
}
