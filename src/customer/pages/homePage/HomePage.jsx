import React from 'react';
import MainCarousel from '../../components/homeCarousel/MainCarousel';
import HomeSectionCarousel from '../../components/homeSectionCarousel/HomeSectionCarousel';
import { mens_kurta } from '../../../data/mens_kurta'


const HomePage = () => {
  return (
    <div>
        <MainCarousel />

        <div className='flex flex-col justify-center space-y-10 py-20 px-5 lg:px-10' >
          <HomeSectionCarousel data={mens_kurta} sectionName={"Men's Kurta"}/>
          <HomeSectionCarousel data={mens_kurta} sectionName={"women's Saree"}/>
          <HomeSectionCarousel data={mens_kurta} sectionName={"Men's Shoes"}/>
          <HomeSectionCarousel data={mens_kurta} sectionName={"Women's Dress"}/>
          <HomeSectionCarousel data={mens_kurta} sectionName={"Men's Shirt"}/>
        </div>
    </div>
  )
}

export default HomePage