import React, {useRef,useEffect,useState} from 'react'

import {Engine,Scene,MeshBuilder,FreeCamera ,ArcRotateCamera,SceneLoader, HemisphericLight,Vector3,Color3} from '@babylonjs/core';

import * as GUI from "@babylonjs/gui";
//import SceneComponent from "./SceneComponent";
//import * as SceneLoader  from "@babylonjs/loaders";

//import "@babylonjs/loaders/glTF";
//import 'babylonjs/loaders/glTF';
import  "@babylonjs/loaders/glTF";

//import { SceneLoader } from "@babylonjs/core/Loading/sceneLoader"
//import '@babylonjs/loaders/glTF/2.0/Extensions/KHR_draco_mesh_compression'
//import "@babylonjs/ImportMesh/gltf";

const myStyle = {
    width: "100%",
    height: "100%"
}

const ReactCanvasSceneComponent = props =>{
   // const [scene, setScene] = useState(scene);
var createScene = function (newScene) {
    //setScene(scene);
    var temp = 0
    var noChildrenHolder = []
    var noChildrenHolder2 = []
    var camera = new FreeCamera("MyCamera", new Vector3(5, 4, 5), newScene); 
    newScene.createDefaultCameraOrLight(true, true, true);
           // scene.createDefaultEnvironment();
    newScene.activeCamera.radius= 263
    newScene.activeCamera.target.y=35
    var zebra
    console.log(newScene+"1115555555555556777777777")
    SceneLoader.ImportMesh("", "https://raw.githubusercontent.com/safakbar/zebra/main/", 
    "Zebra.gltf", newScene, function (newMeshes ) 
    {
        try {
            console.log("ssssssssss")
        } catch (error) {
            console.log(error+ "111111111111112222222")
        }
		 /*  temp = 1 
          var zebra;
          zebra = newMeshes[0];
		    zebra.scaling = new Vector3(5,5,5);
          var j =1
            while(newMeshes[j]!= null)
            {
                noChildrenHolder2.push(newMeshes[j])
                j++;
            }
            newMeshes.shift(); */
           
    });
	    for (var i = 0;i<noChildrenHolder.length; i++){
            noChildrenHolder[i].dispose();
		}
	 
    //-------------------------------------------->
   var advancedTexture =GUI.AdvancedDynamicTexture.CreateFullscreenUI("UI");
    
    var stackPanel = new GUI.StackPanel();
    stackPanel.isVertical = false;
    stackPanel.height = "100px";
    var stackPanelcz = new GUI.StackPanel();
    //stackPanel.verticalAlignment = BABYLON.GUI.Control.VERTICAL_ALIGNMENT_BOTTOM;
    stackPanel.horizontalAlignment = GUI.Control.HORIZONTAL_ALIGNMENT_CENTER;
    stackPanelcz.verticalAlignment = GUI.Control.VERTICAL_ALIGNMENT_RIGHT;
    var stackOutside = new GUI.StackPanel();
    var stackOutsidecz = new GUI.StackPanel();
    stackOutside.verticalAlignment = GUI.Control.VERTICAL_ALIGNMENT_RIGHT;

    //stackOutside.isVertical = false;
    stackOutside.verticalAlignment = GUI.Control.VERTICAL_ALIGNMENT_BOTTOM;
    //stackOutside.horizontalAlignment = BABYLON.GUI.Control.HORIZONTAL_ALIGNMENT_RIGHT;
    stackOutside.addControl(stackPanel)
    stackOutsidecz.addControl(stackPanelcz)
    advancedTexture.addControl(stackOutside); 
    advancedTexture.addControl(stackOutsidecz); 

//----------------------------------------->
    var button1 = GUI.Button.CreateSimpleButton("but1", "Zebra");
    button1.width = "150px"
    button1.height = "40px";
    button1.color = "white";
    button1.cornerRadius = 150;
    button1.top = "50px";
    button1.left = 240
    button1.background = "green";
    button1.onPointerUpObservable.add(function() {
        
         SceneLoader.ImportMesh("", "https://raw.githubusercontent.com/safakbar/zebra/main/", "Zebra.gltf", newScene, function (newMeshes ) {
		  temp = 1 
          zebra = newMeshes[0];
		    zebra.scaling = new Vector3(5,5,5);
          var j =1
            while(newMeshes[j]!= null)
            {
                noChildrenHolder2.push(newMeshes[j])
                j++;
            }
            newMeshes.shift();
           
    });
	    for (var i = 0;i<noChildrenHolder.length; i++){
            noChildrenHolder[i].dispose();
		}
	 
	
    });
    stackPanelcz.addControl(button1)
    var button2 = GUI.Button.CreateSimpleButton("but2", "Chair");
    button2.width = "150px"
    button2.height = "40px";
    button2.color = "white";
    button2.left = "240px"
    button2.cornerRadius = 20;
    button2.bottom = "420px";
//https://raw.githubusercontent.com/safakbar/zebra/main/Zebra.gltf
//https://raw.githubusercontent.com/safakbar/office_chair/main/
    button2.background = "green";
    button2.onPointerUpObservable.add(function() {
         SceneLoader.ImportMesh(
        "",
        "https://raw.githubusercontent.com/safakbar/office_chair/main/",
        "scene.gltf",
        newScene,
        function (newMeshes) {          
            temp= 2
            var j =1
            while(newMeshes[j]!= null)
            {
                noChildrenHolder.push(newMeshes[j])
                j++;
            }
            newMeshes.shift();
            
        
    });
           for (var i = 0;i<noChildrenHolder2.length; i++){
             noChildrenHolder2[i].dispose(); 
		}
		
	}); 
     stackPanelcz.addControl(button2)
 //<-------------------------------------------
   var btnBlack = GUI.Button.CreateImageOnlyButton("Black", "https://i.imgur.com/64jctZO.jpeg");
    btnBlack.paddingBottomInPixels = 
    btnBlack.width = "80px";
    btnBlack.height = "80px";
    btnBlack.color = "transparent"
    btnBlack.cornerRadius = 1000;
    btnBlack.onPointerClickObservable.add(function() {
         if(temp == 2){ //for chair temp = 2 == chair 
         for (var i = 0;i<noChildrenHolder.length; i++){
		    	noChildrenHolder[i].material.albedoColor   = Color3.Black();
         }}
         if(temp == 1 ){ //for zebra temp = 1 == zebra 
              for (var i = 0;i<noChildrenHolder2.length; i++){
		    	noChildrenHolder2[i].material.albedoColor   = Color3.Black();
         }
         }
    });
    stackPanel.addControl(btnBlack)
    
    var btnGreen = GUI.Button.CreateImageOnlyButton("Green", "https://i.imgur.com/XJKjKAK.jpg");
    btnGreen.paddingBottomInPixels = 
    btnGreen.width = "80px";
    btnGreen.height = "80px";
    btnGreen.color = "transparent"
    btnGreen.cornerRadius = 1000;
   
    btnGreen.onPointerClickObservable.add(function() {
         if(temp == 2){  //for chair temp = 2 == chair
         for (var i = 0;i<noChildrenHolder.length; i++){
		    	noChildrenHolder[i].material.albedoColor   = Color3.Green();
         }}
         if(temp == 1 ){ //zebra için olan kisim 
              for (var i = 0;i<noChildrenHolder2.length; i++){
		    	noChildrenHolder2[i].material.albedoColor   = Color3.Green();
         }
         }
    });
    stackPanel.addControl(btnGreen)
    
    var btnBlue = GUI.Button.CreateImageOnlyButton("Blue", "https://i.imgur.com/QH48ATi.jpeg");
    btnBlue.paddingBottomInPixels = 
    btnBlue.width = "80px";
    btnBlue.height = "80px";
    btnBlue.color = "transparent"
    btnBlue.cornerRadius = 1000;
    
    btnBlue.onPointerClickObservable.add(function() {
         if(temp == 2){  //for chair temp = 2 == chair
         for (var i = 0;i<noChildrenHolder.length; i++){
		    	noChildrenHolder[i].material.albedoColor   = Color3.Blue();
         }}
         if(temp == 1 ){ //zebra için olan kisim 
              for (var i = 0;i<noChildrenHolder2.length; i++){
		    	noChildrenHolder2[i].material.albedoColor   = Color3.Blue();
         }
         }
    });
    stackPanel.addControl(btnBlue)
    
    var btnRed = GUI.Button.CreateImageOnlyButton("Red", "https://i.imgur.com/hmR0IG5.jpeg");
    btnRed.paddingBottomInPixels = 
    btnRed.width = "80px";
    btnRed.height = "80px";
    btnRed.color = "transparent"
    btnRed.cornerRadius = 1000;
    
    btnRed.onPointerClickObservable.add(function() {
         if(temp == 2){  //for chair temp = 2 == chair
         for (var i = 0;i<noChildrenHolder.length; i++){
		    	noChildrenHolder[i].material.albedoColor   = Color3.Red();
         }}
         if(temp == 1 ){ //zebra için olan kisim 
              for (var i = 0;i<noChildrenHolder2.length; i++){
		    	noChildrenHolder2[i].material.albedoColor   = Color3.Red();
         }
         }
    });
    stackPanel.addControl(btnRed)
      
      

    return newScene
};


return <SceneComponent onSceneReady={createScene} style={myStyle}/>

}

export default ReactCanvasSceneComponent