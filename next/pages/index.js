import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import { About } from "./about";
export default function Home() {
  return (
    <div>
      <About />
    </div>
  );
}
