import {mdxFileList} from '@/functions/getMdx'
import a11yEmoji from '@fec/remark-a11y-emoji'
import fs from 'fs'
import matter from 'gray-matter'
import renderToString from 'next-mdx-remote/render-to-string'
import path from 'path'
import oembed from 'remark-oembed'
import prism from 'remark-prism'

/**
 * Process MDX and front matter for getStaticProps().
 *
 * @see https://github.com/hashicorp/next-mdx-remote
 *
 * @param {string} directory   The posts directory.
 * @param {string} slug        The post slug you want to query.
 * @param {object} components  Optional React components.
 * @return {object}
 */
export async function getPostData(directory, slug, components) {
  const postFilePath = path.join(directory, `${slug}.mdx`)
  const source = fs.readFileSync(postFilePath)
  const {content, data} = matter(source)
  const mdx = await parseMDX(content, components, data)

  return {
    mdx,
    data
  }
}

/**
 * Get posts and their raw data.
 *
 * @param {string} directory The directory of posts.
 * @return {object}
 */
export function getAllPosts(directory) {
  const data = mdxFileList(directory).map((filePath) => {
    const source = fs.readFileSync(path.join(directory, filePath))
    const {content, data} = matter(source)

    return {
      content,
      data,
      filePath
    }
  })

  // Sort posts by date, desc.
  const posts = data.sort((post1, post2) => {
    return post1?.data.date > post2?.data.date ? '-1' : '1'
  })

  return posts
}

/**
 * Get all post paths.
 *
 * @param {string} directory The directory of posts.
 * @return {object}
 */
export function getPostsPath(directory) {
  return mdxFileList(directory)
    .map((path) => path.replace(/\.mdx?$/, ''))
    .map((slug) => ({params: {slug}}))
}

/**
 * Parse MDX and front matter data.
 *
 * @see https://github.com/vercel/next.js/tree/master/examples/with-mdx-remote
 * @see https://github.com/remarkjs/remark/blob/main/doc/plugins.md
 *
 * @param {string} content     Markdown content.
 * @param {object} components  Any optional React components.
 * @param {object} data        Frontmatter data.
 * @return {object}
 */
export async function parseMDX(content, components, data) {
  return await renderToString(content, {
    components,
    mdxOptions: {
      remarkPlugins: [
        a11yEmoji,
        [oembed, {syncWidget: true}],
        [
          prism,
          {
            transformInlineCode: true,
            plugins: [
              'autolinker',
              'command-line',
              'clipboard',
              'data-uri-highlight',
              'diff-highlight',
              'inline-color',
              'keep-markup',
              'line-numbers',
              'show-invisibles',
              'treeview'
            ]
          }
        ]
      ]
    },
    scope: data
  })
}