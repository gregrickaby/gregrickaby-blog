import PropTypes from 'prop-types'
import Layout from '@/components/templates/Layout/Layout'
import config from '@/functions/config'
import {PAGES_PATH} from '@/functions/helpers'
import {getPostData} from '@/functions/posts'
import hydrate from 'next-mdx-remote/hydrate'
import {SocialProfileJsonLd} from 'next-seo'
import Image from 'next/image'

/**
 * Pass components into MDX files.
 *
 * @see https://github.com/vercel/next.js/tree/canary/examples/with-mdx-remote#conditional-custom-components
 */
const components = {Image}

/**
 * Render the HomePage component.
 *
 * @author Greg Rickaby
 * @param {object} props             The component attributes as props.
 * @param {object} props.source      The page content.
 * @param {object} props.frontMatter The page meta data.
 * @return {Element}                 The HomePage component.
 */
export default function HomePage({source, frontMatter}) {
  const content = hydrate(source, {components})
  return (
    <Layout
      title={`${config?.siteName} - ${config?.siteDescription}`}
      description={config?.ogDescription}
      openGraph={{
        title: `${frontMatter.title} - ${config?.siteName}`,
        description: frontMatter?.excerpt,
        images: [
          {
            url: `${config.siteUrl}${frontMatter?.coverImage}`,
            alt: frontMatter?.title
          }
        ]
      }}
    >
      <SocialProfileJsonLd
        type="Person"
        name={frontMatter?.author?.name}
        url={config?.siteUrl}
        sameAs={config?.footerNavigation.map((item) => item?.url)}
      />
      <article>{content}</article>
    </Layout>
  )
}

HomePage.propTypes = {
  frontMatter: PropTypes.object.isRequired,
  source: PropTypes.object.isRequired
}

/**
 * Get static props.
 *
 * @author Greg Rickaby
 * @see https://nextjs.org/docs/basic-features/data-fetching#getstaticprops-static-generation
 * @return {object} All page props.
 */
export async function getStaticProps() {
  const post = await getPostData(PAGES_PATH, 'homepage', components)

  return {
    props: {
      source: post?.mdx,
      frontMatter: post?.data
    }
  }
}
