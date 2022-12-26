import React, { Component, useState } from "react";
import Image from 'next/image'
import avatar from '../../public/avatar.png'

export default function HeroSection() {

    return (
        <section className="bg-blue-100">
            <div className="flex flex-col text-center p-10 py-10 ">
                <Image height="250" width="250" src={avatar} className="relative m-auto rounded-full" alt="any" objectFit="cover"></Image>
                <h2 className="text-14xl py-2 text-cyan-200 float-right font-medium dark:text-cyan-800 md:text-6xl block">
                    Hello, I`&apos;`m Austin Allen
                </h2>

                <h3 className="text-4xl py-2 dark:text-slate-700 md:text-2xl block">
                    Front-end web developer and UI/UX designer. Musician.
                </h3>
                <h5 className="w-96 text-sm self-center py-2 dark:text-slate-400 block">
                    2019 B.S. in Information Systems Management at Northern Arizona University
                </h5>
            </div>
        </section>
    )
}
