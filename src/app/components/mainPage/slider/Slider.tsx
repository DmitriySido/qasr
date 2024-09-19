'use client'

import './slider.scss';

import React from 'react';
import { StaticImageData } from 'next/image';

import Slide from './slide/Slide';

interface ISliderTitle {
  sliderSubject: string,
  sliderSubtitle?: string,
}

interface ISlide {
  slideImage: StaticImageData;
  imageWidth: number;
  imageheight: number;
  slideTite: string;
  slideSubtitle: string;
  linkPaht?: string;
}

interface ISlider {
  identifier?: string;
  sliderList: ISlide[];
  sliderTitle: ISliderTitle;
}

const Slider = ({ identifier, sliderList, sliderTitle }: ISlider) => {

  return (
    <div className='inside-qasr'>
      <div className='inside-qasr-wrapper'>
        {identifier === 'HomePage' && <Slide sliderTitle={sliderTitle} sliderList={sliderList}/>}

        {identifier === 'GettingHere' && <Slide sliderTitle={sliderTitle} sliderList={sliderList}/>}
      </div>
    </div>
  );
};

export default Slider;
