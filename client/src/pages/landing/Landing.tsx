// import { axiosClient } from "../../config"
import NavBar from "./NavBar"

interface Props { }

export default function Landing({ }: Props) {
  return (
    <article className="flex flex-col items-center justify-center min-h-screen">
      {/* <h1 className="p-4 font-light tracking-wider uppercase text-7xl rounded-2xl bg-primary-foreground text-primary-500">
        Landing Page
      </h1> */}

      <section id="navbar" className="w-full text-center">
        <NavBar />
      </section>

      <section id="hero" className="w-full flex items-center justify-center  h-screen text-center uppercase tracking-widest text-muted text-7xl">
        Hero
      </section>
    </article>
  )
}