import About from "@/components/About";
import Doodle from "@/components/Doodle";
import Footer from "@/components/Footer";
import Fun from "@/components/Fun";
import HomeHeader from "@/components/HomeHeader";
import Projects from "@/components/Projects";

export default function Home() {
  return (
    <main>
      <div>
        <HomeHeader />

        <div className="min-h-[90vh] flex flex-col justify-between">
          <div className="flex flex-col gap-10 py-10">
            <About />
            <Projects />
            <Fun />
          </div>

          <Footer />
        </div>

        <Doodle />

      </div >
    </main>
  );
}
