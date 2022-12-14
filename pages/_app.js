import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  return (  
    <div data-theme="emerald">
      <Component {...pageProps} />
    </div>
  )
}

export default MyApp
