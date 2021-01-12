import PropTypes from 'prop-types'

export default function ArchiveHeader(props) {
  return (
    <div className="text-center space-y-8 mb-12">
      <h1
        className="title wide"
        dangerouslySetInnerHTML={{__html: props?.title}}
      />
      {props?.description && (
        <p
          className="font-roboto text-gray-500 dark:text-gray-100"
          dangerouslySetInnerHTML={{__html: props?.description}}
        />
      )}
      <hr />
    </div>
  )
}

ArchiveHeader.propTypes = {
  description: PropTypes.string,
  title: PropTypes.string
}
