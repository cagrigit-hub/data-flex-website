
import HeadTag from '../components/Metatags/HeadTag'
import Companies from '../components/Sections/Companies/Companies'
import Footer from '../components/Sections/HandF/Footer'
import Header from '../components/Sections/HandF/Header'
import Hero from '../components/Sections/Hero'
import Pricing from '../components/Sections/Pricing'
import Products from '../components/Sections/Products'
import Purpose from '../components/Sections/Purpose'

export default function Home() {
  return (
    <>
    <HeadTag />
    <Header />
    <main id="main-content">
      <Hero />
      <Purpose />
      <Products />
      <Companies />
      <Pricing />
    </main>
    <Footer />
    </>
  )
}
