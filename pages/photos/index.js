import PageHeader from '@/components/molecules/PageHeader/PageHeader'
import Layout from '@/components/templates/Layout/Layout'
import config from '@/functions/config'
import {getPhotos} from '@/functions/photos'
import Image from 'next/image'
import Link from 'next/link'
import PropTypes from 'prop-types'
import Masonry from '../../components/atoms/Masonry/Masonry'

/**
 * Render the PhotosArchive component.
 *
 * @author Greg Rickaby
 * @param {object} props        The component attributes as props.
 * @param {any}    props.photos The photo data.
 * @return {Element}            The PhotosArchive component.
 */
export default function PhotosArchive({photos}) {
  return (
    <Layout
      title={`Photos - ${config?.siteName}`}
      description="Some of my favorite photos."
      layout="wide"
    >
      <PageHeader title="Photos" excerpt="Some of my favorite photos." />
      <Masonry>
        {!!photos?.length &&
          photos.map((photo, index) => {
            return (
              <Link key={index} href={`/photos/${photo?.slug}`}>
                <a>
                  <Image
                    alt={photo?.description}
                    height={photo?.height}
                    src={photo?.pathRelative}
                    width={photo?.width}
                  />
                </a>
              </Link>
            )
          })}
      </Masonry>
    </Layout>
  )
}

PhotosArchive.propTypes = {
  photos: PropTypes.any.isRequired
}

/**
 * Get static props.
 *
 * @author Greg Rickaby
 * @see https://nextjs.org/docs/basic-features/data-fetching#getstaticprops-static-generation
 * @return {object} All book props.
 */
export async function getStaticProps() {
  const photos = await getPhotos()

  return {
    props: {
      photos
    }
  }
}
