import AmbientBackground from './components/AmbientBackground'
import Header from './components/Header'
import Hero from './components/Hero'
import Benefits from './components/Benefits'
import FormSection from './components/FormSection'
import FAQ from './components/FAQ'
import Footer from './components/Footer'

export default function App() {
  return (
    <div className="min-h-screen bg-brand-cream overflow-x-hidden">
      <AmbientBackground />
      <Header />
      <main>
        <Hero />
        <Benefits />
        <FormSection />
        <FAQ />
      </main>
      <Footer />
    </div>
  )
}
