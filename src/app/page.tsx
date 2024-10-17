import Image from "next/image";
import { Navbar } from "@/components/navbar";
import { Heroscroll } from "@/components/Container-scroll";

export default function Home() {
  return (
    <>
      <Navbar />
      <Heroscroll />

      <h1>Hello from Parth</h1>
    </>
  );
}
