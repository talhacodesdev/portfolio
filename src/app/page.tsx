import { About } from '@/components/home/about';
import { Header } from '@/components/home/header';
import { Hero } from '@/components/home/hero';
import { Projects } from '@/components/home/projects';
import { Skills } from '@/components/home/skills';

const Page = () => {
  return (
    <div className="w-full flex flex-col items-center">
      <Header />
      <section id="hero" className="w-full max-w-4xl mx-auto pt-24 md:pt-32">
        <Hero />
      </section>

      <section id="about" className="w-full max-w-4xl mx-auto">
        <About />
      </section>

      <section id="skills" className="w-full max-w-4xl mx-auto">
        <Skills />
      </section>

      <section id="projects" className="w-full max-w-4xl mx-auto">
        <Projects />
      </section>

      {/* <Footer /> */}
    </div>
  );
};

export default Page;
