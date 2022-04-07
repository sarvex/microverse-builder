"use strict";(globalThis.webpackChunk_croquet_microverse=globalThis.webpackChunk_croquet_microverse||[]).push([[546],{5546:(e,t,s)=>{s.r(t),s.d(t,{default:()=>i});const i={modules:[{name:"PropertyPanel",actorBehaviors:[class PropertyPanelActor{setObject(e){this.target=e,this.behaviorMenu=this.createCard({name:"behavior menu",behaviorModules:["BehaviorMenu"],translation:[0,.6,.055],type:"object",parent:this,noSave:!0,target:e.id}),this.behaviorMenu.call("BehaviorMenuActor","show"),this.cardSpec=this.createCard({className:"TextFieldActor",name:"card spec",translation:[0,-1,-.02],parent:this,type:"text",multiuser:!0,margins:{left:8,top:8,right:8,bottom:8},textScale:.0012,backgroundColor:16777215,width:1,height:2,depth:.05,autoResize:!1,noDismissButton:!0,borderRadius:.013,fullBright:!0,runs:[{text:""}],noSave:!0}),this.dismissButton=this.createCard({className:"TextFieldActor",name:"dismiss button",translation:[.5,1.65,.005],parent:this,type:"text",multiuser:!0,textScale:.002,backgroundColor:16777215,readOnly:!0,singleLine:!0,autoResize:!0,noDismissButton:!0,width:2,height:2,depth:.05,runs:[{text:"ok"}],noSave:!0}),this.dismissButton.addEventListener("pointerTap","PropertyPanelActor.close");e=this.cardSpecString(e);this.cardSpec.loadAndReset(e),this.scriptSubscribe(this.cardSpec.id,"text","cardSpecAccept"),this.scriptListen("dismiss","dismiss")}cardSpecString(e){let s=e.collectCardData(),i=this.intrinsicProperties(),r=[],t=(i.forEach(e=>{var t=s[e];void 0!==t&&(r.push("    "),r.push(e),r.push(": "),r.push(this.specValue(e,t)),r.push(",\n"))}),Object.keys(s));return t.sort(),t.forEach(e=>{var t;i.includes(e)||(t=s[e],r.push("    "),r.push(e),r.push(": "),r.push(this.specValue(e,t)),r.push(",\n"))}),r.join("")}specValue(e,t){if(Array.isArray(t)){let e=t.map(e=>JSON.stringify(e));return`[${e.join(", ")}]`}return JSON.stringify(t)}cardSpecAccept(e){let t=e["text"],s=t.split("\n"),i=/^[ \t]*([^:]+)[ \t]*:[ \t]*(.*)$/,r={},a=!1;s.forEach(t=>{t=i.exec(t);if(t){a=!0;var s=t[1];let e=t[2];e&&e.endsWith(",")&&(e=e.slice(0,e.length-1));try{e=JSON.parse(e)}catch(e){console.log(e)}"rotation"!==s&&"dataRotation"!==s||Array.isArray(e)&&3===e.length&&(e=Worldcore.q_euler(...e)),r[s]=e}}),a&&!this.target.doomed&&this.target.updateOptions(r)}close(){this.sayDeck("dismiss")}dismiss(){this.dismissButton&&this.dismissButton.destroy(),this.cardSpec&&this.cardSpec.destroy(),this.behaviorMenu&&this.behaviorMenu.destroy(),this.destroy()}}]},{name:"BehaviorMenu",actorBehaviors:[class BehaviorMenuActor{show(){this.menu&&this.menu.destroy(),this.menu=this.createCard({name:"behavior menu",behaviorModules:["Menu"],multiple:!0,parent:this,type:"2d",noSave:!0,cornerRadius:.05}),this.updateSelections(),this.scriptListen("fire","setBehaviors"),this.scriptSubscribe(this._cardData.target,"behaviorUpdated","updateSelections")}updateSelections(){console.log("updateSelections");let t=this.service("ActorManager").get(this._cardData.target),s=[],e=[...this.behaviorManager.modules].filter(([,e])=>!e.systemModule);e.forEach(([e])=>{e={label:e,selected:t._behaviorModules&&0<=t._behaviorModules.indexOf(e)};s.push(e)}),s.push({label:"------------"}),s.push({label:"apply"}),this.menu.call("MenuActor","setItems",s)}setBehaviors(e){console.log("setBehaviors");let t=this.service("ActorManager").get(this._cardData.target);t.setBehaviors(e.selection)}}]}]}}}]);