import React, { useState, useEffect, useCallback } from 'react';
import { Section, ContainerExemple, ObjectExemple, Clipboard, ContainerInputValues, AreaSwitch, Switch, AreaInputValues } from './style';
import Slider from 'react-rangeslider';
import 'react-rangeslider/lib/index.css';

function App() {
  const [valueRadius, setValueRadius] = useState({
    topLeftRadius: 0,
    topRightRadius: 0,
    buttomRightRadius: 0,
    buttomLeftRadius: 0
  });
  const [complexSelected, setComplexSelected] = useState(false);
  const [viwerRadius, setViwerRadius] = useState(`0% 0% 0% 0%`);

  const setViwerSelected = useCallback(() => {
    if(!!complexSelected){
      setValueRadius({
        topLeftRadius: 100,
        topRightRadius: 0,
        buttomRightRadius: 100,
        buttomLeftRadius: 0
      });
    } else {
      setValueRadius({
        topLeftRadius: 0,
        topRightRadius: 0,
        buttomRightRadius: 0,
        buttomLeftRadius: 0
      });
    }
  }, [complexSelected]);
  
  useEffect(() => {
    setViwerSelected();
  }, [setViwerSelected]);

  useEffect(() => {
    const {topLeftRadius, topRightRadius, buttomRightRadius, buttomLeftRadius} = valueRadius;
    if(!!complexSelected){
      setViwerRadius(`
        ${100 - topLeftRadius}% ${topLeftRadius}% ${100 - buttomRightRadius}% ${buttomRightRadius}% / 
        ${100 - topRightRadius}% ${topRightRadius}% ${100 - buttomLeftRadius}% ${buttomLeftRadius}%
      `);
    } else {
      setViwerRadius(`${topLeftRadius}% ${topRightRadius}% ${buttomRightRadius}% ${buttomLeftRadius}%`);
    }
  }, [complexSelected, valueRadius]);

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
            <Slider value={valueRadius.topLeftRadius} onChange={value => setValueRadius({...valueRadius, topLeftRadius: value})} />
            <Slider value={valueRadius.topRightRadius} onChange={value => setValueRadius({...valueRadius, topRightRadius: value})} />
            <Slider value={valueRadius.buttomRightRadius} onChange={value => setValueRadius({...valueRadius, buttomRightRadius: value})} />
            <Slider value={valueRadius.buttomLeftRadius} onChange={value => setValueRadius({...valueRadius, buttomLeftRadius: value})} />
          </AreaInputValues>
        </ContainerInputValues>
      </Section>
    </div>
  );
}

export default App;
