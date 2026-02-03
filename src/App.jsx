import Header from './components/Header'
import Hero from './components/Hero'
import About from './components/About'
import Writing from './components/Writing'
import Work from './components/Work'
import Footer from './components/Footer'

function App() {
  return (
    <div className="min-h-screen bg-paper">
      <Header />
      <main>
        <Hero />
        <About />
        <Writing />
        <Work />
      </main>
      <Footer />
    </div>
  )
}

export default App
