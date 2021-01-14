import PropTypes from 'prop-types'
import ArchiveHeader from '@/components/molecules/ArchiveHeader'
import Card from '@/components/Card'
import Layout from '@/components/Layout'
import config from '@/functions/config'
import {POSTS_PATH} from '@/functions/getMdx'
import {getAllPosts, generateRssFeed} from '@/functions/getPosts'

/**
 * Render the BlogArchive component.
 *
 * @author Greg Rickaby
 * @param {object} props       The component attributes as props.
 * @param {any}    props.posts The post data.
 * @return {Element}           The BlogArchive component.
 */
export default function BlogArchive({posts}) {
  return (
    <Layout title={`Blog - ${config?.siteName}`} description="My latest posts.">
      <ArchiveHeader title="Blog" description="My latest posts." />
      <div className="grid gap-12 md:grid-cols-2">
        {!!posts?.length &&
          posts.map((post, index) => (
            <Card key={index} {...post} path="blog" />
          ))}
      </div>
    </Layout>
  )
}

BlogArchive.propTypes = {
  posts: PropTypes.any.isRequired
}

/**
 * Get static props.
 *
 * @author Greg Rickaby
 * @see https://nextjs.org/docs/basic-features/data-fetching#getstaticprops-static-generation
 * @return {object} All post props.
 */
export async function getStaticProps() {
  const posts = getAllPosts(POSTS_PATH)
  await generateRssFeed()

  return {
    props: {
      posts
    }
  }
}
