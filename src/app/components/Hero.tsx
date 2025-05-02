import Image from "next/image";
import profileImage from "../../../public/images/profile.jpg";
import React from "react";
import Link from "next/link";

const Hero = () => {
  return (
    <div className='text-center pt-10'>
      <Image className='mx-auto rounded-full' src={profileImage} alt='picture of the author' width={250} height={250} priority />
      <h2 className='text-3xl font-bold mt-2'>{"Hi, I'm Jung"}</h2>
      <Link href='/contact' className='inline-block bg-yellow-500 font-bold rounded-2xl py-1 px-4 mt-2'>
        Contact Me
      </Link>
    </div>
  );
};

export default Hero;
