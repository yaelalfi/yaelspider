(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.webFontTxtInst = {}; 
var loadedTypekitCount = 0;
var loadedGoogleCount = 0;
var gFontsUpdateCacheList = [];
var tFontsUpdateCacheList = [];
lib.ssMetadata = [
		{name:"spideryael_atlas_1", frames: [[0,0,2048,2048]]},
		{name:"spideryael_atlas_2", frames: [[1693,677,157,121],[0,0,959,943],[1888,654,154,136],[1732,368,154,152],[1888,515,154,137],[1888,368,154,145],[1732,522,154,137],[1367,329,363,346],[961,0,404,391],[1837,0,200,182],[961,393,364,302],[1837,184,200,182],[1327,677,364,302],[961,697,364,302],[1732,329,14,23],[1748,329,14,23],[1764,329,14,23],[1780,329,14,23],[1796,329,14,23],[1812,329,14,23],[1852,661,14,23],[1868,661,14,23],[1367,0,468,327]]}
];



lib.updateListCache = function (cacheList) {		
	for(var i = 0; i < cacheList.length; i++) {		
		if(cacheList[i].cacheCanvas)		
			cacheList[i].updateCache();		
	}		
};		

lib.addElementsToCache = function (textInst, cacheList) {		
	var cur = textInst;		
	while(cur != null && cur != exportRoot) {		
		if(cacheList.indexOf(cur) != -1)		
			break;		
		cur = cur.parent;		
	}		
	if(cur != exportRoot) {		
		var cur2 = textInst;		
		var index = cacheList.indexOf(cur);		
		while(cur2 != null && cur2 != cur) {		
			cacheList.splice(index, 0, cur2);		
			cur2 = cur2.parent;		
			index++;		
		}		
	}		
	else {		
		cur = textInst;		
		while(cur != null && cur != exportRoot) {		
			cacheList.push(cur);		
			cur = cur.parent;		
		}		
	}		
};		

lib.gfontAvailable = function(family, totalGoogleCount) {		
	lib.properties.webfonts[family] = true;		
	var txtInst = lib.webFontTxtInst && lib.webFontTxtInst[family] || [];		
	for(var f = 0; f < txtInst.length; ++f)		
		lib.addElementsToCache(txtInst[f], gFontsUpdateCacheList);		

	loadedGoogleCount++;		
	if(loadedGoogleCount == totalGoogleCount) {		
		lib.updateListCache(gFontsUpdateCacheList);		
	}		
};		

lib.tfontAvailable = function(family, totalTypekitCount) {		
	lib.properties.webfonts[family] = true;		
	var txtInst = lib.webFontTxtInst && lib.webFontTxtInst[family] || [];		
	for(var f = 0; f < txtInst.length; ++f)		
		lib.addElementsToCache(txtInst[f], tFontsUpdateCacheList);		

	loadedTypekitCount++;		
	if(loadedTypekitCount == totalTypekitCount) {		
		lib.updateListCache(tFontsUpdateCacheList);		
	}		
};
(lib.AnMovieClip = function(){
	this.actionFrames = [];
	this.ignorePause = false;
	this.gotoAndPlay = function(positionOrLabel){
		cjs.MovieClip.prototype.gotoAndPlay.call(this,positionOrLabel);
	}
	this.play = function(){
		cjs.MovieClip.prototype.play.call(this);
	}
	this.gotoAndStop = function(positionOrLabel){
		cjs.MovieClip.prototype.gotoAndStop.call(this,positionOrLabel);
	}
	this.stop = function(){
		cjs.MovieClip.prototype.stop.call(this);
	}
}).prototype = p = new cjs.MovieClip();
// symbols:



(lib.CachedBmp_23 = function() {
	this.initialize(ss["spideryael_atlas_2"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_22 = function() {
	this.initialize(ss["spideryael_atlas_2"]);
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_21 = function() {
	this.initialize(ss["spideryael_atlas_2"]);
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_20 = function() {
	this.initialize(ss["spideryael_atlas_2"]);
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_19 = function() {
	this.initialize(ss["spideryael_atlas_2"]);
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_18 = function() {
	this.initialize(ss["spideryael_atlas_2"]);
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_17 = function() {
	this.initialize(ss["spideryael_atlas_2"]);
	this.gotoAndStop(6);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_16 = function() {
	this.initialize(ss["spideryael_atlas_2"]);
	this.gotoAndStop(7);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_15 = function() {
	this.initialize(ss["spideryael_atlas_2"]);
	this.gotoAndStop(8);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_14 = function() {
	this.initialize(ss["spideryael_atlas_2"]);
	this.gotoAndStop(9);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_13 = function() {
	this.initialize(ss["spideryael_atlas_2"]);
	this.gotoAndStop(10);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_12 = function() {
	this.initialize(ss["spideryael_atlas_2"]);
	this.gotoAndStop(11);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_11 = function() {
	this.initialize(ss["spideryael_atlas_2"]);
	this.gotoAndStop(12);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_10 = function() {
	this.initialize(ss["spideryael_atlas_2"]);
	this.gotoAndStop(13);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_9 = function() {
	this.initialize(ss["spideryael_atlas_2"]);
	this.gotoAndStop(14);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_8 = function() {
	this.initialize(ss["spideryael_atlas_2"]);
	this.gotoAndStop(15);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_7 = function() {
	this.initialize(ss["spideryael_atlas_2"]);
	this.gotoAndStop(16);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_6 = function() {
	this.initialize(ss["spideryael_atlas_2"]);
	this.gotoAndStop(17);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_5 = function() {
	this.initialize(ss["spideryael_atlas_2"]);
	this.gotoAndStop(18);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_4 = function() {
	this.initialize(ss["spideryael_atlas_2"]);
	this.gotoAndStop(19);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_3 = function() {
	this.initialize(ss["spideryael_atlas_2"]);
	this.gotoAndStop(20);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_2 = function() {
	this.initialize(ss["spideryael_atlas_2"]);
	this.gotoAndStop(21);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_1 = function() {
	this.initialize(ss["spideryael_atlas_2"]);
	this.gotoAndStop(22);
}).prototype = p = new cjs.Sprite();



(lib._4233852jpgcopy = function() {
	this.initialize(img._4233852jpgcopy);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,3000,2000);


(lib.housenoback = function() {
	this.initialize(img.housenoback);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,3334,1667);


(lib.tree = function() {
	this.initialize(ss["spideryael_atlas_1"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();
// helper functions:

function mc_symbol_clone() {
	var clone = this._cloneProps(new this.constructor(this.mode, this.startPosition, this.loop, this.reversed));
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


(lib.Symbol4 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.CachedBmp_23();
	this.instance.setTransform(0,0,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol4, new cjs.Rectangle(0,0,78.5,60.5), null);


(lib.sun = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Слой_2
	this.instance = new lib.CachedBmp_22();
	this.instance.setTransform(186.2,-426.55,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.sun, new cjs.Rectangle(186.2,-426.5,479.50000000000006,471.5), null);


(lib.spider4copy = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.CachedBmp_16();
	this.instance.setTransform(-37.1,65.35,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(7));

	// Layer_3
	this.instance_1 = new lib.CachedBmp_17();
	this.instance_1.setTransform(20.7,33.55,0.5,0.5);

	this.instance_2 = new lib.CachedBmp_18();
	this.instance_2.setTransform(20.7,27.1,0.5,0.5);

	this.instance_3 = new lib.CachedBmp_19();
	this.instance_3.setTransform(20.7,33.55,0.5,0.5);

	this.instance_4 = new lib.CachedBmp_20();
	this.instance_4.setTransform(20.55,25.8,0.5,0.5);

	this.instance_5 = new lib.CachedBmp_21();
	this.instance_5.setTransform(20.55,25.8,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1}]}).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_5}]},1).wait(3));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-37.1,25.8,181.5,212.6);


(lib.spider4 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.CachedBmp_15();
	this.instance.setTransform(0,0,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.spider4, new cjs.Rectangle(0,0,202,195.5), null);


(lib.leg = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#4B4C4C").s().p("AAAAqQgbAAgXgHQgggLgDgWQgCgNAMgJQAIgLAOgDQAlgKAkAFQAuAFAQAdQAPAagoANQgYAIgbAAIgGAAg");
	this.shape.setTransform(29.0647,80.4967);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AA6FRQhbgNAThFIAAgEQAOg9AqhaQA5hzAMgfQAWg7gvg0QghgkhEgjIhWgtQg0gcgkgNQgHgDgDgJQgDgKAKgBQAlgEA4AcQAgAPA5AfQB1A3ArBEQASAcgIAuQgFAcgSAsQgOAkgrBPQgmBKgPArQAkgFAlAEQAoAEAbANQAPAHAMAUQANAWgOAMQgUAQgnAHQgYAFgWAAQgPAAgPgCg");
	this.shape_1.setTransform(20.0144,52.0302);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1,p:{rotation:0,x:20.0144,y:52.0302,scaleX:1,scaleY:1}},{t:this.shape,p:{rotation:0,x:29.0647,y:80.4967,scaleX:1,scaleY:1}}]}).to({state:[{t:this.shape_1,p:{rotation:-11.7264,x:20.0589,y:52.105,scaleX:1,scaleY:1}},{t:this.shape,p:{rotation:-11.7264,x:34.7052,y:78.137,scaleX:1,scaleY:1}}]},4).to({state:[{t:this.shape_1,p:{rotation:-26.9643,x:19.819,y:52.0436,scaleX:1,scaleY:1}},{t:this.shape,p:{rotation:-26.9643,x:40.7922,y:73.3108,scaleX:1,scaleY:1}}]},4).to({state:[{t:this.shape_1,p:{rotation:-49.4323,x:18.8551,y:51.9352,scaleX:0.9999,scaleY:0.9999}},{t:this.shape,p:{rotation:-49.4323,x:46.3631,y:63.5725,scaleX:0.9999,scaleY:0.9999}}]},5).to({state:[{t:this.shape_1,p:{rotation:-28.4865,x:18.7267,y:52.338,scaleX:0.9999,scaleY:0.9999}},{t:this.shape,p:{rotation:-28.4865,x:40.2567,y:73.0398,scaleX:0.9999,scaleY:0.9999}}]},4).to({state:[{t:this.shape_1,p:{rotation:-12.765,x:19.3542,y:52.6575,scaleX:0.9999,scaleY:0.9999}},{t:this.shape,p:{rotation:-12.765,x:34.4691,y:78.4182,scaleX:0.9999,scaleY:0.9999}}]},5).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-19.6,18.2,74.7,67.7);


(lib.body = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.CachedBmp_10();
	this.instance.setTransform(0,0,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.body, new cjs.Rectangle(0,0,182,151), null);


(lib.slolit = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#AAD6EF").s().p("AEda0QhjgHhThHQhDg5hHhzIh/jYQhPiIhChPQkAkyu4FeQk0BylJBJQlCBIh1gRQhjgOAvkuQASh4BOk3QAgiAhwhDQhqg/i8ARQkwAbiXAAQkeAAhHhHQhKhKDTiwQCziVC9hUQBIggAfg7QAeg4gPhFQggiZjEhyQjmiGhCg+QhhhbAUhsQAXiDCCg7QCXhFD1A9QEaBGDaAVQDwAWBegvQAsgWADgtQACgbgQhCQgRhCACgiQAEg4AsgjQAlgdBMAOQAiAHB9ApQBzAlBKAKQBuAPBYgeQBJgYB9g7QCQhEA4gVQDvhdCwBEQBfAkAGA5QADAhgmBKQgnBKAEAmQAGA9BfAsQCxBSDlgmQA+gKCJgiQCEggBKgMQCmgZAygGQB1gOA5AJQCWAYi8C8QjUDTAqB5QAoB2EbAhQB6APC+gPQBAgFEVgeQDOgXBvgBQCcAABSAlQBOAkgEBrQgBAngNBCIgYB1QgcCXAaBdQAlCBCVBKQB6A9ELBtQFLCIB4A1QIpD3C8DkQBvCHggBgQgeBZiRArQiLApjVgIQjXgJjug5QoNh/kRgYQlOgei5BdQg6AdjDBtQjJBwh4A8QmDDEi0AAIgXgBg");
	this.shape.setTransform(201.6626,48.9006,0.5233,0.1392);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#73C3EF").s().p("AB9cMQh/hLiNjHIhwikQhBhdgyg3QiKiXidgHQiugJiHALQiKALiVAkQjBAtppDVQmgCQiohGQiFg3AMjLQAEhJAZhvIAri5QAvjQgzgzQhEhFi7gDQhEgBhsAIIi6ANQjjAOhwgdQicgpgeiGQgiiaBVhpQA2hCCWhSQCghZAxgxQBahbgbiEQgNhEhphLQiIhWhDgwQh3hVgmhWQgzhwBEiPQCZlCHcAzQB2ANDgAzQCvApAogJQBfgWAYg0QANgcgFhKQgGhFAVghQAhg0BvgWQBVgRCLAOQBQAICqAVQCWANBugTQCNgZBxhTQB0hVCggLQCNgLCKAvQCCAsBDBIQBHBLgmBCQhmCyCIAYQBWAOE3g4QFjhACngCQEigEB8CDQAnAqhKBOQgbAdiSB4QhyBegaA0QglBKBjAmQBcAjDDgQQB0gJEIgjQDygbCWAMQDNAQB3BaQBzBWAJBzQADArgLA8QgGAigPBFQgZB/AlBOQA1BwDABXQCPBCFiCcQFGCVDOB5QJTFcgrFEQgqFDqwg7QjpgUlzhHQmLhPiggcQjaglivA4QiAAoioB4IiSBqQhaBAhIAsQjLB6jjA4QhWAWhOAAQiLAAhyhEg");
	this.shape_1.setTransform(202.0218,50.0847,0.5233,0.1392);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.slolit, new cjs.Rectangle(0,24,404.1,52.2), null);


(lib.Scene_1_tree = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// tree
	this.instance = new lib.tree();
	this.instance.setTransform(613,531,0.077,0.0676);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(367).to({_off:false},0).to({_off:true},38).wait(82));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();


(lib.Scene_1_back2 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// back2
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#323232").ss(1,1,1).p("EjrRhObMHWjAAAMAAACc3MnWjAAAg");
	this.shape.setTransform(1234.475,270.075);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.lf(["#221E33","#6C76C6","#565DE1","#280245"],[0,0.035,0.537,1],-1505.7,0,1505.8,0).s().p("EjrRBOcMAAAic3MHWjAAAMAAACc3g");
	this.shape_1.setTransform(1234.475,270.075);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.lf(["#292536","#7079C8","#565EE2","#29064B"],[0,0.051,0.553,1],-1505.7,0,1505.8,0).s().p("EjrRBOcMAAAic3MHWjAAAMAAACc3g");
	this.shape_2.setTransform(1234.475,270.075);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.lf(["#302D3A","#747CCA","#5560E3","#2A0B51"],[0,0.067,0.569,1],-1505.7,0,1505.8,0).s().p("EjrRBOcMAAAic3MHWjAAAMAAACc3g");
	this.shape_3.setTransform(1234.475,270.075);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.lf(["#37343D","#787FCC","#5561E4","#2C0F57"],[0,0.082,0.58,1],-1505.7,0,1505.8,0).s().p("EjrRBOcMAAAic3MHWjAAAMAAACc3g");
	this.shape_4.setTransform(1234.475,270.075);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.lf(["#3F3B41","#7C82CD","#5563E5","#2D145D"],[0,0.102,0.596,1],-1505.7,0,1505.8,0).s().p("EjrRBOcMAAAic3MHWjAAAMAAACc3g");
	this.shape_5.setTransform(1234.475,270.075);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.lf(["#464244","#8085CF","#5564E6","#2E1863"],[0,0.118,0.612,1],-1505.7,0,1505.8,0).s().p("EjrRBOcMAAAic3MHWjAAAMAAACc3g");
	this.shape_6.setTransform(1234.475,270.075);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.lf(["#4D4A47","#8488D1","#5466E7","#2F1D69"],[0,0.133,0.627,1],-1505.7,0,1505.8,0).s().p("EjrRBOcMAAAic3MHWjAAAMAAACc3g");
	this.shape_7.setTransform(1234.475,270.075);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.lf(["#54514B","#888BD3","#5467E8","#31216F"],[0,0.149,0.643,1],-1505.7,0,1505.8,0).s().p("EjrRBOcMAAAic3MHWjAAAMAAACc3g");
	this.shape_8.setTransform(1234.475,270.075);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.lf(["#5B584E","#8C8ED5","#5469E9","#322575"],[0,0.165,0.655,1],-1505.7,0,1505.8,0).s().p("EjrRBOcMAAAic3MHWjAAAMAAACc3g");
	this.shape_9.setTransform(1234.475,270.075);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.lf(["#625F51","#9091D7","#546AEA","#332A7B"],[0,0.18,0.671,1],-1505.7,0,1505.8,0).s().p("EjrRBOcMAAAic3MHWjAAAMAAACc3g");
	this.shape_10.setTransform(1234.475,270.075);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.lf(["#696755","#9494D8","#536CEB","#342E81"],[0,0.196,0.686,1],-1505.7,0,1505.8,0).s().p("EjrRBOcMAAAic3MHWjAAAMAAACc3g");
	this.shape_11.setTransform(1234.475,270.075);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.lf(["#706E58","#9897DA","#536DEC","#353387"],[0,0.212,0.702,1],-1505.7,0,1505.8,0).s().p("EjrRBOcMAAAic3MHWjAAAMAAACc3g");
	this.shape_12.setTransform(1234.475,270.075);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.lf(["#78755C","#9C9ADC","#536FED","#37378D"],[0,0.231,0.718,1],-1505.7,0,1505.8,0).s().p("EjrRBOcMAAAic3MHWjAAAMAAACc3g");
	this.shape_13.setTransform(1234.475,270.075);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.lf(["#7F7C5F","#A09DDE","#5370EE","#383B93"],[0,0.247,0.729,1],-1505.7,0,1505.8,0).s().p("EjrRBOcMAAAic3MHWjAAAMAAACc3g");
	this.shape_14.setTransform(1234.475,270.075);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.lf(["#868462","#A4A0E0","#5272EF","#394099"],[0,0.263,0.745,1],-1505.7,0,1505.8,0).s().p("EjrRBOcMAAAic3MHWjAAAMAAACc3g");
	this.shape_15.setTransform(1234.475,270.075);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.lf(["#8D8B66","#A8A3E2","#5273F0","#3A449F"],[0,0.278,0.761,1],-1505.7,0,1505.8,0).s().p("EjrRBOcMAAAic3MHWjAAAMAAACc3g");
	this.shape_16.setTransform(1234.475,270.075);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.lf(["#949269","#ABA6E3","#5275F0","#3C49A5"],[0,0.294,0.776,1],-1505.7,0,1505.8,0).s().p("EjrRBOcMAAAic3MHWjAAAMAAACc3g");
	this.shape_17.setTransform(1234.475,270.075);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.lf(["#9B996D","#AFA9E5","#5276F1","#3D4DAB"],[0,0.31,0.792,1],-1505.7,0,1505.8,0).s().p("EjrRBOcMAAAic3MHWjAAAMAAACc3g");
	this.shape_18.setTransform(1234.475,270.075);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.lf(["#A2A170","#B3ACE7","#5178F2","#3E52B1"],[0,0.325,0.808,1],-1505.7,0,1505.8,0).s().p("EjrRBOcMAAAic3MHWjAAAMAAACc3g");
	this.shape_19.setTransform(1234.475,270.075);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.lf(["#A9A873","#B7AFE9","#5179F3","#3F56B7"],[0,0.341,0.82,1],-1505.7,0,1505.8,0).s().p("EjrRBOcMAAAic3MHWjAAAMAAACc3g");
	this.shape_20.setTransform(1234.475,270.075);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.lf(["#B1AF77","#BBB2EB","#517BF4","#415ABD"],[0,0.361,0.835,1],-1505.7,0,1505.8,0).s().p("EjrRBOcMAAAic3MHWjAAAMAAACc3g");
	this.shape_21.setTransform(1234.475,270.075);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.lf(["#B8B67A","#BFB5ED","#517CF5","#425FC3"],[0,0.376,0.851,1],-1505.7,0,1505.8,0).s().p("EjrRBOcMAAAic3MHWjAAAMAAACc3g");
	this.shape_22.setTransform(1234.475,270.075);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.lf(["#BFBE7E","#C3B8EE","#507EF6","#4363C9"],[0,0.392,0.867,1],-1505.7,0,1505.8,0).s().p("EjrRBOcMAAAic3MHWjAAAMAAACc3g");
	this.shape_23.setTransform(1234.475,270.075);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.lf(["#C6C581","#C7BBF0","#507FF7","#4468CF"],[0,0.408,0.882,1],-1505.7,0,1505.8,0).s().p("EjrRBOcMAAAic3MHWjAAAMAAACc3g");
	this.shape_24.setTransform(1234.475,270.075);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.lf(["#CDCC84","#CBBEF2","#5081F8","#456CD5"],[0,0.424,0.894,1],-1505.7,0,1505.8,0).s().p("EjrRBOcMAAAic3MHWjAAAMAAACc3g");
	this.shape_25.setTransform(1234.475,270.075);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.lf(["#D4D388","#CFC1F4","#5082F9","#4770DB"],[0,0.439,0.91,1],-1505.7,0,1505.8,0).s().p("EjrRBOcMAAAic3MHWjAAAMAAACc3g");
	this.shape_26.setTransform(1234.475,270.075);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.lf(["#DBDB8B","#D3C4F6","#4F84FA","#4875E1"],[0,0.455,0.925,1],-1505.7,0,1505.8,0).s().p("EjrRBOcMAAAic3MHWjAAAMAAACc3g");
	this.shape_27.setTransform(1234.475,270.075);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.lf(["#E2E28E","#D7C7F8","#4F85FB","#4979E7"],[0,0.471,0.941,1],-1505.7,0,1505.8,0).s().p("EjrRBOcMAAAic3MHWjAAAMAAACc3g");
	this.shape_28.setTransform(1234.475,270.075);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.lf(["#EAE992","#DBCAF9","#4F87FC","#4A7EED"],[0,0.49,0.957,1],-1505.7,0,1505.8,0).s().p("EjrRBOcMAAAic3MHWjAAAMAAACc3g");
	this.shape_29.setTransform(1234.475,270.075);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.lf(["#F1F095","#DFCDFB","#4F88FD","#4C82F3"],[0,0.506,0.969,1],-1505.7,0,1505.8,0).s().p("EjrRBOcMAAAic3MHWjAAAMAAACc3g");
	this.shape_30.setTransform(1234.475,270.075);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.lf(["#F8F899","#E3D0FD","#4E8AFE","#4D87F9"],[0,0.522,0.984,1],-1505.7,0,1505.8,0).s().p("EjrRBOcMAAAic3MHWjAAAMAAACc3g");
	this.shape_31.setTransform(1234.475,270.075);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.lf(["#FFFF9C","#E7D3FF","#4E8BFF"],[0,0.537,1],-1505.7,0,1505.8,0).s().p("EjrRBOcMAAAic3MHWjAAAMAAACc3g");
	this.shape_32.setTransform(1234.475,270.075);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_1},{t:this.shape}]},241).to({state:[{t:this.shape_2},{t:this.shape}]},1).to({state:[{t:this.shape_3},{t:this.shape}]},1).to({state:[{t:this.shape_4},{t:this.shape}]},1).to({state:[{t:this.shape_5},{t:this.shape}]},1).to({state:[{t:this.shape_6},{t:this.shape}]},1).to({state:[{t:this.shape_7},{t:this.shape}]},1).to({state:[{t:this.shape_8},{t:this.shape}]},1).to({state:[{t:this.shape_9},{t:this.shape}]},1).to({state:[{t:this.shape_10},{t:this.shape}]},1).to({state:[{t:this.shape_11},{t:this.shape}]},1).to({state:[{t:this.shape_12},{t:this.shape}]},1).to({state:[{t:this.shape_13},{t:this.shape}]},1).to({state:[{t:this.shape_14},{t:this.shape}]},1).to({state:[{t:this.shape_15},{t:this.shape}]},1).to({state:[{t:this.shape_16},{t:this.shape}]},1).to({state:[{t:this.shape_17},{t:this.shape}]},1).to({state:[{t:this.shape_18},{t:this.shape}]},1).to({state:[{t:this.shape_19},{t:this.shape}]},1).to({state:[{t:this.shape_20},{t:this.shape}]},1).to({state:[{t:this.shape_21},{t:this.shape}]},1).to({state:[{t:this.shape_22},{t:this.shape}]},1).to({state:[{t:this.shape_23},{t:this.shape}]},1).to({state:[{t:this.shape_24},{t:this.shape}]},1).to({state:[{t:this.shape_25},{t:this.shape}]},1).to({state:[{t:this.shape_26},{t:this.shape}]},1).to({state:[{t:this.shape_27},{t:this.shape}]},1).to({state:[{t:this.shape_28},{t:this.shape}]},1).to({state:[{t:this.shape_29},{t:this.shape}]},1).to({state:[{t:this.shape_30},{t:this.shape}]},1).to({state:[{t:this.shape_31},{t:this.shape}]},1).to({state:[{t:this.shape_32},{t:this.shape}]},1).wait(214));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();


(lib.Scene_1_back = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// back
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#FFFF9C","#E7D3FF","#4E8BFF"],[0,0.537,1],-1553.3,0,1553.4,0).s().p("EjytBEAMAAAiIAMHlaAAAMAAACIAg");
	this.shape.setTransform(1303.25,360.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.lf(["#FEFE9B","#E6D2FF","#4E8BFF","#4E8AFE"],[0,0.533,0.996,1],-1553.3,0,1553.4,0).s().p("EjytBEAMAAAiIAMHlaAAAMAAACIAg");
	this.shape_1.setTransform(1303.25,360.2);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.lf(["#FCFC9B","#E5D2FE","#4E8AFF","#4E89FD"],[0,0.529,0.996,1],-1553.3,0,1553.4,0).s().p("EjytBEAMAAAiIAMHlaAAAMAAACIAg");
	this.shape_2.setTransform(1303.25,360.2);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.lf(["#FBFB9A","#E5D1FE","#4E8AFE","#4D88FB"],[0,0.529,0.992,1],-1553.3,0,1553.4,0).s().p("EjytBEAMAAAiIAMHlaAAAMAAACIAg");
	this.shape_3.setTransform(1303.25,360.2);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.lf(["#F9F999","#E4D1FE","#4E8AFE","#4D88FA"],[0,0.525,0.988,1],-1553.3,0,1553.4,0).s().p("EjytBEAMAAAiIAMHlaAAAMAAACIAg");
	this.shape_4.setTransform(1303.25,360.2);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.lf(["#F8F899","#E3D0FD","#4E8AFE","#4D87F9"],[0,0.522,0.984,1],-1553.3,0,1553.4,0).s().p("EjytBEAMAAAiIAMHlaAAAMAAACIAg");
	this.shape_5.setTransform(1303.25,360.2);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.lf(["#F7F798","#E2CFFD","#4E89FE","#4D86F8"],[0,0.518,0.984,1],-1553.3,0,1553.4,0).s().p("EjytBEAMAAAiIAMHlaAAAMAAACIAg");
	this.shape_6.setTransform(1303.25,360.2);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.lf(["#F5F597","#E2CFFC","#4E89FE","#4C85F7"],[0,0.514,0.98,1],-1553.3,0,1553.4,0).s().p("EjytBEAMAAAiIAMHlaAAAMAAACIAg");
	this.shape_7.setTransform(1303.25,360.2);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.lf(["#F4F497","#E1CEFC","#4E89FD","#4C84F6"],[0,0.514,0.976,1],-1553.3,0,1553.4,0).s().p("EjytBEAMAAAiIAMHlaAAAMAAACIAg");
	this.shape_8.setTransform(1303.25,360.2);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.lf(["#F2F296","#E0CEFC","#4E88FD","#4C83F4"],[0,0.51,0.973,1],-1553.3,0,1553.4,0).s().p("EjytBEAMAAAiIAMHlaAAAMAAACIAg");
	this.shape_9.setTransform(1303.25,360.2);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.lf(["#F1F195","#DFCDFB","#4F88FD","#4C82F3"],[0,0.506,0.973,1],-1553.3,0,1553.4,0).s().p("EjytBEAMAAAiIAMHlaAAAMAAACIAg");
	this.shape_10.setTransform(1303.25,360.2);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.lf(["#F0EF95","#DECDFB","#4F88FD","#4B82F2"],[0,0.502,0.969,1],-1553.3,0,1553.4,0).s().p("EjytBEAMAAAiIAMHlaAAAMAAACIAg");
	this.shape_11.setTransform(1303.25,360.2);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.lf(["#EEEE94","#DECCFB","#4F88FD","#4B81F1"],[0,0.498,0.965,1],-1553.3,0,1553.4,0).s().p("EjytBEAMAAAiIAMHlaAAAMAAACIAg");
	this.shape_12.setTransform(1303.25,360.2);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.lf(["#EDED93","#DDCBFA","#4F87FD","#4B80F0"],[0,0.498,0.961,1],-1553.3,0,1553.4,0).s().p("EjytBEAMAAAiIAMHlaAAAMAAACIAg");
	this.shape_13.setTransform(1303.25,360.2);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.lf(["#ECEB93","#DCCBFA","#4F87FC","#4B7FEF"],[0,0.494,0.961,1],-1553.3,0,1553.4,0).s().p("EjytBEAMAAAiIAMHlaAAAMAAACIAg");
	this.shape_14.setTransform(1303.25,360.2);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.lf(["#EAEA92","#DBCAFA","#4F87FC","#4A7EED"],[0,0.49,0.957,1],-1553.3,0,1553.4,0).s().p("EjytBEAMAAAiIAMHlaAAAMAAACIAg");
	this.shape_15.setTransform(1303.25,360.2);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.lf(["#E9E891","#DBCAF9","#4F86FC","#4A7DEC"],[0,0.486,0.953,1],-1553.3,0,1553.4,0).s().p("EjytBEAMAAAiIAMHlaAAAMAAACIAg");
	this.shape_16.setTransform(1303.25,360.2);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.lf(["#E7E791","#DAC9F9","#4F86FC","#4A7CEB"],[0,0.482,0.949,1],-1553.3,0,1553.4,0).s().p("EjytBEAMAAAiIAMHlaAAAMAAACIAg");
	this.shape_17.setTransform(1303.25,360.2);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.lf(["#E6E690","#D9C8F9","#4F86FC","#4A7BEA"],[0,0.482,0.949,1],-1553.3,0,1553.4,0).s().p("EjytBEAMAAAiIAMHlaAAAMAAACIAg");
	this.shape_18.setTransform(1303.25,360.2);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.lf(["#E5E48F","#D8C8F8","#4F86FB","#497BE9"],[0,0.478,0.945,1],-1553.3,0,1553.4,0).s().p("EjytBEAMAAAiIAMHlaAAAMAAACIAg");
	this.shape_19.setTransform(1303.25,360.2);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.lf(["#E3E38F","#D8C7F8","#4F85FB","#497AE8"],[0,0.475,0.941,1],-1553.3,0,1553.4,0).s().p("EjytBEAMAAAiIAMHlaAAAMAAACIAg");
	this.shape_20.setTransform(1303.25,360.2);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.lf(["#E2E18E","#D7C7F7","#4F85FB","#4979E6"],[0,0.471,0.937,1],-1553.3,0,1553.4,0).s().p("EjytBEAMAAAiIAMHlaAAAMAAACIAg");
	this.shape_21.setTransform(1303.25,360.2);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.lf(["#E0E08D","#D6C6F7","#4F85FB","#4978E5"],[0,0.467,0.937,1],-1553.3,0,1553.4,0).s().p("EjytBEAMAAAiIAMHlaAAAMAAACIAg");
	this.shape_22.setTransform(1303.25,360.2);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.lf(["#DFDE8D","#D5C6F7","#4F84FB","#4977E4"],[0,0.463,0.933,1],-1553.3,0,1553.4,0).s().p("EjytBEAMAAAiIAMHlaAAAMAAACIAg");
	this.shape_23.setTransform(1303.25,360.2);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.lf(["#DEDD8C","#D4C5F6","#4F84FA","#4876E3"],[0,0.463,0.929,1],-1553.3,0,1553.4,0).s().p("EjytBEAMAAAiIAMHlaAAAMAAACIAg");
	this.shape_24.setTransform(1303.25,360.2);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.lf(["#DCDC8B","#D4C4F6","#4F84FA","#4875E2"],[0,0.459,0.925,1],-1553.3,0,1553.4,0).s().p("EjytBEAMAAAiIAMHlaAAAMAAACIAg");
	this.shape_25.setTransform(1303.25,360.2);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.lf(["#DBDA8B","#D3C4F6","#4F83FA","#4875E1"],[0,0.455,0.925,1],-1553.3,0,1553.4,0).s().p("EjytBEAMAAAiIAMHlaAAAMAAACIAg");
	this.shape_26.setTransform(1303.25,360.2);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.lf(["#D9D98A","#D2C3F5","#4F83FA","#4874DF"],[0,0.451,0.922,1],-1553.3,0,1553.4,0).s().p("EjytBEAMAAAiIAMHlaAAAMAAACIAg");
	this.shape_27.setTransform(1303.25,360.2);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.lf(["#D8D78A","#D1C3F5","#4F83FA","#4773DE"],[0,0.447,0.918,1],-1553.3,0,1553.4,0).s().p("EjytBEAMAAAiIAMHlaAAAMAAACIAg");
	this.shape_28.setTransform(1303.25,360.2);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.lf(["#D7D689","#D1C2F5","#4F83FA","#4772DD"],[0,0.447,0.914,1],-1553.3,0,1553.4,0).s().p("EjytBEAMAAAiIAMHlaAAAMAAACIAg");
	this.shape_29.setTransform(1303.25,360.2);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.lf(["#D5D588","#D0C1F4","#5082F9","#4771DC"],[0,0.443,0.914,1],-1553.3,0,1553.4,0).s().p("EjytBEAMAAAiIAMHlaAAAMAAACIAg");
	this.shape_30.setTransform(1303.25,360.2);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.lf(["#D4D388","#CFC1F4","#5082F9","#4770DB"],[0,0.439,0.91,1],-1553.3,0,1553.4,0).s().p("EjytBEAMAAAiIAMHlaAAAMAAACIAg");
	this.shape_31.setTransform(1303.25,360.2);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.lf(["#D3D287","#CEC0F4","#5082F9","#466FDA"],[0,0.435,0.906,1],-1553.3,0,1553.4,0).s().p("EjytBEAMAAAiIAMHlaAAAMAAACIAg");
	this.shape_32.setTransform(1303.25,360.2);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.lf(["#D1D086","#CDC0F3","#5081F9","#466FD8"],[0,0.431,0.906,1],-1553.3,0,1553.4,0).s().p("EjytBEAMAAAiIAMHlaAAAMAAACIAg");
	this.shape_33.setTransform(1303.25,360.2);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.lf(["#D0CF86","#CDBFF3","#5081F9","#466ED7"],[0,0.431,0.902,1],-1553.3,0,1553.4,0).s().p("EjytBEAMAAAiIAMHlaAAAMAAACIAg");
	this.shape_34.setTransform(1303.25,360.2);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.lf(["#CECD85","#CCBFF2","#5081F8","#466DD6"],[0,0.427,0.898,1],-1553.3,0,1553.4,0).s().p("EjytBEAMAAAiIAMHlaAAAMAAACIAg");
	this.shape_35.setTransform(1303.25,360.2);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.lf(["#CDCC84","#CBBEF2","#5081F8","#456CD5"],[0,0.424,0.894,1],-1553.3,0,1553.4,0).s().p("EjytBEAMAAAiIAMHlaAAAMAAACIAg");
	this.shape_36.setTransform(1303.25,360.2);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.lf(["#CCCB84","#CABDF2","#5080F8","#456BD4"],[0,0.42,0.894,1],-1553.3,0,1553.4,0).s().p("EjytBEAMAAAiIAMHlaAAAMAAACIAg");
	this.shape_37.setTransform(1303.25,360.2);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.lf(["#CAC983","#CABDF1","#5080F8","#456AD3"],[0,0.416,0.89,1],-1553.3,0,1553.4,0).s().p("EjytBEAMAAAiIAMHlaAAAMAAACIAg");
	this.shape_38.setTransform(1303.25,360.2);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.lf(["#C9C882","#C9BCF1","#5080F8","#4569D1"],[0,0.416,0.886,1],-1553.3,0,1553.4,0).s().p("EjytBEAMAAAiIAMHlaAAAMAAACIAg");
	this.shape_39.setTransform(1303.25,360.2);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.lf(["#C7C682","#C8BCF1","#507FF7","#4469D0"],[0,0.412,0.882,1],-1553.3,0,1553.4,0).s().p("EjytBEAMAAAiIAMHlaAAAMAAACIAg");
	this.shape_40.setTransform(1303.25,360.2);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.lf(["#C6C581","#C7BBF0","#507FF7","#4468CF"],[0,0.408,0.882,1],-1553.3,0,1553.4,0).s().p("EjytBEAMAAAiIAMHlaAAAMAAACIAg");
	this.shape_41.setTransform(1303.25,360.2);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.lf(["#C5C480","#C7BAF0","#507FF7","#4467CE"],[0,0.404,0.878,1],-1553.3,0,1553.4,0).s().p("EjytBEAMAAAiIAMHlaAAAMAAACIAg");
	this.shape_42.setTransform(1303.25,360.2);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.lf(["#C3C280","#C6BAF0","#507FF7","#4466CD"],[0,0.4,0.875,1],-1553.3,0,1553.4,0).s().p("EjytBEAMAAAiIAMHlaAAAMAAACIAg");
	this.shape_43.setTransform(1303.25,360.2);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.lf(["#C2C17F","#C5B9EF","#507EF7","#4365CC"],[0,0.4,0.871,1],-1553.3,0,1553.4,0).s().p("EjytBEAMAAAiIAMHlaAAAMAAACIAg");
	this.shape_44.setTransform(1303.25,360.2);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.lf(["#C0BF7E","#C4B9EF","#507EF7","#4364CA"],[0,0.396,0.871,1],-1553.3,0,1553.4,0).s().p("EjytBEAMAAAiIAMHlaAAAMAAACIAg");
	this.shape_45.setTransform(1303.25,360.2);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.lf(["#BFBE7E","#C3B8EF","#507EF6","#4363C9"],[0,0.392,0.867,1],-1553.3,0,1553.4,0).s().p("EjytBEAMAAAiIAMHlaAAAMAAACIAg");
	this.shape_46.setTransform(1303.25,360.2);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.lf(["#BEBC7D","#C3B8EE","#507DF6","#4363C8"],[0,0.388,0.863,1],-1553.3,0,1553.4,0).s().p("EjytBEAMAAAiIAMHlaAAAMAAACIAg");
	this.shape_47.setTransform(1303.25,360.2);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.lf(["#BCBB7C","#C2B7EE","#507DF6","#4362C7"],[0,0.384,0.859,1],-1553.3,0,1553.4,0).s().p("EjytBEAMAAAiIAMHlaAAAMAAACIAg");
	this.shape_48.setTransform(1303.25,360.2);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.lf(["#BBBA7C","#C1B6ED","#507DF6","#4261C6"],[0,0.384,0.859,1],-1553.3,0,1553.4,0).s().p("EjytBEAMAAAiIAMHlaAAAMAAACIAg");
	this.shape_49.setTransform(1303.25,360.2);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.lf(["#BAB87B","#C0B6ED","#517DF6","#4260C5"],[0,0.38,0.855,1],-1553.3,0,1553.4,0).s().p("EjytBEAMAAAiIAMHlaAAAMAAACIAg");
	this.shape_50.setTransform(1303.25,360.2);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.lf(["#B8B77A","#C0B5ED","#517CF5","#425FC3"],[0,0.376,0.851,1],-1553.3,0,1553.4,0).s().p("EjytBEAMAAAiIAMHlaAAAMAAACIAg");
	this.shape_51.setTransform(1303.25,360.2);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.lf(["#B7B57A","#BFB5EC","#517CF5","#425EC2"],[0,0.373,0.847,1],-1553.3,0,1553.4,0).s().p("EjytBEAMAAAiIAMHlaAAAMAAACIAg");
	this.shape_52.setTransform(1303.25,360.2);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.lf(["#B5B479","#BEB4EC","#517CF5","#415DC1"],[0,0.369,0.847,1],-1553.3,0,1553.4,0).s().p("EjytBEAMAAAiIAMHlaAAAMAAACIAg");
	this.shape_53.setTransform(1303.25,360.2);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.lf(["#B4B378","#BDB3EC","#517BF5","#415CC0"],[0,0.369,0.843,1],-1553.3,0,1553.4,0).s().p("EjytBEAMAAAiIAMHlaAAAMAAACIAg");
	this.shape_54.setTransform(1303.25,360.2);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.lf(["#B3B178","#BCB3EB","#517BF5","#415CBF"],[0,0.365,0.839,1],-1553.3,0,1553.4,0).s().p("EjytBEAMAAAiIAMHlaAAAMAAACIAg");
	this.shape_55.setTransform(1303.25,360.2);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.lf(["#B1B077","#BCB2EB","#517BF4","#415BBD"],[0,0.361,0.835,1],-1553.3,0,1553.4,0).s().p("EjytBEAMAAAiIAMHlaAAAMAAACIAg");
	this.shape_56.setTransform(1303.25,360.2);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.lf(["#B0AE76","#BBB2EB","#517BF4","#405ABC"],[0,0.357,0.835,1],-1553.3,0,1553.4,0).s().p("EjytBEAMAAAiIAMHlaAAAMAAACIAg");
	this.shape_57.setTransform(1303.25,360.2);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.lf(["#AEAD76","#BAB1EA","#517AF4","#4059BB"],[0,0.353,0.831,1],-1553.3,0,1553.4,0).s().p("EjytBEAMAAAiIAMHlaAAAMAAACIAg");
	this.shape_58.setTransform(1303.25,360.2);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.lf(["#ADAC75","#B9B0EA","#517AF4","#4058BA"],[0,0.353,0.827,1],-1553.3,0,1553.4,0).s().p("EjytBEAMAAAiIAMHlaAAAMAAACIAg");
	this.shape_59.setTransform(1303.25,360.2);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.lf(["#ACAA74","#B9B0E9","#517AF4","#4057B9"],[0,0.349,0.824,1],-1553.3,0,1553.4,0).s().p("EjytBEAMAAAiIAMHlaAAAMAAACIAg");
	this.shape_60.setTransform(1303.25,360.2);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.lf(["#AAA974","#B8AFE9","#5179F3","#3F56B8"],[0,0.345,0.824,1],-1553.3,0,1553.4,0).s().p("EjytBEAMAAAiIAMHlaAAAMAAACIAg");
	this.shape_61.setTransform(1303.25,360.2);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.lf(["#A9A773","#B7AFE9","#5179F3","#3F56B6"],[0,0.341,0.82,1],-1553.3,0,1553.4,0).s().p("EjytBEAMAAAiIAMHlaAAAMAAACIAg");
	this.shape_62.setTransform(1303.25,360.2);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.lf(["#A7A672","#B6AEE8","#5179F3","#3F55B5"],[0,0.337,0.816,1],-1553.3,0,1553.4,0).s().p("EjytBEAMAAAiIAMHlaAAAMAAACIAg");
	this.shape_63.setTransform(1303.25,360.2);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.lf(["#A6A472","#B5AEE8","#5178F3","#3F54B4"],[0,0.333,0.816,1],-1553.3,0,1553.4,0).s().p("EjytBEAMAAAiIAMHlaAAAMAAACIAg");
	this.shape_64.setTransform(1303.25,360.2);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.lf(["#A5A371","#B5ADE8","#5178F3","#3E53B3"],[0,0.333,0.812,1],-1553.3,0,1553.4,0).s().p("EjytBEAMAAAiIAMHlaAAAMAAACIAg");
	this.shape_65.setTransform(1303.25,360.2);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.lf(["#A3A270","#B4ACE7","#5178F3","#3E52B2"],[0,0.329,0.808,1],-1553.3,0,1553.4,0).s().p("EjytBEAMAAAiIAMHlaAAAMAAACIAg");
	this.shape_66.setTransform(1303.25,360.2);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.lf(["#A2A070","#B3ACE7","#5178F2","#3E51B1"],[0,0.325,0.804,1],-1553.3,0,1553.4,0).s().p("EjytBEAMAAAiIAMHlaAAAMAAACIAg");
	this.shape_67.setTransform(1303.25,360.2);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.lf(["#A09F6F","#B2ABE7","#5177F2","#3E50AF"],[0,0.322,0.804,1],-1553.3,0,1553.4,0).s().p("EjytBEAMAAAiIAMHlaAAAMAAACIAg");
	this.shape_68.setTransform(1303.25,360.2);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.lf(["#9F9D6E","#B2ABE6","#5177F2","#3E50AE"],[0,0.318,0.8,1],-1553.3,0,1553.4,0).s().p("EjytBEAMAAAiIAMHlaAAAMAAACIAg");
	this.shape_69.setTransform(1303.25,360.2);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.lf(["#9E9C6E","#B1AAE6","#5277F2","#3D4FAD"],[0,0.318,0.796,1],-1553.3,0,1553.4,0).s().p("EjytBEAMAAAiIAMHlaAAAMAAACIAg");
	this.shape_70.setTransform(1303.25,360.2);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.lf(["#9C9B6D","#B0A9E6","#5276F2","#3D4EAC"],[0,0.314,0.792,1],-1553.3,0,1553.4,0).s().p("EjytBEAMAAAiIAMHlaAAAMAAACIAg");
	this.shape_71.setTransform(1303.25,360.2);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.lf(["#9B996C","#AFA9E5","#5276F1","#3D4DAB"],[0,0.31,0.792,1],-1553.3,0,1553.4,0).s().p("EjytBEAMAAAiIAMHlaAAAMAAACIAg");
	this.shape_72.setTransform(1303.25,360.2);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.lf(["#9A986C","#AFA8E5","#5276F1","#3D4CAA"],[0,0.306,0.788,1],-1553.3,0,1553.4,0).s().p("EjytBEAMAAAiIAMHlaAAAMAAACIAg");
	this.shape_73.setTransform(1303.25,360.2);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.lf(["#98966B","#AEA8E4","#5276F1","#3C4BA8"],[0,0.302,0.784,1],-1553.3,0,1553.4,0).s().p("EjytBEAMAAAiIAMHlaAAAMAAACIAg");
	this.shape_74.setTransform(1303.25,360.2);

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.lf(["#97956A","#ADA7E4","#5275F1","#3C4AA7"],[0,0.302,0.78,1],-1553.3,0,1553.4,0).s().p("EjytBEAMAAAiIAMHlaAAAMAAACIAg");
	this.shape_75.setTransform(1303.25,360.2);

	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.lf(["#95936A","#ACA7E4","#5275F1","#3C4AA6"],[0,0.298,0.78,1],-1553.3,0,1553.4,0).s().p("EjytBEAMAAAiIAMHlaAAAMAAACIAg");
	this.shape_76.setTransform(1303.25,360.2);

	this.shape_77 = new cjs.Shape();
	this.shape_77.graphics.lf(["#949269","#ABA6E3","#5275F0","#3C49A5"],[0,0.294,0.776,1],-1553.3,0,1553.4,0).s().p("EjytBEAMAAAiIAMHlaAAAMAAACIAg");
	this.shape_77.setTransform(1303.25,360.2);

	this.shape_78 = new cjs.Shape();
	this.shape_78.graphics.lf(["#939168","#ABA5E3","#5274F0","#3B48A4"],[0,0.29,0.773,1],-1553.3,0,1553.4,0).s().p("EjytBEAMAAAiIAMHlaAAAMAAACIAg");
	this.shape_78.setTransform(1303.25,360.2);

	this.shape_79 = new cjs.Shape();
	this.shape_79.graphics.lf(["#918F68","#AAA5E3","#5274F0","#3B47A3"],[0,0.286,0.769,1],-1553.3,0,1553.4,0).s().p("EjytBEAMAAAiIAMHlaAAAMAAACIAg");
	this.shape_79.setTransform(1303.25,360.2);

	this.shape_80 = new cjs.Shape();
	this.shape_80.graphics.lf(["#908E67","#A9A4E2","#5274F0","#3B46A1"],[0,0.286,0.769,1],-1553.3,0,1553.4,0).s().p("EjytBEAMAAAiIAMHlaAAAMAAACIAg");
	this.shape_80.setTransform(1303.25,360.2);

	this.shape_81 = new cjs.Shape();
	this.shape_81.graphics.lf(["#8E8C67","#A8A4E2","#5274F0","#3B45A0"],[0,0.282,0.765,1],-1553.3,0,1553.4,0).s().p("EjytBEAMAAAiIAMHlaAAAMAAACIAg");
	this.shape_81.setTransform(1303.25,360.2);

	this.shape_82 = new cjs.Shape();
	this.shape_82.graphics.lf(["#8D8B66","#A8A3E2","#5273F0","#3A449F"],[0,0.278,0.761,1],-1553.3,0,1553.4,0).s().p("EjytBEAMAAAiIAMHlaAAAMAAACIAg");
	this.shape_82.setTransform(1303.25,360.2);

	this.shape_83 = new cjs.Shape();
	this.shape_83.graphics.lf(["#8C8A65","#A7A2E1","#5273EF","#3A439E"],[0,0.275,0.757,1],-1553.3,0,1553.4,0).s().p("EjytBEAMAAAiIAMHlaAAAMAAACIAg");
	this.shape_83.setTransform(1303.25,360.2);

	this.shape_84 = new cjs.Shape();
	this.shape_84.graphics.lf(["#8A8865","#A6A2E1","#5273EF","#3A439D"],[0,0.271,0.757,1],-1553.3,0,1553.4,0).s().p("EjytBEAMAAAiIAMHlaAAAMAAACIAg");
	this.shape_84.setTransform(1303.25,360.2);

	this.shape_85 = new cjs.Shape();
	this.shape_85.graphics.lf(["#898764","#A5A1E1","#5272EF","#3A429C"],[0,0.271,0.753,1],-1553.3,0,1553.4,0).s().p("EjytBEAMAAAiIAMHlaAAAMAAACIAg");
	this.shape_85.setTransform(1303.25,360.2);

	this.shape_86 = new cjs.Shape();
	this.shape_86.graphics.lf(["#878563","#A4A1E0","#5272EF","#39419A"],[0,0.267,0.749,1],-1553.3,0,1553.4,0).s().p("EjytBEAMAAAiIAMHlaAAAMAAACIAg");
	this.shape_86.setTransform(1303.25,360.2);

	this.shape_87 = new cjs.Shape();
	this.shape_87.graphics.lf(["#868463","#A4A0E0","#5272EF","#394099"],[0,0.263,0.745,1],-1553.3,0,1553.4,0).s().p("EjytBEAMAAAiIAMHlaAAAMAAACIAg");
	this.shape_87.setTransform(1303.25,360.2);

	this.shape_88 = new cjs.Shape();
	this.shape_88.graphics.lf(["#858262","#A3A0DF","#5272EE","#393F98"],[0,0.259,0.745,1],-1553.3,0,1553.4,0).s().p("EjytBEAMAAAiIAMHlaAAAMAAACIAg");
	this.shape_88.setTransform(1303.25,360.2);

	this.shape_89 = new cjs.Shape();
	this.shape_89.graphics.lf(["#838161","#A29FDF","#5271EE","#393E97"],[0,0.255,0.741,1],-1553.3,0,1553.4,0).s().p("EjytBEAMAAAiIAMHlaAAAMAAACIAg");
	this.shape_89.setTransform(1303.25,360.2);

	this.shape_90 = new cjs.Shape();
	this.shape_90.graphics.lf(["#828061","#A19EDF","#5371EE","#383D96"],[0,0.255,0.737,1],-1553.3,0,1553.4,0).s().p("EjytBEAMAAAiIAMHlaAAAMAAACIAg");
	this.shape_90.setTransform(1303.25,360.2);

	this.shape_91 = new cjs.Shape();
	this.shape_91.graphics.lf(["#817E60","#A19EDE","#5371EE","#383D95"],[0,0.251,0.733,1],-1553.3,0,1553.4,0).s().p("EjytBEAMAAAiIAMHlaAAAMAAACIAg");
	this.shape_91.setTransform(1303.25,360.2);

	this.shape_92 = new cjs.Shape();
	this.shape_92.graphics.lf(["#7F7D5F","#A09DDE","#5370EE","#383C93"],[0,0.247,0.733,1],-1553.3,0,1553.4,0).s().p("EjytBEAMAAAiIAMHlaAAAMAAACIAg");
	this.shape_92.setTransform(1303.25,360.2);

	this.shape_93 = new cjs.Shape();
	this.shape_93.graphics.lf(["#7E7B5F","#9F9DDE","#5370ED","#383B92"],[0,0.243,0.729,1],-1553.3,0,1553.4,0).s().p("EjytBEAMAAAiIAMHlaAAAMAAACIAg");
	this.shape_93.setTransform(1303.25,360.2);

	this.shape_94 = new cjs.Shape();
	this.shape_94.graphics.lf(["#7C7A5E","#9E9CDD","#5370ED","#383A91"],[0,0.239,0.725,1],-1553.3,0,1553.4,0).s().p("EjytBEAMAAAiIAMHlaAAAMAAACIAg");
	this.shape_94.setTransform(1303.25,360.2);

	this.shape_95 = new cjs.Shape();
	this.shape_95.graphics.lf(["#7B795D","#9E9BDD","#5370ED","#373990"],[0,0.239,0.722,1],-1553.3,0,1553.4,0).s().p("EjytBEAMAAAiIAMHlaAAAMAAACIAg");
	this.shape_95.setTransform(1303.25,360.2);

	this.shape_96 = new cjs.Shape();
	this.shape_96.graphics.lf(["#7A775D","#9D9BDD","#536FED","#37388F"],[0,0.235,0.722,1],-1553.3,0,1553.4,0).s().p("EjytBEAMAAAiIAMHlaAAAMAAACIAg");
	this.shape_96.setTransform(1303.25,360.2);

	this.shape_97 = new cjs.Shape();
	this.shape_97.graphics.lf(["#78765C","#9C9ADC","#536FED","#37378E"],[0,0.231,0.718,1],-1553.3,0,1553.4,0).s().p("EjytBEAMAAAiIAMHlaAAAMAAACIAg");
	this.shape_97.setTransform(1303.25,360.2);

	this.shape_98 = new cjs.Shape();
	this.shape_98.graphics.lf(["#77745B","#9B9ADC","#536FED","#37378C"],[0,0.227,0.714,1],-1553.3,0,1553.4,0).s().p("EjytBEAMAAAiIAMHlaAAAMAAACIAg");
	this.shape_98.setTransform(1303.25,360.2);

	this.shape_99 = new cjs.Shape();
	this.shape_99.graphics.lf(["#75735B","#9A99DC","#536EEC","#36368B"],[0,0.224,0.714,1],-1553.3,0,1553.4,0).s().p("EjytBEAMAAAiIAMHlaAAAMAAACIAg");
	this.shape_99.setTransform(1303.25,360.2);

	this.shape_100 = new cjs.Shape();
	this.shape_100.graphics.lf(["#74715A","#9A99DB","#536EEC","#36358A"],[0,0.22,0.71,1],-1553.3,0,1553.4,0).s().p("EjytBEAMAAAiIAMHlaAAAMAAACIAg");
	this.shape_100.setTransform(1303.25,360.2);

	this.shape_101 = new cjs.Shape();
	this.shape_101.graphics.lf(["#737059","#9998DB","#536EEC","#363489"],[0,0.22,0.706,1],-1553.3,0,1553.4,0).s().p("EjytBEAMAAAiIAMHlaAAAMAAACIAg");
	this.shape_101.setTransform(1303.25,360.2);

	this.shape_102 = new cjs.Shape();
	this.shape_102.graphics.lf(["#716F59","#9897DA","#536DEC","#363388"],[0,0.216,0.702,1],-1553.3,0,1553.4,0).s().p("EjytBEAMAAAiIAMHlaAAAMAAACIAg");
	this.shape_102.setTransform(1303.25,360.2);

	this.shape_103 = new cjs.Shape();
	this.shape_103.graphics.lf(["#706D58","#9797DA","#536DEC","#353287"],[0,0.212,0.702,1],-1553.3,0,1553.4,0).s().p("EjytBEAMAAAiIAMHlaAAAMAAACIAg");
	this.shape_103.setTransform(1303.25,360.2);

	this.shape_104 = new cjs.Shape();
	this.shape_104.graphics.lf(["#6E6C57","#9796DA","#536DEB","#353185"],[0,0.208,0.698,1],-1553.3,0,1553.4,0).s().p("EjytBEAMAAAiIAMHlaAAAMAAACIAg");
	this.shape_104.setTransform(1303.25,360.2);

	this.shape_105 = new cjs.Shape();
	this.shape_105.graphics.lf(["#6D6A57","#9696D9","#536DEB","#353184"],[0,0.204,0.694,1],-1553.3,0,1553.4,0).s().p("EjytBEAMAAAiIAMHlaAAAMAAACIAg");
	this.shape_105.setTransform(1303.25,360.2);

	this.shape_106 = new cjs.Shape();
	this.shape_106.graphics.lf(["#6C6956","#9595D9","#536CEB","#353083"],[0,0.204,0.69,1],-1553.3,0,1553.4,0).s().p("EjytBEAMAAAiIAMHlaAAAMAAACIAg");
	this.shape_106.setTransform(1303.25,360.2);

	this.shape_107 = new cjs.Shape();
	this.shape_107.graphics.lf(["#6A6855","#9494D9","#536CEB","#342F82"],[0,0.2,0.69,1],-1553.3,0,1553.4,0).s().p("EjytBEAMAAAiIAMHlaAAAMAAACIAg");
	this.shape_107.setTransform(1303.25,360.2);

	this.shape_108 = new cjs.Shape();
	this.shape_108.graphics.lf(["#696655","#9394D8","#536CEB","#342E81"],[0,0.196,0.686,1],-1553.3,0,1553.4,0).s().p("EjytBEAMAAAiIAMHlaAAAMAAACIAg");
	this.shape_108.setTransform(1303.25,360.2);

	this.shape_109 = new cjs.Shape();
	this.shape_109.graphics.lf(["#676554","#9393D8","#536BEA","#342D7F"],[0,0.192,0.682,1],-1553.3,0,1553.4,0).s().p("EjytBEAMAAAiIAMHlaAAAMAAACIAg");
	this.shape_109.setTransform(1303.25,360.2);

	this.shape_110 = new cjs.Shape();
	this.shape_110.graphics.lf(["#666353","#9293D8","#546BEA","#342C7E"],[0,0.188,0.678,1],-1553.3,0,1553.4,0).s().p("EjytBEAMAAAiIAMHlaAAAMAAACIAg");
	this.shape_110.setTransform(1303.25,360.2);

	this.shape_111 = new cjs.Shape();
	this.shape_111.graphics.lf(["#656253","#9192D7","#546BEA","#332B7D"],[0,0.188,0.678,1],-1553.3,0,1553.4,0).s().p("EjytBEAMAAAiIAMHlaAAAMAAACIAg");
	this.shape_111.setTransform(1303.25,360.2);

	this.shape_112 = new cjs.Shape();
	this.shape_112.graphics.lf(["#636152","#9091D7","#546BEA","#332A7C"],[0,0.184,0.675,1],-1553.3,0,1553.4,0).s().p("EjytBEAMAAAiIAMHlaAAAMAAACIAg");
	this.shape_112.setTransform(1303.25,360.2);

	this.shape_113 = new cjs.Shape();
	this.shape_113.graphics.lf(["#625F51","#9091D6","#546AEA","#332A7B"],[0,0.18,0.671,1],-1553.3,0,1553.4,0).s().p("EjytBEAMAAAiIAMHlaAAAMAAACIAg");
	this.shape_113.setTransform(1303.25,360.2);

	this.shape_114 = new cjs.Shape();
	this.shape_114.graphics.lf(["#615E51","#8F90D6","#546AE9","#33297A"],[0,0.176,0.667,1],-1553.3,0,1553.4,0).s().p("EjytBEAMAAAiIAMHlaAAAMAAACIAg");
	this.shape_114.setTransform(1303.25,360.2);

	this.shape_115 = new cjs.Shape();
	this.shape_115.graphics.lf(["#5F5C50","#8E90D6","#546AE9","#332878"],[0,0.173,0.667,1],-1553.3,0,1553.4,0).s().p("EjytBEAMAAAiIAMHlaAAAMAAACIAg");
	this.shape_115.setTransform(1303.25,360.2);

	this.shape_116 = new cjs.Shape();
	this.shape_116.graphics.lf(["#5E5B4F","#8D8FD5","#5469E9","#322777"],[0,0.173,0.663,1],-1553.3,0,1553.4,0).s().p("EjytBEAMAAAiIAMHlaAAAMAAACIAg");
	this.shape_116.setTransform(1303.25,360.2);

	this.shape_117 = new cjs.Shape();
	this.shape_117.graphics.lf(["#5C594F","#8C8FD5","#5469E9","#322676"],[0,0.169,0.659,1],-1553.3,0,1553.4,0).s().p("EjytBEAMAAAiIAMHlaAAAMAAACIAg");
	this.shape_117.setTransform(1303.25,360.2);

	this.shape_118 = new cjs.Shape();
	this.shape_118.graphics.lf(["#5B584E","#8C8ED5","#5469E9","#322575"],[0,0.165,0.655,1],-1553.3,0,1553.4,0).s().p("EjytBEAMAAAiIAMHlaAAAMAAACIAg");
	this.shape_118.setTransform(1303.25,360.2);

	this.shape_119 = new cjs.Shape();
	this.shape_119.graphics.lf(["#5A574D","#8B8DD4","#5469E9","#322474"],[0,0.161,0.655,1],-1553.3,0,1553.4,0).s().p("EjytBEAMAAAiIAMHlaAAAMAAACIAg");
	this.shape_119.setTransform(1303.25,360.2);

	this.shape_120 = new cjs.Shape();
	this.shape_120.graphics.lf(["#58554D","#8A8DD4","#5468E8","#312473"],[0,0.157,0.651,1],-1553.3,0,1553.4,0).s().p("EjytBEAMAAAiIAMHlaAAAMAAACIAg");
	this.shape_120.setTransform(1303.25,360.2);

	this.shape_121 = new cjs.Shape();
	this.shape_121.graphics.lf(["#57544C","#898CD4","#5468E8","#312371"],[0,0.157,0.647,1],-1553.3,0,1553.4,0).s().p("EjytBEAMAAAiIAMHlaAAAMAAACIAg");
	this.shape_121.setTransform(1303.25,360.2);

	this.shape_122 = new cjs.Shape();
	this.shape_122.graphics.lf(["#55524B","#898CD3","#5468E8","#312270"],[0,0.153,0.643,1],-1553.3,0,1553.4,0).s().p("EjytBEAMAAAiIAMHlaAAAMAAACIAg");
	this.shape_122.setTransform(1303.25,360.2);

	this.shape_123 = new cjs.Shape();
	this.shape_123.graphics.lf(["#54514B","#888BD3","#5467E8","#31216F"],[0,0.149,0.643,1],-1553.3,0,1553.4,0).s().p("EjytBEAMAAAiIAMHlaAAAMAAACIAg");
	this.shape_123.setTransform(1303.25,360.2);

	this.shape_124 = new cjs.Shape();
	this.shape_124.graphics.lf(["#53504A","#878AD3","#5467E8","#30206E"],[0,0.145,0.639,1],-1553.3,0,1553.4,0).s().p("EjytBEAMAAAiIAMHlaAAAMAAACIAg");
	this.shape_124.setTransform(1303.25,360.2);

	this.shape_125 = new cjs.Shape();
	this.shape_125.graphics.lf(["#514E49","#868AD2","#5467E7","#301F6D"],[0,0.141,0.635,1],-1553.3,0,1553.4,0).s().p("EjytBEAMAAAiIAMHlaAAAMAAACIAg");
	this.shape_125.setTransform(1303.25,360.2);

	this.shape_126 = new cjs.Shape();
	this.shape_126.graphics.lf(["#504D49","#8689D2","#5467E7","#301E6C"],[0,0.141,0.631,1],-1553.3,0,1553.4,0).s().p("EjytBEAMAAAiIAMHlaAAAMAAACIAg");
	this.shape_126.setTransform(1303.25,360.2);

	this.shape_127 = new cjs.Shape();
	this.shape_127.graphics.lf(["#4E4B48","#8589D1","#5466E7","#301E6A"],[0,0.137,0.631,1],-1553.3,0,1553.4,0).s().p("EjytBEAMAAAiIAMHlaAAAMAAACIAg");
	this.shape_127.setTransform(1303.25,360.2);

	this.shape_128 = new cjs.Shape();
	this.shape_128.graphics.lf(["#4D4A47","#8488D1","#5466E7","#2F1D69"],[0,0.133,0.627,1],-1553.3,0,1553.4,0).s().p("EjytBEAMAAAiIAMHlaAAAMAAACIAg");
	this.shape_128.setTransform(1303.25,360.2);

	this.shape_129 = new cjs.Shape();
	this.shape_129.graphics.lf(["#4C4847","#8388D1","#5466E7","#2F1C68"],[0,0.129,0.624,1],-1553.3,0,1553.4,0).s().p("EjytBEAMAAAiIAMHlaAAAMAAACIAg");
	this.shape_129.setTransform(1303.25,360.2);

	this.shape_130 = new cjs.Shape();
	this.shape_130.graphics.lf(["#4A4746","#8287D0","#5565E6","#2F1B67"],[0,0.125,0.624,1],-1553.3,0,1553.4,0).s().p("EjytBEAMAAAiIAMHlaAAAMAAACIAg");
	this.shape_130.setTransform(1303.25,360.2);

	this.shape_131 = new cjs.Shape();
	this.shape_131.graphics.lf(["#494645","#8286D0","#5565E6","#2F1A66"],[0,0.125,0.62,1],-1553.3,0,1553.4,0).s().p("EjytBEAMAAAiIAMHlaAAAMAAACIAg");
	this.shape_131.setTransform(1303.25,360.2);

	this.shape_132 = new cjs.Shape();
	this.shape_132.graphics.lf(["#484445","#8186D0","#5565E6","#2E1965"],[0,0.122,0.616,1],-1553.3,0,1553.4,0).s().p("EjytBEAMAAAiIAMHlaAAAMAAACIAg");
	this.shape_132.setTransform(1303.25,360.2);

	this.shape_133 = new cjs.Shape();
	this.shape_133.graphics.lf(["#464344","#8085CF","#5565E6","#2E1863"],[0,0.118,0.612,1],-1553.3,0,1553.4,0).s().p("EjytBEAMAAAiIAMHlaAAAMAAACIAg");
	this.shape_133.setTransform(1303.25,360.2);

	this.shape_134 = new cjs.Shape();
	this.shape_134.graphics.lf(["#454144","#7F85CF","#5564E6","#2E1862"],[0,0.114,0.612,1],-1553.3,0,1553.4,0).s().p("EjytBEAMAAAiIAMHlaAAAMAAACIAg");
	this.shape_134.setTransform(1303.25,360.2);

	this.shape_135 = new cjs.Shape();
	this.shape_135.graphics.lf(["#434043","#7F84CF","#5564E6","#2E1761"],[0,0.11,0.608,1],-1553.3,0,1553.4,0).s().p("EjytBEAMAAAiIAMHlaAAAMAAACIAg");
	this.shape_135.setTransform(1303.25,360.2);

	this.shape_136 = new cjs.Shape();
	this.shape_136.graphics.lf(["#423F42","#7E83CE","#5564E5","#2D1660"],[0,0.11,0.604,1],-1553.3,0,1553.4,0).s().p("EjytBEAMAAAiIAMHlaAAAMAAACIAg");
	this.shape_136.setTransform(1303.25,360.2);

	this.shape_137 = new cjs.Shape();
	this.shape_137.graphics.lf(["#413D42","#7D83CE","#5563E5","#2D155F"],[0,0.106,0.6,1],-1553.3,0,1553.4,0).s().p("EjytBEAMAAAiIAMHlaAAAMAAACIAg");
	this.shape_137.setTransform(1303.25,360.2);

	this.shape_138 = new cjs.Shape();
	this.shape_138.graphics.lf(["#3F3C41","#7C82CE","#5563E5","#2D145E"],[0,0.102,0.6,1],-1553.3,0,1553.4,0).s().p("EjytBEAMAAAiIAMHlaAAAMAAACIAg");
	this.shape_138.setTransform(1303.25,360.2);

	this.shape_139 = new cjs.Shape();
	this.shape_139.graphics.lf(["#3E3A40","#7B82CD","#5563E5","#2D135C"],[0,0.098,0.596,1],-1553.3,0,1553.4,0).s().p("EjytBEAMAAAiIAMHlaAAAMAAACIAg");
	this.shape_139.setTransform(1303.25,360.2);

	this.shape_140 = new cjs.Shape();
	this.shape_140.graphics.lf(["#3C3940","#7B81CD","#5562E5","#2D125B"],[0,0.094,0.592,1],-1553.3,0,1553.4,0).s().p("EjytBEAMAAAiIAMHlaAAAMAAACIAg");
	this.shape_140.setTransform(1303.25,360.2);

	this.shape_141 = new cjs.Shape();
	this.shape_141.graphics.lf(["#3B373F","#7A81CC","#5562E4","#2C125A"],[0,0.09,0.588,1],-1553.3,0,1553.4,0).s().p("EjytBEAMAAAiIAMHlaAAAMAAACIAg");
	this.shape_141.setTransform(1303.25,360.2);

	this.shape_142 = new cjs.Shape();
	this.shape_142.graphics.lf(["#3A363E","#7980CC","#5562E4","#2C1159"],[0,0.09,0.588,1],-1553.3,0,1553.4,0).s().p("EjytBEAMAAAiIAMHlaAAAMAAACIAg");
	this.shape_142.setTransform(1303.25,360.2);

	this.shape_143 = new cjs.Shape();
	this.shape_143.graphics.lf(["#38353E","#787FCC","#5562E4","#2C1058"],[0,0.086,0.584,1],-1553.3,0,1553.4,0).s().p("EjytBEAMAAAiIAMHlaAAAMAAACIAg");
	this.shape_143.setTransform(1303.25,360.2);

	this.shape_144 = new cjs.Shape();
	this.shape_144.graphics.lf(["#37333D","#787FCB","#5561E4","#2C0F57"],[0,0.082,0.58,1],-1553.3,0,1553.4,0).s().p("EjytBEAMAAAiIAMHlaAAAMAAACIAg");
	this.shape_144.setTransform(1303.25,360.2);

	this.shape_145 = new cjs.Shape();
	this.shape_145.graphics.lf(["#35323C","#777ECB","#5561E4","#2B0E55"],[0,0.078,0.576,1],-1553.3,0,1553.4,0).s().p("EjytBEAMAAAiIAMHlaAAAMAAACIAg");
	this.shape_145.setTransform(1303.25,360.2);

	this.shape_146 = new cjs.Shape();
	this.shape_146.graphics.lf(["#34303C","#767ECB","#5561E3","#2B0D54"],[0,0.075,0.576,1],-1553.3,0,1553.4,0).s().p("EjytBEAMAAAiIAMHlaAAAMAAACIAg");
	this.shape_146.setTransform(1303.25,360.2);

	this.shape_147 = new cjs.Shape();
	this.shape_147.graphics.lf(["#332F3B","#757DCA","#5560E3","#2B0C53"],[0,0.075,0.573,1],-1553.3,0,1553.4,0).s().p("EjytBEAMAAAiIAMHlaAAAMAAACIAg");
	this.shape_147.setTransform(1303.25,360.2);

	this.shape_148 = new cjs.Shape();
	this.shape_148.graphics.lf(["#312E3A","#757CCA","#5560E3","#2B0B52"],[0,0.071,0.569,1],-1553.3,0,1553.4,0).s().p("EjytBEAMAAAiIAMHlaAAAMAAACIAg");
	this.shape_148.setTransform(1303.25,360.2);

	this.shape_149 = new cjs.Shape();
	this.shape_149.graphics.lf(["#302C3A","#747CCA","#5560E3","#2A0B51"],[0,0.067,0.565,1],-1553.3,0,1553.4,0).s().p("EjytBEAMAAAiIAMHlaAAAMAAACIAg");
	this.shape_149.setTransform(1303.25,360.2);

	this.shape_150 = new cjs.Shape();
	this.shape_150.graphics.lf(["#2F2B39","#737BC9","#5660E3","#2A0A50"],[0,0.063,0.565,1],-1553.3,0,1553.4,0).s().p("EjytBEAMAAAiIAMHlaAAAMAAACIAg");
	this.shape_150.setTransform(1303.25,360.2);

	this.shape_151 = new cjs.Shape();
	this.shape_151.graphics.lf(["#2D2938","#727BC9","#565FE3","#2A094E"],[0,0.059,0.561,1],-1553.3,0,1553.4,0).s().p("EjytBEAMAAAiIAMHlaAAAMAAACIAg");
	this.shape_151.setTransform(1303.25,360.2);

	this.shape_152 = new cjs.Shape();
	this.shape_152.graphics.lf(["#2C2838","#717AC9","#565FE2","#2A084D"],[0,0.059,0.557,1],-1553.3,0,1553.4,0).s().p("EjytBEAMAAAiIAMHlaAAAMAAACIAg");
	this.shape_152.setTransform(1303.25,360.2);

	this.shape_153 = new cjs.Shape();
	this.shape_153.graphics.lf(["#2A2637","#717AC8","#565FE2","#29074C"],[0,0.055,0.553,1],-1553.3,0,1553.4,0).s().p("EjytBEAMAAAiIAMHlaAAAMAAACIAg");
	this.shape_153.setTransform(1303.25,360.2);

	this.shape_154 = new cjs.Shape();
	this.shape_154.graphics.lf(["#292536","#7079C8","#565EE2","#29064B"],[0,0.051,0.553,1],-1553.3,0,1553.4,0).s().p("EjytBEAMAAAiIAMHlaAAAMAAACIAg");
	this.shape_154.setTransform(1303.25,360.2);

	this.shape_155 = new cjs.Shape();
	this.shape_155.graphics.lf(["#282436","#6F78C7","#565EE2","#29054A"],[0,0.047,0.549,1],-1553.3,0,1553.4,0).s().p("EjytBEAMAAAiIAMHlaAAAMAAACIAg");
	this.shape_155.setTransform(1303.25,360.2);

	this.shape_156 = new cjs.Shape();
	this.shape_156.graphics.lf(["#262235","#6E78C7","#565EE2","#290549"],[0,0.043,0.545,1],-1553.3,0,1553.4,0).s().p("EjytBEAMAAAiIAMHlaAAAMAAACIAg");
	this.shape_156.setTransform(1303.25,360.2);

	this.shape_157 = new cjs.Shape();
	this.shape_157.graphics.lf(["#252134","#6E77C7","#565EE1","#280447"],[0,0.043,0.541,1],-1553.3,0,1553.4,0).s().p("EjytBEAMAAAiIAMHlaAAAMAAACIAg");
	this.shape_157.setTransform(1303.25,360.2);

	this.shape_158 = new cjs.Shape();
	this.shape_158.graphics.lf(["#231F34","#6D77C6","#565DE1","#280346"],[0,0.039,0.541,1],-1553.3,0,1553.4,0).s().p("EjytBEAMAAAiIAMHlaAAAMAAACIAg");
	this.shape_158.setTransform(1303.25,360.2);

	this.shape_159 = new cjs.Shape();
	this.shape_159.graphics.lf(["#221E33","#6C76C6","#565DE1","#280245"],[0,0.035,0.537,1],-1553.3,0,1553.4,0).s().p("EjytBEAMAAAiIAMHlaAAAMAAACIAg");
	this.shape_159.setTransform(1303.25,360.2);
	this.shape_159._off = true;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape}]},4).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_5}]},1).to({state:[{t:this.shape_6}]},1).to({state:[{t:this.shape_7}]},1).to({state:[{t:this.shape_8}]},1).to({state:[{t:this.shape_9}]},1).to({state:[{t:this.shape_10}]},1).to({state:[{t:this.shape_11}]},1).to({state:[{t:this.shape_12}]},1).to({state:[{t:this.shape_13}]},1).to({state:[{t:this.shape_14}]},1).to({state:[{t:this.shape_15}]},1).to({state:[{t:this.shape_16}]},1).to({state:[{t:this.shape_17}]},1).to({state:[{t:this.shape_18}]},1).to({state:[{t:this.shape_19}]},1).to({state:[{t:this.shape_20}]},1).to({state:[{t:this.shape_21}]},1).to({state:[{t:this.shape_22}]},1).to({state:[{t:this.shape_23}]},1).to({state:[{t:this.shape_24}]},1).to({state:[{t:this.shape_25}]},1).to({state:[{t:this.shape_26}]},1).to({state:[{t:this.shape_27}]},1).to({state:[{t:this.shape_28}]},1).to({state:[{t:this.shape_29}]},1).to({state:[{t:this.shape_30}]},1).to({state:[{t:this.shape_31}]},1).to({state:[{t:this.shape_32}]},1).to({state:[{t:this.shape_33}]},1).to({state:[{t:this.shape_34}]},1).to({state:[{t:this.shape_35}]},1).to({state:[{t:this.shape_36}]},1).to({state:[{t:this.shape_37}]},1).to({state:[{t:this.shape_38}]},1).to({state:[{t:this.shape_39}]},1).to({state:[{t:this.shape_40}]},1).to({state:[{t:this.shape_41}]},1).to({state:[{t:this.shape_42}]},1).to({state:[{t:this.shape_43}]},1).to({state:[{t:this.shape_44}]},1).to({state:[{t:this.shape_45}]},1).to({state:[{t:this.shape_46}]},1).to({state:[{t:this.shape_47}]},1).to({state:[{t:this.shape_48}]},1).to({state:[{t:this.shape_49}]},1).to({state:[{t:this.shape_50}]},1).to({state:[{t:this.shape_51}]},1).to({state:[{t:this.shape_52}]},1).to({state:[{t:this.shape_53}]},1).to({state:[{t:this.shape_54}]},1).to({state:[{t:this.shape_55}]},1).to({state:[{t:this.shape_56}]},1).to({state:[{t:this.shape_57}]},1).to({state:[{t:this.shape_58}]},1).to({state:[{t:this.shape_59}]},1).to({state:[{t:this.shape_60}]},1).to({state:[{t:this.shape_61}]},1).to({state:[{t:this.shape_62}]},1).to({state:[{t:this.shape_63}]},1).to({state:[{t:this.shape_64}]},1).to({state:[{t:this.shape_65}]},1).to({state:[{t:this.shape_66}]},1).to({state:[{t:this.shape_67}]},1).to({state:[{t:this.shape_68}]},1).to({state:[{t:this.shape_69}]},1).to({state:[{t:this.shape_70}]},1).to({state:[{t:this.shape_71}]},1).to({state:[{t:this.shape_72}]},1).to({state:[{t:this.shape_73}]},1).to({state:[{t:this.shape_74}]},1).to({state:[{t:this.shape_75}]},1).to({state:[{t:this.shape_76}]},1).to({state:[{t:this.shape_77}]},1).to({state:[{t:this.shape_78}]},1).to({state:[{t:this.shape_79}]},1).to({state:[{t:this.shape_80}]},1).to({state:[{t:this.shape_81}]},1).to({state:[{t:this.shape_82}]},1).to({state:[{t:this.shape_83}]},1).to({state:[{t:this.shape_84}]},1).to({state:[{t:this.shape_85}]},1).to({state:[{t:this.shape_86}]},1).to({state:[{t:this.shape_87}]},1).to({state:[{t:this.shape_88}]},1).to({state:[{t:this.shape_89}]},1).to({state:[{t:this.shape_90}]},1).to({state:[{t:this.shape_91}]},1).to({state:[{t:this.shape_92}]},1).to({state:[{t:this.shape_93}]},1).to({state:[{t:this.shape_94}]},1).to({state:[{t:this.shape_95}]},1).to({state:[{t:this.shape_96}]},1).to({state:[{t:this.shape_97}]},1).to({state:[{t:this.shape_98}]},1).to({state:[{t:this.shape_99}]},1).to({state:[{t:this.shape_100}]},1).to({state:[{t:this.shape_101}]},1).to({state:[{t:this.shape_102}]},1).to({state:[{t:this.shape_103}]},1).to({state:[{t:this.shape_104}]},1).to({state:[{t:this.shape_105}]},1).to({state:[{t:this.shape_106}]},1).to({state:[{t:this.shape_107}]},1).to({state:[{t:this.shape_108}]},1).to({state:[{t:this.shape_109}]},1).to({state:[{t:this.shape_110}]},1).to({state:[{t:this.shape_111}]},1).to({state:[{t:this.shape_112}]},1).to({state:[{t:this.shape_113}]},1).to({state:[{t:this.shape_114}]},1).to({state:[{t:this.shape_115}]},1).to({state:[{t:this.shape_116}]},1).to({state:[{t:this.shape_117}]},1).to({state:[{t:this.shape_118}]},1).to({state:[{t:this.shape_119}]},1).to({state:[{t:this.shape_120}]},1).to({state:[{t:this.shape_121}]},1).to({state:[{t:this.shape_122}]},1).to({state:[{t:this.shape_123}]},1).to({state:[{t:this.shape_124}]},1).to({state:[{t:this.shape_125}]},1).to({state:[{t:this.shape_126}]},1).to({state:[{t:this.shape_127}]},1).to({state:[{t:this.shape_128}]},1).to({state:[{t:this.shape_129}]},1).to({state:[{t:this.shape_130}]},1).to({state:[{t:this.shape_131}]},1).to({state:[{t:this.shape_132}]},1).to({state:[{t:this.shape_133}]},1).to({state:[{t:this.shape_134}]},1).to({state:[{t:this.shape_135}]},1).to({state:[{t:this.shape_136}]},1).to({state:[{t:this.shape_137}]},1).to({state:[{t:this.shape_138}]},1).to({state:[{t:this.shape_139}]},1).to({state:[{t:this.shape_140}]},1).to({state:[{t:this.shape_141}]},1).to({state:[{t:this.shape_142}]},1).to({state:[{t:this.shape_143}]},1).to({state:[{t:this.shape_144}]},1).to({state:[{t:this.shape_145}]},1).to({state:[{t:this.shape_146}]},1).to({state:[{t:this.shape_147}]},1).to({state:[{t:this.shape_148}]},1).to({state:[{t:this.shape_149}]},1).to({state:[{t:this.shape_150}]},1).to({state:[{t:this.shape_151}]},1).to({state:[{t:this.shape_152}]},1).to({state:[{t:this.shape_153}]},1).to({state:[{t:this.shape_154}]},1).to({state:[{t:this.shape_155}]},1).to({state:[{t:this.shape_156}]},1).to({state:[{t:this.shape_157}]},1).to({state:[{t:this.shape_158}]},1).to({state:[{t:this.shape_159}]},1).to({state:[{t:this.shape_159}]},1).to({state:[{t:this.shape_159}]},1).to({state:[{t:this.shape_159}]},1).to({state:[{t:this.shape_159}]},1).to({state:[{t:this.shape_159}]},1).to({state:[{t:this.shape_159}]},1).to({state:[{t:this.shape_159}]},1).to({state:[{t:this.shape_159}]},1).to({state:[{t:this.shape_159}]},1).to({state:[{t:this.shape_159}]},1).to({state:[{t:this.shape_159}]},1).to({state:[{t:this.shape_159}]},1).to({state:[{t:this.shape_159}]},1).to({state:[{t:this.shape_159}]},1).to({state:[{t:this.shape_159}]},1).to({state:[{t:this.shape_159}]},1).to({state:[{t:this.shape_159}]},1).to({state:[{t:this.shape_159}]},1).to({state:[{t:this.shape_159}]},1).to({state:[{t:this.shape_159}]},1).to({state:[{t:this.shape_159}]},1).to({state:[{t:this.shape_159}]},1).to({state:[{t:this.shape_159}]},1).to({state:[{t:this.shape_159}]},1).to({state:[{t:this.shape_159}]},1).to({state:[{t:this.shape_159}]},1).to({state:[{t:this.shape_159}]},1).to({state:[{t:this.shape_159}]},1).to({state:[{t:this.shape_159}]},1).to({state:[{t:this.shape_159}]},1).to({state:[{t:this.shape_159}]},1).to({state:[{t:this.shape_159}]},1).to({state:[{t:this.shape_159}]},1).to({state:[{t:this.shape_159}]},1).to({state:[{t:this.shape_159}]},1).to({state:[{t:this.shape_159}]},1).to({state:[{t:this.shape_159}]},1).to({state:[{t:this.shape_159}]},1).to({state:[{t:this.shape_159}]},1).to({state:[{t:this.shape_159}]},1).to({state:[{t:this.shape_159}]},1).to({state:[{t:this.shape_159}]},1).to({state:[{t:this.shape_159}]},1).to({state:[{t:this.shape_159}]},1).to({state:[{t:this.shape_159}]},1).to({state:[{t:this.shape_159}]},1).to({state:[{t:this.shape_159}]},1).to({state:[{t:this.shape_159}]},1).to({state:[{t:this.shape_159}]},1).to({state:[{t:this.shape_159}]},1).to({state:[{t:this.shape_159}]},1).to({state:[{t:this.shape_159}]},1).to({state:[{t:this.shape_159}]},1).to({state:[{t:this.shape_159}]},1).to({state:[{t:this.shape_159}]},1).to({state:[{t:this.shape_159}]},1).to({state:[{t:this.shape_159}]},1).to({state:[{t:this.shape_159}]},1).to({state:[{t:this.shape_159}]},1).to({state:[{t:this.shape_159}]},1).to({state:[{t:this.shape_159}]},1).to({state:[{t:this.shape_159}]},1).to({state:[{t:this.shape_159}]},1).to({state:[{t:this.shape_159}]},1).to({state:[{t:this.shape_159}]},1).to({state:[{t:this.shape_159}]},1).to({state:[{t:this.shape_159}]},1).to({state:[{t:this.shape_159}]},1).to({state:[{t:this.shape_159}]},1).to({state:[{t:this.shape_159}]},1).to({state:[{t:this.shape_159}]},1).to({state:[{t:this.shape_159}]},1).to({state:[{t:this.shape_159}]},1).to({state:[{t:this.shape_159}]},1).to({state:[{t:this.shape_159}]},1).to({state:[{t:this.shape_159}]},1).to({state:[{t:this.shape_159}]},1).to({state:[{t:this.shape_159}]},1).to({state:[{t:this.shape_159}]},1).to({state:[{t:this.shape_159}]},1).to({state:[{t:this.shape_159}]},1).to({state:[{t:this.shape_159}]},1).to({state:[{t:this.shape_159}]},1).to({state:[{t:this.shape_159}]},1).to({state:[{t:this.shape_159}]},1).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.shape_159).wait(163).to({_off:false},0).wait(86));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();


(lib.replay = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.text = new cjs.Text("Play Again", "normal 400 60px 'Lobster'");
	this.text.lineHeight = 91;
	this.text.lineWidth = 348;
	this.text.parent = this;
	this.text.setTransform(-16,36.05);
	if(!lib.properties.webfonts['Lobster']) {
		lib.webFontTxtInst['Lobster'] = lib.webFontTxtInst['Lobster'] || [];
		lib.webFontTxtInst['Lobster'].push(this.text);
	}

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("A+jRAQsqnBAAp/QAAp+MqnDQMqnCR5AAQR6AAMqHCQMqHDAAJ+QAAJ/sqHBQsqHEx6AAQx5AAsqnEg");
	this.shape.setTransform(136.55,70);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#00FFFF").s().p("A+jRAQsqnBAAp/QAAp+MqnDQMqnCR5AAQR6AAMqHCQMqHDAAJ+QAAJ/sqHBQsqHEx6AAQx5AAsqnEg");
	this.shape_1.setTransform(136.55,70);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFCCFF").s().p("A+jRAQsqnBAAp/QAAp+MqnDQMqnCR5AAQR6AAMqHCQMqHDAAJ+QAAJ/sqHBQsqHEx6AAQx5AAsqnEg");
	this.shape_2.setTransform(136.55,70);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#66FFCC").s().p("A+jRAQsqnBAAp/QAAp+MqnDQMqnCR5AAQR6AAMqHCQMqHDAAJ+QAAJ/sqHBQsqHEx6AAQx5AAsqnEg");
	this.shape_3.setTransform(136.55,70);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape},{t:this.text,p:{x:-16,y:36.05}}]}).to({state:[{t:this.shape_1},{t:this.text,p:{x:2,y:28.05}}]},1).to({state:[{t:this.shape_2},{t:this.text,p:{x:-18,y:22}}]},1).to({state:[{t:this.shape_3},{t:this.text,p:{x:2,y:34}}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-140,-84,553.1,308);


(lib.raincopy = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.CachedBmp_2();
	this.instance.setTransform(-131.75,-60.1,0.5,0.5);

	this.instance_1 = new lib.CachedBmp_3();
	this.instance_1.setTransform(-131.75,-47.1,0.5,0.5);

	this.instance_2 = new lib.CachedBmp_4();
	this.instance_2.setTransform(-131.75,-27.1,0.5,0.5);

	this.instance_3 = new lib.CachedBmp_5();
	this.instance_3.setTransform(-131.75,0,0.5,0.5);

	this.instance_4 = new lib.CachedBmp_6();
	this.instance_4.setTransform(-131.75,0,0.5,0.5);

	this.instance_5 = new lib.CachedBmp_7();
	this.instance_5.setTransform(-131.75,20,0.5,0.5);

	this.instance_6 = new lib.CachedBmp_8();
	this.instance_6.setTransform(-131.75,20,0.5,0.5);

	this.instance_7 = new lib.CachedBmp_9();
	this.instance_7.setTransform(-131.75,57,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_5}]},1).to({state:[{t:this.instance_6}]},1).to({state:[{t:this.instance_7}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-131.7,-60.1,6.999999999999986,128.6);


(lib.house = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.housenoback();
	this.instance.setTransform(0,0,0.8379,0.5687);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.house, new cjs.Rectangle(0,0,2793.6,948.1), null);


(lib.cory1copy = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_2
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#666666").ss(1,1,1).p("AgkCyIBIlj");
	this.shape.setTransform(19.95,138);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#666666").ss(1,1,1).p("AhRF5IBHlbIBdmW");
	this.shape_1.setTransform(24.55,118.125);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#666666").ss(1,1,1).p("AiIIzIBHlbIBdmVIBtl1");
	this.shape_2.setTransform(30,99.475);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("#666666").ss(1,1,1).p("AA3nWQgJATgIATQAAAAAAAAQgIATgHASQAAAAAAAAQgJAXgJAXAA9mOIgcAZIgcAYAAXmLIAKAWAgHkuIAMgvAA3nWQAVAvAogXIg3AwAAmmwQADAtAUgLADNr1QhYCUg+CLAhmnkQAUAaATAZQAOASAOARAg3l7QAWAIgCgbIAAAAQAVAZATAYAg3l7IAAAAQAeAQAeAOAg3l7IAAAAAg3l7IAAAAQAfAcgOAcIArgaAhnmXQAAABAAAAQAYAOAYANAhnmXQAlA8gQAxIAsgZIAfAVAi3nJQAnAbApAXAi3nJQApANAogoQBPAoBOgaAhnmWQAdgEALgXQA4AbAtgaAmlqdQBrB6CDBaQA1BygoBgIBYgzQA8ANABAdIAOguAkssIQBjCgBjCEAkMMJIBHlbIBemXIA3i5IAbheAlbiRICxhmQBWABAkBUAgjmOQAeAQAcgNAGmrMIkyEO");
	this.shape_3.setTransform(43.175,78.15);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_3}]},1).wait(111));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,-0.5,86.4,157.3);


(lib.cloud1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.CachedBmp_1();
	this.instance.setTransform(-0.05,-0.15,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.cloud1, new cjs.Rectangle(0,-0.1,234,163.5), null);


(lib.btnplay = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.text = new cjs.Text("click to play", "normal 400 40px 'Lobster'", "#663399");
	this.text.lineHeight = 62;
	this.text.lineWidth = 608;
	this.text.parent = this;
	this.text.setTransform(350.85,25.05);
	if(!lib.properties.webfonts['Lobster']) {
		lib.webFontTxtInst['Lobster'] = lib.webFontTxtInst['Lobster'] || [];
		lib.webFontTxtInst['Lobster'].push(this.text);
	}

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("At3HPQlvjAAAkPQAAkOFvi/QFwjAIHAAQIIAAFvDAQFvC/AAEOQAAEPlvDAQlvDAoIgBQoHABlwjAg");
	this.shape.setTransform(445.7,57.05);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("At3HPQlvjAAAkPQAAkOFvi/QFwjAIHAAQIIAAFvDAQFvC/AAEOQAAEPlvDAQlvDAoIgBQoHABlwjAg");
	this.shape_1.setTransform(445.7,57.05);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FF9999").s().p("At3HPQlvjAAAkPQAAkOFvi/QFwjAIHAAQIIAAFvDAQFvC/AAEOQAAEPlvDAQlvDAoIgBQoHABlwjAg");
	this.shape_2.setTransform(445.7,57.05);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#66FF99").s().p("At3HPQlvjAAAkPQAAkOFvi/QFwjAIHAAQIIAAFvDAQFvC/AAEOQAAEPlvDAQlvDAoIgBQoHABlwjAg");
	this.shape_3.setTransform(445.7,57.05);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape},{t:this.text,p:{color:"#663399"}}]}).to({state:[{t:this.shape_1},{t:this.text,p:{color:"#00CCCC"}}]},1).to({state:[{t:this.shape_2},{t:this.text,p:{color:"#000000"}}]},1).to({state:[{t:this.shape_3},{t:this.text,p:{color:"#FFFFFF"}}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(320.3,-8.4,640.7,167.5);


(lib.___Camera___ = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// timeline functions:
	this.frame_0 = function() {
		this.visible = false;
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(2));

	// cameraBoundary
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("rgba(0,0,0,0)").ss(2,1,1,3,true).p("EAq+AfQMhV7AAAMAAAg+fMBV7AAAg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(2));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-641,-361,1282,722);


(lib.Symbol3 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.leg();
	this.instance.setTransform(24.55,38.35,1,1,-54.4381,0,0,9.6,41.4);

	this.instance_1 = new lib.leg();
	this.instance_1.setTransform(70,83.6,1,1,-38.7056,0,0,20,52.1);

	this.instance_2 = new lib.leg();
	this.instance_2.setTransform(70.85,123.75,1,1,-37.6564,0,0,20,52.1);

	this.instance_3 = new lib.leg();
	this.instance_3.setTransform(53.55,162.25,1,1,0,0,0,20,52);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol3, new cjs.Rectangle(0,0,107.4,196.2), null);


(lib.Symbol2 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.leg();
	this.instance.setTransform(24.55,38.35,1,1,-54.4381,0,0,9.6,41.4);

	this.instance_1 = new lib.leg();
	this.instance_1.setTransform(70,83.6,1,1,-38.7056,0,0,20,52.1);

	this.instance_2 = new lib.leg();
	this.instance_2.setTransform(70.85,123.75,1,1,-37.6564,0,0,20,52.1);

	this.instance_3 = new lib.leg();
	this.instance_3.setTransform(53.55,162.25,1,1,0,0,0,20,52);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol2, new cjs.Rectangle(0,0,107.4,196.2), null);


(lib.Symbol1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.Symbol3();
	this.instance.setTransform(53.6,98,1,1,0,0,0,53.6,98);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({regX:54.4,regY:92.3,scaleX:0.9933,scaleY:0.9874,x:54.4,y:92.35},0).wait(1).to({scaleX:0.9866,scaleY:0.9747,x:54.35,y:92.4},0).wait(1).to({scaleX:0.9799,scaleY:0.9621,y:92.5},0).wait(1).to({scaleX:0.9732,scaleY:0.9494,y:92.6},0).wait(1).to({scaleX:0.9665,scaleY:0.9368},0).wait(1).to({scaleX:0.9598,scaleY:0.9241,y:92.7},0).wait(1).to({scaleX:0.9531,scaleY:0.9115,y:92.8},0).wait(1).to({scaleX:0.9464,scaleY:0.8988,y:92.85},0).wait(1).to({scaleX:0.9397,scaleY:0.8862,x:54.3,y:92.95},0).wait(1).to({scaleX:0.933,scaleY:0.8735,y:93},0).wait(1).to({scaleX:0.9263,scaleY:0.8609,x:54.35,y:93.05},0).wait(1).to({scaleX:0.9196,scaleY:0.8482,x:54.3,y:93.15},0).wait(1).to({scaleX:0.9128,scaleY:0.8356,y:93.2},0).wait(1).to({scaleX:0.9061,scaleY:0.8229,y:93.3},0).wait(1).to({scaleX:0.8994,scaleY:0.8103,y:93.35},0).wait(1).to({scaleX:0.8927,scaleY:0.7977,y:93.4},0).wait(1).to({scaleX:0.886,scaleY:0.785,y:93.5},0).wait(1).to({scaleX:0.8793,scaleY:0.7724,y:93.6},0).wait(1).to({scaleX:0.8726,scaleY:0.7597,x:54.25,y:93.65},0).wait(1).to({scaleX:0.8659,scaleY:0.7471,y:93.7},0).wait(1).to({scaleX:0.8592,scaleY:0.7344,x:54.3,y:93.8},0).wait(1).to({scaleX:0.8525,scaleY:0.7218,y:93.85},0).wait(1).to({scaleX:0.8458,scaleY:0.7091,x:54.25,y:93.95},0).wait(1).to({scaleX:0.8391,scaleY:0.6965,y:94.05},0).wait(1).to({scaleX:0.8324,scaleY:0.6838},0).to({_off:true},1).wait(2));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,107.4,196.2);


(lib.helfleg = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.Symbol2();
	this.instance.setTransform(88.05,78.45,1,1,0,0,0,53.6,98);

	this.instance_1 = new lib.Symbol1();
	this.instance_1.setTransform(90.4,81.9,1,1,0,0,0,53.6,98);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance_1}]},1).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({regX:54.4,regY:92.3,x:88.85,y:72.75},0).wait(17).to({_off:true},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(34.5,-19.5,109.69999999999999,199.6);


(lib.eye = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.Symbol4();
	this.instance.setTransform(39.3,30.3,1,1,0,0,0,39.3,30.3);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.eye, new cjs.Rectangle(0,0,78.5,60.5), null);


(lib.copys1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.helfleg();
	this.instance.setTransform(60.4,109.5,0.8049,0.8602,0,-21.9448,158.0546,88.3,78.5);

	this.instance_1 = new lib.helfleg();
	this.instance_1.setTransform(224.1,52.05,1,1,-21.9456,0,0,88.2,78.5);

	this.instance_2 = new lib.eye();
	this.instance_2.setTransform(172,95.05,1,1,0,0,0,39.3,30.3);

	this.instance_3 = new lib.CachedBmp_12();
	this.instance_3.setTransform(121.2,72.35,0.5,0.5);

	this.instance_4 = new lib.CachedBmp_11();
	this.instance_4.setTransform(49.5,4.7,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_4},{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.copys1, new cjs.Rectangle(20.6,-27.5,268.2,221.2), null);


(lib.back = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_2
	this.instance = new lib.helfleg();
	this.instance.setTransform(-0.9,-63.5,0.6768,0.9949,0,0,180,88,78.5);

	this.instance_1 = new lib.helfleg();
	this.instance_1.setTransform(138.1,-55.9,0.8324,0.8879,0,0,0,88.2,78.5);

	this.instance_2 = new lib.body();
	this.instance_2.setTransform(122,-47,1,1,0,0,0,148,92.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(2));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-37.3,-161,220,195.1);


(lib.Scene_1_sun2 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// sun2
	this.instance = new lib.sun();
	this.instance.setTransform(-115.95,401.8,0.377,0.318,0,0,0,238.8,235.3);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(242).to({_off:false},0).wait(1).to({regX:426,regY:-190.8,x:-37.35,y:258.15},0).wait(1).to({x:-32.5,y:253.1},0).wait(1).to({x:-29.9,y:250.15},0).wait(1).to({x:-28.55,y:248.6},0).wait(1).to({x:-27.6,y:247.6},0).wait(1).to({x:-26.05,y:246.4},0).wait(1).to({x:-23.05,y:244.2},0).wait(1).to({x:-17.65,y:240.15},0).wait(1).to({x:-9,y:233.6},0).wait(1).to({x:1.45,y:225.7},0).wait(1).to({x:11.65,y:218.25},0).wait(1).to({x:21.6,y:211.15},0).wait(1).to({x:31.4,y:204.35},0).wait(1).to({x:40.95,y:197.85},0).wait(1).to({x:50.4,y:191.6},0).wait(1).to({x:59.7,y:185.65},0).wait(1).to({x:68.85,y:179.85},0).wait(1).to({x:77.85,y:174.3},0).wait(1).to({x:86.8,y:168.9},0).wait(1).to({x:95.65,y:163.7},0).wait(1).to({x:104.4,y:158.65},0).wait(1).to({x:113.05,y:153.8},0).wait(1).to({x:121.65,y:149.05},0).wait(1).to({x:130.15,y:144.45},0).wait(1).to({x:138.6,y:140},0).wait(1).to({x:147,y:135.7},0).wait(1).to({x:155.3,y:131.5},0).wait(1).to({x:163.55,y:127.4},0).wait(1).to({x:171.75,y:123.4},0).wait(1).to({x:179.95,y:119.5},0).wait(1).to({x:188.1,y:115.75},0).wait(1).to({x:196.2,y:112.05},0).wait(1).to({x:204.25,y:108.5},0).wait(1).to({x:212.3,y:105},0).wait(1).to({x:220.3,y:101.6},0).wait(1).to({x:228.25,y:98.3},0).wait(1).to({x:236.2,y:95.05},0).wait(1).to({x:244.1,y:91.9},0).wait(1).to({x:252,y:88.85},0).wait(1).to({x:259.85,y:85.85},0).wait(1).to({x:267.7,y:82.9},0).wait(1).to({x:275.55,y:80.05},0).wait(1).to({x:283.35,y:77.3},0).wait(1).to({x:291.15,y:74.6},0).wait(1).to({x:298.9,y:71.95},0).wait(1).to({x:306.7,y:69.4},0).wait(1).to({x:314.45,y:66.9},0).wait(1).to({x:322.2,y:64.5},0).wait(1).to({x:329.9,y:62.1},0).wait(1).to({x:337.65,y:59.8},0).wait(1).to({x:345.35,y:57.6},0).wait(1).to({x:353.05,y:55.4},0).wait(1).to({x:360.75,y:53.3},0).wait(1).to({x:368.45,y:51.25},0).wait(1).to({x:376.15,y:49.25},0).wait(1).to({x:383.85,y:47.3},0).wait(1).to({x:391.55,y:45.45},0).wait(1).to({x:399.25,y:43.65},0).wait(1).to({x:406.95,y:41.85},0).wait(1).to({x:414.65,y:40.15},0).wait(1).to({x:422.35,y:38.55},0).wait(1).to({x:430.05,y:36.95},0).wait(1).to({x:437.8,y:35.45},0).wait(1).to({x:445.5,y:33.95},0).wait(1).to({x:453.25,y:32.55},0).wait(1).to({x:460.95,y:31.2},0).wait(1).to({x:468.7,y:29.9},0).wait(1).to({x:476.45,y:28.65},0).wait(1).to({x:484.25,y:27.5},0).wait(1).to({x:492,y:26.35},0).wait(1).to({x:499.8,y:25.3},0).wait(1).to({x:507.6,y:24.3},0).wait(1).to({x:515.4,y:23.35},0).wait(1).to({x:523.25,y:22.45},0).wait(1).to({x:531.1,y:21.6},0).wait(1).to({x:538.95,y:20.85},0).wait(1).to({x:546.85,y:20.1},0).wait(1).to({x:554.8,y:19.45},0).wait(1).to({x:562.7,y:18.85},0).wait(1).to({x:570.65,y:18.35},0).wait(1).to({x:578.65,y:17.85},0).wait(1).to({x:586.65,y:17.45},0).wait(1).to({x:594.7,y:17.1},0).wait(1).to({x:602.75,y:16.85},0).wait(1).to({x:610.85,y:16.6},0).wait(1).to({x:619,y:16.45},0).wait(1).to({x:627.15,y:16.4},0).wait(1).to({x:635.35,y:16.35},0).wait(1).to({x:643.55,y:16.45},0).wait(1).to({x:651.85,y:16.55},0).wait(1).to({x:660.15,y:16.75},0).wait(1).to({x:668.5,y:17.05},0).wait(1).to({x:676.9,y:17.4},0).wait(1).to({x:685.35,y:17.85},0).wait(1).to({x:693.85,y:18.35},0).wait(1).to({x:702.4,y:18.95},0).wait(1).to({x:711,y:19.6},0).wait(1).to({x:719.65,y:20.4},0).wait(1).to({x:728.4,y:21.25},0).wait(1).to({x:737.15,y:22.2},0).wait(1).to({x:746,y:23.25},0).wait(1).to({x:754.95,y:24.4},0).wait(1).to({x:763.95,y:25.65},0).wait(1).to({x:773.05,y:27},0).wait(1).to({x:782.2,y:28.5},0).wait(1).to({x:791.45,y:30.1},0).wait(1).to({x:800.8,y:31.8},0).wait(1).to({x:810.3,y:33.65},0).wait(1).to({x:819.85,y:35.6},0).wait(1).to({x:829.55,y:37.75},0).wait(1).to({x:839.35,y:40},0).wait(1).to({x:849.3,y:42.45},0).wait(1).to({x:859.4,y:45.05},0).wait(1).to({x:869.65,y:47.85},0).wait(1).to({x:880.05,y:50.85},0).wait(1).to({x:890.65,y:54.05},0).wait(1).to({x:901.45,y:57.5},0).wait(1).to({x:912.5,y:61.15},0).wait(1).to({x:923.8,y:65.1},0).wait(1).to({x:935.35,y:69.35},0).wait(1).to({x:947.25,y:73.95},0).wait(1).to({x:959.5,y:78.95},0).wait(1).to({x:972.1,y:84.3},0).wait(1).to({x:972.45,y:84},0).wait(1).to({x:972.75,y:83.65},0).wait(1).to({x:973.1,y:83.35},0).wait(1).to({x:973.4,y:83},0).wait(1).to({x:973.7,y:82.7},0).wait(1).to({x:974.05,y:82.35},0).wait(1).to({x:974.35,y:82},0).wait(1).to({x:974.7,y:81.7},0).wait(1).to({x:975,y:81.35},0).wait(1).to({x:975.3,y:81.05},0).wait(1).to({x:975.65,y:80.7},0).wait(1).to({x:975.95,y:80.4},0).wait(1).to({x:976.3,y:80.05},0).wait(1).to({x:976.6,y:79.7},0).wait(1).to({x:976.9,y:79.4},0).wait(1).to({x:977.25,y:79.05},0).wait(1).to({x:977.55,y:78.75},0).wait(1).to({x:977.85,y:78.4},0).wait(1).to({x:978.2,y:78.05},0).wait(1).to({x:978.5,y:77.75},0).wait(1).to({x:978.85,y:77.4},0).wait(1).to({x:979.15,y:77.1},0).wait(1).to({x:979.45,y:76.75},0).wait(1).to({x:979.8,y:76.45},0).wait(1).to({x:980.1,y:76.1},0).wait(1).to({x:980.45,y:75.75},0).wait(1).to({x:980.75,y:75.45},0).wait(1).to({x:981.05,y:75.1},0).wait(1).to({x:981.4,y:74.8},0).wait(1).to({x:981.7,y:74.45},0).wait(1).to({x:982,y:74.15},0).wait(1).to({x:982.35,y:73.8},0).wait(1).to({x:982.65,y:73.45},0).wait(1).to({x:983,y:73.15},0).wait(1).to({x:983.3,y:72.8},0).wait(1).to({x:983.6,y:72.5},0).wait(1).to({x:983.95,y:72.15},0).wait(1).to({x:984.25,y:71.8},0).wait(1).to({x:984.6,y:71.5},0).wait(1).to({x:984.9,y:71.15},0).wait(1).to({x:985.2,y:70.85},0).wait(1).to({x:985.55,y:70.5},0).wait(1).to({x:985.85,y:70.2},0).wait(1).to({x:986.15,y:69.85},0).wait(1).to({x:986.5,y:69.5},0).wait(1).to({x:986.8,y:69.2},0).wait(1).to({x:987.15,y:68.85},0).wait(1).to({x:987.45,y:68.55},0).wait(1).to({x:987.75,y:68.2},0).wait(1).to({x:988.1,y:67.9},0).wait(1).to({x:988.4,y:67.55},0).wait(1).to({x:988.75,y:67.2},0).wait(1).to({x:989.05,y:66.9},0).wait(1).to({x:989.35,y:66.55},0).wait(1).to({x:989.7,y:66.25},0).wait(1).to({x:990,y:65.9},0).wait(1).to({x:990.3,y:65.55},0).wait(1).to({x:990.65,y:65.25},0).wait(1).to({x:990.95,y:64.9},0).wait(1).to({x:991.3,y:64.6},0).wait(1).to({x:991.6,y:64.25},0).wait(1).to({x:991.9,y:63.95},0).wait(1).to({x:992.25,y:63.6},0).wait(1).to({x:992.55,y:63.25},0).wait(1).to({x:992.9,y:62.95},0).wait(1).to({x:993.2,y:62.6},0).wait(1).to({x:993.5,y:62.3},0).wait(1).to({x:993.85,y:61.95},0).wait(1).to({x:994.15,y:61.65},0).wait(1).to({x:994.5,y:61.3},0).wait(1).to({x:994.8,y:60.95},0).wait(1).to({x:995.1,y:60.65},0).wait(1).to({x:995.45,y:60.3},0).wait(1).to({x:995.75,y:60},0).wait(1).to({x:996.05,y:59.65},0).wait(1).to({x:996.4,y:59.3},0).wait(1).to({x:996.7,y:59},0).wait(1).to({x:997.05,y:58.65},0).wait(1).to({x:997.35,y:58.35},0).wait(1).to({x:997.65,y:58},0).wait(1).to({x:998,y:57.7},0).wait(1).to({x:998.3,y:57.35},0).wait(1).to({x:998.65,y:57},0).wait(1).to({x:998.95,y:56.7},0).wait(1).to({x:999.25,y:56.35},0).wait(1).to({x:999.6,y:56.05},0).wait(1).to({x:999.9,y:55.7},0).wait(1).to({x:1000.2,y:55.4},0).wait(1).to({x:1000.55,y:55.05},0).wait(1).to({x:1000.85,y:54.7},0).wait(1).to({x:1001.2,y:54.4},0).wait(1).to({x:1001.5,y:54.05},0).wait(1).to({x:1001.8,y:53.75},0).wait(1).to({x:1002.15,y:53.4},0).wait(1).to({x:1002.45,y:53.05},0).wait(1).to({x:1002.8,y:52.75},0).wait(1).to({x:1003.1,y:52.4},0).wait(1).to({x:1003.4,y:52.1},0).wait(1).to({x:1003.75,y:51.75},0).wait(1).to({x:1004.05,y:51.45},0).wait(1).to({x:1004.35,y:51.1},0).wait(1).to({x:1004.7,y:50.75},0).wait(1).to({x:1005,y:50.45},0).wait(1).to({x:1005.35,y:50.1},0).wait(1).to({x:1005.65,y:49.8},0).wait(1).to({x:1005.95,y:49.45},0).wait(1).to({x:1006.3,y:49.15},0).wait(1).to({x:1006.6,y:48.8},0).wait(1).to({x:1006.95,y:48.45},0).wait(1).to({x:1007.25,y:48.15},0).wait(1).to({x:1007.55,y:47.8},0).wait(1).to({x:1007.9,y:47.5},0).wait(1).to({x:1008.2,y:47.15},0).wait(1).to({x:1008.5,y:46.8},0).wait(7));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();


(lib.Scene_1_sun_goes = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// sun_goes
	this.instance = new lib.sun();
	this.instance.setTransform(894.65,262.5,0.3765,0.3175,0,0,0,243.5,241.1);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(175).to({_off:false},0).wait(1).to({regX:426,regY:-190.8,x:969.75,y:97.5},0).wait(1).to({x:985.35,y:72.6},0).wait(1).to({x:1010.05,y:50.5},0).wait(1).to({x:1043.75,y:31.25},0).wait(1).to({x:1086.25,y:14.75},0).wait(1).to({x:1137.5,y:0.95},0).wait(1).to({x:1197.45,y:-10.1},0).wait(1).to({x:1266,y:-18.55},0).wait(1).to({x:1343.05,y:-24.4},0).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();


(lib.Scene_1_sun = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// sun
	this.instance = new lib.sun();
	this.instance.setTransform(-115.95,445.85,0.377,0.318,0,0,0,238.8,235.3);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(4).to({_off:false},0).wait(1).to({regX:426,regY:-190.8,x:-38.1,y:303.15},0).wait(1).to({x:-30.75,y:296.1},0).wait(1).to({x:-23.4,y:289.15},0).wait(1).to({x:-15.95,y:282.3},0).wait(1).to({x:-8.5,y:275.55},0).wait(1).to({x:-0.95,y:268.9},0).wait(1).to({x:6.6,y:262.35},0).wait(1).to({x:14.25,y:255.9},0).wait(1).to({x:21.9,y:249.55},0).wait(1).to({x:29.6,y:243.3},0).wait(1).to({x:37.35,y:237.15},0).wait(1).to({x:45.15,y:231.1},0).wait(1).to({x:53,y:225.15},0).wait(1).to({x:60.9,y:219.25},0).wait(1).to({x:68.85,y:213.5},0).wait(1).to({x:76.8,y:207.85},0).wait(1).to({x:84.8,y:202.25},0).wait(1).to({x:92.9,y:196.8},0).wait(1).to({x:101,y:191.4},0).wait(1).to({x:109.1,y:186.15},0).wait(1).to({x:117.3,y:180.95},0).wait(1).to({x:125.5,y:175.85},0).wait(1).to({x:133.75,y:170.85},0).wait(1).to({x:142.05,y:166},0).wait(1).to({x:150.35,y:161.2},0).wait(1).to({x:158.75,y:156.5},0).wait(1).to({x:167.1,y:151.9},0).wait(1).to({x:175.5,y:147.4},0).wait(1).to({x:184,y:143},0).wait(1).to({x:192.5,y:138.7},0).wait(1).to({x:201,y:134.5},0).wait(1).to({x:209.6,y:130.35},0).wait(1).to({x:218.2,y:126.35},0).wait(1).to({x:226.8,y:122.45},0).wait(1).to({x:235.5,y:118.6},0).wait(1).to({x:244.2,y:114.9},0).wait(1).to({x:252.9,y:111.25},0).wait(1).to({x:261.65,y:107.75},0).wait(1).to({x:270.45,y:104.3},0).wait(1).to({x:279.25,y:100.95},0).wait(1).to({x:288.1,y:97.75},0).wait(1).to({x:296.95,y:94.6},0).wait(1).to({x:305.85,y:91.55},0).wait(1).to({x:314.8,y:88.6},0).wait(1).to({x:323.75,y:85.75},0).wait(1).to({x:332.7,y:83},0).wait(1).to({x:341.7,y:80.35},0).wait(1).to({x:350.7,y:77.8},0).wait(1).to({x:359.75,y:75.35},0).wait(1).to({x:368.85,y:73},0).wait(1).to({x:377.9,y:70.75},0).wait(1).to({x:387.05,y:68.55},0).wait(1).to({x:396.15,y:66.5},0).wait(1).to({x:405.3,y:64.55},0).wait(1).to({x:414.5,y:62.65},0).wait(1).to({x:423.7,y:60.9},0).wait(1).to({x:432.9,y:59.2},0).wait(1).to({x:442.1,y:57.65},0).wait(1).to({x:451.35,y:56.15},0).wait(1).to({x:460.65,y:54.8},0).wait(1).to({x:469.9,y:53.5},0).wait(1).to({x:479.2,y:52.3},0).wait(1).to({x:488.55,y:51.25},0).wait(1).to({x:497.85,y:50.25},0).wait(1).to({x:507.2,y:49.35},0).wait(1).to({x:516.6,y:48.55},0).wait(1).to({x:525.95,y:47.85},0).wait(1).to({x:535.35,y:47.3},0).wait(1).to({x:544.75,y:46.8},0).wait(1).to({x:554.15,y:46.4},0).wait(1).to({x:563.6,y:46.1},0).wait(1).to({x:573,y:45.9},0).wait(1).to({x:582.45,y:45.8},0).wait(1).to({x:591.9},0).wait(1).to({x:601.4,y:45.9},0).wait(1).to({x:610.85,y:46.1},0).wait(1).to({x:620.35,y:46.4},0).wait(1).to({x:629.85,y:46.8},0).wait(1).to({x:639.3,y:47.3},0).wait(1).to({x:648.85,y:47.9},0).wait(1).to({x:658.35,y:48.55},0).wait(1).to({x:667.85,y:49.35},0).wait(1).to({x:677.4,y:50.25},0).wait(1).to({x:686.9,y:51.25},0).wait(1).to({x:696.45,y:52.35},0).wait(1).to({x:705.95,y:53.55},0).wait(1).to({x:715.5,y:54.85},0).wait(1).to({x:725.05,y:56.25},0).wait(1).to({x:734.6,y:57.75},0).wait(1).to({x:744.15,y:59.35},0).wait(1).to({x:753.65,y:61.05},0).wait(1).to({x:763.2,y:62.85},0).wait(1).to({x:772.75,y:64.75},0).wait(1).to({x:782.3,y:66.75},0).wait(1).to({x:791.85,y:68.85},0).wait(1).to({x:801.4,y:71.05},0).wait(1).to({x:810.9,y:73.4},0).wait(1).to({x:820.45,y:75.8},0).wait(1).to({x:830,y:78.3},0).wait(1).to({x:839.5,y:80.9},0).wait(1).to({x:849.05,y:83.65},0).wait(1).to({x:858.55,y:86.45},0).wait(1).to({x:868.05,y:89.4},0).wait(1).to({x:877.55,y:92.4},0).wait(1).to({x:887.05,y:95.55},0).wait(1).to({x:896.55,y:98.75},0).wait(1).to({x:906,y:102.1},0).wait(1).to({x:915.5,y:105.55},0).wait(1).to({x:924.95,y:109.1},0).wait(1).to({x:934.4,y:112.75},0).wait(1).to({x:943.85,y:116.5},0).wait(1).to({x:953.3,y:120.35},0).wait(1).to({x:962.7,y:124.3},0).wait(1).to({x:972.1,y:128.35},0).wait(1).to({x:971.9,y:128.3},0).wait(1).to({x:971.7,y:128.2},0).wait(1).to({x:971.5,y:128.1},0).wait(1).to({x:971.25,y:128},0).wait(1).to({x:971.05,y:127.9},0).wait(1).to({x:970.85,y:127.8},0).wait(1).to({x:970.65,y:127.7},0).wait(1).to({x:970.4,y:127.6},0).wait(1).to({x:970.2,y:127.55},0).wait(1).to({x:970,y:127.45},0).wait(1).to({x:969.75,y:127.35},0).wait(1).to({x:969.55,y:127.25},0).wait(1).to({x:969.35,y:127.15},0).wait(1).to({x:969.15,y:127.05},0).wait(1).to({x:968.9,y:126.95},0).wait(1).to({x:968.7,y:126.85},0).wait(1).to({x:968.5,y:126.8},0).wait(1).to({x:968.25,y:126.7},0).wait(1).to({x:968.05,y:126.6},0).wait(1).to({x:967.85,y:126.5},0).wait(1).to({x:967.65,y:126.4},0).wait(1).to({x:967.4,y:126.3},0).wait(1).to({x:967.2,y:126.2},0).wait(1).to({x:967,y:126.1},0).wait(1).to({x:966.75,y:126.05},0).wait(1).to({x:966.55,y:125.95},0).wait(1).to({x:966.35,y:125.85},0).wait(1).to({x:966.15,y:125.75},0).wait(1).to({x:965.9,y:125.65},0).wait(1).to({x:965.7,y:125.55},0).wait(1).to({x:965.5,y:125.45},0).wait(1).to({x:965.25,y:125.35},0).wait(1).to({x:965.05,y:125.3},0).wait(1).to({x:964.85,y:125.2},0).wait(1).to({x:964.65,y:125.1},0).wait(1).to({x:964.4,y:125},0).wait(1).to({x:964.2,y:124.9},0).wait(1).to({x:964,y:124.8},0).wait(1).to({x:963.75,y:124.7},0).wait(1).to({x:963.55,y:124.6},0).wait(1).to({x:963.35,y:124.55},0).wait(1).to({x:963.15,y:124.45},0).wait(1).to({x:962.9,y:124.35},0).wait(1).to({x:962.7,y:124.25},0).wait(1).to({x:962.5,y:124.15},0).wait(1).to({x:962.3,y:124.05},0).wait(1).to({x:962.05,y:123.95},0).wait(1).to({x:961.85,y:123.85},0).wait(1).to({x:961.65,y:123.8},0).wait(1).to({x:961.4,y:123.7},0).wait(1).to({x:961.2,y:123.6},0).wait(1).to({x:961,y:123.5},0).wait(1).to({x:960.8,y:123.4},0).wait(1).to({x:960.55,y:123.3},0).wait(1).to({x:960.35,y:123.2},0).wait(1).to({x:960.15,y:123.1},0).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();


(lib.Scene_1_spidermove = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// spidermove
	this.instance = new lib.copys1();
	this.instance.setTransform(864.65,792.25,0.3309,0.285,0,0,0,475.9,857.9);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(399).to({_off:false},0).wait(1).to({regX:150.4,regY:67.4,scaleX:0.3257,scaleY:0.2798,x:761,y:566.15},0).wait(1).to({scaleX:0.3205,scaleY:0.2747,x:765.05,y:565.3},0).wait(1).to({scaleX:0.3153,scaleY:0.2695,x:769.15,y:564.5},0).wait(1).to({scaleX:0.3101,scaleY:0.2644,x:773.25,y:563.65},0).wait(1).to({scaleX:0.3049,scaleY:0.2592,x:777.35,y:562.8},0).wait(1).to({scaleX:0.2997,scaleY:0.2541,x:781.45,y:562},0).wait(1).to({scaleX:0.2945,scaleY:0.2489,x:785.55,y:561.2},0).wait(1).to({scaleX:0.2892,scaleY:0.2438,x:789.65,y:560.4},0).wait(1).to({scaleX:0.284,scaleY:0.2386,x:793.7,y:559.55},0).wait(1).to({scaleX:0.2788,scaleY:0.2335,x:797.85,y:558.75},0).wait(1).to({scaleX:0.2736,scaleY:0.2283,x:801.9,y:557.9},0).wait(1).to({scaleX:0.2684,scaleY:0.2232,x:806,y:557.1},0).wait(1).to({scaleX:0.2632,scaleY:0.218,x:810.1,y:556.25},0).wait(1).to({scaleX:0.2579,scaleY:0.2129,x:814.2,y:555.45},0).wait(1).to({scaleX:0.2527,scaleY:0.2077,x:818.25,y:554.6},0).wait(1).to({scaleX:0.2475,scaleY:0.2026,x:822.35,y:553.75},0).wait(1).to({scaleX:0.2423,scaleY:0.1974,x:826.45,y:552.95},0).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();


(lib.Scene_1_spider_ups_copy = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// spider_ups_copy
	this.instance = new lib.spider4copy();
	this.instance.setTransform(859.7,510.6,0.2009,0.2179,0,0,0,70.2,58.8);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(417).to({_off:false},0).wait(1).to({regX:53.7,regY:132.1,x:857.2,y:522.2},0).wait(1).to({x:858.05,y:517.8},0).wait(1).to({x:858.9,y:513.4},0).wait(1).to({x:859.7,y:509},0).wait(1).to({x:860.55,y:504.6},0).wait(1).to({x:861.4,y:500.2},0).wait(1).to({x:862.2,y:495.85},0).wait(1).to({x:863.05,y:491.45},0).wait(1).to({x:863.9,y:487.05},0).wait(1).to({x:864.75,y:482.65},0).wait(1).to({x:865.55,y:478.25},0).wait(1).to({x:866.4,y:473.85},0).wait(1).to({x:867.25,y:469.5},0).wait(1).to({x:868.05,y:465.1},0).wait(1).to({x:868.9,y:460.7},0).wait(1).to({x:869.75,y:456.3},0).wait(1).to({x:870.6,y:451.9},0).wait(1).to({x:871.4,y:447.5},0).wait(1).to({x:872.25,y:443.1},0).wait(1).to({x:873.1,y:438.75},0).wait(1).to({x:873.9,y:434.35},0).wait(1).to({x:874.75,y:429.95},0).wait(1).to({x:875.6,y:425.55},0).wait(1).to({x:876.45,y:421.15},0).wait(1).to({x:877.25,y:416.75},0).wait(1).to({x:878.1,y:412.4},0).wait(1).to({x:878.95,y:408},0).wait(1).to({x:879.75,y:403.6},0).wait(1).to({x:880.6,y:399.2},0).wait(1).to({x:881.45,y:394.8},0).wait(1).to({x:882.3,y:390.4},0).wait(1).to({x:883.1,y:386.05},0).wait(1).to({x:883.95,y:381.65},0).wait(1).to({x:884.8,y:377.25},0).wait(1).to({x:885.6,y:372.85},0).wait(1).to({x:886.45,y:368.45},0).wait(1).to({x:887.3,y:364.05},0).wait(1).to({x:888.1,y:359.65},0).wait(1).to({regX:70,regY:58.8,x:891.05,y:343.05},0).wait(2).to({regX:70.2,regY:58.9,scaleX:0.2008,rotation:-14.9968},0).wait(2).to({regX:70.5,regY:59.2,rotation:-29.9947,x:891.15},0).wait(2).to({regX:70.6,rotation:-44.9943,x:891.2,y:343.1},0).wait(2).to({regY:59.5,rotation:-59.9943,x:891.3,y:343.15},0).wait(2).to({regX:70.4,scaleY:0.2178,rotation:-104.9911},0).wait(2).to({regX:70.1,regY:59.4,rotation:-134.9886},0).wait(2).to({regX:69.9,regY:59.2,rotation:-149.9918,x:891.35,y:343.25},0).wait(2).to({regX:70,regY:59.1,rotation:-194.9904,x:891.3,y:343.2},0).wait(2).to({regX:70.2,regY:58.9,rotation:-239.9918,x:891.35,y:343.25},0).wait(2).to({regY:58.8,rotation:-269.992,y:343.2},0).wait(2).to({regX:70.7,regY:58.9,scaleX:0.2007,rotation:-314.9915,x:891.4},0).wait(2).to({regX:70.8,regY:59.1,rotation:-344.9938,y:343.25},0).wait(2).to({regX:71,regY:59.2,scaleX:0.2008,scaleY:0.2177,rotation:-359.996,x:891.45,y:343.2},0).wait(3));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();


(lib.Scene_1_spider_ups = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// spider_ups
	this.instance = new lib.spider4copy();
	this.instance.setTransform(859.7,510.6,0.2009,0.2179,0,0,0,70.2,58.8);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(127).to({_off:false},0).wait(1).to({regX:53.7,regY:132.1,x:857,y:523.15},0).wait(1).to({x:857.65,y:519.75},0).wait(1).to({x:858.3,y:516.35},0).wait(1).to({x:858.95,y:512.95},0).wait(1).to({x:859.6,y:509.55},0).wait(1).to({x:860.25,y:506.15},0).wait(1).to({x:860.9,y:502.75},0).wait(1).to({x:861.55,y:499.35},0).wait(1).to({x:862.2,y:495.9},0).wait(1).to({x:862.85,y:492.5},0).wait(1).to({x:863.5,y:489.1},0).wait(1).to({x:864.15,y:485.7},0).wait(1).to({x:864.8,y:482.3},0).wait(1).to({x:865.45,y:478.9},0).wait(1).to({x:866.1,y:475.5},0).wait(1).to({x:866.75,y:472.1},0).wait(1).to({x:867.4,y:468.65},0).wait(1).to({x:868.05,y:465.25},0).wait(1).to({x:868.7,y:461.85},0).wait(1).to({x:869.35,y:458.45},0).wait(1).to({x:870,y:455.05},0).wait(1).to({x:870.65,y:451.65},0).wait(1).to({x:871.3,y:448.25},0).wait(1).to({x:871.95,y:444.85},0).wait(1).to({x:872.55,y:441.4},0).wait(1).to({x:873.2,y:438},0).wait(1).to({x:873.85,y:434.6},0).wait(1).to({x:874.5,y:431.2},0).wait(1).to({x:875.15,y:427.8},0).wait(1).to({x:875.8,y:424.4},0).wait(1).to({x:876.45,y:421},0).wait(1).to({x:877.1,y:417.6},0).wait(1).to({x:877.75,y:414.15},0).wait(1).to({x:878.4,y:410.75},0).wait(1).to({x:879.05,y:407.35},0).wait(1).to({x:879.7,y:403.95},0).wait(1).to({x:880.35,y:400.55},0).wait(1).to({x:881,y:397.15},0).wait(1).to({x:881.65,y:393.75},0).wait(1).to({x:882.3,y:390.35},0).wait(1).to({x:882.95,y:386.9},0).wait(1).to({x:883.6,y:383.5},0).wait(1).to({x:884.25,y:380.1},0).wait(1).to({x:884.9,y:376.7},0).wait(1).to({x:885.55,y:373.3},0).wait(1).to({x:886.2,y:369.9},0).wait(1).to({x:886.85,y:366.5},0).wait(1).to({x:887.5,y:363.1},0).wait(1).to({x:888.1,y:359.65},0).wait(12));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();


(lib.Scene_1_slolit = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// slolit
	this.instance = new lib.slolit();
	this.instance.setTransform(1348.35,570.85,1,1,0,0,0,202,50.1);

	this.instance_1 = new lib.slolit();
	this.instance_1.setTransform(360.15,570.85,1,1,0,0,0,202,26.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_1,p:{scaleX:1,x:360.15,regX:202}},{t:this.instance,p:{scaleX:1,x:1348.35,regX:202}}]},242).to({state:[{t:this.instance_1,p:{scaleX:1,x:360.15,regX:202}},{t:this.instance,p:{scaleX:1,x:1348.35,regX:202}}]},34).to({state:[{t:this.instance_1,p:{scaleX:0.8812,x:360.15,regX:202}},{t:this.instance,p:{scaleX:0.8416,x:1320.4,regX:202}}]},11).to({state:[{t:this.instance_1,p:{scaleX:0.8812,x:356.15,regX:202}},{t:this.instance,p:{scaleX:0.8416,x:1312.4,regX:202}}]},11).to({state:[{t:this.instance_1,p:{scaleX:0.6831,x:356.2,regX:202.1}},{t:this.instance,p:{scaleX:0.6633,x:1296.5,regX:202.1}}]},11).to({state:[{t:this.instance_1,p:{scaleX:0.5447,x:352.3,regX:202.2}},{t:this.instance,p:{scaleX:0.485,x:1340.45,regX:202.1}}]},10).to({state:[{t:this.instance_1,p:{scaleX:0.4258,x:352.3,regX:202.3}},{t:this.instance,p:{scaleX:0.3068,x:1278.45,regX:0}}]},11).to({state:[{t:this.instance_1,p:{scaleX:0.4258,x:352.3,regX:202.3}},{t:this.instance,p:{scaleX:0.3068,x:1278.45,regX:0}}]},14).to({state:[{t:this.instance_1,p:{scaleX:0.2676,x:352.3,regX:202.3}},{t:this.instance,p:{scaleX:0.3068,x:1278.45,regX:0}}]},11).to({state:[{t:this.instance_1,p:{scaleX:0.1687,x:352.3,regX:202.4}},{t:this.instance,p:{scaleX:0.3068,x:1278.45,regX:0}}]},7).to({state:[]},7).wait(118));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();


(lib.Scene_1_rain = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// rain
	this.instance = new lib.raincopy();
	this.instance.setTransform(1014,249.85,1,1,0,0,0,-139.7,-118);

	this.instance_1 = new lib.raincopy();
	this.instance_1.setTransform(1046.95,214.45,1,1,0,0,0,-139.7,-118);

	this.instance_2 = new lib.raincopy();
	this.instance_2.setTransform(1006.95,191.95,1,1,0,0,0,-139.7,-118);

	this.instance_3 = new lib.raincopy();
	this.instance_3.setTransform(56.9,214.45,1,1,0,0,0,-139.7,-118);

	this.instance_4 = new lib.raincopy();
	this.instance_4.setTransform(22.3,261.1,1,1,0,0,0,-139.7,-118);

	this.instance_5 = new lib.raincopy();
	this.instance_5.setTransform(15.25,203.2,1,1,0,0,0,-139.7,-118);

	this.instance_6 = new lib.raincopy();
	this.instance_6.setTransform(1006.95,191.95,1,1,0,0,0,-139.7,-118);

	this.instance_7 = new lib.raincopy();
	this.instance_7.setTransform(56.9,214.45,1,1,0,0,0,-139.7,-118);

	this.instance_8 = new lib.raincopy();
	this.instance_8.setTransform(22.3,261.1,1,1,0,0,0,-139.7,-118);

	this.instance_9 = new lib.raincopy();
	this.instance_9.setTransform(15.25,203.2,1,1,0,0,0,-139.7,-118);

	this.instance_10 = new lib.raincopy();
	this.instance_10.setTransform(22.3,261.1,1,1,0,0,0,-139.7,-118);

	this.instance_11 = new lib.raincopy();
	this.instance_11.setTransform(15.25,203.2,1,1,0,0,0,-139.7,-118);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_5,p:{x:15.25,y:203.2}},{t:this.instance_4,p:{x:22.3,y:261.1}},{t:this.instance_3,p:{x:56.9,y:214.45}},{t:this.instance_2,p:{x:1006.95,y:191.95}},{t:this.instance_1,p:{x:1046.95,y:214.45}},{t:this.instance,p:{x:1014,y:249.85}}]},194).to({state:[{t:this.instance_9,p:{x:15.25,y:203.2}},{t:this.instance_8,p:{x:22.3,y:261.1}},{t:this.instance_7,p:{x:56.9}},{t:this.instance_6,p:{x:1006.95,y:191.95}},{t:this.instance_5,p:{x:1046.95,y:214.45}},{t:this.instance_4,p:{x:1014,y:249.85}},{t:this.instance_3,p:{x:120.25,y:283.15}},{t:this.instance_2,p:{x:120.25,y:283.15}},{t:this.instance_1,p:{x:173.55,y:283.15}},{t:this.instance,p:{x:166.5,y:249.85}}]},3).to({state:[{t:this.instance_6,p:{x:15.25,y:203.2}},{t:this.instance_5,p:{x:22.3,y:261.1}},{t:this.instance_4,p:{x:56.9,y:214.45}},{t:this.instance_3,p:{x:1006.95,y:191.95}},{t:this.instance_2,p:{x:1046.95,y:214.45}},{t:this.instance_1,p:{x:1014,y:249.85}},{t:this.instance,p:{x:120.25,y:225.7}}]},1).to({state:[{t:this.instance_11},{t:this.instance_10},{t:this.instance_9,p:{x:56.9,y:214.45}},{t:this.instance_8,p:{x:1006.95,y:191.95}},{t:this.instance_7,p:{x:1046.95}},{t:this.instance_6,p:{x:1014,y:249.85}},{t:this.instance_5,p:{x:120.25,y:225.7}},{t:this.instance_4,p:{x:180.25,y:272.35}},{t:this.instance_3,p:{x:173.2,y:225.7}},{t:this.instance_2,p:{x:924.55,y:203.2}},{t:this.instance_1,p:{x:931.6,y:261.1}},{t:this.instance,p:{x:976.95,y:283.6}}]},3).wait(42));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();


(lib.Scene_1_out = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// out
	this.instance = new lib.copys1();
	this.instance.setTransform(661.85,582.75,0.316,0.285,0,0,0,149.7,72.3);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(368).to({_off:false},0).wait(1).to({regX:150.4,regY:67.4,scaleX:0.3165,x:665.5,y:581.75},0).wait(1).to({scaleX:0.317,x:668.8,y:582.1},0).wait(1).to({scaleX:0.3175,x:671.95,y:582.45},0).wait(1).to({scaleX:0.3181,x:675.05,y:582.75},0).wait(1).to({scaleX:0.3186,x:678,y:583.05},0).wait(1).to({scaleX:0.3191,x:680.95,y:583.35},0).wait(1).to({scaleX:0.3196,x:683.8,y:583.6},0).wait(1).to({scaleX:0.3201,x:686.65,y:583.8},0).wait(1).to({scaleX:0.3206,x:689.4,y:584.05},0).wait(1).to({scaleX:0.3212,x:692.15,y:584.25},0).wait(1).to({scaleX:0.3217,x:694.85,y:584.45},0).wait(1).to({scaleX:0.3222,x:697.5,y:584.6},0).wait(1).to({scaleX:0.3227,x:700.15,y:584.75},0).wait(1).to({scaleX:0.3232,x:702.75,y:584.9},0).wait(1).to({scaleX:0.3238,x:705.4,y:585.05},0).wait(1).to({scaleX:0.3243,x:707.95,y:585.2},0).wait(1).to({scaleX:0.3248,x:710.6,y:585.3},0).wait(1).to({scaleX:0.3253,x:713.15,y:585.4},0).wait(1).to({scaleX:0.3258,x:715.8,y:585.45},0).wait(1).to({scaleX:0.3263,x:718.45,y:585.55},0).wait(1).to({scaleX:0.3269,x:721.05,y:585.6},0).wait(1).to({scaleX:0.3274,x:723.75,y:585.65},0).wait(1).to({scaleX:0.3279,x:726.4},0).wait(1).to({scaleX:0.3284,x:729.1},0).wait(1).to({scaleX:0.3289,x:731.85},0).wait(1).to({scaleX:0.3294,x:734.7},0).wait(1).to({scaleX:0.33,x:737.55,y:585.6},0).wait(1).to({scaleX:0.3305,x:740.5,y:585.55},0).wait(1).to({scaleX:0.331,x:743.6,y:585.45},0).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();


(lib.Scene_1_jump = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// jump
	this.instance = new lib.spider4();
	this.instance.setTransform(863.85,544.8,0.2213,0.2555,0,0,0,134,126.5);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(217).to({_off:false},0).wait(1).to({regX:101,regY:97.8,rotation:-6.602,x:849,y:542.1},0).wait(1).to({rotation:-13.2041,x:841.6,y:546.85},0).wait(1).to({rotation:-19.8061,x:834.35,y:551.65},0).wait(1).to({rotation:-26.4082,x:827.15,y:556.55},0).wait(1).to({rotation:-33.0102,x:820.15,y:561.4},0).wait(1).to({rotation:-39.6123,x:813.25,y:566.35},0).wait(1).to({rotation:-46.2143,x:806.5,y:571.3},0).wait(1).to({rotation:-52.8164,x:799.85,y:576.3},0).wait(1).to({rotation:-59.4184,x:793.35,y:581.2},0).wait(1).to({rotation:-66.0205,x:787.05,y:586.1},0).wait(1).to({rotation:-72.6225,x:780.8,y:590.9},0).wait(1).to({rotation:-79.2246,x:774.75,y:595.7},0).wait(1).to({rotation:-85.8266,x:768.7,y:600.4},0).wait(1).to({rotation:-92.4287,x:762.8,y:605.05},0).wait(1).to({rotation:-99.0307,x:757,y:609.55},0).wait(1).to({rotation:-105.6328,x:751.35,y:613.95},0).wait(1).to({rotation:-112.2348,x:745.7,y:618.25},0).wait(1).to({rotation:-118.8369,x:740.1,y:622.4},0).wait(1).to({rotation:-125.4389,x:734.55,y:626.45},0).wait(1).to({rotation:-132.041,x:729,y:630.3},0).wait(1).to({rotation:-138.643,x:723.45,y:634.1},0).to({_off:true},1).wait(7));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();


(lib.Scene_1_house1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// house1
	this.instance = new lib.house();
	this.instance.setTransform(1392.2,245.95,1,1,0,0,0,1396.8,474);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(4).to({_off:false},0).wait(1).to({x:1390.25},0).wait(1).to({x:1388.25},0).wait(1).to({x:1386.25},0).wait(1).to({x:1384.25},0).wait(1).to({x:1382.3},0).wait(1).to({x:1380.3},0).wait(1).to({x:1378.3},0).wait(1).to({x:1376.3},0).wait(1).to({x:1374.35},0).wait(1).to({x:1372.35},0).wait(1).to({x:1370.35},0).wait(1).to({x:1368.35},0).wait(1).to({x:1366.35},0).wait(1).to({x:1364.4},0).wait(1).to({x:1362.4},0).wait(1).to({x:1360.4},0).wait(1).to({x:1358.4},0).wait(1).to({x:1356.45},0).wait(1).to({x:1354.45},0).wait(1).to({x:1352.45},0).wait(1).to({x:1350.45},0).wait(1).to({x:1348.5},0).wait(1).to({x:1346.5},0).wait(1).to({x:1344.5},0).wait(1).to({x:1342.5},0).wait(1).to({x:1340.5},0).wait(1).to({x:1338.55},0).wait(1).to({x:1336.55},0).wait(1).to({x:1334.55},0).wait(1).to({x:1332.55},0).wait(1).to({x:1330.6},0).wait(1).to({x:1328.6},0).wait(1).to({x:1326.6},0).wait(1).to({x:1324.6},0).wait(1).to({x:1322.65},0).wait(1).to({x:1320.65},0).wait(1).to({x:1318.65},0).wait(1).to({x:1316.65},0).wait(1).to({x:1314.65},0).wait(1).to({x:1312.7},0).wait(1).to({x:1310.7},0).wait(1).to({x:1308.7},0).wait(1).to({x:1306.7},0).wait(1).to({x:1304.75},0).wait(1).to({x:1302.75},0).wait(1).to({x:1300.75},0).wait(1).to({x:1298.75},0).wait(1).to({x:1296.8},0).wait(1).to({x:1294.8},0).wait(1).to({x:1292.8},0).wait(1).to({x:1290.8},0).wait(1).to({x:1288.8},0).wait(1).to({x:1286.85},0).wait(1).to({x:1284.85},0).wait(1).to({x:1282.85},0).wait(1).to({x:1280.85},0).wait(1).to({x:1278.9},0).wait(1).to({x:1276.9},0).wait(1).to({x:1274.9},0).wait(1).to({x:1272.9},0).wait(1).to({x:1270.95},0).wait(1).to({x:1268.95},0).wait(1).to({x:1266.95},0).wait(1).to({x:1264.95},0).wait(1).to({x:1262.95},0).wait(1).to({x:1261},0).wait(1).to({x:1259},0).wait(1).to({x:1257},0).wait(1).to({x:1255},0).wait(1).to({x:1253.05},0).wait(1).to({x:1251.05},0).wait(1).to({x:1249.05},0).wait(1).to({x:1247.05},0).wait(1).to({x:1245.1},0).wait(1).to({x:1243.1},0).wait(1).to({x:1241.1},0).wait(1).to({x:1239.1},0).wait(1).to({x:1237.1},0).wait(404));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();


(lib.Scene_1_fall_dwon = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// fall_dwon
	this.instance = new lib.spider4();
	this.instance.setTransform(898.95,417.5,0.2213,0.2555,0,0,0,136.4,126.7);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(188).to({_off:false},0).wait(1).to({regX:101,regY:97.8,x:890,y:414.1},0).wait(1).to({x:888.9,y:418.05},0).wait(1).to({x:887.85,y:422},0).wait(1).to({x:886.75,y:425.95},0).wait(1).to({x:885.65,y:429.9},0).wait(1).to({x:884.6,y:433.85},0).wait(1).to({x:883.5,y:437.8},0).wait(1).to({x:882.4,y:441.75},0).wait(1).to({x:881.35,y:445.75},0).wait(1).to({x:880.25,y:449.7},0).wait(1).to({x:879.15,y:453.65},0).wait(1).to({x:878.1,y:457.6},0).wait(1).to({x:877,y:461.55},0).wait(1).to({x:875.9,y:465.5},0).wait(1).to({x:874.85,y:469.45},0).wait(1).to({x:873.75,y:473.4},0).wait(1).to({x:872.65,y:477.4},0).wait(1).to({x:871.6,y:481.35},0).wait(1).to({x:870.5,y:485.3},0).wait(1).to({x:869.4,y:489.25},0).wait(1).to({x:868.35,y:493.2},0).wait(1).to({x:867.25,y:497.15},0).wait(1).to({x:866.15,y:501.1},0).wait(1).to({x:865.1,y:505.05},0).wait(1).to({x:864,y:509.05},0).wait(1).to({x:862.9,y:513},0).wait(1).to({x:861.85,y:516.95},0).wait(1).to({x:860.75,y:520.9},0).to({_off:true},1).wait(7));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();


(lib.Scene_1_cory_copy = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// cory_copy
	this.instance = new lib.cory1copy();
	this.instance.setTransform(887.55,416.25,0.9999,0.9999,0,0,0,42.6,78);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(418).to({_off:false},0).wait(67));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();


(lib.Scene_1_cory = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// cory
	this.instance = new lib.cory1copy();
	this.instance.setTransform(887.55,416.25,0.9999,0.9999,0,0,0,42.6,78);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(129).to({_off:false},0).wait(101));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();


(lib.Scene_1_cloud2goes = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// cloud2goes
	this.instance = new lib.cloud1();
	this.instance.setTransform(1049.45,55,0.6519,0.7844,0,0,0,332.8,-56.8);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(213).to({_off:false},0).wait(1).to({regX:116.9,regY:81.6,x:908.55,y:150.95},0).wait(1).to({x:908.6,y:140},0).wait(1).to({x:908.8,y:130.55},0).wait(1).to({x:909.2,y:122.3},0).wait(1).to({x:909.85,y:115.2},0).wait(1).to({x:910.65,y:109.05},0).wait(1).to({x:911.75,y:103.75},0).wait(1).to({x:913.05,y:99.3},0).wait(1).to({x:914.65,y:95.55},0).wait(1).to({x:916.5,y:92.45},0).wait(1).to({x:918.65,y:90},0).wait(1).to({x:921.1,y:88.1},0).wait(1).to({x:923.85,y:86.75},0).wait(1).to({x:926.95,y:85.85},0).wait(1).to({x:930.4,y:85.45},0).wait(1).to({x:934.25,y:85.5},0).wait(1).to({x:938.45,y:85.95},0).wait(1).to({x:943.05,y:86.75},0).wait(1).to({x:948.15,y:88},0).wait(1).to({x:953.7,y:89.55},0).wait(1).to({x:959.75,y:91.45},0).wait(1).to({x:966.3,y:93.7},0).wait(1).to({x:973.45,y:96.25},0).wait(1).to({x:981.25,y:99.1},0).wait(1).to({x:989.7,y:102.25},0).wait(1).to({x:998.9,y:105.7},0).wait(1).to({x:1008.9,y:109.45},0).wait(1).to({x:1019.8,y:113.4},0).wait(1).to({x:1031.7,y:117.7},0).wait(1).to({x:1044.65,y:122.2},0).wait(1).to({x:1058.85,y:127},0).wait(1).to({x:1074.45,y:132.05},0).wait(1).to({x:1091.65,y:137.35},0).wait(1).to({x:1110.8,y:142.95},0).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();


(lib.Scene_1_cloud2 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// cloud2
	this.instance = new lib.cloud1();
	this.instance.setTransform(1420.95,8.65,0.6519,0.7844,0,0,0,332.9,-58.6);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(168).to({_off:false},0).wait(1).to({regX:116.9,regY:81.6,scaleX:0.652,x:1269.4,y:121.8},0).wait(1).to({x:1258.7,y:124.95},0).wait(1).to({x:1248,y:128},0).wait(1).to({x:1237.3,y:131},0).wait(1).to({x:1226.6,y:133.9},0).wait(1).to({x:1215.9,y:136.75},0).wait(1).to({x:1205.2,y:139.45},0).wait(1).to({x:1194.55,y:142.1},0).wait(1).to({x:1183.9,y:144.65},0).wait(1).to({x:1173.35,y:147.1},0).wait(1).to({x:1162.8,y:149.4},0).wait(1).to({x:1152.3,y:151.65},0).wait(1).to({x:1141.85,y:153.75},0).wait(1).to({x:1131.5,y:155.7},0).wait(1).to({x:1121.25,y:157.6},0).wait(1).to({x:1111.05,y:159.3},0).wait(1).to({x:1100.95,y:160.95},0).wait(1).to({x:1090.95,y:162.4},0).wait(1).to({x:1081.1,y:163.75},0).wait(1).to({x:1071.35,y:164.95},0).wait(1).to({x:1061.7,y:166},0).wait(1).to({x:1052.2,y:166.95},0).wait(1).to({x:1042.9,y:167.75},0).wait(1).to({x:1033.7,y:168.4},0).wait(1).to({x:1024.65,y:168.9},0).wait(1).to({x:1015.8,y:169.25},0).wait(1).to({x:1007.1,y:169.5},0).wait(1).to({x:998.6,y:169.6},0).wait(1).to({x:990.25,y:169.55},0).wait(1).to({x:982.1,y:169.4},0).wait(1).to({x:974.15,y:169.05},0).wait(1).to({x:966.35,y:168.65},0).wait(1).to({x:958.75,y:168.1},0).wait(1).to({x:951.35,y:167.4},0).wait(1).to({x:944.15,y:166.6},0).wait(1).to({x:937.1,y:165.7},0).wait(1).to({x:930.25,y:164.65},0).wait(1).to({x:923.6,y:163.5},0).wait(1).to({x:917.15,y:162.3},0).wait(1).to({x:910.9,y:160.95},0).wait(1).to({x:904.8,y:159.5},0).wait(1).to({x:898.85,y:158},0).wait(1).to({x:893.1,y:156.35},0).wait(1).to({x:887.55,y:154.65},0).to({_off:true},1).wait(12));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();


(lib.Scene_1_cloud1goes = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// cloud1goes
	this.instance = new lib.cloud1();
	this.instance.setTransform(500.15,58.15,0.6519,0.7844,0,0,0,331.4,-52.9);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(213).to({_off:false},0).wait(1).to({regX:116.9,regY:81.6,x:341.55,y:158.35},0).wait(1).to({x:323.65,y:153.6},0).wait(1).to({x:306.4,y:149.25},0).wait(1).to({x:289.7,y:145.3},0).wait(1).to({x:273.5,y:141.7},0).wait(1).to({x:257.7,y:138.45},0).wait(1).to({x:242.25,y:135.45},0).wait(1).to({x:227.1,y:132.75},0).wait(1).to({x:212.25,y:130.3},0).wait(1).to({x:197.6,y:128.05},0).wait(1).to({x:183.2,y:126.1},0).wait(1).to({x:168.95,y:124.3},0).wait(1).to({x:154.85,y:122.75},0).wait(1).to({x:140.85,y:121.35},0).wait(1).to({x:127,y:120.2},0).wait(1).to({x:113.2,y:119.2},0).wait(1).to({x:99.5,y:118.45},0).wait(1).to({x:85.8,y:117.85},0).wait(1).to({x:72.2,y:117.45},0).wait(1).to({x:58.5,y:117.2},0).wait(1).to({x:44.85},0).wait(1).to({x:31.15,y:117.35},0).wait(1).to({x:17.35,y:117.75},0).wait(1).to({x:3.5,y:118.3},0).wait(1).to({x:-10.45,y:119.1},0).wait(1).to({x:-24.55,y:120.1},0).wait(1).to({x:-38.8,y:121.35},0).wait(1).to({x:-53.3,y:122.8},0).wait(1).to({x:-67.95,y:124.55},0).wait(1).to({x:-82.95,y:126.6},0).wait(1).to({x:-98.25,y:128.9},0).wait(1).to({x:-113.95,y:131.6},0).wait(1).to({x:-130.15,y:134.65},0).wait(1).to({x:-146.9,y:138.15},0).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();


(lib.Scene_1_cloud1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// cloud1
	this.instance = new lib.cloud1();
	this.instance.setTransform(92.05,140.05,0.6519,0.7844,0,0,0,331.4,-55.4);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(168).to({_off:false},0).wait(1).to({regX:116.9,regY:81.6,x:-36.6,y:237.5},0).wait(1).to({x:-26.45,y:229.1},0).wait(1).to({x:-16.95,y:221.75},0).wait(1).to({x:-7.95,y:215.2},0).wait(1).to({x:0.7,y:209.35},0).wait(1).to({x:9.1,y:203.95},0).wait(1).to({x:17.25,y:199.05},0).wait(1).to({x:25.2,y:194.55},0).wait(1).to({x:33.05,y:190.35},0).wait(1).to({x:40.8,y:186.45},0).wait(1).to({x:48.45,y:182.85},0).wait(1).to({x:56.05,y:179.5},0).wait(1).to({x:63.6,y:176.35},0).wait(1).to({x:71.1,y:173.45},0).wait(1).to({x:78.55,y:170.7},0).wait(1).to({x:86,y:168.2},0).wait(1).to({x:93.5,y:165.85},0).wait(1).to({x:101.05,y:163.65},0).wait(1).to({x:108.6,y:161.6},0).wait(1).to({x:116.15,y:159.75},0).wait(1).to({x:123.8,y:158},0).wait(1).to({x:131.5,y:156.45},0).wait(1).to({x:139.25,y:155.05},0).wait(1).to({x:147.15,y:153.75},0).wait(1).to({x:155.1,y:152.6},0).wait(1).to({x:163.15,y:151.6},0).wait(1).to({x:171.35,y:150.8},0).wait(1).to({x:179.65,y:150.1},0).wait(1).to({x:188.15,y:149.55},0).wait(1).to({x:196.8,y:149.15},0).wait(1).to({x:205.65,y:148.9},0).wait(1).to({x:214.7,y:148.8},0).wait(1).to({x:224.05,y:148.9},0).wait(1).to({x:233.65,y:149.15},0).wait(1).to({x:243.55,y:149.65},0).wait(1).to({x:253.8,y:150.3},0).wait(1).to({x:264.5,y:151.25},0).wait(1).to({x:275.7,y:152.4},0).wait(1).to({x:287.5,y:153.85},0).wait(1).to({x:300,y:155.65},0).wait(1).to({x:313.35,y:157.85},0).wait(1).to({x:327.9,y:160.55},0).wait(1).to({x:343.95,y:163.9},0).wait(1).to({x:362.2,y:168.2},0).to({_off:true},1).wait(13));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();


(lib.Scene_1_Bplay = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Bplay
	this.start = new lib.btnplay();
	this.start.name = "start";
	this.start.setTransform(127.55,532.65);
	new cjs.ButtonHelper(this.start, 0, 1, 2, false, new lib.btnplay(), 3);

	this.text = new cjs.Text("", "normal 400 50px 'Lobster'", "#FFFFFF");
	this.text.lineHeight = 77;
	this.text.lineWidth = 100;
	this.text.parent = this;
	this.text.setTransform(707.75,483.8);
	if(!lib.properties.webfonts['Lobster']) {
		lib.webFontTxtInst['Lobster'] = lib.webFontTxtInst['Lobster'] || [];
		lib.webFontTxtInst['Lobster'].push(this.text);
	}

	this.text_1 = new cjs.Text("Yael HEn Alfi", "normal 400 50px 'Lobster'", "#FFFFFF");
	this.text_1.lineHeight = 77;
	this.text_1.lineWidth = 524;
	this.text_1.parent = this;
	this.text_1.setTransform(461.9634,401.55,1.0531,1);
	if(!lib.properties.webfonts['Lobster']) {
		lib.webFontTxtInst['Lobster'] = lib.webFontTxtInst['Lobster'] || [];
		lib.webFontTxtInst['Lobster'].push(this.text_1);
	}

	this.text_2 = new cjs.Text("Itsy Bitsy Spider", "normal 400 200px 'Lobster'", "#FFFFFF");
	this.text_2.lineHeight = 300;
	this.text_2.lineWidth = 1355;
	this.text_2.parent = this;
	this.text_2.setTransform(246.9871,238.5,0.535,0.4006);
	if(!lib.properties.webfonts['Lobster']) {
		lib.webFontTxtInst['Lobster'] = lib.webFontTxtInst['Lobster'] || [];
		lib.webFontTxtInst['Lobster'].push(this.text_2);
	}

	this.instance = new lib._4233852jpgcopy();
	this.instance.setTransform(-120,-94,0.4667,0.4405);

	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(1,1,1).p("AFUAAQAACNhkBkQhjBjiNAAQiMAAhkhjQhjhkAAiNQAAiMBjhjQBkhkCMAAQCNAABjBkQBkBjAACMg");
	this.shape.setTransform(582.2,590.15);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AjvDwQhkhjAAiNQAAiMBkhkQBjhjCMAAQCNAABjBjQBkBkAACMQAACNhkBjQhjBkiNAAQiMAAhjhkg");
	this.shape_1.setTransform(582.2,590.15);

	this.replay = new lib.replay();
	this.replay.name = "replay";
	this.replay.setTransform(569.25,331.2,0.6475,0.5844,0,0,0,0,0.1);
	new cjs.ButtonHelper(this.replay, 0, 1, 2, false, new lib.replay(), 3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape},{t:this.instance,p:{scaleX:0.4667,scaleY:0.4405,x:-120,y:-94}},{t:this.text_2},{t:this.text_1},{t:this.text},{t:this.start}]}).to({state:[]},2).to({state:[{t:this.instance,p:{scaleX:0.4857,scaleY:0.488,x:-71,y:-116}},{t:this.replay}]},484).wait(9));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();


(lib.Scene_1_back_spider = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// back_spider
	this.instance = new lib.back();
	this.instance.setTransform(896.75,649.75,0.5831,0.4177,0,0,0,0,-103.8);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(56).to({_off:false},0).wait(1).to({regX:74.2,regY:-67.5,scaleX:0.5778,scaleY:0.4162,x:937.95,y:662.95},0).wait(1).to({scaleX:0.5726,scaleY:0.4148,x:935.85,y:661},0).wait(1).to({scaleX:0.5674,scaleY:0.4133,x:933.8,y:659.1},0).wait(1).to({scaleX:0.5622,scaleY:0.4119,x:931.75,y:657.15},0).wait(1).to({scaleX:0.557,scaleY:0.4105,x:929.8,y:655.25},0).wait(1).to({scaleX:0.5517,scaleY:0.409,x:927.85,y:653.35},0).wait(1).to({scaleX:0.5465,scaleY:0.4076,x:925.9,y:651.45},0).wait(1).to({scaleX:0.5413,scaleY:0.4061,x:923.95,y:649.55},0).wait(1).to({scaleX:0.5361,scaleY:0.4047,x:922.1,y:647.65},0).wait(1).to({scaleX:0.5309,scaleY:0.4032,x:920.2,y:645.75},0).wait(1).to({scaleX:0.5256,scaleY:0.4018,x:918.3,y:643.85},0).wait(1).to({scaleX:0.5204,scaleY:0.4004,x:916.5,y:642},0).wait(1).to({scaleX:0.5152,scaleY:0.3989,x:914.7,y:640.1},0).wait(1).to({scaleX:0.51,scaleY:0.3975,x:912.9,y:638.2},0).wait(1).to({scaleX:0.5047,scaleY:0.396,x:911.15,y:636.35},0).wait(1).to({scaleX:0.4995,scaleY:0.3946,x:909.4,y:634.5},0).wait(1).to({scaleX:0.4943,scaleY:0.3931,x:907.7,y:632.65},0).wait(1).to({scaleX:0.4891,scaleY:0.3917,x:906,y:630.8},0).wait(1).to({scaleX:0.4839,scaleY:0.3902,x:904.3,y:629},0).wait(1).to({scaleX:0.4786,scaleY:0.3888,x:902.65,y:627.15},0).wait(1).to({scaleX:0.4734,scaleY:0.3874,x:901.05,y:625.35},0).wait(1).to({scaleX:0.4682,scaleY:0.3859,x:899.45,y:623.5},0).wait(1).to({scaleX:0.463,scaleY:0.3845,x:897.85,y:621.7},0).wait(1).to({scaleX:0.4578,scaleY:0.383,x:896.3,y:619.9},0).wait(1).to({scaleX:0.4525,scaleY:0.3816,x:894.8,y:618.1},0).wait(1).to({scaleX:0.4473,scaleY:0.3801,x:893.3,y:616.3},0).wait(1).to({scaleX:0.4421,scaleY:0.3787,x:891.8,y:614.5},0).wait(1).to({scaleX:0.4369,scaleY:0.3772,x:890.3,y:612.75},0).wait(1).to({scaleX:0.4317,scaleY:0.3758,x:888.9,y:610.95},0).wait(1).to({scaleX:0.4264,scaleY:0.3744,x:887.45,y:609.2},0).wait(1).to({scaleX:0.4212,scaleY:0.3729,x:886.05,y:607.4},0).wait(1).to({scaleX:0.416,scaleY:0.3715,x:884.7,y:605.65},0).wait(1).to({scaleX:0.4108,scaleY:0.37,x:883.35,y:603.85},0).wait(1).to({scaleX:0.4055,scaleY:0.3686,x:882.05,y:602.1},0).wait(1).to({scaleX:0.4003,scaleY:0.3671,x:880.7,y:600.35},0).wait(1).to({scaleX:0.3951,scaleY:0.3657,x:879.4,y:598.6},0).wait(1).to({scaleX:0.3899,scaleY:0.3643,x:878.2,y:596.9},0).wait(1).to({scaleX:0.3847,scaleY:0.3628,x:876.95,y:595.15},0).wait(1).to({scaleX:0.3794,scaleY:0.3614,x:875.7,y:593.45},0).wait(1).to({scaleX:0.3742,scaleY:0.3599,x:874.5,y:591.7},0).wait(1).to({scaleX:0.369,scaleY:0.3585,x:873.4,y:590},0).wait(1).to({scaleX:0.3638,scaleY:0.357,x:872.25,y:588.3},0).wait(1).to({scaleX:0.3586,scaleY:0.3556,x:871.1,y:586.6},0).wait(1).to({scaleX:0.3533,scaleY:0.3541,x:870,y:584.9},0).wait(1).to({scaleX:0.3481,scaleY:0.3527,x:868.95,y:583.2},0).wait(1).to({scaleX:0.3429,scaleY:0.3513,x:867.9,y:581.55},0).wait(1).to({scaleX:0.3377,scaleY:0.3498,x:866.85,y:579.85},0).wait(1).to({scaleX:0.3324,scaleY:0.3484,x:865.8,y:578.2},0).wait(1).to({scaleX:0.3272,scaleY:0.3469,x:864.9,y:576.55},0).wait(1).to({scaleX:0.322,scaleY:0.3455,x:863.9,y:574.85},0).wait(1).to({scaleX:0.3168,scaleY:0.344,x:862.95,y:573.2},0).wait(1).to({scaleX:0.3116,scaleY:0.3426,x:862,y:571.55},0).wait(1).to({scaleX:0.3063,scaleY:0.3411,x:861.15,y:569.85},0).wait(1).to({scaleX:0.3011,scaleY:0.3397,x:860.3,y:568.25},0).wait(1).to({scaleX:0.2959,scaleY:0.3383,x:859.4,y:566.6},0).wait(1).to({scaleX:0.2907,scaleY:0.3368,x:858.6,y:564.95},0).wait(1).to({scaleX:0.2855,scaleY:0.3354,x:857.8,y:563.35},0).wait(1).to({scaleX:0.2802,scaleY:0.3339,x:857.05,y:561.75},0).wait(1).to({scaleX:0.275,scaleY:0.3325,x:856.25,y:560.15},0).wait(1).to({scaleX:0.2698,scaleY:0.331,x:855.5,y:558.5},0).wait(1).to({scaleX:0.2646,scaleY:0.3296,x:854.85,y:556.9},0).wait(1).to({scaleX:0.2593,scaleY:0.3282,x:854.15,y:555.35},0).wait(1).to({scaleX:0.2541,scaleY:0.3267,x:853.45,y:553.75},0).wait(1).to({scaleX:0.2489,scaleY:0.3253,x:852.8,y:552.15},0).wait(1).to({scaleX:0.2437,scaleY:0.3238,x:852.25,y:550.6},0).wait(1).to({scaleX:0.2385,scaleY:0.3224,x:851.6,y:549},0).wait(1).to({scaleX:0.2332,scaleY:0.3209,x:851.05,y:547.45},0).wait(1).to({scaleX:0.228,scaleY:0.3195,x:850.5,y:545.9},0).wait(1).to({scaleX:0.2228,scaleY:0.318,x:850,y:544.35},0).wait(1).to({scaleX:0.2176,scaleY:0.3166,x:849.45,y:542.8},0).wait(1).to({scaleX:0.2124,scaleY:0.3152,x:849,y:541.25},0).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();


(lib.spider01 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.helfleg();
	this.instance.setTransform(147.1,54.8,0.8049,0.8602,0,-21.9448,158.0546,88.3,78.5);

	this.instance_1 = new lib.helfleg();
	this.instance_1.setTransform(310.8,-2.65,1,1,-21.9456,0,0,88.2,78.5);

	this.instance_2 = new lib.eye();
	this.instance_2.setTransform(258.7,40.35,1,1,0,0,0,39.3,30.3);

	this.instance_3 = new lib.CachedBmp_14();
	this.instance_3.setTransform(207.9,17.65,0.5,0.5);

	this.instance_4 = new lib.CachedBmp_13();
	this.instance_4.setTransform(136.2,-50,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_4},{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.spider01, new cjs.Rectangle(107.3,-82.1,268.2,221.2), null);


(lib.Scene_1_incom_spider = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// incom_spider
	this.instance = new lib.spider01();
	this.instance.setTransform(182.2,681.55,0.5768,0.4212,0,0,0,398.4,59.1);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(4).to({_off:false},0).wait(1).to({regX:237.1,regY:12.7,x:102.75,y:661.7},0).wait(1).to({x:116.35,y:661.4},0).wait(1).to({x:129.95,y:661.1},0).wait(1).to({x:143.5,y:660.85},0).wait(1).to({x:157.1,y:660.55},0).wait(1).to({x:170.7,y:660.25},0).wait(1).to({x:184.25,y:659.95},0).wait(1).to({x:197.85,y:659.7},0).wait(1).to({x:211.45,y:659.4},0).wait(1).to({x:225.05,y:659.1},0).wait(1).to({x:238.65,y:658.8},0).wait(1).to({x:252.25,y:658.55},0).wait(1).to({x:265.85,y:658.25},0).wait(1).to({x:279.4,y:657.95},0).wait(1).to({x:293,y:657.65},0).wait(1).to({x:306.6,y:657.4},0).wait(1).to({x:320.2,y:657.1},0).wait(1).to({x:333.8,y:656.8},0).wait(1).to({x:347.4,y:656.5},0).wait(1).to({x:361,y:656.25},0).wait(1).to({x:374.55,y:655.95},0).wait(1).to({x:388.15,y:655.65},0).wait(1).to({x:401.75,y:655.35},0).wait(1).to({x:415.35,y:655.1},0).wait(1).to({x:428.95,y:654.8},0).wait(1).to({x:442.55,y:654.5},0).wait(1).to({x:456.15,y:654.2},0).wait(1).to({x:469.75,y:653.95},0).wait(1).to({x:483.3,y:653.65},0).wait(1).to({x:496.9,y:653.35},0).wait(1).to({x:510.5,y:653.05},0).wait(1).to({x:524.1,y:652.8},0).wait(1).to({x:537.7,y:652.5},0).wait(1).to({x:551.3,y:652.2},0).wait(1).to({x:564.9,y:651.9},0).wait(1).to({x:578.45,y:651.65},0).wait(1).to({x:592.05,y:651.35},0).wait(1).to({x:605.65,y:651.05},0).wait(1).to({x:619.25,y:650.75},0).wait(1).to({x:632.85,y:650.5},0).wait(1).to({x:646.45,y:650.2},0).wait(1).to({x:660.05,y:649.9},0).wait(1).to({x:673.6,y:649.6},0).wait(1).to({x:687.2,y:649.35},0).wait(1).to({x:700.8,y:649.05},0).wait(1).to({x:714.4,y:648.75},0).wait(1).to({x:728,y:648.45},0).wait(1).to({x:741.6,y:648.2},0).wait(1).to({x:755.2,y:647.9},0).wait(1).to({x:768.8,y:647.6},0).wait(1).to({x:782.35,y:647.3},0).to({_off:true},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();


// stage content:
(lib.spideryael = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = false; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	this.actionFrames = [0,2,4,486,494];
	this.___GetDepth___ = function(obj) {
		var depth = obj.depth;
		var cameraObj = this.___camera___instance;
		if(cameraObj && cameraObj.depth && obj.isAttachedToCamera)
		{
			depth += depth + cameraObj.depth;
		}
		return depth;
		}
	this.___needSorting___ = function() {
		for (var i = 0; i < this.numChildren - 1; i++)
		{
			var prevDepth = this.___GetDepth___(this.getChildAt(i));
			var nextDepth = this.___GetDepth___(this.getChildAt(i + 1));
			if (prevDepth < nextDepth)
				return true;
		}
		return false;
	}
	this.___sortFunction___ = function(obj1, obj2) {
		return (this.exportRoot.___GetDepth___(obj2) - this.exportRoot.___GetDepth___(obj1));
	}
	this.on('tick', function (event){
		var curTimeline = event.currentTarget;
		if (curTimeline.___needSorting___()){
			this.sortChildren(curTimeline.___sortFunction___);
		}
	});

	// timeline functions:
	this.frame_0 = function() {
		this.start = this.Bplay.start;
		var self = this; 
		self.stop(); 
		
		createjs.Sound.stop();
		
		self.start.addEventListener("click", startPlaying);
		
		
		function startPlaying()
		{
			self.gotoAndPlay(1);
		}
	}
	this.frame_2 = function() {
		this.start = undefined;
	}
	this.frame_4 = function() {
		playSound("spider2");
	}
	this.frame_486 = function() {
		this.replay = this.Bplay.replay;
		var self = this;
		self.stop();
		
		
		self.replay.addEventListener("click", playAgain);
		
		function playAgain()
		{	
			self.gotoAndPlay(1); 
		}
	}
	this.frame_494 = function() {
		this.___loopingOver___ = true;
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(2).call(this.frame_2).wait(2).call(this.frame_4).wait(482).call(this.frame_486).wait(8).call(this.frame_494).wait(1));

	// Camera
	this.___camera___instance = new lib.___Camera___();
	this.___camera___instance.name = "___camera___instance";
	this.___camera___instance.setTransform(640,360);
	this.___camera___instance.depth = 0;
	this.___camera___instance._off = true;
	this.___camera___instance.visible = false;

	this.timeline.addTween(cjs.Tween.get(this.___camera___instance).wait(28).to({_off:false},0).wait(100).to({scaleX:0.9279,scaleY:0.9279},0).wait(3).to({regX:0.1,regY:0.1,scaleX:0.8353,scaleY:0.8353,x:640.05,y:360.05},0).wait(3).to({scaleX:0.7588,scaleY:0.7588},0).wait(3).to({scaleX:0.6893,scaleY:0.6893,y:360},0).wait(3).to({regX:0.2,regY:0.2,scaleX:0.6013,scaleY:0.6013,x:640.1},0).wait(48).to({regX:0.3,regY:0.3,scaleX:0.6516,scaleY:0.6516,x:640.2,y:360.1},0).wait(2).to({regX:0.4,regY:0.4,scaleX:0.7023,scaleY:0.7023,x:640.3,y:360.15},0).wait(2).to({scaleX:0.8897,scaleY:0.8897,y:360.2},0).to({_off:true},1).wait(302));

	// spider_ups_copy_obj_
	this.spider_ups_copy = new lib.Scene_1_spider_ups_copy();
	this.spider_ups_copy.name = "spider_ups_copy";
	this.spider_ups_copy.depth = 0;
	this.spider_ups_copy.isAttachedToCamera = 0
	this.spider_ups_copy.isAttachedToMask = 0
	this.spider_ups_copy.layerDepth = 0
	this.spider_ups_copy.layerIndex = 0
	this.spider_ups_copy.maskLayerName = 0

	this.timeline.addTween(cjs.Tween.get(this.spider_ups_copy).wait(418).to({regX:886.3,regY:424.8,x:886.3,y:424.8},0).wait(38).to({regX:0,regY:0,x:0,y:0},0).wait(26).to({_off:true},3).wait(10));

	// cory_copy_obj_
	this.cory_copy = new lib.Scene_1_cory_copy();
	this.cory_copy.name = "cory_copy";
	this.cory_copy.depth = 0;
	this.cory_copy.isAttachedToCamera = 0
	this.cory_copy.isAttachedToMask = 0
	this.cory_copy.layerDepth = 0
	this.cory_copy.layerIndex = 1
	this.cory_copy.maskLayerName = 0

	this.timeline.addTween(cjs.Tween.get(this.cory_copy).wait(418).to({_off:true},67).wait(10));

	// spidermove_obj_
	this.spidermove = new lib.Scene_1_spidermove();
	this.spidermove.name = "spidermove";
	this.spidermove.depth = 0;
	this.spidermove.isAttachedToCamera = 0
	this.spidermove.isAttachedToMask = 0
	this.spidermove.layerDepth = 0
	this.spidermove.layerIndex = 2
	this.spidermove.maskLayerName = 0

	this.timeline.addTween(cjs.Tween.get(this.spidermove).wait(400).to({regX:783.6,regY:566.5,x:783.6,y:566.5},0).wait(16).to({_off:true},1).wait(78));

	// tree_obj_
	this.tree = new lib.Scene_1_tree();
	this.tree.name = "tree";
	this.tree.depth = 0;
	this.tree.isAttachedToCamera = 0
	this.tree.isAttachedToMask = 0
	this.tree.layerDepth = 0
	this.tree.layerIndex = 3
	this.tree.maskLayerName = 0

	this.timeline.addTween(cjs.Tween.get(this.tree).wait(405).to({_off:true},82).wait(8));

	// out_obj_
	this.out = new lib.Scene_1_out();
	this.out.name = "out";
	this.out.depth = 0;
	this.out.isAttachedToCamera = 0
	this.out.isAttachedToMask = 0
	this.out.layerDepth = 0
	this.out.layerIndex = 4
	this.out.maskLayerName = 0

	this.timeline.addTween(cjs.Tween.get(this.out).wait(369).to({regX:704.2,regY:583.5,x:704.2,y:583.5},0).wait(28).to({_off:true},1).wait(97));

	// slolit_obj_
	this.slolit = new lib.Scene_1_slolit();
	this.slolit.name = "slolit";
	this.slolit.depth = 0;
	this.slolit.isAttachedToCamera = 0
	this.slolit.isAttachedToMask = 0
	this.slolit.layerDepth = 0
	this.slolit.layerIndex = 5
	this.slolit.maskLayerName = 0

	this.timeline.addTween(cjs.Tween.get(this.slolit).wait(369).to({_off:true},118).wait(8));

	// rain_obj_
	this.rain = new lib.Scene_1_rain();
	this.rain.name = "rain";
	this.rain.depth = 0;
	this.rain.isAttachedToCamera = 0
	this.rain.isAttachedToMask = 0
	this.rain.layerDepth = 0
	this.rain.layerIndex = 6
	this.rain.maskLayerName = 0

	this.timeline.addTween(cjs.Tween.get(this.rain).wait(201).to({_off:true},42).wait(252));

	// cloud2goes_obj_
	this.cloud2goes = new lib.Scene_1_cloud2goes();
	this.cloud2goes.name = "cloud2goes";
	this.cloud2goes.depth = 0;
	this.cloud2goes.isAttachedToCamera = 0
	this.cloud2goes.isAttachedToMask = 0
	this.cloud2goes.layerDepth = 0
	this.cloud2goes.layerIndex = 7
	this.cloud2goes.maskLayerName = 0

	this.timeline.addTween(cjs.Tween.get(this.cloud2goes).wait(214).to({regX:1009.7,regY:124.5,x:1009.7,y:124.5},0).wait(33).to({_off:true},1).wait(247));

	// cloud1goes_obj_
	this.cloud1goes = new lib.Scene_1_cloud1goes();
	this.cloud1goes.name = "cloud1goes";
	this.cloud1goes.depth = 0;
	this.cloud1goes.isAttachedToCamera = 0
	this.cloud1goes.isAttachedToMask = 0
	this.cloud1goes.layerDepth = 0
	this.cloud1goes.layerIndex = 8
	this.cloud1goes.maskLayerName = 0

	this.timeline.addTween(cjs.Tween.get(this.cloud1goes).wait(214).to({regX:106.7,regY:140.4,x:106.7,y:140.4},0).wait(33).to({_off:true},1).wait(247));

	// cloud1_obj_
	this.cloud1 = new lib.Scene_1_cloud1();
	this.cloud1.name = "cloud1";
	this.cloud1.depth = 0;
	this.cloud1.isAttachedToCamera = 0
	this.cloud1.isAttachedToMask = 0
	this.cloud1.layerDepth = 0
	this.cloud1.layerIndex = 9
	this.cloud1.maskLayerName = 0

	this.timeline.addTween(cjs.Tween.get(this.cloud1).wait(168).to({regX:255.2,regY:143.4,scaleX:1.663,scaleY:1.663,x:0.1},0).wait(1).to({regX:157.3,regY:198.2,scaleX:1,scaleY:1,x:-97.8,y:54.85},0).wait(44).to({regX:0,regY:0,x:0,y:0},0).to({_off:true},13).wait(269));

	// cloud2_obj_
	this.cloud2 = new lib.Scene_1_cloud2();
	this.cloud2.name = "cloud2";
	this.cloud2.depth = 0;
	this.cloud2.isAttachedToCamera = 0
	this.cloud2.isAttachedToMask = 0
	this.cloud2.layerDepth = 0
	this.cloud2.layerIndex = 10
	this.cloud2.maskLayerName = 0

	this.timeline.addTween(cjs.Tween.get(this.cloud2).wait(168).to({regX:255.2,regY:143.4,scaleX:1.663,scaleY:1.663,x:0.1},0).wait(1).to({regX:1083.9,regY:144.1,scaleX:1,scaleY:1,x:828.8,y:0.75},0).wait(44).to({regX:0,regY:0,x:0,y:0},0).to({_off:true},12).wait(270));

	// jump_obj_
	this.jump = new lib.Scene_1_jump();
	this.jump.name = "jump";
	this.jump.depth = 0;
	this.jump.isAttachedToCamera = 0
	this.jump.isAttachedToMask = 0
	this.jump.layerDepth = 0
	this.jump.layerIndex = 11
	this.jump.maskLayerName = 0

	this.timeline.addTween(cjs.Tween.get(this.jump).wait(218).to({regX:784.6,regY:590.1,x:784.6,y:590.1},0).wait(21).to({regX:0,regY:0,x:0,y:0},0).wait(5).to({_off:true},2).wait(249));

	// fall_dwon_obj_
	this.fall_dwon = new lib.Scene_1_fall_dwon();
	this.fall_dwon.name = "fall_dwon";
	this.fall_dwon.depth = 0;
	this.fall_dwon.isAttachedToCamera = 0
	this.fall_dwon.isAttachedToMask = 0
	this.fall_dwon.layerDepth = 0
	this.fall_dwon.layerIndex = 12
	this.fall_dwon.maskLayerName = 0

	this.timeline.addTween(cjs.Tween.get(this.fall_dwon).wait(188).to({regX:223,regY:125.3,scaleX:1.5348,scaleY:1.5348},0).wait(1).to({regX:875.9,regY:465.5,scaleX:1,scaleY:1,x:652.95,y:340.25},0).wait(28).to({regX:0,regY:0,x:0,y:0},0).to({_off:true},7).wait(271));

	// spider_ups_obj_
	this.spider_ups = new lib.Scene_1_spider_ups();
	this.spider_ups.name = "spider_ups";
	this.spider_ups.depth = 0;
	this.spider_ups.isAttachedToCamera = 0
	this.spider_ups.isAttachedToMask = 0
	this.spider_ups.layerDepth = 0
	this.spider_ups.layerIndex = 13
	this.spider_ups.maskLayerName = 0

	this.timeline.addTween(cjs.Tween.get(this.spider_ups).wait(128).to({regX:872.3,regY:443.1,x:872.3,y:443.1},0).wait(59).to({_off:true},1).wait(307));

	// back_spider_obj_
	this.back_spider = new lib.Scene_1_back_spider();
	this.back_spider.name = "back_spider";
	this.back_spider.depth = 0;
	this.back_spider.isAttachedToCamera = 0
	this.back_spider.isAttachedToMask = 0
	this.back_spider.layerDepth = 0
	this.back_spider.layerIndex = 14
	this.back_spider.maskLayerName = 0

	this.timeline.addTween(cjs.Tween.get(this.back_spider).wait(57).to({regX:917.3,regY:608.7,x:917.3,y:608.7},0).wait(70).to({_off:true},1).wait(367));

	// incom_spider_obj_
	this.incom_spider = new lib.Scene_1_incom_spider();
	this.incom_spider.name = "incom_spider";
	this.incom_spider.depth = 0;
	this.incom_spider.isAttachedToCamera = 0
	this.incom_spider.isAttachedToMask = 0
	this.incom_spider.layerDepth = 0
	this.incom_spider.layerIndex = 15
	this.incom_spider.maskLayerName = 0

	this.timeline.addTween(cjs.Tween.get(this.incom_spider).wait(5).to({regX:435.8,regY:654.7,x:435.8,y:654.7},0).wait(51).to({regX:0,regY:0,x:0,y:0},0).to({_off:true},1).wait(438));

	// cory_obj_
	this.cory = new lib.Scene_1_cory();
	this.cory.name = "cory";
	this.cory.depth = 0;
	this.cory.isAttachedToCamera = 0
	this.cory.isAttachedToMask = 0
	this.cory.layerDepth = 0
	this.cory.layerIndex = 16
	this.cory.maskLayerName = 0

	this.timeline.addTween(cjs.Tween.get(this.cory).wait(129).to({regX:46.1,regY:25.9,scaleX:1.0777,scaleY:1.0777,x:0.05},0).to({_off:true},101).wait(265));

	// house1_obj_
	this.house1 = new lib.Scene_1_house1();
	this.house1.name = "house1";
	this.house1.depth = 0;
	this.house1.isAttachedToCamera = 0
	this.house1.isAttachedToMask = 0
	this.house1.layerDepth = 0
	this.house1.layerIndex = 17
	this.house1.maskLayerName = 0

	this.timeline.addTween(cjs.Tween.get(this.house1).wait(5).to({regX:1314.6,regY:246,x:1314.6,y:246},0).wait(86).to({regX:0,regY:0,x:0,y:0},0).wait(1).to({regX:1314.6,regY:246,x:1314.6,y:246},0).wait(69).to({regX:255.2,regY:143.4,scaleX:1.663,scaleY:1.663,x:0.1,y:0},0).wait(1).to({regX:1314.6,regY:246,scaleX:1,scaleY:1,x:1059.5,y:102.65},0).wait(4).to({regX:255.2,regY:143.4,scaleX:1.663,scaleY:1.663,x:0.1,y:0},0).wait(1).to({regX:1314.6,regY:246,scaleX:1,scaleY:1,x:1059.5,y:102.65},0).wait(14).to({regX:255.2,regY:143.4,scaleX:1.663,scaleY:1.663,x:0.1,y:0},0).wait(1).to({regX:1314.6,regY:246,scaleX:1,scaleY:1,x:1059.5,y:102.65},0).wait(32).to({regX:0,regY:0,x:0,y:0},0).wait(1).to({regX:1314.6,regY:246,x:1314.6,y:246},0).wait(119).to({regX:0,regY:0,x:0,y:0},0).to({_off:true},152).wait(9));

	// sun_goes_obj_
	this.sun_goes = new lib.Scene_1_sun_goes();
	this.sun_goes.name = "sun_goes";
	this.sun_goes.depth = 0;
	this.sun_goes.isAttachedToCamera = 0
	this.sun_goes.isAttachedToMask = 0
	this.sun_goes.layerDepth = 0
	this.sun_goes.layerIndex = 18
	this.sun_goes.maskLayerName = 0

	this.timeline.addTween(cjs.Tween.get(this.sun_goes).wait(175).to({regX:255.2,regY:143.4,scaleX:1.663,scaleY:1.663,x:0.1},0).wait(1).to({regX:1153.2,regY:50.5,scaleX:1,scaleY:1,x:898.1,y:-92.85},0).wait(8).to({_off:true},1).wait(310));

	// sun2_obj_
	this.sun2 = new lib.Scene_1_sun2();
	this.sun2.name = "sun2";
	this.sun2.depth = 0;
	this.sun2.isAttachedToCamera = 0
	this.sun2.isAttachedToMask = 0
	this.sun2.layerDepth = 0
	this.sun2.layerIndex = 19
	this.sun2.maskLayerName = 0

	this.timeline.addTween(cjs.Tween.get(this.sun2).wait(243).to({regX:481.6,regY:141.3,x:481.6,y:141.3},0).wait(242).to({_off:true},1).wait(9));

	// sun_obj_
	this.sun = new lib.Scene_1_sun();
	this.sun.name = "sun";
	this.sun.depth = 0;
	this.sun.isAttachedToCamera = 0
	this.sun.isAttachedToMask = 0
	this.sun.layerDepth = 0
	this.sun.layerIndex = 20
	this.sun.maskLayerName = 0

	this.timeline.addTween(cjs.Tween.get(this.sun).wait(5).to({regX:463.4,regY:178.1,x:463.4,y:178.1},0).wait(169).to({_off:true},1).wait(320));

	// back2_obj_
	this.back2 = new lib.Scene_1_back2();
	this.back2.name = "back2";
	this.back2.depth = 0;
	this.back2.isAttachedToCamera = 0
	this.back2.isAttachedToMask = 0
	this.back2.layerDepth = 0
	this.back2.layerIndex = 21
	this.back2.maskLayerName = 0

	this.timeline.addTween(cjs.Tween.get(this.back2).wait(272).to({_off:true},214).wait(9));

	// back_obj_
	this.back = new lib.Scene_1_back();
	this.back.name = "back";
	this.back.depth = 0;
	this.back.isAttachedToCamera = 0
	this.back.isAttachedToMask = 0
	this.back.layerDepth = 0
	this.back.layerIndex = 22
	this.back.maskLayerName = 0

	this.timeline.addTween(cjs.Tween.get(this.back).wait(128).to({regX:46.1,regY:25.9,scaleX:1.0777,scaleY:1.0777,x:0.05},0).wait(3).to({regX:105.4,regY:59.2,scaleX:1.1972,scaleY:1.1972,x:0.1},0).wait(3).to({regX:154.3,regY:86.8,scaleX:1.3179,scaleY:1.3179,x:0,y:0.1},0).wait(3).to({regX:198.8,regY:111.8,scaleX:1.4507,scaleY:1.4507,x:0.05},0).wait(3).to({regX:255.2,regY:143.4,scaleX:1.663,scaleY:1.663,x:0.1,y:0},0).wait(48).to({regX:223,regY:125.3,scaleX:1.5348,scaleY:1.5348,x:0},0).wait(2).to({regX:190.5,regY:107,scaleX:1.4238,scaleY:1.4238,x:0.05,y:0.05},0).wait(2).to({regX:70.5,regY:39.5,scaleX:1.1239,scaleY:1.1239},0).wait(1).to({regX:0,regY:0,scaleX:1,scaleY:1,x:0,y:0},0).wait(55).to({_off:true},1).wait(246));

	// Bplay_obj_
	this.Bplay = new lib.Scene_1_Bplay();
	this.Bplay.name = "Bplay";
	this.Bplay.setTransform(580,346.5,1,1,0,0,0,580,346.5);
	this.Bplay.depth = 0;
	this.Bplay.isAttachedToCamera = 0
	this.Bplay.isAttachedToMask = 0
	this.Bplay.layerDepth = 0
	this.Bplay.layerIndex = 23
	this.Bplay.maskLayerName = 0

	this.timeline.addTween(cjs.Tween.get(this.Bplay).wait(495));

	this._renderFirstFrame();

}).prototype = p = new lib.AnMovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,2856.6,860);
// library properties:
lib.properties = {
	id: '0471F581BECA094AB93757FC1A862D54',
	width: 1280,
	height: 720,
	fps: 24,
	color: "#FFFFFF",
	opacity: 1.00,
	webfonts: {},
	manifest: [
		{src:"images/_4233852jpgcopy.jpg?1628624294449", id:"_4233852jpgcopy"},
		{src:"images/housenoback.png?1628624294449", id:"housenoback"},
		{src:"images/spideryael_atlas_1.png?1628624293751", id:"spideryael_atlas_1"},
		{src:"images/spideryael_atlas_2.png?1628624293752", id:"spideryael_atlas_2"},
		{src:"sounds/spider2.mp3?1628624294449", id:"spider2"}
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
an.compositions['0471F581BECA094AB93757FC1A862D54'] = {
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

p._getProjectionMatrix = function(container, totalDepth) {	var focalLength = 528.25;
	var projectionCenter = { x : lib.properties.width/2, y : lib.properties.height/2 };
	var scale = (totalDepth + focalLength)/focalLength;
	var scaleMat = new createjs.Matrix2D;
	scaleMat.a = 1/scale;
	scaleMat.d = 1/scale;
	var projMat = new createjs.Matrix2D;
	projMat.tx = -projectionCenter.x;
	projMat.ty = -projectionCenter.y;
	projMat = projMat.prependMatrix(scaleMat);
	projMat.tx += projectionCenter.x;
	projMat.ty += projectionCenter.y;
	return projMat;
}
p._handleTick = function(event) {
	var cameraInstance = exportRoot.___camera___instance;
	if(cameraInstance !== undefined && cameraInstance.pinToObject !== undefined)
	{
		cameraInstance.x = cameraInstance.pinToObject.x + cameraInstance.pinToObject.pinOffsetX;
		cameraInstance.y = cameraInstance.pinToObject.y + cameraInstance.pinToObject.pinOffsetY;
		if(cameraInstance.pinToObject.parent !== undefined && cameraInstance.pinToObject.parent.depth !== undefined)
		cameraInstance.depth = cameraInstance.pinToObject.parent.depth + cameraInstance.pinToObject.pinOffsetZ;
	}
	stage._applyLayerZDepth(exportRoot);
}
p._applyLayerZDepth = function(parent)
{
	var cameraInstance = parent.___camera___instance;
	var focalLength = 528.25;
	var projectionCenter = { 'x' : 0, 'y' : 0};
	if(parent === exportRoot)
	{
		var stageCenter = { 'x' : lib.properties.width/2, 'y' : lib.properties.height/2 };
		projectionCenter.x = stageCenter.x;
		projectionCenter.y = stageCenter.y;
	}
	for(child in parent.children)
	{
		var layerObj = parent.children[child];
		if(layerObj == cameraInstance)
			continue;
		stage._applyLayerZDepth(layerObj, cameraInstance);
		if(layerObj.layerDepth === undefined)
			continue;
		if(layerObj.currentFrame != layerObj.parent.currentFrame)
		{
			layerObj.gotoAndPlay(layerObj.parent.currentFrame);
		}
		var matToApply = new createjs.Matrix2D;
		var cameraMat = new createjs.Matrix2D;
		var totalDepth = layerObj.layerDepth ? layerObj.layerDepth : 0;
		var cameraDepth = 0;
		if(cameraInstance && !layerObj.isAttachedToCamera)
		{
			var mat = cameraInstance.getMatrix();
			mat.tx -= projectionCenter.x;
			mat.ty -= projectionCenter.y;
			cameraMat = mat.invert();
			cameraMat.prependTransform(projectionCenter.x, projectionCenter.y, 1, 1, 0, 0, 0, 0, 0);
			cameraMat.appendTransform(-projectionCenter.x, -projectionCenter.y, 1, 1, 0, 0, 0, 0, 0);
			if(cameraInstance.depth)
				cameraDepth = cameraInstance.depth;
		}
		if(layerObj.depth)
		{
			totalDepth = layerObj.depth;
		}
		//Offset by camera depth
		totalDepth -= cameraDepth;
		if(totalDepth < -focalLength)
		{
			matToApply.a = 0;
			matToApply.d = 0;
		}
		else
		{
			if(layerObj.layerDepth)
			{
				var sizeLockedMat = stage._getProjectionMatrix(parent, layerObj.layerDepth);
				if(sizeLockedMat)
				{
					sizeLockedMat.invert();
					matToApply.prependMatrix(sizeLockedMat);
				}
			}
			matToApply.prependMatrix(cameraMat);
			var projMat = stage._getProjectionMatrix(parent, totalDepth);
			if(projMat)
			{
				matToApply.prependMatrix(projMat);
			}
		}
		layerObj.transformMatrix = matToApply;
	}
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

// Virtual camera API : 

an.VirtualCamera = new function() {
var _camera = new Object();
function VC(timeline) {
	this.timeline = timeline;
	this.camera = timeline.___camera___instance;
	this.centerX = lib.properties.width / 2;
	this.centerY = lib.properties.height / 2;
	this.camAxisX = this.camera.x;
	this.camAxisY = this.camera.y;
	if(timeline.___camera___instance == null || timeline.___camera___instance == undefined ) {
		timeline.___camera___instance = new cjs.MovieClip();
		timeline.___camera___instance.visible = false;
		timeline.___camera___instance.parent = timeline;
		timeline.___camera___instance.setTransform(this.centerX, this.centerY);
	}
	this.camera = timeline.___camera___instance;
}

VC.prototype.moveBy = function(x, y, z) {
z = typeof z !== 'undefined' ? z : 0;
	var position = this.___getCamPosition___();
	var rotAngle = this.getRotation()*Math.PI/180;
	var sinTheta = Math.sin(rotAngle);
	var cosTheta = Math.cos(rotAngle);
	var offX= x*cosTheta + y*sinTheta;
	var offY = y*cosTheta - x*sinTheta;
	this.camAxisX = this.camAxisX - x;
	this.camAxisY = this.camAxisY - y;
	var posX = position.x + offX;
	var posY = position.y + offY;
	this.camera.x = this.centerX - posX;
	this.camera.y = this.centerY - posY;
	this.camera.depth += z;
};

VC.prototype.setPosition = function(x, y, z) {
	z = typeof z !== 'undefined' ? z : 0;

	const MAX_X = 10000;
	const MIN_X = -10000;
	const MAX_Y = 10000;
	const MIN_Y = -10000;
	const MAX_Z = 10000;
	const MIN_Z = -5000;

	if(x > MAX_X)
	  x = MAX_X;
	else if(x < MIN_X)
	  x = MIN_X;
	if(y > MAX_Y)
	  y = MAX_Y;
	else if(y < MIN_Y)
	  y = MIN_Y;
	if(z > MAX_Z)
	  z = MAX_Z;
	else if(z < MIN_Z)
	  z = MIN_Z;

	var rotAngle = this.getRotation()*Math.PI/180;
	var sinTheta = Math.sin(rotAngle);
	var cosTheta = Math.cos(rotAngle);
	var offX= x*cosTheta + y*sinTheta;
	var offY = y*cosTheta - x*sinTheta;
	
	this.camAxisX = this.centerX - x;
	this.camAxisY = this.centerY - y;
	this.camera.x = this.centerX - offX;
	this.camera.y = this.centerY - offY;
	this.camera.depth = z;
};

VC.prototype.getPosition = function() {
	var loc = new Object();
	loc['x'] = this.centerX - this.camAxisX;
	loc['y'] = this.centerY - this.camAxisY;
	loc['z'] = this.camera.depth;
	return loc;
};

VC.prototype.resetPosition = function() {
	this.setPosition(0, 0);
};

VC.prototype.zoomBy = function(zoom) {
	this.setZoom( (this.getZoom() * zoom) / 100);
};

VC.prototype.setZoom = function(zoom) {
	const MAX_zoom = 10000;
	const MIN_zoom = 1;
	if(zoom > MAX_zoom)
	zoom = MAX_zoom;
	else if(zoom < MIN_zoom)
	zoom = MIN_zoom;
	this.camera.scaleX = 100 / zoom;
	this.camera.scaleY = 100 / zoom;
};

VC.prototype.getZoom = function() {
	return 100 / this.camera.scaleX;
};

VC.prototype.resetZoom = function() {
	this.setZoom(100);
};

VC.prototype.rotateBy = function(angle) {
	this.setRotation( this.getRotation() + angle );
};

VC.prototype.setRotation = function(angle) {
	const MAX_angle = 180;
	const MIN_angle = -179;
	if(angle > MAX_angle)
		angle = MAX_angle;
	else if(angle < MIN_angle)
		angle = MIN_angle;
	this.camera.rotation = -angle;
};

VC.prototype.getRotation = function() {
	return -this.camera.rotation;
};

VC.prototype.resetRotation = function() {
	this.setRotation(0);
};

VC.prototype.reset = function() {
	this.resetPosition();
	this.resetZoom();
	this.resetRotation();
	this.unpinCamera();
};
VC.prototype.setZDepth = function(zDepth) {
	const MAX_zDepth = 10000;
	const MIN_zDepth = -5000;
	if(zDepth > MAX_zDepth)
		zDepth = MAX_zDepth;
	else if(zDepth < MIN_zDepth)
		zDepth = MIN_zDepth;
	this.camera.depth = zDepth;
}
VC.prototype.getZDepth = function() {
	return this.camera.depth;
}
VC.prototype.resetZDepth = function() {
	this.camera.depth = 0;
}

VC.prototype.pinCameraToObject = function(obj, offsetX, offsetY, offsetZ) {

	offsetX = typeof offsetX !== 'undefined' ? offsetX : 0;

	offsetY = typeof offsetY !== 'undefined' ? offsetY : 0;

	offsetZ = typeof offsetZ !== 'undefined' ? offsetZ : 0;
	if(obj === undefined)
		return;
	this.camera.pinToObject = obj;
	this.camera.pinToObject.pinOffsetX = offsetX;
	this.camera.pinToObject.pinOffsetY = offsetY;
	this.camera.pinToObject.pinOffsetZ = offsetZ;
};

VC.prototype.setPinOffset = function(offsetX, offsetY, offsetZ) {
	if(this.camera.pinToObject != undefined) {
	this.camera.pinToObject.pinOffsetX = offsetX;
	this.camera.pinToObject.pinOffsetY = offsetY;
	this.camera.pinToObject.pinOffsetZ = offsetZ;
	}
};

VC.prototype.unpinCamera = function() {
	this.camera.pinToObject = undefined;
};
VC.prototype.___getCamPosition___ = function() {
	var loc = new Object();
	loc['x'] = this.centerX - this.camera.x;
	loc['y'] = this.centerY - this.camera.y;
	loc['z'] = this.depth;
	return loc;
};

this.getCamera = function(timeline) {
	timeline = typeof timeline !== 'undefined' ? timeline : null;
	if(timeline === null) timeline = exportRoot;
	if(_camera[timeline] == undefined)
	_camera[timeline] = new VC(timeline);
	return _camera[timeline];
}

this.getCameraAsMovieClip = function(timeline) {
	timeline = typeof timeline !== 'undefined' ? timeline : null;
	if(timeline === null) timeline = exportRoot;
	return this.getCamera(timeline).camera;
}
}


// Layer depth API : 

an.Layer = new function() {
	this.getLayerZDepth = function(timeline, layerName)
	{
		if(layerName === "Camera")
		layerName = "___camera___instance";
		var script = "if(timeline." + layerName + ") timeline." + layerName + ".depth; else 0;";
		return eval(script);
	}
	this.setLayerZDepth = function(timeline, layerName, zDepth)
	{
		const MAX_zDepth = 10000;
		const MIN_zDepth = -5000;
		if(zDepth > MAX_zDepth)
			zDepth = MAX_zDepth;
		else if(zDepth < MIN_zDepth)
			zDepth = MIN_zDepth;
		if(layerName === "Camera")
		layerName = "___camera___instance";
		var script = "if(timeline." + layerName + ") timeline." + layerName + ".depth = " + zDepth + ";";
		eval(script);
	}
	this.removeLayer = function(timeline, layerName)
	{
		if(layerName === "Camera")
		layerName = "___camera___instance";
		var script = "if(timeline." + layerName + ") timeline.removeChild(timeline." + layerName + ");";
		eval(script);
	}
	this.addNewLayer = function(timeline, layerName, zDepth)
	{
		if(layerName === "Camera")
		layerName = "___camera___instance";
		zDepth = typeof zDepth !== 'undefined' ? zDepth : 0;
		var layer = new createjs.MovieClip();
		layer.name = layerName;
		layer.depth = zDepth;
		layer.layerIndex = 0;
		timeline.addChild(layer);
	}
}
an.handleSoundStreamOnTick = function(event) {
	if(!event.paused){
		var stageChild = stage.getChildAt(0);
		if(!stageChild.paused || stageChild.ignorePause){
			stageChild.syncStreamSounds();
		}
	}
}
an.handleFilterCache = function(event) {
	if(!event.paused){
		var target = event.target;
		if(target){
			if(target.filterCacheList){
				for(var index = 0; index < target.filterCacheList.length ; index++){
					var cacheInst = target.filterCacheList[index];
					if((cacheInst.startFrame <= target.currentFrame) && (target.currentFrame <= cacheInst.endFrame)){
						cacheInst.instance.cache(cacheInst.x, cacheInst.y, cacheInst.w, cacheInst.h);
					}
				}
			}
		}
	}
}


})(createjs = createjs||{}, AdobeAn = AdobeAn||{});
var createjs, AdobeAn;