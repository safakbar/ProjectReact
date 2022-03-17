import React, {useRef,useEffect} from 'react'

import {Engine,Scene,MeshBuilder, ArcRotateCamera, HemisphericLight,Vector3,FreeCamera,Color3,AdvancedDynamicTexture} from '@babylonjs/core';
import SceneComponent from "./SceneComponent";
import  "@babylonjs/loaders";
import * as BABYLON from 'babylonjs';
import * as GUI from 'babylonjs-gui';
import * as ReactDOM from 'react-dom';


// benzer şekilde kod üzerinde hatalar ayıklandı ancak benzer hatalar alındı.
const mystyle ={
    width: "100%",
    height: "100%"
}
const ReactCanvas = props =>{

    var canvasRef = useRef(null)//
    const canvas = canvasRef.current;
    const engine= new Engine(canvas,true);
    const scene = createScene();

    useEffect(()=>{
       
        var createScene = function () {
            var temp = 0
   
            console.log(scene);
            var noChildrenHolder = []
            var noChildrenHolder2 = []
            var camera = new BABYLON.FreeCamera("MyCamera", new BABYLON.Vector3(5, 4, 5), scene); 
            scene.createDefaultCameraOrLight(true, true, true);
                   // scene.createDefaultEnvironment();
            scene.activeCamera.radius= 263
            scene.activeCamera.target.y=35
            var zebra;
            console.log(scene+ "12555555555555555555555555555555555555555555555555555555555555")
            BABYLON.SceneLoader.ImportMesh("", "https://raw.githubusercontent.com/safakbar/zebra/main/", "Zebra.gltf", scene, function (newMeshes ) {
                  temp = 1 
                  zebra = newMeshes[0];
                    zebra.scaling = new BABYLON.Vector3(5,5,5);
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
             
            //-------------------------------------------->
            //console.log(GUI.Json() + " 55555555555555555555555555555555")
            console.log(scene)
           var advancedTexture = GUI.AdvancedDynamicTexture.CreateFullscreenUI("UI",true,scene);
            
            var stackPanel = GUI.StackPanel();
            stackPanel.isVertical = false;
            stackPanel.height = "100px";
            var stackPanelcz = GUI.StackPanel();
            //stackPanel.verticalAlignment = BABYLON.GUI.Control.VERTICAL_ALIGNMENT_BOTTOM;
            stackPanel.horizontalAlignment = GUI.Control.HORIZONTAL_ALIGNMENT_CENTER;
            stackPanelcz.verticalAlignment = GUI.Control.VERTICAL_ALIGNMENT_RIGHT;
            var stackOutside =  GUI.StackPanel();
            var stackOutsidecz = GUI.StackPanel();
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
                
                 BABYLON.SceneLoader.ImportMesh("", "https://raw.githubusercontent.com/safakbar/zebra/main/", "Zebra.gltf", scene, function (newMeshes ) {
                  temp = 1 
                  zebra = newMeshes[0];
                    zebra.scaling = new BABYLON.Vector3(5,5,5);
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
                 BABYLON.SceneLoader.ImportMesh(
                "",
                "https://raw.githubusercontent.com/safakbar/office_chair/main/",
                "scene.gltf",
                scene,
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
                        noChildrenHolder[i].material.albedoColor   = BABYLON.Color3.Black();
                 }}
                 if(temp == 1 ){ //for zebra temp = 1 == zebra 
                      for (var i = 0;i<noChildrenHolder2.length; i++){
                        noChildrenHolder2[i].material.albedoColor   = BABYLON.Color3.Black();
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
                        noChildrenHolder[i].material.albedoColor   = BABYLON.Color3.Green();
                 }}
                 if(temp == 1 ){ //zebra için olan kisim 
                      for (var i = 0;i<noChildrenHolder2.length; i++){
                        noChildrenHolder2[i].material.albedoColor   = BABYLON.Color3.Green();
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
                        noChildrenHolder[i].material.albedoColor   = BABYLON.Color3.Blue();
                 }}
                 if(temp == 1 ){ //zebra için olan kisim 
                      for (var i = 0;i<noChildrenHolder2.length; i++){
                        noChildrenHolder2[i].material.albedoColor   = BABYLON.Color3.Blue();
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
                        noChildrenHolder[i].material.albedoColor   = BABYLON.Color3.Red();
                 }}
                 if(temp == 1 ){ //zebra için olan kisim 
                      for (var i = 0;i<noChildrenHolder2.length; i++){
                        noChildrenHolder2[i].material.albedoColor   = BABYLON.Color3.Red();
                 }
                 }
            });
            stackPanel.addControl(btnRed)
            
            
            return scene;
        }
       
        engine.runRenderLoop(function() {
            scene.render();
        });
        window.addEventListener("resize", function(){
            engine.resize();
        });

        },[])

    return <canvas style={mystyle} ref={canvasRef} {...props}></canvas>



}

export default ReactCanvas