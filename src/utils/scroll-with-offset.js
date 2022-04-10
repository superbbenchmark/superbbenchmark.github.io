const scrollWithOffset = (el) => {
    const yCoordinate = el.getBoundingClientRect().top + window.pageYOffset;
    const yOffset = -70; 
    window.scrollTo({ top: yCoordinate + yOffset, behavior: 'smooth' }); 
}

export { scrollWithOffset };