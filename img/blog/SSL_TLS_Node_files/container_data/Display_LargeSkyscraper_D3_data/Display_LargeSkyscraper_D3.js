(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [
		{name:"Display_LargeSkyscraper_D3_atlas_1", frames: [[1442,0,600,1200],[0,0,1440,1200]]},
		{name:"Display_LargeSkyscraper_D3_atlas_2", frames: [[466,1252,96,71],[508,1325,63,107],[1108,709,63,73],[1098,602,62,105],[1000,626,25,14],[367,1351,41,23],[0,1384,140,82],[1066,892,32,18],[453,1373,6,6],[969,1195,140,47],[284,1384,222,48],[1044,865,20,29],[490,1325,14,39],[0,1202,365,89],[591,1240,7,7],[1044,896,19,29],[1095,862,21,28],[1044,626,50,47],[1108,784,49,47],[1044,816,49,47],[466,1325,22,52],[602,642,440,551],[1044,675,34,32],[367,1252,97,97],[564,1252,34,32],[1121,833,21,27],[1000,0,440,551],[1044,927,12,34],[1065,912,20,26],[573,1324,23,36],[1118,862,21,27],[591,1202,2,36],[1080,675,14,27],[573,1362,20,36],[1162,677,24,27],[564,1286,25,36],[1087,928,14,16],[1095,833,24,27],[490,1366,16,16],[1066,865,21,24],[1095,816,9,15],[453,1351,8,20],[591,1286,9,15],[1058,940,14,16],[904,1195,63,107],[367,1202,222,48],[0,1293,365,89],[1000,553,96,71],[1162,602,63,73],[1044,709,62,105],[1100,892,32,18],[1087,912,25,14],[410,1351,41,23],[142,1384,140,82],[1098,553,140,47],[602,1195,300,199],[602,0,396,640],[0,0,600,1200]]}
];


(lib.AnMovieClip = function(){
	this.currentSoundStreamInMovieclip;
	this.actionFrames = [];
	this.soundStreamDuration = new Map();
	this.streamSoundSymbolsList = [];

	this.gotoAndPlayForStreamSoundSync = function(positionOrLabel){
		cjs.MovieClip.prototype.gotoAndPlay.call(this,positionOrLabel);
	}
	this.gotoAndPlay = function(positionOrLabel){
		this.clearAllSoundStreams();
		this.startStreamSoundsForTargetedFrame(positionOrLabel);
		cjs.MovieClip.prototype.gotoAndPlay.call(this,positionOrLabel);
	}
	this.play = function(){
		this.clearAllSoundStreams();
		this.startStreamSoundsForTargetedFrame(this.currentFrame);
		cjs.MovieClip.prototype.play.call(this);
	}
	this.gotoAndStop = function(positionOrLabel){
		cjs.MovieClip.prototype.gotoAndStop.call(this,positionOrLabel);
		this.clearAllSoundStreams();
	}
	this.stop = function(){
		cjs.MovieClip.prototype.stop.call(this);
		this.clearAllSoundStreams();
	}
	this.startStreamSoundsForTargetedFrame = function(targetFrame){
		for(var index=0; index<this.streamSoundSymbolsList.length; index++){
			if(index <= targetFrame && this.streamSoundSymbolsList[index] != undefined){
				for(var i=0; i<this.streamSoundSymbolsList[index].length; i++){
					var sound = this.streamSoundSymbolsList[index][i];
					if(sound.endFrame > targetFrame){
						var targetPosition = Math.abs((((targetFrame - sound.startFrame)/lib.properties.fps) * 1000));
						var instance = playSound(sound.id);
						var remainingLoop = 0;
						if(sound.offset){
							targetPosition = targetPosition + sound.offset;
						}
						else if(sound.loop > 1){
							var loop = targetPosition /instance.duration;
							remainingLoop = Math.floor(sound.loop - loop);
							if(targetPosition == 0){ remainingLoop -= 1; }
							targetPosition = targetPosition % instance.duration;
						}
						instance.loop = remainingLoop;
						instance.position = Math.round(targetPosition);
						this.InsertIntoSoundStreamData(instance, sound.startFrame, sound.endFrame, sound.loop , sound.offset);
					}
				}
			}
		}
	}
	this.InsertIntoSoundStreamData = function(soundInstance, startIndex, endIndex, loopValue, offsetValue){ 
 		this.soundStreamDuration.set({instance:soundInstance}, {start: startIndex, end:endIndex, loop:loopValue, offset:offsetValue});
	}
	this.clearAllSoundStreams = function(){
		var keys = this.soundStreamDuration.keys();
		for(var i = 0;i<this.soundStreamDuration.size; i++){
			var key = keys.next().value;
			key.instance.stop();
		}
 		this.soundStreamDuration.clear();
		this.currentSoundStreamInMovieclip = undefined;
	}
	this.stopSoundStreams = function(currentFrame){
		if(this.soundStreamDuration.size > 0){
			var keys = this.soundStreamDuration.keys();
			for(var i = 0; i< this.soundStreamDuration.size ; i++){
				var key = keys.next().value; 
				var value = this.soundStreamDuration.get(key);
				if((value.end) == currentFrame){
					key.instance.stop();
					if(this.currentSoundStreamInMovieclip == key) { this.currentSoundStreamInMovieclip = undefined; }
					this.soundStreamDuration.delete(key);
				}
			}
		}
	}

	this.computeCurrentSoundStreamInstance = function(currentFrame){
		if(this.currentSoundStreamInMovieclip == undefined){
			if(this.soundStreamDuration.size > 0){
				var keys = this.soundStreamDuration.keys();
				var maxDuration = 0;
				for(var i=0;i<this.soundStreamDuration.size;i++){
					var key = keys.next().value;
					var value = this.soundStreamDuration.get(key);
					if(value.end > maxDuration){
						maxDuration = value.end;
						this.currentSoundStreamInMovieclip = key;
					}
				}
			}
		}
	}
	this.getDesiredFrame = function(currentFrame, calculatedDesiredFrame){
		for(var frameIndex in this.actionFrames){
			if((frameIndex > currentFrame) && (frameIndex < calculatedDesiredFrame)){
				return frameIndex;
			}
		}
		return calculatedDesiredFrame;
	}

	this.syncStreamSounds = function(){
		this.stopSoundStreams(this.currentFrame);
		this.computeCurrentSoundStreamInstance(this.currentFrame);
		if(this.currentSoundStreamInMovieclip != undefined){
			var soundInstance = this.currentSoundStreamInMovieclip.instance;
			if(soundInstance.position != 0){
				var soundValue = this.soundStreamDuration.get(this.currentSoundStreamInMovieclip);
				var soundPosition = (soundValue.offset?(soundInstance.position - soundValue.offset): soundInstance.position);
				var calculatedDesiredFrame = (soundValue.start)+((soundPosition/1000) * lib.properties.fps);
				if(soundValue.loop > 1){
					calculatedDesiredFrame +=(((((soundValue.loop - soundInstance.loop -1)*soundInstance.duration)) / 1000) * lib.properties.fps);
				}
				calculatedDesiredFrame = Math.floor(calculatedDesiredFrame);
				var deltaFrame = calculatedDesiredFrame - this.currentFrame;
				if(deltaFrame >= 2){
					this.gotoAndPlayForStreamSoundSync(this.getDesiredFrame(this.currentFrame,calculatedDesiredFrame));
				}
			}
		}
	}
}).prototype = p = new cjs.MovieClip();
// symbols:



(lib.CachedBmp_85 = function() {
	this.initialize(ss["Display_LargeSkyscraper_D3_atlas_2"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_86 = function() {
	this.initialize(ss["Display_LargeSkyscraper_D3_atlas_2"]);
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_84 = function() {
	this.initialize(ss["Display_LargeSkyscraper_D3_atlas_2"]);
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_83 = function() {
	this.initialize(ss["Display_LargeSkyscraper_D3_atlas_2"]);
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_82 = function() {
	this.initialize(ss["Display_LargeSkyscraper_D3_atlas_2"]);
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_79 = function() {
	this.initialize(ss["Display_LargeSkyscraper_D3_atlas_2"]);
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_80 = function() {
	this.initialize(ss["Display_LargeSkyscraper_D3_atlas_2"]);
	this.gotoAndStop(6);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_81 = function() {
	this.initialize(ss["Display_LargeSkyscraper_D3_atlas_2"]);
	this.gotoAndStop(7);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_68 = function() {
	this.initialize(ss["Display_LargeSkyscraper_D3_atlas_2"]);
	this.gotoAndStop(8);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_78 = function() {
	this.initialize(ss["Display_LargeSkyscraper_D3_atlas_2"]);
	this.gotoAndStop(9);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_107 = function() {
	this.initialize(ss["Display_LargeSkyscraper_D3_atlas_2"]);
	this.gotoAndStop(10);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_67 = function() {
	this.initialize(ss["Display_LargeSkyscraper_D3_atlas_2"]);
	this.gotoAndStop(11);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_66 = function() {
	this.initialize(ss["Display_LargeSkyscraper_D3_atlas_2"]);
	this.gotoAndStop(12);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_106 = function() {
	this.initialize(ss["Display_LargeSkyscraper_D3_atlas_2"]);
	this.gotoAndStop(13);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_64 = function() {
	this.initialize(ss["Display_LargeSkyscraper_D3_atlas_2"]);
	this.gotoAndStop(14);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_65 = function() {
	this.initialize(ss["Display_LargeSkyscraper_D3_atlas_2"]);
	this.gotoAndStop(15);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_63 = function() {
	this.initialize(ss["Display_LargeSkyscraper_D3_atlas_2"]);
	this.gotoAndStop(16);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_49 = function() {
	this.initialize(ss["Display_LargeSkyscraper_D3_atlas_2"]);
	this.gotoAndStop(17);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_52 = function() {
	this.initialize(ss["Display_LargeSkyscraper_D3_atlas_2"]);
	this.gotoAndStop(18);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_50 = function() {
	this.initialize(ss["Display_LargeSkyscraper_D3_atlas_2"]);
	this.gotoAndStop(19);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_47 = function() {
	this.initialize(ss["Display_LargeSkyscraper_D3_atlas_2"]);
	this.gotoAndStop(20);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_109 = function() {
	this.initialize(ss["Display_LargeSkyscraper_D3_atlas_2"]);
	this.gotoAndStop(21);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_45 = function() {
	this.initialize(ss["Display_LargeSkyscraper_D3_atlas_2"]);
	this.gotoAndStop(22);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_46 = function() {
	this.initialize(ss["Display_LargeSkyscraper_D3_atlas_2"]);
	this.gotoAndStop(23);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_44 = function() {
	this.initialize(ss["Display_LargeSkyscraper_D3_atlas_2"]);
	this.gotoAndStop(24);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_42 = function() {
	this.initialize(ss["Display_LargeSkyscraper_D3_atlas_2"]);
	this.gotoAndStop(25);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_110 = function() {
	this.initialize(ss["Display_LargeSkyscraper_D3_atlas_2"]);
	this.gotoAndStop(26);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_41 = function() {
	this.initialize(ss["Display_LargeSkyscraper_D3_atlas_2"]);
	this.gotoAndStop(27);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_36 = function() {
	this.initialize(ss["Display_LargeSkyscraper_D3_atlas_2"]);
	this.gotoAndStop(28);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_39 = function() {
	this.initialize(ss["Display_LargeSkyscraper_D3_atlas_2"]);
	this.gotoAndStop(29);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_37 = function() {
	this.initialize(ss["Display_LargeSkyscraper_D3_atlas_2"]);
	this.gotoAndStop(30);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_38 = function() {
	this.initialize(ss["Display_LargeSkyscraper_D3_atlas_2"]);
	this.gotoAndStop(31);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_34 = function() {
	this.initialize(ss["Display_LargeSkyscraper_D3_atlas_2"]);
	this.gotoAndStop(32);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_40 = function() {
	this.initialize(ss["Display_LargeSkyscraper_D3_atlas_2"]);
	this.gotoAndStop(33);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_33 = function() {
	this.initialize(ss["Display_LargeSkyscraper_D3_atlas_2"]);
	this.gotoAndStop(34);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_31 = function() {
	this.initialize(ss["Display_LargeSkyscraper_D3_atlas_2"]);
	this.gotoAndStop(35);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_30 = function() {
	this.initialize(ss["Display_LargeSkyscraper_D3_atlas_2"]);
	this.gotoAndStop(36);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_32 = function() {
	this.initialize(ss["Display_LargeSkyscraper_D3_atlas_2"]);
	this.gotoAndStop(37);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_29 = function() {
	this.initialize(ss["Display_LargeSkyscraper_D3_atlas_2"]);
	this.gotoAndStop(38);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_28 = function() {
	this.initialize(ss["Display_LargeSkyscraper_D3_atlas_2"]);
	this.gotoAndStop(39);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_27 = function() {
	this.initialize(ss["Display_LargeSkyscraper_D3_atlas_2"]);
	this.gotoAndStop(40);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_26 = function() {
	this.initialize(ss["Display_LargeSkyscraper_D3_atlas_2"]);
	this.gotoAndStop(41);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_24 = function() {
	this.initialize(ss["Display_LargeSkyscraper_D3_atlas_2"]);
	this.gotoAndStop(42);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_25 = function() {
	this.initialize(ss["Display_LargeSkyscraper_D3_atlas_2"]);
	this.gotoAndStop(43);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_61 = function() {
	this.initialize(ss["Display_LargeSkyscraper_D3_atlas_2"]);
	this.gotoAndStop(44);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_103 = function() {
	this.initialize(ss["Display_LargeSkyscraper_D3_atlas_2"]);
	this.gotoAndStop(45);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_102 = function() {
	this.initialize(ss["Display_LargeSkyscraper_D3_atlas_2"]);
	this.gotoAndStop(46);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_60 = function() {
	this.initialize(ss["Display_LargeSkyscraper_D3_atlas_2"]);
	this.gotoAndStop(47);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_59 = function() {
	this.initialize(ss["Display_LargeSkyscraper_D3_atlas_2"]);
	this.gotoAndStop(48);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_58 = function() {
	this.initialize(ss["Display_LargeSkyscraper_D3_atlas_2"]);
	this.gotoAndStop(49);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_56 = function() {
	this.initialize(ss["Display_LargeSkyscraper_D3_atlas_2"]);
	this.gotoAndStop(50);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_57 = function() {
	this.initialize(ss["Display_LargeSkyscraper_D3_atlas_2"]);
	this.gotoAndStop(51);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_54 = function() {
	this.initialize(ss["Display_LargeSkyscraper_D3_atlas_2"]);
	this.gotoAndStop(52);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_55 = function() {
	this.initialize(ss["Display_LargeSkyscraper_D3_atlas_2"]);
	this.gotoAndStop(53);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_53 = function() {
	this.initialize(ss["Display_LargeSkyscraper_D3_atlas_2"]);
	this.gotoAndStop(54);
}).prototype = p = new cjs.Sprite();



(lib.Yellow_Pattern = function() {
	this.initialize(ss["Display_LargeSkyscraper_D3_atlas_2"]);
	this.gotoAndStop(55);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_108 = function() {
	this.initialize(ss["Display_LargeSkyscraper_D3_atlas_2"]);
	this.gotoAndStop(56);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_105 = function() {
	this.initialize(ss["Display_LargeSkyscraper_D3_atlas_1"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_21 = function() {
	this.initialize(ss["Display_LargeSkyscraper_D3_atlas_2"]);
	this.gotoAndStop(57);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_87 = function() {
	this.initialize(ss["Display_LargeSkyscraper_D3_atlas_1"]);
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();
// helper functions:

function mc_symbol_clone() {
	var clone = this._cloneProps(new this.constructor(this.mode, this.startPosition, this.loop));
	clone.gotoAndStop(this.currentFrame);
	clone.paused = this.paused;
	clone.framerate = this.framerate;
	return clone;
}

function getMCSymbolPrototype(symbol, nominalBounds, frameBounds) {
	var prototype = cjs.extend(symbol, cjs.MovieClip);
	prototype.clone = mc_symbol_clone;
	prototype.nominalBounds = nominalBounds;
	prototype.frameBounds = frameBounds;
	return prototype;
	}


(lib.Tween18 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.CachedBmp_110();
	this.instance.setTransform(-110.05,-137.75,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-110,-137.7,220,275.5);


(lib.Tween17 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.CachedBmp_109();
	this.instance.setTransform(-110.05,-137.75,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-110,-137.7,220,275.5);


(lib.Tween10 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#FEC10D","#FFDE03"],[0,1],-115.7,-121.3,115.8,121.4).s().p("A6PV4MAAAgrvMA0fAAAMAAAArvg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-168,-140,336,280);


(lib.Tween9 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#FEC10D","#FFDE03"],[0,1],-115.7,-121.3,115.8,121.4).s().p("A6PV4MAAAgrvMA0fAAAMAAAArvg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-168,-140,336,280);


(lib.Tween8 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#6247B2","#472F83"],[0,1],-133.1,-139.6,133.2,139.6).s().p("A6PV4MAAAgrvMA0fAAAMAAAArvg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-168,-140,336,280);


(lib.Tween7 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#6247B2","#472F83"],[0,1],-133.1,-139.6,133.2,139.6).s().p("A6PV4MAAAgrvMA0fAAAMAAAArvg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-168,-140,336,280);


(lib.Tween5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.CachedBmp_87();
	this.instance.setTransform(-167.95,-139.95,0.2333,0.2333);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-167.9,-139.9,336,280);


(lib.Tween2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.CachedBmp_86();
	this.instance.setTransform(40.95,16.75,0.5,0.5);

	this.instance_1 = new lib.CachedBmp_85();
	this.instance_1.setTransform(-10.3,16.75,0.5,0.5);

	this.instance_2 = new lib.CachedBmp_84();
	this.instance_2.setTransform(-44.75,16.6,0.5,0.5);

	this.instance_3 = new lib.CachedBmp_83();
	this.instance_3.setTransform(-72.5,0,0.5,0.5);

	this.instance_4 = new lib.CachedBmp_82();
	this.instance_4.setTransform(-26.15,-58.2,0.5,0.5);

	this.instance_5 = new lib.CachedBmp_81();
	this.instance_5.setTransform(-2.05,-70,0.5,0.5);

	this.instance_6 = new lib.CachedBmp_80();
	this.instance_6.setTransform(-34.95,-57.4,0.5,0.5);

	this.instance_7 = new lib.CachedBmp_79();
	this.instance_7.setTransform(10.6,-62.6,0.5,0.5);

	this.instance_8 = new lib.CachedBmp_78();
	this.instance_8.setTransform(-35,-23.45,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_8},{t:this.instance_7},{t:this.instance_6},{t:this.instance_5},{t:this.instance_4},{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-72.5,-70,145,140.3);


(lib.Tween1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.CachedBmp_86();
	this.instance.setTransform(40.95,16.75,0.5,0.5);

	this.instance_1 = new lib.CachedBmp_85();
	this.instance_1.setTransform(-10.3,16.75,0.5,0.5);

	this.instance_2 = new lib.CachedBmp_84();
	this.instance_2.setTransform(-44.75,16.6,0.5,0.5);

	this.instance_3 = new lib.CachedBmp_83();
	this.instance_3.setTransform(-72.5,0,0.5,0.5);

	this.instance_4 = new lib.CachedBmp_82();
	this.instance_4.setTransform(-26.15,-58.2,0.5,0.5);

	this.instance_5 = new lib.CachedBmp_81();
	this.instance_5.setTransform(-2.05,-70,0.5,0.5);

	this.instance_6 = new lib.CachedBmp_80();
	this.instance_6.setTransform(-34.95,-57.4,0.5,0.5);

	this.instance_7 = new lib.CachedBmp_79();
	this.instance_7.setTransform(10.6,-62.6,0.5,0.5);

	this.instance_8 = new lib.CachedBmp_78();
	this.instance_8.setTransform(-35,-23.45,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_8},{t:this.instance_7},{t:this.instance_6},{t:this.instance_5},{t:this.instance_4},{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-72.5,-70,145,140.3);


(lib.Symbol6 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.CachedBmp_107();
	this.instance.setTransform(35.6,9.05,0.5,0.5);

	this.instance_1 = new lib.CachedBmp_106();
	this.instance_1.setTransform(0,0,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,182.5,44.5);


(lib.Symbol5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.Yellow_Pattern();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol5, new cjs.Rectangle(0,0,300,199), null);


(lib.Symbol4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.Yellow_Pattern();
	this.instance.setTransform(300,199,1,1,180);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol4, new cjs.Rectangle(0,0,300,199), null);


(lib.Path = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.CachedBmp_68();
	this.instance.setTransform(0,0,0.3922,0.3922);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path, new cjs.Rectangle(0,0,2.4,2.4), null);


(lib.Group = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.CachedBmp_67();
	this.instance.setTransform(28.35,1.25,0.3922,0.3922);

	this.instance_1 = new lib.CachedBmp_66();
	this.instance_1.setTransform(22.25,0,0.3922,0.3922);

	this.instance_2 = new lib.CachedBmp_65();
	this.instance_2.setTransform(13.8,1.05,0.3922,0.3922);

	this.instance_3 = new lib.CachedBmp_64();
	this.instance_3.setTransform(9.6,9.9,0.3922,0.3922);

	this.instance_4 = new lib.CachedBmp_63();
	this.instance_4.setTransform(0,1.25,0.3922,0.3922);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_4},{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Group, new cjs.Rectangle(0,0,36.2,15.3), null);


// stage content:
(lib.Display_LargeSkyscraper_D3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	this.actionFrames = [0];
	// timeline functions:
	this.frame_0 = function() {
		this.clearAllSoundStreams();
		 
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(229));

	// Mask_2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_147 = new cjs.Graphics().p("EgXbBfBMAAAhdwMAu3AAAMAAABdwg");
	var mask_graphics_148 = new cjs.Graphics().p("EgXbBTCMAAAhduMAu3AAAMAAABdug");
	var mask_graphics_149 = new cjs.Graphics().p("EgXbBJPMAAAhduMAu3AAAMAAABdug");
	var mask_graphics_150 = new cjs.Graphics().p("EgXbBBZMAAAhduMAu3AAAMAAABdug");
	var mask_graphics_151 = new cjs.Graphics().p("EgXbA7SMAAAhdvMAu3AAAMAAABdvg");
	var mask_graphics_152 = new cjs.Graphics().p("EgXbA2sMAAAhduMAu3AAAMAAABdug");
	var mask_graphics_153 = new cjs.Graphics().p("EgXbAzZMAAAhduMAu3AAAMAAABdug");
	var mask_graphics_154 = new cjs.Graphics().p("EgXbAxMMAAAhduMAu3AAAMAAABdug");
	var mask_graphics_155 = new cjs.Graphics().p("EgXbAv3MAAAhdvMAu3AAAMAAABdvg");
	var mask_graphics_156 = new cjs.Graphics().p("EgXbAvLMAAAhdvMAu3AAAMAAABdvg");
	var mask_graphics_157 = new cjs.Graphics().p("EgXbAu6MAAAhduMAu3AAAMAAABdug");
	var mask_graphics_158 = new cjs.Graphics().p("EgXbAu4MAAAhdvMAu3AAAMAAABdvg");
	var mask_graphics_159 = new cjs.Graphics().p("EgXbAu4MAAAhdvMAu3AAAMAAABdvg");
	var mask_graphics_160 = new cjs.Graphics().p("EgXbAu4MAAAhdvMAu3AAAMAAABdvg");
	var mask_graphics_161 = new cjs.Graphics().p("EgXbAu4MAAAhdvMAu3AAAMAAABdvg");
	var mask_graphics_162 = new cjs.Graphics().p("EgXbAu4MAAAhdvMAu3AAAMAAABdvg");
	var mask_graphics_163 = new cjs.Graphics().p("EgXbAu4MAAAhdvMAu3AAAMAAABdvg");
	var mask_graphics_164 = new cjs.Graphics().p("EgXbAu4MAAAhdvMAu3AAAMAAABdvg");
	var mask_graphics_165 = new cjs.Graphics().p("EgXbAu4MAAAhdvMAu3AAAMAAABdvg");
	var mask_graphics_166 = new cjs.Graphics().p("EgXbAu4MAAAhdvMAu3AAAMAAABdvg");
	var mask_graphics_167 = new cjs.Graphics().p("EgXbAu4MAAAhdvMAu3AAAMAAABdvg");
	var mask_graphics_168 = new cjs.Graphics().p("EgXbAu4MAAAhdvMAu3AAAMAAABdvg");
	var mask_graphics_169 = new cjs.Graphics().p("EgXbAu4MAAAhdvMAu3AAAMAAABdvg");
	var mask_graphics_170 = new cjs.Graphics().p("EgXbAu4MAAAhdvMAu3AAAMAAABdvg");
	var mask_graphics_171 = new cjs.Graphics().p("EgXbAu4MAAAhdvMAu3AAAMAAABdvg");
	var mask_graphics_172 = new cjs.Graphics().p("EgXbAu4MAAAhdvMAu3AAAMAAABdvg");
	var mask_graphics_173 = new cjs.Graphics().p("EgXbAu4MAAAhdvMAu3AAAMAAABdvg");
	var mask_graphics_174 = new cjs.Graphics().p("EgXbAu4MAAAhdvMAu3AAAMAAABdvg");
	var mask_graphics_175 = new cjs.Graphics().p("EgXbAu4MAAAhdvMAu3AAAMAAABdvg");
	var mask_graphics_176 = new cjs.Graphics().p("EgXbAu4MAAAhdvMAu3AAAMAAABdvg");
	var mask_graphics_177 = new cjs.Graphics().p("EgXbAu4MAAAhdvMAu3AAAMAAABdvg");
	var mask_graphics_178 = new cjs.Graphics().p("EgXbAu4MAAAhdvMAu3AAAMAAABdvg");
	var mask_graphics_179 = new cjs.Graphics().p("EgXbAu4MAAAhdvMAu3AAAMAAABdvg");
	var mask_graphics_180 = new cjs.Graphics().p("EgXbAu4MAAAhdvMAu3AAAMAAABdvg");
	var mask_graphics_181 = new cjs.Graphics().p("EgXbAu4MAAAhdvMAu3AAAMAAABdvg");
	var mask_graphics_182 = new cjs.Graphics().p("EgXbAu4MAAAhdvMAu3AAAMAAABdvg");
	var mask_graphics_183 = new cjs.Graphics().p("EgXbAu4MAAAhdvMAu3AAAMAAABdvg");
	var mask_graphics_184 = new cjs.Graphics().p("EgXbAu4MAAAhdvMAu3AAAMAAABdvg");
	var mask_graphics_185 = new cjs.Graphics().p("EgXbAu4MAAAhdvMAu3AAAMAAABdvg");
	var mask_graphics_186 = new cjs.Graphics().p("EgXbAu4MAAAhdvMAu3AAAMAAABdvg");
	var mask_graphics_187 = new cjs.Graphics().p("EgXbAu4MAAAhdvMAu3AAAMAAABdvg");
	var mask_graphics_188 = new cjs.Graphics().p("EgXbAu4MAAAhdvMAu3AAAMAAABdvg");
	var mask_graphics_189 = new cjs.Graphics().p("EgXbAu4MAAAhdvMAu3AAAMAAABdvg");
	var mask_graphics_190 = new cjs.Graphics().p("EgXbAu4MAAAhdvMAu3AAAMAAABdvg");
	var mask_graphics_191 = new cjs.Graphics().p("EgXbAu4MAAAhdvMAu3AAAMAAABdvg");
	var mask_graphics_192 = new cjs.Graphics().p("EgXbAu4MAAAhdvMAu3AAAMAAABdvg");
	var mask_graphics_193 = new cjs.Graphics().p("EgXbAu4MAAAhdvMAu3AAAMAAABdvg");
	var mask_graphics_194 = new cjs.Graphics().p("EgXbAu4MAAAhdvMAu3AAAMAAABdvg");
	var mask_graphics_195 = new cjs.Graphics().p("EgXbAu4MAAAhdvMAu3AAAMAAABdvg");
	var mask_graphics_196 = new cjs.Graphics().p("EgXbAu4MAAAhdvMAu3AAAMAAABdvg");
	var mask_graphics_197 = new cjs.Graphics().p("EgXbAu4MAAAhdvMAu3AAAMAAABdvg");
	var mask_graphics_198 = new cjs.Graphics().p("EgXbAu4MAAAhdvMAu3AAAMAAABdvg");
	var mask_graphics_199 = new cjs.Graphics().p("EgXbAu4MAAAhdvMAu3AAAMAAABdvg");
	var mask_graphics_200 = new cjs.Graphics().p("EgXbAu4MAAAhdvMAu3AAAMAAABdvg");
	var mask_graphics_201 = new cjs.Graphics().p("EgXbAu4MAAAhdvMAu3AAAMAAABdvg");
	var mask_graphics_202 = new cjs.Graphics().p("EgXbAu4MAAAhdvMAu3AAAMAAABdvg");
	var mask_graphics_203 = new cjs.Graphics().p("EgXbAu4MAAAhdvMAu3AAAMAAABdvg");
	var mask_graphics_204 = new cjs.Graphics().p("EgXbAu4MAAAhdvMAu3AAAMAAABdvg");
	var mask_graphics_205 = new cjs.Graphics().p("EgXbAu4MAAAhdvMAu3AAAMAAABdvg");
	var mask_graphics_206 = new cjs.Graphics().p("EgXbAu4MAAAhdvMAu3AAAMAAABdvg");
	var mask_graphics_207 = new cjs.Graphics().p("EgXbAu4MAAAhdvMAu3AAAMAAABdvg");
	var mask_graphics_208 = new cjs.Graphics().p("EgXbAu4MAAAhdvMAu3AAAMAAABdvg");
	var mask_graphics_209 = new cjs.Graphics().p("EgXbAu4MAAAhdvMAu3AAAMAAABdvg");
	var mask_graphics_210 = new cjs.Graphics().p("EgXbAu4MAAAhdvMAu3AAAMAAABdvg");
	var mask_graphics_211 = new cjs.Graphics().p("EgXbAu4MAAAhdvMAu3AAAMAAABdvg");
	var mask_graphics_212 = new cjs.Graphics().p("EgXbAu4MAAAhdvMAu3AAAMAAABdvg");
	var mask_graphics_213 = new cjs.Graphics().p("EgXbAu4MAAAhdvMAu3AAAMAAABdvg");
	var mask_graphics_214 = new cjs.Graphics().p("EgXbAu4MAAAhdvMAu3AAAMAAABdvg");
	var mask_graphics_215 = new cjs.Graphics().p("EgXbAu4MAAAhdvMAu3AAAMAAABdvg");
	var mask_graphics_216 = new cjs.Graphics().p("EgXbAu4MAAAhdvMAu3AAAMAAABdvg");
	var mask_graphics_217 = new cjs.Graphics().p("EgXbAu4MAAAhdvMAu3AAAMAAABdvg");
	var mask_graphics_218 = new cjs.Graphics().p("EgXbAu4MAAAhdvMAu3AAAMAAABdvg");
	var mask_graphics_219 = new cjs.Graphics().p("EgXbAu4MAAAhdvMAu3AAAMAAABdvg");
	var mask_graphics_220 = new cjs.Graphics().p("EgXbAu4MAAAhdvMAu3AAAMAAABdvg");
	var mask_graphics_221 = new cjs.Graphics().p("EgXbAu4MAAAhdvMAu3AAAMAAABdvg");
	var mask_graphics_222 = new cjs.Graphics().p("EgXbAu4MAAAhdvMAu3AAAMAAABdvg");
	var mask_graphics_223 = new cjs.Graphics().p("EgXbAu4MAAAhdvMAu3AAAMAAABdvg");
	var mask_graphics_224 = new cjs.Graphics().p("EgXbAu4MAAAhdvMAu3AAAMAAABdvg");
	var mask_graphics_225 = new cjs.Graphics().p("EgXbAu4MAAAhdvMAu3AAAMAAABdvg");
	var mask_graphics_226 = new cjs.Graphics().p("EgXbAu4MAAAhdvMAu3AAAMAAABdvg");
	var mask_graphics_227 = new cjs.Graphics().p("EgXbAu4MAAAhdvMAu3AAAMAAABdvg");
	var mask_graphics_228 = new cjs.Graphics().p("EgXbAu4MAAAhdvMAu3AAAMAAABdvg");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:null,x:0,y:0}).wait(147).to({graphics:mask_graphics_147,x:149.9996,y:608.0736}).wait(1).to({graphics:mask_graphics_148,x:149.9983,y:531.4401}).wait(1).to({graphics:mask_graphics_149,x:149.9983,y:468.7151}).wait(1).to({graphics:mask_graphics_150,x:149.9983,y:418.5151}).wait(1).to({graphics:mask_graphics_151,x:149.9983,y:379.3901}).wait(1).to({graphics:mask_graphics_152,x:149.9983,y:350.0151}).wait(1).to({graphics:mask_graphics_153,x:149.9983,y:328.9401}).wait(1).to({graphics:mask_graphics_154,x:149.9983,y:314.8401}).wait(1).to({graphics:mask_graphics_155,x:149.9983,y:306.2651}).wait(1).to({graphics:mask_graphics_156,x:149.9983,y:301.8651}).wait(1).to({graphics:mask_graphics_157,x:149.9983,y:300.2401}).wait(1).to({graphics:mask_graphics_158,x:149.9996,y:299.9986}).wait(1).to({graphics:mask_graphics_159,x:149.9996,y:299.9986}).wait(1).to({graphics:mask_graphics_160,x:149.9996,y:299.9986}).wait(1).to({graphics:mask_graphics_161,x:149.9996,y:299.9986}).wait(1).to({graphics:mask_graphics_162,x:149.9996,y:299.9986}).wait(1).to({graphics:mask_graphics_163,x:149.9996,y:299.9986}).wait(1).to({graphics:mask_graphics_164,x:149.9996,y:299.9986}).wait(1).to({graphics:mask_graphics_165,x:149.9996,y:299.9986}).wait(1).to({graphics:mask_graphics_166,x:149.9996,y:299.9986}).wait(1).to({graphics:mask_graphics_167,x:149.9996,y:299.9986}).wait(1).to({graphics:mask_graphics_168,x:149.9996,y:299.9986}).wait(1).to({graphics:mask_graphics_169,x:149.9996,y:299.9986}).wait(1).to({graphics:mask_graphics_170,x:150,y:300}).wait(1).to({graphics:mask_graphics_171,x:150,y:300}).wait(1).to({graphics:mask_graphics_172,x:150,y:300}).wait(1).to({graphics:mask_graphics_173,x:150,y:300}).wait(1).to({graphics:mask_graphics_174,x:150,y:300}).wait(1).to({graphics:mask_graphics_175,x:150,y:300}).wait(1).to({graphics:mask_graphics_176,x:150,y:300}).wait(1).to({graphics:mask_graphics_177,x:150,y:300}).wait(1).to({graphics:mask_graphics_178,x:150,y:300}).wait(1).to({graphics:mask_graphics_179,x:150,y:300}).wait(1).to({graphics:mask_graphics_180,x:150,y:300}).wait(1).to({graphics:mask_graphics_181,x:150,y:300}).wait(1).to({graphics:mask_graphics_182,x:150,y:300}).wait(1).to({graphics:mask_graphics_183,x:150,y:300}).wait(1).to({graphics:mask_graphics_184,x:150,y:300}).wait(1).to({graphics:mask_graphics_185,x:150,y:300}).wait(1).to({graphics:mask_graphics_186,x:150,y:300}).wait(1).to({graphics:mask_graphics_187,x:150,y:300}).wait(1).to({graphics:mask_graphics_188,x:150,y:300}).wait(1).to({graphics:mask_graphics_189,x:150,y:300}).wait(1).to({graphics:mask_graphics_190,x:150,y:300}).wait(1).to({graphics:mask_graphics_191,x:150,y:300}).wait(1).to({graphics:mask_graphics_192,x:150,y:300}).wait(1).to({graphics:mask_graphics_193,x:150,y:300}).wait(1).to({graphics:mask_graphics_194,x:150,y:300}).wait(1).to({graphics:mask_graphics_195,x:150,y:300}).wait(1).to({graphics:mask_graphics_196,x:150,y:300}).wait(1).to({graphics:mask_graphics_197,x:150,y:300}).wait(1).to({graphics:mask_graphics_198,x:150,y:300}).wait(1).to({graphics:mask_graphics_199,x:150,y:300}).wait(1).to({graphics:mask_graphics_200,x:150,y:300}).wait(1).to({graphics:mask_graphics_201,x:150,y:300}).wait(1).to({graphics:mask_graphics_202,x:150,y:300}).wait(1).to({graphics:mask_graphics_203,x:150,y:300}).wait(1).to({graphics:mask_graphics_204,x:150,y:300}).wait(1).to({graphics:mask_graphics_205,x:150,y:300}).wait(1).to({graphics:mask_graphics_206,x:150,y:300}).wait(1).to({graphics:mask_graphics_207,x:150,y:300}).wait(1).to({graphics:mask_graphics_208,x:150,y:300}).wait(1).to({graphics:mask_graphics_209,x:150,y:300}).wait(1).to({graphics:mask_graphics_210,x:150,y:300}).wait(1).to({graphics:mask_graphics_211,x:150,y:300}).wait(1).to({graphics:mask_graphics_212,x:150,y:300}).wait(1).to({graphics:mask_graphics_213,x:150,y:300}).wait(1).to({graphics:mask_graphics_214,x:150,y:300}).wait(1).to({graphics:mask_graphics_215,x:150,y:300}).wait(1).to({graphics:mask_graphics_216,x:150,y:300}).wait(1).to({graphics:mask_graphics_217,x:150,y:300}).wait(1).to({graphics:mask_graphics_218,x:150,y:300}).wait(1).to({graphics:mask_graphics_219,x:150,y:300}).wait(1).to({graphics:mask_graphics_220,x:150,y:300}).wait(1).to({graphics:mask_graphics_221,x:150,y:300}).wait(1).to({graphics:mask_graphics_222,x:150,y:300}).wait(1).to({graphics:mask_graphics_223,x:150,y:300}).wait(1).to({graphics:mask_graphics_224,x:150,y:300}).wait(1).to({graphics:mask_graphics_225,x:150,y:300}).wait(1).to({graphics:mask_graphics_226,x:150,y:300}).wait(1).to({graphics:mask_graphics_227,x:150,y:300}).wait(1).to({graphics:mask_graphics_228,x:150,y:300}).wait(1));

	// Kemp_Logo_2
	this.instance = new lib.CachedBmp_61();
	this.instance.setTransform(190.95,316.75,0.5,0.5);

	this.instance_1 = new lib.CachedBmp_60();
	this.instance_1.setTransform(139.7,316.75,0.5,0.5);

	this.instance_2 = new lib.CachedBmp_59();
	this.instance_2.setTransform(105.2,316.6,0.5,0.5);

	this.instance_3 = new lib.CachedBmp_58();
	this.instance_3.setTransform(77.5,300,0.5,0.5);

	this.instance_4 = new lib.CachedBmp_57();
	this.instance_4.setTransform(123.85,241.75,0.5,0.5);

	this.instance_5 = new lib.CachedBmp_56();
	this.instance_5.setTransform(147.9,230,0.5,0.5);

	this.instance_6 = new lib.CachedBmp_55();
	this.instance_6.setTransform(115.05,242.55,0.5,0.5);

	this.instance_7 = new lib.CachedBmp_54();
	this.instance_7.setTransform(160.6,237.4,0.5,0.5);

	this.instance_8 = new lib.CachedBmp_53();
	this.instance_8.setTransform(115,276.5,0.5,0.5);

	var maskedShapeInstanceList = [this.instance,this.instance_1,this.instance_2,this.instance_3,this.instance_4,this.instance_5,this.instance_6,this.instance_7,this.instance_8];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_8},{t:this.instance_7},{t:this.instance_6},{t:this.instance_5},{t:this.instance_4},{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.instance}]},147).to({state:[{t:this.instance_8},{t:this.instance_7},{t:this.instance_6},{t:this.instance_5},{t:this.instance_4},{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.instance}]},81).wait(1));

	// Button
	this.instance_9 = new lib.CachedBmp_103();
	this.instance_9.setTransform(94.5,419.6,0.5,0.5);

	this.instance_10 = new lib.CachedBmp_102();
	this.instance_10.setTransform(58.9,410.55,0.5,0.5);

	this.instance_11 = new lib.Symbol6();
	this.instance_11.setTransform(150,432.65,1,1,0,0,0,91.1,22.1);
	this.instance_11._off = true;
	new cjs.ButtonHelper(this.instance_11, 0, 1, 1);

	var maskedShapeInstanceList = [this.instance_9,this.instance_10,this.instance_11];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_10},{t:this.instance_9}]},147).to({state:[{t:this.instance_11}]},70).to({state:[{t:this.instance_11}]},11).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.instance_11).wait(217).to({_off:false},0).to({alpha:0},11).wait(1));

	// Pattern_2
	this.instance_12 = new lib.Symbol5();
	this.instance_12.setTransform(279.45,502.05,1.1932,1.193,0,0,0,150,99.5);
	this.instance_12.alpha = 0.8008;
	this.instance_12.compositeOperation = "hard-light";
	this.instance_12._off = true;

	var maskedShapeInstanceList = [this.instance_12];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_12).wait(147).to({_off:false},0).wait(1).to({alpha:0.7992},0).wait(1).to({alpha:0.7975},0).wait(1).to({alpha:0.7956},0).wait(1).to({alpha:0.7937},0).wait(1).to({alpha:0.7916},0).wait(1).to({alpha:0.7894},0).wait(1).to({alpha:0.787},0).wait(1).to({alpha:0.7845},0).wait(1).to({alpha:0.7819},0).wait(1).to({alpha:0.7791},0).wait(1).to({alpha:0.7762},0).wait(1).to({alpha:0.7731},0).wait(1).to({alpha:0.7699},0).wait(1).to({alpha:0.7665},0).wait(1).to({alpha:0.763},0).wait(1).to({alpha:0.7593},0).wait(1).to({alpha:0.7554},0).wait(1).to({alpha:0.7513},0).wait(1).to({alpha:0.747},0).wait(1).to({alpha:0.7426},0).wait(1).to({alpha:0.7379},0).wait(1).to({alpha:0.733},0).wait(1).to({alpha:0.728},0).wait(1).to({alpha:0.7227},0).wait(1).to({alpha:0.7172},0).wait(1).to({alpha:0.7115},0).wait(1).to({alpha:0.7055},0).wait(1).to({alpha:0.6993},0).wait(1).to({alpha:0.6928},0).wait(1).to({alpha:0.6861},0).wait(1).to({alpha:0.6791},0).wait(1).to({alpha:0.6719},0).wait(1).to({alpha:0.6643},0).wait(1).to({alpha:0.6565},0).wait(1).to({alpha:0.6484},0).wait(1).to({alpha:0.64},0).wait(1).to({alpha:0.6313},0).wait(1).to({alpha:0.6223},0).wait(1).to({alpha:0.613},0).wait(1).to({alpha:0.6033},0).wait(1).to({alpha:0.5933},0).wait(1).to({alpha:0.583},0).wait(1).to({alpha:0.5723},0).wait(1).to({alpha:0.5613},0).wait(1).to({alpha:0.5499},0).wait(1).to({alpha:0.5382},0).wait(1).to({alpha:0.5262},0).wait(1).to({alpha:0.5138},0).wait(1).to({alpha:0.501},0).wait(1).to({alpha:0.488},0).wait(1).to({alpha:0.4746},0).wait(1).to({alpha:0.4608},0).wait(1).to({alpha:0.4467},0).wait(1).to({alpha:0.4324},0).wait(1).to({alpha:0.4177},0).wait(1).to({alpha:0.4028},0).wait(1).to({alpha:0.3876},0).wait(1).to({alpha:0.3721},0).wait(1).to({alpha:0.3564},0).wait(1).to({alpha:0.3405},0).wait(1).to({alpha:0.3245},0).wait(1).to({alpha:0.3082},0).wait(1).to({alpha:0.2919},0).wait(1).to({alpha:0.2754},0).wait(1).to({alpha:0.2589},0).wait(1).to({alpha:0.2422},0).wait(1).to({alpha:0.2256},0).wait(1).to({alpha:0.2089},0).wait(1).to({alpha:0.1923},0).wait(1).to({alpha:0.1757},0).wait(1).to({alpha:0.1591},0).wait(1).to({alpha:0.1426},0).wait(1).to({alpha:0.1262},0).wait(1).to({alpha:0.1099},0).wait(1).to({alpha:0.0937},0).wait(1).to({alpha:0.0777},0).wait(1).to({alpha:0.0618},0).wait(1).to({alpha:0.0461},0).wait(1).to({alpha:0.0306},0).wait(1).to({alpha:0.0152},0).wait(1).to({alpha:0},0).wait(1));

	// OL_Yellow
	this.instance_13 = new lib.Tween9("synched",0);
	this.instance_13.setTransform(150,916.15,0.8929,2.1428);
	this.instance_13._off = true;

	this.instance_14 = new lib.Tween10("synched",0);
	this.instance_14.setTransform(150.1,300,0.8929,2.1428,0,0,0,0.1,0);

	this.instance_15 = new lib.CachedBmp_21();
	this.instance_15.setTransform(0,0,0.5,0.5);

	this.instance_16 = new lib.CachedBmp_105();
	this.instance_16.setTransform(0,0,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_13}]},147).to({state:[{t:this.instance_14}]},11).to({state:[{t:this.instance_15}]},12).to({state:[{t:this.instance_16}]},58).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.instance_13).wait(147).to({_off:false},0).to({_off:true,regX:0.1,x:150.1,y:300},11,cjs.Ease.cubicOut).wait(71));

	// BG_Blue_copy
	this.instance_17 = new lib.Tween5("synched",0);
	this.instance_17.setTransform(150,918.15,0.8929,2.1428);
	this.instance_17._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_17).wait(143).to({_off:false},0).to({y:300},15,cjs.Ease.cubicOut).wait(7).to({startPosition:0},0).wait(64));

	// Mask_1 (mask)
	var mask_1 = new cjs.Shape();
	mask_1._off = true;
	var mask_1_graphics_90 = new cjs.Graphics().p("EgXbBfGMAAAhdwMAu3AAAMAAABdwg");
	var mask_1_graphics_91 = new cjs.Graphics().p("EgXbBTGMAAAhduMAu3AAAMAAABdug");
	var mask_1_graphics_92 = new cjs.Graphics().p("EgXbBJSMAAAhduMAu3AAAMAAABdug");
	var mask_1_graphics_93 = new cjs.Graphics().p("EgXbBBbMAAAhduMAu3AAAMAAABdug");
	var mask_1_graphics_94 = new cjs.Graphics().p("EgXbA7TMAAAhduMAu3AAAMAAABdug");
	var mask_1_graphics_95 = new cjs.Graphics().p("EgXbA2tMAAAhduMAu3AAAMAAABdug");
	var mask_1_graphics_96 = new cjs.Graphics().p("EgXbAzaMAAAhduMAu3AAAMAAABdug");
	var mask_1_graphics_97 = new cjs.Graphics().p("EgXbAxNMAAAhdvMAu3AAAMAAABdvg");
	var mask_1_graphics_98 = new cjs.Graphics().p("EgXbAv3MAAAhdvMAu3AAAMAAABdvg");
	var mask_1_graphics_99 = new cjs.Graphics().p("EgXbAvLMAAAhdvMAu3AAAMAAABdvg");
	var mask_1_graphics_100 = new cjs.Graphics().p("EgXbAu7MAAAhdvMAu3AAAMAAABdvg");
	var mask_1_graphics_101 = new cjs.Graphics().p("EgXbAu4MAAAhdvMAu3AAAMAAABdvg");
	var mask_1_graphics_102 = new cjs.Graphics().p("EgXbAu4MAAAhdvMAu3AAAMAAABdvg");
	var mask_1_graphics_103 = new cjs.Graphics().p("EgXbAu4MAAAhdvMAu3AAAMAAABdvg");
	var mask_1_graphics_104 = new cjs.Graphics().p("EgXbAu4MAAAhdvMAu3AAAMAAABdvg");
	var mask_1_graphics_105 = new cjs.Graphics().p("EgXbAu4MAAAhdvMAu3AAAMAAABdvg");
	var mask_1_graphics_106 = new cjs.Graphics().p("EgXbAu4MAAAhdvMAu3AAAMAAABdvg");
	var mask_1_graphics_107 = new cjs.Graphics().p("EgXbAu4MAAAhdvMAu3AAAMAAABdvg");
	var mask_1_graphics_108 = new cjs.Graphics().p("EgXbAu4MAAAhdvMAu3AAAMAAABdvg");
	var mask_1_graphics_109 = new cjs.Graphics().p("EgXbAu4MAAAhdvMAu3AAAMAAABdvg");
	var mask_1_graphics_110 = new cjs.Graphics().p("EgXbAu4MAAAhdvMAu3AAAMAAABdvg");
	var mask_1_graphics_111 = new cjs.Graphics().p("EgXbAu4MAAAhdvMAu3AAAMAAABdvg");
	var mask_1_graphics_112 = new cjs.Graphics().p("EgXbAu4MAAAhdvMAu3AAAMAAABdvg");
	var mask_1_graphics_113 = new cjs.Graphics().p("EgXbAu4MAAAhdvMAu3AAAMAAABdvg");
	var mask_1_graphics_114 = new cjs.Graphics().p("EgXbAu4MAAAhdvMAu3AAAMAAABdvg");
	var mask_1_graphics_115 = new cjs.Graphics().p("EgXbAu4MAAAhdvMAu3AAAMAAABdvg");
	var mask_1_graphics_116 = new cjs.Graphics().p("EgXbAu4MAAAhdvMAu3AAAMAAABdvg");
	var mask_1_graphics_117 = new cjs.Graphics().p("EgXbAu4MAAAhdvMAu3AAAMAAABdvg");
	var mask_1_graphics_118 = new cjs.Graphics().p("EgXbAu4MAAAhdvMAu3AAAMAAABdvg");
	var mask_1_graphics_119 = new cjs.Graphics().p("EgXbAu4MAAAhdvMAu3AAAMAAABdvg");
	var mask_1_graphics_120 = new cjs.Graphics().p("EgXbAu4MAAAhdvMAu3AAAMAAABdvg");
	var mask_1_graphics_121 = new cjs.Graphics().p("EgXbAu4MAAAhdvMAu3AAAMAAABdvg");
	var mask_1_graphics_122 = new cjs.Graphics().p("EgXbAu4MAAAhdvMAu3AAAMAAABdvg");
	var mask_1_graphics_123 = new cjs.Graphics().p("EgXbAu4MAAAhdvMAu3AAAMAAABdvg");
	var mask_1_graphics_124 = new cjs.Graphics().p("EgXbAu4MAAAhdvMAu3AAAMAAABdvg");
	var mask_1_graphics_125 = new cjs.Graphics().p("EgXbAu4MAAAhdvMAu3AAAMAAABdvg");
	var mask_1_graphics_126 = new cjs.Graphics().p("EgXbAu4MAAAhdvMAu3AAAMAAABdvg");
	var mask_1_graphics_127 = new cjs.Graphics().p("EgXbAu4MAAAhdvMAu3AAAMAAABdvg");
	var mask_1_graphics_128 = new cjs.Graphics().p("EgXbAu4MAAAhdvMAu3AAAMAAABdvg");
	var mask_1_graphics_129 = new cjs.Graphics().p("EgXbAu4MAAAhdvMAu3AAAMAAABdvg");
	var mask_1_graphics_130 = new cjs.Graphics().p("EgXbAu4MAAAhdvMAu3AAAMAAABdvg");
	var mask_1_graphics_131 = new cjs.Graphics().p("EgXbAu4MAAAhdvMAu3AAAMAAABdvg");
	var mask_1_graphics_132 = new cjs.Graphics().p("EgXbAu4MAAAhdvMAu3AAAMAAABdvg");
	var mask_1_graphics_133 = new cjs.Graphics().p("EgXbAu4MAAAhdvMAu3AAAMAAABdvg");
	var mask_1_graphics_134 = new cjs.Graphics().p("EgXbAu4MAAAhdvMAu3AAAMAAABdvg");
	var mask_1_graphics_135 = new cjs.Graphics().p("EgXbAu4MAAAhdvMAu3AAAMAAABdvg");
	var mask_1_graphics_136 = new cjs.Graphics().p("EgXbAu4MAAAhdvMAu3AAAMAAABdvg");
	var mask_1_graphics_137 = new cjs.Graphics().p("EgXbAu4MAAAhdvMAu3AAAMAAABdvg");
	var mask_1_graphics_138 = new cjs.Graphics().p("EgXbAu4MAAAhdvMAu3AAAMAAABdvg");
	var mask_1_graphics_139 = new cjs.Graphics().p("EgXbAu4MAAAhdvMAu3AAAMAAABdvg");
	var mask_1_graphics_140 = new cjs.Graphics().p("EgXbAu4MAAAhdvMAu3AAAMAAABdvg");
	var mask_1_graphics_141 = new cjs.Graphics().p("EgXbAu4MAAAhdvMAu3AAAMAAABdvg");
	var mask_1_graphics_142 = new cjs.Graphics().p("EgXbAu4MAAAhdvMAu3AAAMAAABdvg");
	var mask_1_graphics_143 = new cjs.Graphics().p("EgXbAu4MAAAhdvMAu3AAAMAAABdvg");
	var mask_1_graphics_144 = new cjs.Graphics().p("EgXbAu4MAAAhdvMAu3AAAMAAABdvg");
	var mask_1_graphics_145 = new cjs.Graphics().p("EgXbAu4MAAAhdvMAu3AAAMAAABdvg");
	var mask_1_graphics_146 = new cjs.Graphics().p("EgXbAu4MAAAhdvMAu3AAAMAAABdvg");
	var mask_1_graphics_147 = new cjs.Graphics().p("EgXbAu4MAAAhdvMAu3AAAMAAABdvg");
	var mask_1_graphics_148 = new cjs.Graphics().p("EgXbAu4MAAAhdvMAu3AAAMAAABdvg");
	var mask_1_graphics_149 = new cjs.Graphics().p("EgXbAu4MAAAhdvMAu3AAAMAAABdvg");
	var mask_1_graphics_150 = new cjs.Graphics().p("EgXbAu4MAAAhdvMAu3AAAMAAABdvg");
	var mask_1_graphics_151 = new cjs.Graphics().p("EgXbAu4MAAAhdvMAu3AAAMAAABdvg");
	var mask_1_graphics_152 = new cjs.Graphics().p("EgXbAu4MAAAhdvMAu3AAAMAAABdvg");
	var mask_1_graphics_153 = new cjs.Graphics().p("EgXbAu4MAAAhdvMAu3AAAMAAABdvg");
	var mask_1_graphics_154 = new cjs.Graphics().p("EgXbAu4MAAAhdvMAu3AAAMAAABdvg");
	var mask_1_graphics_155 = new cjs.Graphics().p("EgXbAu4MAAAhdvMAu3AAAMAAABdvg");
	var mask_1_graphics_156 = new cjs.Graphics().p("EgXbAu4MAAAhdvMAu3AAAMAAABdvg");
	var mask_1_graphics_157 = new cjs.Graphics().p("EgXbAu4MAAAhdvMAu3AAAMAAABdvg");
	var mask_1_graphics_158 = new cjs.Graphics().p("EgXbAu4MAAAhdvMAu3AAAMAAABdvg");
	var mask_1_graphics_159 = new cjs.Graphics().p("EgXbAu4MAAAhdvMAu3AAAMAAABdvg");
	var mask_1_graphics_160 = new cjs.Graphics().p("EgXbAu4MAAAhdvMAu3AAAMAAABdvg");
	var mask_1_graphics_161 = new cjs.Graphics().p("EgXbAu4MAAAhdvMAu3AAAMAAABdvg");
	var mask_1_graphics_162 = new cjs.Graphics().p("EgXbAu4MAAAhdvMAu3AAAMAAABdvg");
	var mask_1_graphics_163 = new cjs.Graphics().p("EgXbAu4MAAAhdvMAu3AAAMAAABdvg");
	var mask_1_graphics_164 = new cjs.Graphics().p("EgXbAu4MAAAhdvMAu3AAAMAAABdvg");
	var mask_1_graphics_165 = new cjs.Graphics().p("EgXbAu4MAAAhdvMAu3AAAMAAABdvg");
	var mask_1_graphics_166 = new cjs.Graphics().p("EgXbAu4MAAAhdvMAu3AAAMAAABdvg");
	var mask_1_graphics_167 = new cjs.Graphics().p("EgXbAu4MAAAhdvMAu3AAAMAAABdvg");
	var mask_1_graphics_168 = new cjs.Graphics().p("EgXbAu4MAAAhdvMAu3AAAMAAABdvg");
	var mask_1_graphics_169 = new cjs.Graphics().p("EgXbAu4MAAAhdvMAu3AAAMAAABdvg");
	var mask_1_graphics_170 = new cjs.Graphics().p("EgXbAu4MAAAhdvMAu3AAAMAAABdvg");
	var mask_1_graphics_171 = new cjs.Graphics().p("EgXbAu4MAAAhdvMAu3AAAMAAABdvg");
	var mask_1_graphics_172 = new cjs.Graphics().p("EgXbAu4MAAAhdvMAu3AAAMAAABdvg");
	var mask_1_graphics_173 = new cjs.Graphics().p("EgXbAu4MAAAhdvMAu3AAAMAAABdvg");
	var mask_1_graphics_174 = new cjs.Graphics().p("EgXbAu4MAAAhdvMAu3AAAMAAABdvg");
	var mask_1_graphics_175 = new cjs.Graphics().p("EgXbAu4MAAAhdvMAu3AAAMAAABdvg");
	var mask_1_graphics_176 = new cjs.Graphics().p("EgXbAu4MAAAhdvMAu3AAAMAAABdvg");
	var mask_1_graphics_177 = new cjs.Graphics().p("EgXbAu4MAAAhdvMAu3AAAMAAABdvg");
	var mask_1_graphics_178 = new cjs.Graphics().p("EgXbAu4MAAAhdvMAu3AAAMAAABdvg");
	var mask_1_graphics_179 = new cjs.Graphics().p("EgXbAu4MAAAhdvMAu3AAAMAAABdvg");
	var mask_1_graphics_180 = new cjs.Graphics().p("EgXbAu4MAAAhdvMAu3AAAMAAABdvg");
	var mask_1_graphics_181 = new cjs.Graphics().p("EgXbAu4MAAAhdvMAu3AAAMAAABdvg");
	var mask_1_graphics_182 = new cjs.Graphics().p("EgXbAu4MAAAhdvMAu3AAAMAAABdvg");
	var mask_1_graphics_183 = new cjs.Graphics().p("EgXbAu4MAAAhdvMAu3AAAMAAABdvg");
	var mask_1_graphics_184 = new cjs.Graphics().p("EgXbAu4MAAAhdvMAu3AAAMAAABdvg");
	var mask_1_graphics_185 = new cjs.Graphics().p("EgXbAu4MAAAhdvMAu3AAAMAAABdvg");
	var mask_1_graphics_186 = new cjs.Graphics().p("EgXbAu4MAAAhdvMAu3AAAMAAABdvg");
	var mask_1_graphics_187 = new cjs.Graphics().p("EgXbAu4MAAAhdvMAu3AAAMAAABdvg");
	var mask_1_graphics_188 = new cjs.Graphics().p("EgXbAu4MAAAhdvMAu3AAAMAAABdvg");
	var mask_1_graphics_189 = new cjs.Graphics().p("EgXbAu4MAAAhdvMAu3AAAMAAABdvg");
	var mask_1_graphics_190 = new cjs.Graphics().p("EgXbAu4MAAAhdvMAu3AAAMAAABdvg");
	var mask_1_graphics_191 = new cjs.Graphics().p("EgXbAu4MAAAhdvMAu3AAAMAAABdvg");
	var mask_1_graphics_192 = new cjs.Graphics().p("EgXbAu4MAAAhdvMAu3AAAMAAABdvg");
	var mask_1_graphics_193 = new cjs.Graphics().p("EgXbAu4MAAAhdvMAu3AAAMAAABdvg");
	var mask_1_graphics_194 = new cjs.Graphics().p("EgXbAu4MAAAhdvMAu3AAAMAAABdvg");
	var mask_1_graphics_195 = new cjs.Graphics().p("EgXbAu4MAAAhdvMAu3AAAMAAABdvg");
	var mask_1_graphics_196 = new cjs.Graphics().p("EgXbAu4MAAAhdvMAu3AAAMAAABdvg");
	var mask_1_graphics_197 = new cjs.Graphics().p("EgXbAu4MAAAhdvMAu3AAAMAAABdvg");
	var mask_1_graphics_198 = new cjs.Graphics().p("EgXbAu4MAAAhdvMAu3AAAMAAABdvg");
	var mask_1_graphics_199 = new cjs.Graphics().p("EgXbAu4MAAAhdvMAu3AAAMAAABdvg");
	var mask_1_graphics_200 = new cjs.Graphics().p("EgXbAu4MAAAhdvMAu3AAAMAAABdvg");
	var mask_1_graphics_201 = new cjs.Graphics().p("EgXbAu4MAAAhdvMAu3AAAMAAABdvg");
	var mask_1_graphics_202 = new cjs.Graphics().p("EgXbAu4MAAAhdvMAu3AAAMAAABdvg");
	var mask_1_graphics_203 = new cjs.Graphics().p("EgXbAu4MAAAhdvMAu3AAAMAAABdvg");
	var mask_1_graphics_204 = new cjs.Graphics().p("EgXbAu4MAAAhdvMAu3AAAMAAABdvg");
	var mask_1_graphics_205 = new cjs.Graphics().p("EgXbAu4MAAAhdvMAu3AAAMAAABdvg");
	var mask_1_graphics_206 = new cjs.Graphics().p("EgXbAu4MAAAhdvMAu3AAAMAAABdvg");
	var mask_1_graphics_207 = new cjs.Graphics().p("EgXbAu4MAAAhdvMAu3AAAMAAABdvg");
	var mask_1_graphics_208 = new cjs.Graphics().p("EgXbAu4MAAAhdvMAu3AAAMAAABdvg");
	var mask_1_graphics_209 = new cjs.Graphics().p("EgXbAu4MAAAhdvMAu3AAAMAAABdvg");
	var mask_1_graphics_210 = new cjs.Graphics().p("EgXbAu4MAAAhdvMAu3AAAMAAABdvg");
	var mask_1_graphics_211 = new cjs.Graphics().p("EgXbAu4MAAAhdvMAu3AAAMAAABdvg");
	var mask_1_graphics_212 = new cjs.Graphics().p("EgXbAu4MAAAhdvMAu3AAAMAAABdvg");
	var mask_1_graphics_213 = new cjs.Graphics().p("EgXbAu4MAAAhdvMAu3AAAMAAABdvg");
	var mask_1_graphics_214 = new cjs.Graphics().p("EgXbAu4MAAAhdvMAu3AAAMAAABdvg");
	var mask_1_graphics_215 = new cjs.Graphics().p("EgXbAu4MAAAhdvMAu3AAAMAAABdvg");
	var mask_1_graphics_216 = new cjs.Graphics().p("EgXbAu4MAAAhdvMAu3AAAMAAABdvg");
	var mask_1_graphics_217 = new cjs.Graphics().p("EgXbAu4MAAAhdvMAu3AAAMAAABdvg");
	var mask_1_graphics_218 = new cjs.Graphics().p("EgXbAu4MAAAhdvMAu3AAAMAAABdvg");
	var mask_1_graphics_219 = new cjs.Graphics().p("EgXbAu4MAAAhdvMAu3AAAMAAABdvg");
	var mask_1_graphics_220 = new cjs.Graphics().p("EgXbAu4MAAAhdvMAu3AAAMAAABdvg");
	var mask_1_graphics_221 = new cjs.Graphics().p("EgXbAu4MAAAhdvMAu3AAAMAAABdvg");
	var mask_1_graphics_222 = new cjs.Graphics().p("EgXbAu4MAAAhdvMAu3AAAMAAABdvg");
	var mask_1_graphics_223 = new cjs.Graphics().p("EgXbAu4MAAAhdvMAu3AAAMAAABdvg");
	var mask_1_graphics_224 = new cjs.Graphics().p("EgXbAu4MAAAhdvMAu3AAAMAAABdvg");
	var mask_1_graphics_225 = new cjs.Graphics().p("EgXbAu4MAAAhdvMAu3AAAMAAABdvg");
	var mask_1_graphics_226 = new cjs.Graphics().p("EgXbAu4MAAAhdvMAu3AAAMAAABdvg");
	var mask_1_graphics_227 = new cjs.Graphics().p("EgXbAu4MAAAhdvMAu3AAAMAAABdvg");
	var mask_1_graphics_228 = new cjs.Graphics().p("EgXbAu4MAAAhdvMAu3AAAMAAABdvg");

	this.timeline.addTween(cjs.Tween.get(mask_1).to({graphics:null,x:0,y:0}).wait(90).to({graphics:mask_1_graphics_90,x:149.9996,y:608.5736}).wait(1).to({graphics:mask_1_graphics_91,x:149.9984,y:531.8401}).wait(1).to({graphics:mask_1_graphics_92,x:149.9984,y:469.0151}).wait(1).to({graphics:mask_1_graphics_93,x:149.9984,y:418.7151}).wait(1).to({graphics:mask_1_graphics_94,x:149.9984,y:379.5401}).wait(1).to({graphics:mask_1_graphics_95,x:149.9984,y:350.1151}).wait(1).to({graphics:mask_1_graphics_96,x:149.9984,y:329.0151}).wait(1).to({graphics:mask_1_graphics_97,x:149.9984,y:314.8901}).wait(1).to({graphics:mask_1_graphics_98,x:149.9984,y:306.2901}).wait(1).to({graphics:mask_1_graphics_99,x:149.9984,y:301.8901}).wait(1).to({graphics:mask_1_graphics_100,x:149.9984,y:300.2651}).wait(1).to({graphics:mask_1_graphics_101,x:149.9996,y:299.9986}).wait(1).to({graphics:mask_1_graphics_102,x:149.9996,y:299.9986}).wait(1).to({graphics:mask_1_graphics_103,x:149.9996,y:299.9986}).wait(1).to({graphics:mask_1_graphics_104,x:149.9996,y:299.9986}).wait(1).to({graphics:mask_1_graphics_105,x:149.9996,y:299.9986}).wait(1).to({graphics:mask_1_graphics_106,x:149.9996,y:299.9986}).wait(1).to({graphics:mask_1_graphics_107,x:149.9996,y:299.9986}).wait(1).to({graphics:mask_1_graphics_108,x:149.9996,y:299.9986}).wait(1).to({graphics:mask_1_graphics_109,x:149.9996,y:299.9986}).wait(1).to({graphics:mask_1_graphics_110,x:149.9996,y:299.9986}).wait(1).to({graphics:mask_1_graphics_111,x:149.9996,y:299.9986}).wait(1).to({graphics:mask_1_graphics_112,x:149.9996,y:299.9986}).wait(1).to({graphics:mask_1_graphics_113,x:149.9996,y:299.9986}).wait(1).to({graphics:mask_1_graphics_114,x:149.9996,y:299.9986}).wait(1).to({graphics:mask_1_graphics_115,x:149.9996,y:299.9986}).wait(1).to({graphics:mask_1_graphics_116,x:149.9996,y:299.9986}).wait(1).to({graphics:mask_1_graphics_117,x:149.9996,y:299.9986}).wait(1).to({graphics:mask_1_graphics_118,x:149.9996,y:299.9986}).wait(1).to({graphics:mask_1_graphics_119,x:149.9996,y:299.9986}).wait(1).to({graphics:mask_1_graphics_120,x:149.9996,y:299.9986}).wait(1).to({graphics:mask_1_graphics_121,x:149.9996,y:299.9986}).wait(1).to({graphics:mask_1_graphics_122,x:149.9996,y:299.9986}).wait(1).to({graphics:mask_1_graphics_123,x:149.9996,y:299.9986}).wait(1).to({graphics:mask_1_graphics_124,x:149.9996,y:299.9986}).wait(1).to({graphics:mask_1_graphics_125,x:149.9996,y:299.9986}).wait(1).to({graphics:mask_1_graphics_126,x:149.9996,y:299.9986}).wait(1).to({graphics:mask_1_graphics_127,x:149.9996,y:299.9986}).wait(1).to({graphics:mask_1_graphics_128,x:149.9996,y:299.9986}).wait(1).to({graphics:mask_1_graphics_129,x:149.9996,y:299.9986}).wait(1).to({graphics:mask_1_graphics_130,x:149.9996,y:299.9986}).wait(1).to({graphics:mask_1_graphics_131,x:149.9996,y:299.9986}).wait(1).to({graphics:mask_1_graphics_132,x:149.9996,y:299.9986}).wait(1).to({graphics:mask_1_graphics_133,x:149.9996,y:299.9986}).wait(1).to({graphics:mask_1_graphics_134,x:149.9996,y:299.9986}).wait(1).to({graphics:mask_1_graphics_135,x:149.9996,y:299.9986}).wait(1).to({graphics:mask_1_graphics_136,x:149.9996,y:299.9986}).wait(1).to({graphics:mask_1_graphics_137,x:149.9996,y:299.9986}).wait(1).to({graphics:mask_1_graphics_138,x:149.9996,y:299.9986}).wait(1).to({graphics:mask_1_graphics_139,x:149.9996,y:299.9986}).wait(1).to({graphics:mask_1_graphics_140,x:149.9996,y:299.9986}).wait(1).to({graphics:mask_1_graphics_141,x:149.9996,y:299.9986}).wait(1).to({graphics:mask_1_graphics_142,x:149.9996,y:299.9986}).wait(1).to({graphics:mask_1_graphics_143,x:149.9996,y:299.9986}).wait(1).to({graphics:mask_1_graphics_144,x:149.9996,y:299.9986}).wait(1).to({graphics:mask_1_graphics_145,x:149.9996,y:299.9986}).wait(1).to({graphics:mask_1_graphics_146,x:149.9996,y:299.9986}).wait(1).to({graphics:mask_1_graphics_147,x:149.9996,y:299.9986}).wait(1).to({graphics:mask_1_graphics_148,x:149.9996,y:299.9986}).wait(1).to({graphics:mask_1_graphics_149,x:149.9996,y:299.9986}).wait(1).to({graphics:mask_1_graphics_150,x:149.9996,y:299.9986}).wait(1).to({graphics:mask_1_graphics_151,x:149.9996,y:299.9986}).wait(1).to({graphics:mask_1_graphics_152,x:149.9996,y:299.9986}).wait(1).to({graphics:mask_1_graphics_153,x:149.9996,y:299.9986}).wait(1).to({graphics:mask_1_graphics_154,x:149.9996,y:299.9986}).wait(1).to({graphics:mask_1_graphics_155,x:149.9996,y:299.9986}).wait(1).to({graphics:mask_1_graphics_156,x:149.9996,y:299.9986}).wait(1).to({graphics:mask_1_graphics_157,x:149.9996,y:299.9986}).wait(1).to({graphics:mask_1_graphics_158,x:149.9996,y:299.9986}).wait(1).to({graphics:mask_1_graphics_159,x:149.9996,y:299.9986}).wait(1).to({graphics:mask_1_graphics_160,x:149.9996,y:299.9986}).wait(1).to({graphics:mask_1_graphics_161,x:149.9996,y:299.9986}).wait(1).to({graphics:mask_1_graphics_162,x:149.9996,y:299.9986}).wait(1).to({graphics:mask_1_graphics_163,x:149.9996,y:299.9986}).wait(1).to({graphics:mask_1_graphics_164,x:149.9996,y:299.9986}).wait(1).to({graphics:mask_1_graphics_165,x:149.9996,y:299.9986}).wait(1).to({graphics:mask_1_graphics_166,x:149.9996,y:299.9986}).wait(1).to({graphics:mask_1_graphics_167,x:149.9996,y:299.9986}).wait(1).to({graphics:mask_1_graphics_168,x:149.9996,y:299.9986}).wait(1).to({graphics:mask_1_graphics_169,x:149.9996,y:299.9986}).wait(1).to({graphics:mask_1_graphics_170,x:149.9996,y:299.9986}).wait(1).to({graphics:mask_1_graphics_171,x:149.9996,y:299.9986}).wait(1).to({graphics:mask_1_graphics_172,x:149.9996,y:299.9986}).wait(1).to({graphics:mask_1_graphics_173,x:149.9996,y:299.9986}).wait(1).to({graphics:mask_1_graphics_174,x:149.9996,y:299.9986}).wait(1).to({graphics:mask_1_graphics_175,x:149.9996,y:299.9986}).wait(1).to({graphics:mask_1_graphics_176,x:149.9996,y:299.9986}).wait(1).to({graphics:mask_1_graphics_177,x:149.9996,y:299.9986}).wait(1).to({graphics:mask_1_graphics_178,x:149.9996,y:299.9986}).wait(1).to({graphics:mask_1_graphics_179,x:149.9996,y:299.9986}).wait(1).to({graphics:mask_1_graphics_180,x:149.9996,y:299.9986}).wait(1).to({graphics:mask_1_graphics_181,x:149.9996,y:299.9986}).wait(1).to({graphics:mask_1_graphics_182,x:149.9996,y:299.9986}).wait(1).to({graphics:mask_1_graphics_183,x:149.9996,y:299.9986}).wait(1).to({graphics:mask_1_graphics_184,x:149.9996,y:299.9986}).wait(1).to({graphics:mask_1_graphics_185,x:149.9996,y:299.9986}).wait(1).to({graphics:mask_1_graphics_186,x:149.9996,y:299.9986}).wait(1).to({graphics:mask_1_graphics_187,x:149.9996,y:299.9986}).wait(1).to({graphics:mask_1_graphics_188,x:149.9996,y:299.9986}).wait(1).to({graphics:mask_1_graphics_189,x:149.9996,y:299.9986}).wait(1).to({graphics:mask_1_graphics_190,x:149.9996,y:299.9986}).wait(1).to({graphics:mask_1_graphics_191,x:149.9996,y:299.9986}).wait(1).to({graphics:mask_1_graphics_192,x:149.9996,y:299.9986}).wait(1).to({graphics:mask_1_graphics_193,x:149.9996,y:299.9986}).wait(1).to({graphics:mask_1_graphics_194,x:149.9996,y:299.9986}).wait(1).to({graphics:mask_1_graphics_195,x:149.9996,y:299.9986}).wait(1).to({graphics:mask_1_graphics_196,x:149.9996,y:299.9986}).wait(1).to({graphics:mask_1_graphics_197,x:149.9996,y:299.9986}).wait(1).to({graphics:mask_1_graphics_198,x:149.9996,y:299.9986}).wait(1).to({graphics:mask_1_graphics_199,x:149.9996,y:299.9986}).wait(1).to({graphics:mask_1_graphics_200,x:149.9996,y:299.9986}).wait(1).to({graphics:mask_1_graphics_201,x:149.9996,y:299.9986}).wait(1).to({graphics:mask_1_graphics_202,x:149.9996,y:299.9986}).wait(1).to({graphics:mask_1_graphics_203,x:149.9996,y:299.9986}).wait(1).to({graphics:mask_1_graphics_204,x:149.9996,y:299.9986}).wait(1).to({graphics:mask_1_graphics_205,x:149.9996,y:299.9986}).wait(1).to({graphics:mask_1_graphics_206,x:149.9996,y:299.9986}).wait(1).to({graphics:mask_1_graphics_207,x:149.9996,y:299.9986}).wait(1).to({graphics:mask_1_graphics_208,x:149.9996,y:299.9986}).wait(1).to({graphics:mask_1_graphics_209,x:149.9996,y:299.9986}).wait(1).to({graphics:mask_1_graphics_210,x:149.9996,y:299.9986}).wait(1).to({graphics:mask_1_graphics_211,x:149.9996,y:299.9986}).wait(1).to({graphics:mask_1_graphics_212,x:149.9996,y:299.9986}).wait(1).to({graphics:mask_1_graphics_213,x:149.9996,y:299.9986}).wait(1).to({graphics:mask_1_graphics_214,x:149.9996,y:299.9986}).wait(1).to({graphics:mask_1_graphics_215,x:149.9996,y:299.9986}).wait(1).to({graphics:mask_1_graphics_216,x:149.9996,y:299.9986}).wait(1).to({graphics:mask_1_graphics_217,x:149.9996,y:299.9986}).wait(1).to({graphics:mask_1_graphics_218,x:149.9996,y:299.9986}).wait(1).to({graphics:mask_1_graphics_219,x:149.9996,y:299.9986}).wait(1).to({graphics:mask_1_graphics_220,x:149.9996,y:299.9986}).wait(1).to({graphics:mask_1_graphics_221,x:149.9996,y:299.9986}).wait(1).to({graphics:mask_1_graphics_222,x:149.9996,y:299.9986}).wait(1).to({graphics:mask_1_graphics_223,x:149.9996,y:299.9986}).wait(1).to({graphics:mask_1_graphics_224,x:149.9996,y:299.9986}).wait(1).to({graphics:mask_1_graphics_225,x:149.9996,y:299.9986}).wait(1).to({graphics:mask_1_graphics_226,x:149.9996,y:299.9986}).wait(1).to({graphics:mask_1_graphics_227,x:149.9996,y:299.9986}).wait(1).to({graphics:mask_1_graphics_228,x:149.9996,y:299.9986}).wait(1));

	// Worlds
	this.instance_18 = new lib.CachedBmp_108();
	this.instance_18.setTransform(40,40,0.5,0.5);
	this.instance_18._off = true;

	var maskedShapeInstanceList = [this.instance_18];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_1;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_18).wait(90).to({_off:false},0).wait(139));

	// Gartner
	this.instance_19 = new lib.Path();
	this.instance_19.setTransform(252.5,497.15,1.2748,1.2731,0,0,0,2.3,2.3);
	this.instance_19.alpha = 0.3984;

	this.instance_20 = new lib.CachedBmp_52();
	this.instance_20.setTransform(230.35,485.5,0.5,0.5);

	this.instance_21 = new lib.CachedBmp_52();
	this.instance_21.setTransform(202.15,485.5,0.5,0.5);

	this.instance_22 = new lib.CachedBmp_50();
	this.instance_22.setTransform(173.95,485.5,0.5,0.5);

	this.instance_23 = new lib.CachedBmp_49();
	this.instance_23.setTransform(145.7,485.5,0.5,0.5);

	this.instance_24 = new lib.CachedBmp_50();
	this.instance_24.setTransform(117.45,485.5,0.5,0.5);

	this.instance_25 = new lib.CachedBmp_47();
	this.instance_25.setTransform(173.95,219.6,0.5,0.5);

	this.instance_26 = new lib.Group();
	this.instance_26.setTransform(78.65,502.45,1.2748,1.2731,0,0,0,19.3,8.5);

	this.instance_27 = new lib.CachedBmp_46();
	this.instance_27.setTransform(56.45,425.1,0.5,0.5);

	this.instance_28 = new lib.CachedBmp_45();
	this.instance_28.setTransform(45,438,0.5,0.5);

	this.instance_29 = new lib.CachedBmp_44();
	this.instance_29.setTransform(63.35,438,0.5,0.5);

	this.instance_30 = new lib.CachedBmp_44();
	this.instance_30.setTransform(81.75,438,0.5,0.5);

	this.instance_31 = new lib.CachedBmp_42();
	this.instance_31.setTransform(244.7,452.85,0.5,0.5);

	this.instance_32 = new lib.CachedBmp_41();
	this.instance_32.setTransform(236.3,449.15,0.5,0.5);

	this.instance_33 = new lib.CachedBmp_40();
	this.instance_33.setTransform(223.65,448.1,0.5,0.5);

	this.instance_34 = new lib.CachedBmp_39();
	this.instance_34.setTransform(208.95,452.85,0.5,0.5);

	this.instance_35 = new lib.CachedBmp_38();
	this.instance_35.setTransform(204.9,448.1,0.5,0.5);

	this.instance_36 = new lib.CachedBmp_37();
	this.instance_36.setTransform(190.85,452.85,0.5,0.5);

	this.instance_37 = new lib.CachedBmp_36();
	this.instance_37.setTransform(177.45,452.85,0.5,0.5);

	this.instance_38 = new lib.CachedBmp_38();
	this.instance_38.setTransform(172.2,448.1,0.5,0.5);

	this.instance_39 = new lib.CachedBmp_34();
	this.instance_39.setTransform(161.25,452.75,0.5,0.5);

	this.instance_40 = new lib.CachedBmp_33();
	this.instance_40.setTransform(146.1,452.75,0.5,0.5);

	this.instance_41 = new lib.CachedBmp_32();
	this.instance_41.setTransform(131.6,452.75,0.5,0.5);

	this.instance_42 = new lib.CachedBmp_31();
	this.instance_42.setTransform(117.55,452.75,0.5,0.5);

	this.instance_43 = new lib.CachedBmp_30();
	this.instance_43.setTransform(129.5,433.55,0.5,0.5);

	this.instance_44 = new lib.CachedBmp_29();
	this.instance_44.setTransform(156.2,433.55,0.5,0.5);

	this.instance_45 = new lib.CachedBmp_28();
	this.instance_45.setTransform(117.9,429.9,0.5,0.5);

	this.instance_46 = new lib.CachedBmp_27();
	this.instance_46.setTransform(137.9,433.75,0.5,0.5);

	this.instance_47 = new lib.CachedBmp_26();
	this.instance_47.setTransform(143.15,431.55,0.5,0.5);

	this.instance_48 = new lib.CachedBmp_25();
	this.instance_48.setTransform(148.2,433.55,0.5,0.5);

	this.instance_49 = new lib.CachedBmp_24();
	this.instance_49.setTransform(164.95,433.75,0.5,0.5);

	var maskedShapeInstanceList = [this.instance_19,this.instance_20,this.instance_21,this.instance_22,this.instance_23,this.instance_24,this.instance_25,this.instance_26,this.instance_27,this.instance_28,this.instance_29,this.instance_30,this.instance_31,this.instance_32,this.instance_33,this.instance_34,this.instance_35,this.instance_36,this.instance_37,this.instance_38,this.instance_39,this.instance_40,this.instance_41,this.instance_42,this.instance_43,this.instance_44,this.instance_45,this.instance_46,this.instance_47,this.instance_48,this.instance_49];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_1;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_49},{t:this.instance_48},{t:this.instance_47},{t:this.instance_46},{t:this.instance_45},{t:this.instance_44},{t:this.instance_43},{t:this.instance_42},{t:this.instance_41},{t:this.instance_40},{t:this.instance_39},{t:this.instance_38},{t:this.instance_37},{t:this.instance_36},{t:this.instance_35},{t:this.instance_34},{t:this.instance_33},{t:this.instance_32},{t:this.instance_31},{t:this.instance_30},{t:this.instance_29},{t:this.instance_28},{t:this.instance_27},{t:this.instance_26},{t:this.instance_25},{t:this.instance_24},{t:this.instance_23},{t:this.instance_22},{t:this.instance_21},{t:this.instance_20},{t:this.instance_19}]},90).wait(139));

	// BG_Purple
	this.instance_50 = new lib.Tween7("synched",0);
	this.instance_50.setTransform(150,916.15,0.8929,2.1428);
	this.instance_50._off = true;

	this.instance_51 = new lib.Tween8("synched",0);
	this.instance_51.setTransform(150,300,0.8929,2.1428);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_50}]},90).to({state:[{t:this.instance_51}]},11).to({state:[{t:this.instance_51}]},66).wait(62));
	this.timeline.addTween(cjs.Tween.get(this.instance_50).wait(90).to({_off:false},0).to({_off:true,y:300},11,cjs.Ease.cubicOut).wait(128));

	// BG_Blue
	this.instance_52 = new lib.Tween5("synched",0);
	this.instance_52.setTransform(150,915.15,0.8929,2.1428);
	this.instance_52._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_52).wait(85).to({_off:false},0).to({y:300},16,cjs.Ease.quartOut).wait(17).to({startPosition:0},0).wait(111));

	// Try
	this.instance_53 = new lib.Tween17("synched",0);
	this.instance_53.setTransform(466.15,274);
	this.instance_53._off = true;

	this.instance_54 = new lib.Tween18("synched",0);
	this.instance_54.setTransform(150.05,274);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_53}]},37).to({state:[{t:this.instance_54}]},14).wait(178));
	this.timeline.addTween(cjs.Tween.get(this.instance_53).wait(37).to({_off:false},0).to({_off:true,x:150.05},14,cjs.Ease.quartOut).wait(178));

	// Kemp_Logo_1
	this.instance_55 = new lib.CachedBmp_61();
	this.instance_55.setTransform(190.95,316.75,0.5,0.5);

	this.instance_56 = new lib.CachedBmp_60();
	this.instance_56.setTransform(139.7,316.75,0.5,0.5);

	this.instance_57 = new lib.CachedBmp_59();
	this.instance_57.setTransform(105.2,316.6,0.5,0.5);

	this.instance_58 = new lib.CachedBmp_58();
	this.instance_58.setTransform(77.5,300,0.5,0.5);

	this.instance_59 = new lib.CachedBmp_57();
	this.instance_59.setTransform(123.85,241.75,0.5,0.5);

	this.instance_60 = new lib.CachedBmp_56();
	this.instance_60.setTransform(147.9,230,0.5,0.5);

	this.instance_61 = new lib.CachedBmp_55();
	this.instance_61.setTransform(115.05,242.55,0.5,0.5);

	this.instance_62 = new lib.CachedBmp_54();
	this.instance_62.setTransform(160.6,237.4,0.5,0.5);

	this.instance_63 = new lib.CachedBmp_53();
	this.instance_63.setTransform(115,276.5,0.5,0.5);

	this.instance_64 = new lib.Tween1("synched",0);
	this.instance_64.setTransform(150,300);
	this.instance_64._off = true;

	this.instance_65 = new lib.Tween2("synched",0);
	this.instance_65.setTransform(-92.5,300);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_63},{t:this.instance_62},{t:this.instance_61},{t:this.instance_60},{t:this.instance_59},{t:this.instance_58},{t:this.instance_57},{t:this.instance_56},{t:this.instance_55}]}).to({state:[{t:this.instance_64}]},24).to({state:[{t:this.instance_65}]},14).wait(191));
	this.timeline.addTween(cjs.Tween.get(this.instance_64).wait(24).to({_off:false},0).to({_off:true,x:-92.5},14,cjs.Ease.quartIn).wait(191));

	// Pattern_1
	this.instance_66 = new lib.Symbol4();
	this.instance_66.setTransform(0,73.5,1,1,0,0,0,150,99.5);
	this.instance_66.alpha = 0;
	this.instance_66.compositeOperation = "hard-light";

	this.timeline.addTween(cjs.Tween.get(this.instance_66).to({alpha:0.75},97,cjs.Ease.quadOut).wait(132));

	// BG_Yellow
	this.instance_67 = new lib.CachedBmp_105();
	this.instance_67.setTransform(0,0,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_67).to({_off:true},169).wait(60));

	this._renderFirstFrame();

}).prototype = p = new lib.AnMovieClip();
p.nominalBounds = new cjs.Rectangle(-15,274,591.1,944.2);
// library properties:
lib.properties = {
	id: '4A8D4BB6B6F3C14FA5D6D07AE6D4A934',
	width: 300,
	height: 600,
	fps: 24,
	color: "#007AFF",
	opacity: 1.00,
	manifest: [
		{src:"images/Display_LargeSkyscraper_D3_atlas_1.png", id:"Display_LargeSkyscraper_D3_atlas_1"},
		{src:"images/Display_LargeSkyscraper_D3_atlas_2.png", id:"Display_LargeSkyscraper_D3_atlas_2"}
	],
	preloads: []
};



// bootstrap callback support:

(lib.Stage = function(canvas) {
	createjs.Stage.call(this, canvas);
}).prototype = p = new createjs.Stage();

p.setAutoPlay = function(autoPlay) {
	this.tickEnabled = autoPlay;
}
p.play = function() { this.tickEnabled = true; this.getChildAt(0).gotoAndPlay(this.getTimelinePosition()) }
p.stop = function(ms) { if(ms) this.seek(ms); this.tickEnabled = false; }
p.seek = function(ms) { this.tickEnabled = true; this.getChildAt(0).gotoAndStop(lib.properties.fps * ms / 1000); }
p.getDuration = function() { return this.getChildAt(0).totalFrames / lib.properties.fps * 1000; }

p.getTimelinePosition = function() { return this.getChildAt(0).currentFrame / lib.properties.fps * 1000; }

an.bootcompsLoaded = an.bootcompsLoaded || [];
if(!an.bootstrapListeners) {
	an.bootstrapListeners=[];
}

an.bootstrapCallback=function(fnCallback) {
	an.bootstrapListeners.push(fnCallback);
	if(an.bootcompsLoaded.length > 0) {
		for(var i=0; i<an.bootcompsLoaded.length; ++i) {
			fnCallback(an.bootcompsLoaded[i]);
		}
	}
};

an.compositions = an.compositions || {};
an.compositions['4A8D4BB6B6F3C14FA5D6D07AE6D4A934'] = {
	getStage: function() { return exportRoot.stage; },
	getLibrary: function() { return lib; },
	getSpriteSheet: function() { return ss; },
	getImages: function() { return img; }
};

an.compositionLoaded = function(id) {
	an.bootcompsLoaded.push(id);
	for(var j=0; j<an.bootstrapListeners.length; j++) {
		an.bootstrapListeners[j](id);
	}
}

an.getComposition = function(id) {
	return an.compositions[id];
}


an.makeResponsive = function(isResp, respDim, isScale, scaleType, domContainers) {		
	var lastW, lastH, lastS=1;		
	window.addEventListener('resize', resizeCanvas);		
	resizeCanvas();		
	function resizeCanvas() {			
		var w = lib.properties.width, h = lib.properties.height;			
		var iw = window.innerWidth, ih=window.innerHeight;			
		var pRatio = window.devicePixelRatio || 1, xRatio=iw/w, yRatio=ih/h, sRatio=1;			
		if(isResp) {                
			if((respDim=='width'&&lastW==iw) || (respDim=='height'&&lastH==ih)) {                    
				sRatio = lastS;                
			}				
			else if(!isScale) {					
				if(iw<w || ih<h)						
					sRatio = Math.min(xRatio, yRatio);				
			}				
			else if(scaleType==1) {					
				sRatio = Math.min(xRatio, yRatio);				
			}				
			else if(scaleType==2) {					
				sRatio = Math.max(xRatio, yRatio);				
			}			
		}			
		domContainers[0].width = w * pRatio * sRatio;			
		domContainers[0].height = h * pRatio * sRatio;			
		domContainers.forEach(function(container) {				
			container.style.width = w * sRatio + 'px';				
			container.style.height = h * sRatio + 'px';			
		});			
		stage.scaleX = pRatio*sRatio;			
		stage.scaleY = pRatio*sRatio;			
		lastW = iw; lastH = ih; lastS = sRatio;            
		stage.tickOnUpdate = false;            
		stage.update();            
		stage.tickOnUpdate = true;		
	}
}
an.handleSoundStreamOnTick = function(event) {
	if(!event.paused){
		var stageChild = stage.getChildAt(0);
		if(!stageChild.paused){
			stageChild.syncStreamSounds();
		}
	}
}


})(createjs = createjs||{}, AdobeAn = AdobeAn||{});
var createjs, AdobeAn;