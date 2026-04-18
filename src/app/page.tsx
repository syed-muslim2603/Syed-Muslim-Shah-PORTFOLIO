import ScrollyCanvas from "@/components/ScrollyCanvas";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <main className="bg-[#121212]">
      {/* 
        ScrollyCanvas acts as the Hero section with 500vh height. 
        It will map the scroll progress to the 120 image frames. 
      */}
      <ScrollyCanvas />

      {/* 
        Projects section follows immediately after the canvas finishes scrubbing.
        It has a z-index to appear on top of the relative flow.
      */}
      <Projects />
      
      {/* 
        Action Footer for links and CTAs.
      */}
      <Contact />
    </main>
  );
}
