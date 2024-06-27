@import url('https://fonts.cdnfonts.com/css/adam-warren-pro');
 
* {
	margin: 0;
	padding: 0;
	user-select: none;
}
 
html {
	font-family: 'Adam Warren pro', sans-serif;
	background-color: transparent;
}
 
.container {
	background-color: transparent;
	/* box-shadow: 0px 12px 30px rgba(0, 0, 0, 0.07); */
	height: 550px;
	width: 100%;
	border-radius: 0px;
	position: absolute;
	top: 50%;
	left: 50%;
	transform: translate(-50%, -50%);
	padding: 12px 20px;
	display: flex;
	border: 0px solid rgba(0, 0, 0, 0.2);
  font-size: 18px;
 
 
 
}
 
 
.sequencer {
	display: flex;
	height: 270px;
	width: 100%;
	margin-top: 100px;
}
 
#p0 {
	margin-top: 109px;
	width: 160px;
	padding-left: 2px;
	padding-right: 26px;
}
 
.drum-name {
	font-weight: bold;
	font-size: 35px;
	letter-spacing: 0 px;
	line-height: 80px;
	padding: 0px 36px 0px 16px;
	border-radius: 0px;
	margin-bottom: 18px;
	background-color: #fff;
	color: rgba(0, 0, 0, );
	box-shadow: -5px 10px 0px rgba(0, 0, 0, 1);
	border: 4px solid rgba(0, 0, 0, 1);
}
 
#controls {
	position: absolute;
	left: 20px;
	right: 20px;
	top: 0px;
	height: 120px;
}
 
#controls-left-side {
	float: left;
	height: 100%;
}
 
#controls-right-side {
	float: right;
	height: 100%;
}
 
.sampler {
	display: inline;
	padding: 28px 46px;
	border-radius: 0px;
	line-height: 100px;
	text-align: center;
	background-color: #fff;
	color: rgba(0, 0, 0, 0.6);
	box-shadow: -5px 10px 0px rgba(0, 0, 0, 1);
	border: 4px solid rgba(0, 0, 0, 1);
	position: relative;
  font-size: 35px;
  color: black;
  margin-right: 10px;
}
 
.pressed {
	box-shadow: -5px 15px 0px rgba(0, 0, 0, 1);
	top: 2px;
	background-color: rgba(0, 0, 0, 0);
}
 
#bpm {
	color: rgba(0, 0, 0);
	line-height: 120px;
	position: absolute;
	top: 25px;
	right: 450px;
  font-size: 35px;
}
 
#bpm-slider {
	position: absolute;
	top: 20px;
	right: 480px;
	width: 180px;
  background-color: rgba(0, 0, 0,   0.0);
  cursor: pointer;
}
 
#swing {
	color: rgba(0, 0, 0);
	line-height: 120px;
	position: absolute;
	top: 25px;
	right: 200px;
  font-size: 35px;
}
 
#swing-slider {
	position: absolute;
	top: 20px;
	right: 200px;
	width: 180px;
  background-color: rgba(0, 0, 0,   0.0);
  cursor: pointer;
}
 
#controls p {
	display: inline;
	font-size: 32px;
	position: relative;
	top: -4px;
 
}
 
#clear-track {
	font-weight: bold;
	color: rgba(0, 0, 0,);
	padding: 27px 24px;
	border-radius: 0px;
	box-shadow: -5px 10px 0px rgba(0, 0, 0, 1);
	border: 4px solid rgba(0, 0, 0, 1);
	margin-left: 36px;
	margin-right: 2px;
	position: relative;
  font-size: 35px;
	-webkit-user-select: none;
  background-color: white;
}
 
#clear-track:hover {
	cursor: pointer;
	border: 4px solid rgba(0, 0, 0, 1);
	box-shadow: -52rpx 15px 0px rgba(0, 0, 0, 1);
  top: 2px;
}
 
#clear-track:active {
	top: 0px;
	box-shadow: -5px 10px 0px rgba(0, 0, 0, 1);
}
 
 
 
 
 
 
.d1,
.d2,
.d3, 
.d4,
.d5,
.d6,
.d7,
.d8,
.d9,
.d10,
.d11,
.d12,
.d13,
.d14,
.d15,
.d16
 
{
	background-color: rgba(0, 0, 0, 0);
	height: 100%;
	width: 20%;
	margin: 5px 2px;
	display: inline-block;
 
 
}
 
.sample {
	background-color: #B06358;
	margin: 4px 0px;
	display: block;
	height: 100px;
	border-radius: 6px;
	border: 0px solid rgba(0, 0, 0,   0);
	box-sizing: border-box;
  	border-radius: 8px;
}
 
.sample:hover {
	cursor: pointer;
}
 
.row-highlight {
	background-color: #4D241F;
}
 
.item-selected {
	background-color: #602C29;
}
 
#d-split {
	margin-right: 20px;
 
}
 
input[type=range] {
	height: 50px;
	-webkit-appearance: none;
	margin: 10px 0;
	width: 100%;
}
 
input[type=range]:focus {
	outline: none;
}
 
input[type=range]::-webkit-slider-runnable-track {
	width: 100%;
	height: 20px;
	cursor: pointer;
	box-shadow: 0px 0px 0px #000000;
	background: white;
	border-radius: 0;
	border: 3px solid black;
  	box-shadow: -5px 5px 0px rgba(0, 0, 0, 1);
}
 
input[type=range]::-webkit-slider-thumb {
	box-shadow: 0px 0px 0px #707070;
	border: 1px solid #A3A3A3;
	height: 42px;
	width: 15px;
	border-radius: 0 px;
	background: white;
	cursor: pointer;
	-webkit-appearance: none;
	margin-top: -12px;
  border: 3px solid black;
  b
}
 
input[type=range]:focus::-webkit-slider-runnable-track {
	background: #EDEDED;
}
 
input[type=range]::-moz-range-track {
	width: 100%;
	height: 7px;
	cursor: pointer;
	background: #EDEDED;
	border-radius: 50px;
	border: 1px solid #C2C2C2;
}
 
input[type=range]::-moz-range-thumb {
	border: 1px solid #A3A3A3;
	height: 42px;
	width: 13px;
	border-radius: 17px;
	background: #FFFFFF;
	cursor: pointer;
}
 
input[type=range]::-ms-track {
	width: 100%;
	height: 10px;
	cursor: pointer;
	animate: 0.2s;
	background: transparent;
	border-color: transparent;
	color: transparent;
}
 
input[type=range]::-ms-fill-lower {
	background: #EDEDED;
	border: 1px solid #C2C2C2;
	border-radius: 10px;
}
 
input[type=range]::-ms-fill-upper {
	background: #EDEDED;
	border: 1px solid #C2C2C2;
	border-radius: 10px;
}
 
input[type=range]::-ms-thumb {
	margin-top: 1px;
	border: 1px solid #A3A3A3;
	height: 43px;
	width: 15px;
	border-radius: 50px;
	background: #FFFFFF;
	cursor: pointer;
}
 
input[type=range]:focus::-ms-fill-lower {
	background: #EDEDED;
}
 
input[type=range]:focus::-ms-fill-upper {
	background: #EDEDED;
}
