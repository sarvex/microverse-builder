"use strict";(globalThis.webpackChunk_croquet_microverse=globalThis.webpackChunk_croquet_microverse||[]).push([[621],{1621:(e,t,s)=>{s.r(t),s.d(t,{default:()=>a});const a={modules:[{name:"Slides",actorBehaviors:[class SlidesActor{setup(){this.addEventListener("pointerDown","advance")}advance(){let e=this._cardData.slideIndex||0;var t=this._cardData.slides;++e>=t.length&&(e=0),this._cardData.slideIndex=e,this.say("show")}}],pawnBehaviors:[class SlidesPawn{setup(){this.show(),this.listen("show","show"),this.listen("updateShape","show")}show(){this.slideTexture&&(this.slideTexture.dispose(),this.slideTexture=null);const a=Worldcore.THREE;0===this.shape.children.length&&(e=new a.BoxGeometry(1,1,1),t=new a.MeshStandardMaterial,this.cube=new a.Mesh(e,t),this.shape.add(this.cube));var e=this.actor._cardData.slideIndex||0,t=this.actor._cardData.slides[e];t&&this.getBuffer(t).then(e=>{let s=URL.createObjectURL(new Blob([e]));return this.objectURL=s,new Promise((t,e)=>{this.slideTexture=(new a.TextureLoader).load(s,e=>{t({width:e.image.width,height:e.image.height,texture:e})},null,e)})}).then(e=>{e=e.texture,e=new a.MeshStandardMaterial({map:e});this.cube.material=e})}}]}]}}}]);