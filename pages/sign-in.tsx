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
    <div>

    <Button className="border-0 bg-white text-black ml-5 mt-5"><a href="http://localhost:3000">&lt; Home</a></Button>
    
    <div className="flex justify-center items-center">
    <div className="flex flex-col h-80 w-2/5  mt-40 items-center">
      <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-red-600 font-extrabold text-xl tracking-tighter">CampEd Survey</span>
      <p className="font-bold mt-2 text-xl">Sign In</p>
      <p className="font-light mt-2 text-sm">Enter your email to sign in to your account </p>
      <Input className="mt-4 w-80 border-blue-700" placeholder="name@example.com" type="email"></Input>
      <Button className="mt-2 w-80 border-blue-700 bg-blue-600">Sign In with Email</Button>
      <p className="font-light mt-4 text-xs">&mdash;&mdash;&mdash;&mdash;&mdash;OR CONTINUE WITH&mdash;&mdash;&mdash;&mdash;&mdash;&mdash;</p>
      <Button className="mt-5 w-80 bg-white border border-black text-black ">Sign In with Google</Button>

    </div>
    </div>
    </div>
   
    
  );
}
