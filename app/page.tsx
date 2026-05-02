import CallBack from "./components/CallBack";
import Features from "./components/Features";
import Hero from "./components/Hero";
import HowWeWork from "./components/HowWeWork";
import Services from "./components/Services";
import Testimonials from "./components/Testimonials";

export default function Home() {
  return (
    <>
      <Hero />
      <Services />
      <Features />
      <HowWeWork />
      <CallBack />
      <Testimonials />
    </>
  );
}
