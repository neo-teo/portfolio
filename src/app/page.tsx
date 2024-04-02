import About from "@/components/About";
import Footer from "@/components/Footer";
import Fun from "@/components/Fun";
import HomeHeader from "@/components/HomeHeader";
import Projects from "@/components/Projects";

export default function Home() {
  return (
    <main>
      <div>
        <HomeHeader />

        <div className="flex flex-col gap-5 py-5">
          <About />
          <Projects />
          <Fun />
        </div>

        <Footer />
      </div >
    </main>
  );
}
