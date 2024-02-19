import React from 'react';
import { FaBeer, FaCoffee, FaHeart, FaStar, FaSmile, FaThumbsUp, FaThumbsDown, FaSun, FaMoon, FaCloud, FaLeaf, FaRocket, FaTree, FaFish, FaSmileBeam } from 'react-icons/fa';
import { MdOutlineMonitorHeart } from 'react-icons/md';import { IoLayersOutline } from "react-icons/io5";import { TbLayersDifference } from "react-icons/tb";
import { PiBookOpenText } from "react-icons/pi";import { BsBuildings } from "react-icons/bs";import { CiHardDrive } from "react-icons/ci";
import { BsBox } from "react-icons/bs";import { CiVirus } from "react-icons/ci";import { CiTextAlignJustify } from "react-icons/ci";
import { CiVault } from "react-icons/ci";import { CiViewColumn } from "react-icons/ci";
import { CiStopSign1 } from "react-icons/ci";
const getRandomIcon = () => {
    
  const icons = [
    <MdOutlineMonitorHeart />,
    <PiBookOpenText />,
    <IoLayersOutline />,
    <TbLayersDifference />,
    <BsBox />,
    <CiHardDrive />,
    <CiStopSign1 />,
    <FaSun />,
    <CiViewColumn />,
    <FaCloud />,
    <FaLeaf />,
    <FaRocket />,
    <CiVirus />,
    <CiStopSign1 />,
    <CiTextAlignJustify />,
  ];

  // Generate a random index
  const randomIndex = Math.floor(Math.random() * icons.length);

  // Return the randomly selected icon
  return icons[randomIndex];
};

// Example usage in a React component
const RandomIconGenerator = () => {
  const randomIcon = getRandomIcon();

  return (
    <div>
      {randomIcon}
    </div>
  );
};

export default RandomIconGenerator;
