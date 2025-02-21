'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

interface CardProps {
  title: string;
  imageUrl: string;
  altText: string;
  description: string;
};

const Card = ({ title, imageUrl, altText, description }: CardProps) => {
  return (
    <motion.div
      className="bg-gray-800 text-white p-6 rounded-2xl shadow-lg"
      whileHover={{ scale: 1.05 }}
      transition={{ duration: 0.2 }}
    >
      <Image
        className="rounded-lg mb-4"
        src={imageUrl}
        alt={altText}
        width={300}
        height={300}
      />
      <h3 className="font-bold text-xl">{title}</h3>
      <p className="text-gray-400 mt-2">{description}</p>
    </motion.div>
  );
};

export default Card;
