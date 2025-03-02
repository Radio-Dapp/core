// import { axiosClient } from "../../config"
import ThemeSwitch from "../../shared/components/ThemeSwitch"
import Hero from "./Hero"
import NavBar from "./NavBar"

interface Props { }

export default function Landing({ }: Props) {
  return (
    <article className="relative h-full w-full overflow-x-clip flex flex-col items-center justify-center min-h-screen">
      
      <div className="fixed bottom-0 z-20 right-0 m-6">
        <ThemeSwitch />
      </div>

      <section id="navbar" className="w-full text-center">
        <NavBar />
      </section>

      <section id="hero" className="w-full">
        <Hero />
      </section>

      {/* <section id="features" className="w-full flex items-center justify-center bg-grey-100 h-screen text-center uppercase tracking-widest text-muted text-7xl">
        Features
      </section> */}
    </article>
  )
}