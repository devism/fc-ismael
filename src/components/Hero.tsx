import React from 'react';
import Image from 'next/image';

export default function Hero({ src }) {
    return <Image src={src} width="792" height="373" />;
}