import Link from "next/link"

import { siteConfig } from "@/config/site"
import { buttonVariants } from "@/components/ui/button"
"use client"
import Image from "next/image";
// import styles from "./page.module.css";
import { Button } from "@camped-ui/button";
import { Input } from "@camped-ui/input";
import React, { useState } from 'react';

export function ButtonDemo() {
  return <Button>Button</Button>;
}
export function InputDemo() {
  return <Input type="email" placeholder="Email" />;
}


export default function IndexPage() {
  

  return (
    <div className="flex justify-center items-center">
    <div className="flex flex-col h-96 w-3/5  mt-40 items-center">
    <h1 className="text-5xl font-bold leading-tighter">Analyze Your <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-teal-400">Brand</span></h1>
    <h1 className="text-5xl font-bold">with <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-red-600 font-extrabold  tracking-tighter">Survey </span> by<span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-teal-400"> CampEd</span></h1>
    <i className="font-bold mt-5" >Enhance your brand's impact with strategic automation that delves into product analysis</i>
    <i className="font-bold" >through surveys, merging innovation with marketing excellence</i>
    <p className="text-base mt-7">The core objective of our survey-based product is to provide in-depth analysis and insights that empower</p>
    <p className="text-base">brands. Harnessing the strength of comprehensive surveys, we aim to offer a deeper understanding of</p>
    <p className="text-base">market dynamics. Recognizing the paramount importance of informed decision-making, our product is</p>
    <p className="text-base">finely crafted to deliver comprehensive analytical capabilities, aiding in optimizing and refining your</p>
    <p className="text-base">strategies.</p>
    <Button className="mt-7 w-28 border-blue-700 bg-blue-600 font-semibold"><a href="http://localhost:3000/sign-in">Sign In</a></Button>
    </div>
    </div>
    
  );
}
