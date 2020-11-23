import React, {Component, useState} from "react";
import '../styles/App.css';

const App = (props) => {
	const [selectedIndex,setSelectedIndex]=useState(0);
	const moveToNext=(evt)=>{
		const size=props.slides.length;
		if(selectedIndex===(size-1))
		{
			return;
		}
		const index=selectedIndex+1;
		setSelectedIndex(index);		
	}
	const moveToPrev=(evt)=>{
		if(selectedIndex===0)
		{
			return;
		}
		const index=selectedIndex-1;
		setSelectedIndex(index);
	}
	const restart=()=>{
		setSelectedIndex(0);
	}
	const renderData = () => {		
		return (
			<div>
				<h1 data-testid="title">{props.slides[selectedIndex].title}</h1>
				<p data-testid="text">{props.slides[selectedIndex].text}</p>
				<button data-testid="button-prev" onClick={moveToPrev} disabled={(selectedIndex===0)?true:null}>Prev</button>
				<button data-testid="button-next" onClick={moveToNext} disabled={(selectedIndex===(props.slides.length-1))?true:null}>Next</button>			
				<button data-testid="button-restart" onClick={restart} disabled={(selectedIndex===0)?true:null}>Restart</button>			
			</div>
		);
	}
  return (
	<>{renderData()}</>
  )
}


export default App;