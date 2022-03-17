import { useEffect, useRef,useState } from "react";
import { Engine, Scene } from "@babylonjs/core";


export default ({ antialias, engineOptions, adaptToDeviceRatio, sceneOptions, onRender, onSceneReady, ...rest}) => {
  const reactCanvas = useRef(null);
  const [newScene, setScene] = useState(undefined);//

  // set up basic engine and scene
  useEffect(() => {
    const { current: canvas } = reactCanvas;

    if (!canvas) return;
    //setScene(scene);
// const [scene, setScene] = useState(scene);
    const engine = new Engine(canvas, antialias, engineOptions, adaptToDeviceRatio);
    const scene = new Scene(engine, sceneOptions);
    if (scene.isReady()) {
      onSceneReady(scene);
      setScene(scene);
    } else {
      scene.onReadyObservable.addOnce((scene) => onSceneReady(scene));
      setScene(scene);
    }

    engine.runRenderLoop(() => {
      if (typeof onRender === "function") onRender(scene);
      scene.render();
    });

    const resize = () => {
      scene.getEngine().resize();
    };

    if (window) {
      window.addEventListener("resize", resize);
    }

    return () => {
      scene.getEngine().dispose();

      if (window) {
        window.removeEventListener("resize", resize);
      }
    };
  }, [antialias, engineOptions, adaptToDeviceRatio, sceneOptions, onRender, onSceneReady]);

  return <canvas ref={reactCanvas} newScene={newScene} {...rest} />;
};