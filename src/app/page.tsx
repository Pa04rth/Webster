import Image from "next/image";
import { Navbar } from "@/components/navbar";
import { Heroscroll } from "@/components/Container-scroll";
import Footer from "@/components/Footer/footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <Heroscroll />
      <Footer/>

      <h1>Hello from Parth</h1>
    </>
  );
}
