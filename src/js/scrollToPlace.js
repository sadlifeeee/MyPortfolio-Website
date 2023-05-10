const handleScrollToProject = () => {
    const element = document.getElementById('projectWrapper');
    const yOffset = -90; 
    const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset

    if (element) {
        window.scrollTo({top: y, behavior: 'smooth'});
    }
}

const handleScrollToHome = () => {
    const element = document.getElementById('introPage');
    const yOffset = -90; 
    const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset

    if (element) {
        window.scrollTo({top: y, behavior: 'smooth'});
    }
}

const handleScrollToContact = () => {
    const element = document.getElementById('contactWrapper');

    if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
        
    }
}

const handleScrollToAbout = () => {
    const element = document.getElementById('aboutWrapper');
    const yOffset = -90; 
    const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset

    if (element) {
        window.scrollTo({top: y, behavior: 'smooth'});
    }
}

export {handleScrollToHome , handleScrollToProject, handleScrollToContact, handleScrollToAbout}

  