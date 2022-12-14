import React, { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";
import ExpSection from './ExpSection';

const Experience:React.FC = () => {
  const{ language }:any = useContext(ThemeContext);
  const { languagesData}:any = useContext(ThemeContext);
 
  interface Info{
    heading: string,
    programming :string,
    tools: string,
    graphic: string
  }

type Theme = {
  figma: {
    icon:  JSX.Element, 
    text: string
  },
  photostop: {
    icon:  JSX.Element,
    text: string
  },
  gimp: {
    icon:  JSX.Element,
    text: string
  }
}

  const{heading, programming, tools, graphic}:Info = languagesData[language].experience;
 
  const programmingPath = languagesData.icons.programming;
  const toolsPath = languagesData.icons.tools;
  const graphicPath:Theme =  languagesData.icons.graphic;



  return (
      <main>
      <span className="animSpan"><h6>C:\zejda-a-cv\experience &#10095;</h6><h6 className="anime">|</h6></span>
        <h2>{heading}</h2>
        <h3>{programming}</h3>

        <ExpSection dataProps={programmingPath} />

        <h3>{tools}</h3>

        <ExpSection dataProps={toolsPath} />

        <h3>{graphic}</h3>

        <ExpSection dataProps={graphicPath} />

      </main>

  );
};

export default Experience;
