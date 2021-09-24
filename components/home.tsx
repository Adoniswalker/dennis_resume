import React from 'react';
import DennisImage from '../public/dennis_koech-4.jpg'
import Image from 'next/image'

export const Main = () =>{
    return (
        <div className="container mx-auto">
            <div className="grid grid-cols-7 gap-4 pt-10">
                <div className="col-span-3 pl-20">
                    <Image src={DennisImage} alt="dennis Image"/>
                </div>
                <div className="col-span-4">
                    <h6>I am Dennis and I\'m a <span>Mid level full stack Developer</span></h6>
                    <p>2.8 years demonstrated experience in designing, architecting, and
                        developing enterprise-level internet solutions. I am a passionate,
                        knowledgeable, and self-driven Software Engineer with a bachelor’s
                        degree in computer science from the University of Eldoret.</p>
                </div>
            </div>
        </div>
    )
}