"use client";

import { Inter } from "@next/font/google";
import styles from "./page.module.css";
import EmblaCarousel from "@/components/EmblaCarousel";
import { EmblaOptionsType } from "embla-carousel-react";
import "./embla.css";
import "./sandbox.css";
import "./base.css";
import Catalogue from "@/components/Catalogue";
import SearchBox from "@/components/SearchBox";
import {NavMenu} from "@/components/NavMenu";
import { navigationMenu } from "@/mockData/navigationMenu";

const inter = Inter({ subsets: ["latin"] });

const OPTIONS: EmblaOptionsType = {};
const SLIDE_COUNT = 5;
const SLIDES = Array.from(Array(SLIDE_COUNT).keys());

export default function Home() {
  return (
    <main className="sandbox">
      <section className="sandbox__carousel">
        <EmblaCarousel slides={SLIDES} options={OPTIONS} />
      </section>
      <div className="w-full">
        <NavMenu navigationMenu={navigationMenu} />
      </div>
      <div className="flex flex-col px-20">
        <div className="flex pb-2">
          <div className="flex-1">
            <Catalogue />
          </div>
        </div>

        <div className="flex gap-2">
          <div className="flex-1">
            <Catalogue />
          </div>
          <div className="flex-1">
            <Catalogue />
          </div>
          <div className="flex-1 sm:hidden lg:block">
            <Catalogue />
          </div>
        </div>
      </div>

      <div className="flex flex-col w-100 px-20 pt-10">
        <div className="flex pb-2">
          <div className="flex-1">
            <Catalogue />
          </div>
        </div>

        <div className="flex gap-2">
          <div className="flex-1">
            <Catalogue />
          </div>
          <div className="flex-1">
            <Catalogue />
          </div>
          <div className="flex-1 sm:hidden lg:block">
            <Catalogue />
          </div>
        </div>
      </div>
    </main>
  );
}
