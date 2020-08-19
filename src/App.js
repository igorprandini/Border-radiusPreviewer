import React, { useState, useEffect, useCallback } from 'react';
import { Section, ContainerExemple, ObjectExemple, Clipboard, ContainerInputValues, AreaSwitch, Switch, AreaInputValues } from './style';
import Slider from 'react-rangeslider';
import 'react-rangeslider/lib/index.css'

function App() {
  const [radiusTopLeft, setRadiusTopLeft] = useState(0);
  const [radiusTopRight, setRadiusTopRight] = useState(0);
  const [radiusButtomRight, setRadiusButtomRight] = useState(0);
  const [radiusButtomLeft, setRadiusButtomLeft] = useState(0);
  const [complexSelected, setComplexSelected] = useState(false);
  const [viwerRadius, setViwerRadius] = useState(`0% 0% 0% 0%`);

  const setViwerSelected = useCallback(() => {
    if(!!complexSelected){
      setRadiusTopLeft(100);
      setRadiusTopRight(0);
      setRadiusButtomRight(100);
      setRadiusButtomLeft(0);
    } else {
      setRadiusTopLeft(0);
      setRadiusTopRight(0);
      setRadiusButtomRight(0);
      setRadiusButtomLeft(0);
    }
  }, [complexSelected]);
  
  useEffect(() => {
    setViwerSelected();
  }, [setViwerSelected]);

  useEffect(() => {
    if(!!complexSelected){
      setViwerRadius(`
        ${100 - radiusTopLeft}% ${radiusTopLeft}% ${100 - radiusButtomRight}% ${radiusButtomRight}% / 
        ${100 - radiusTopRight}% ${radiusTopRight}% ${100 - radiusButtomLeft}% ${radiusButtomLeft}%
      `);
    } else {
      setViwerRadius(`${radiusTopLeft}% ${radiusTopRight}% ${radiusButtomRight}% ${radiusButtomLeft}%`);
    }
  }, [complexSelected, radiusTopLeft, radiusTopRight, radiusButtomLeft, radiusButtomRight]);
  
  return (
    <div className="App">
      <Section>
        <h1>Border-radius</h1>
        <p>Previewer</p>
        <ContainerExemple>
          <ObjectExemple radius={viwerRadius} />
        </ContainerExemple>
        <p>CSS</p>
        <Clipboard>
          <span>-webkit-border-radius: <label>{`${viwerRadius}`}</label>;</span>
          <span>-moz-border-radius: <label>{`${viwerRadius}`}</label>;</span>
          <span>border-radius: <label>{`${viwerRadius}`}</label>;</span>
        </Clipboard>
        <ContainerInputValues>
        <AreaSwitch >
            <span>Simple</span>
            <Switch>
                <input type="checkbox" value={complexSelected} onChange={e => setComplexSelected(!complexSelected)} checked={complexSelected} />
                <span className="slider round" />
            </Switch>
            <span>Complex</span>
        </AreaSwitch>
          <AreaInputValues>
            <Slider value={radiusTopLeft} min={0} max={100} onChange={value => setRadiusTopLeft(value)} />
            <Slider value={radiusTopRight} min={0} max={100} onChange={value => setRadiusTopRight(value)} />
            <Slider value={radiusButtomRight} min={0} max={100} onChange={value => setRadiusButtomRight(value)} />
            <Slider value={radiusButtomLeft} min={0} max={100} onChange={value => setRadiusButtomLeft(value)} />
          </AreaInputValues>
        </ContainerInputValues>
      </Section>
    </div>
  );
}

export default App;
