import React from "react";
import {ReactP5Wrapper} from '@p5-wrapper/react';
import {mySketch} from './sketch.js';


function MyP5Component(){
    return(
        <div>
            <h1>My p5.js Sketch</h1>
            <ReactP5Wrapper sketch={mySketch}/>
        </div>
        );
}

export default MyP5Component;