import config from '@/functions/config'
import dynamic from 'next/dynamic'

/**
 * Only render <DisplayOptions /> client side.
 *
 * @see https://nextjs.org/docs/advanced-features/dynamic-import#with-no-ssr
 */
const DisplayOptions = dynamic(() => import('./DisplayOptions'), {
  ssr: false
})

export default function Footer() {
  return (
    <footer className="text-center text-xs font-mono grid gap-y-3">
      <hr />
      <div className="flex justify-center space-x-4">
        {!!config.socialNetworks?.length &&
          config?.socialNetworks.map((network) => {
            return (
              <a
                className="shadow-none no-underline"
                key={network?.label}
                href={network?.url}
              >
                {network?.label}
              </a>
            )
          })}
      </div>
      <small>
        &copy; 2008-{new Date().getFullYear()} &middot; Powered by{' '}
        <a href="https://nextjs.org">Next.js</a>
      </small>
      <DisplayOptions />
    </footer>
  )
}
