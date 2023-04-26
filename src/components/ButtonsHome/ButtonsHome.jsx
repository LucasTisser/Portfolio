import React from "react";

import './ButtonsHome.css'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import { faReadme } from '@fortawesome/free-brands-svg-icons'

export default function ButtonsHome(){
 return(
    <>
        <a target="_blank" rel="noreferrer" href="https://www.linkedin.com/in/lucastissera/"><button><FontAwesomeIcon icon={faLinkedin} size="xl" /></button>
        </a> 
        <a target="_blank" rel="noreferrer" href="https://github.com/LucasTisser"><button> <FontAwesomeIcon icon={faGithub} size="xl" /></button>
        </a>
        <a target="_blank" rel="noreferrer" href="https://drive.google.com/file/d/1dD-ihVqNS5298UFgDxnMRiqs7lKqUweD/view?usp=sharing"><button> <FontAwesomeIcon icon={faReadme} size="xl"/></button>
        </a>
    </>
 )
}