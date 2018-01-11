document.addEventListener("DOMContentLoaded", function(event) { 
  
  console.log("05");
  
  var myCanvas = document.getElementById('myCanvas');

  var renderer = new THREE.WebGLRenderer({
    canvas: myCanvas,
    antialias: true
  });

  // Set Renderer Vars
  renderer.setClearColor(0xffffff);
  renderer.setPixelRatio(window.devicePixelRatio);
  renderer.setSize(window.innerWidth, window.innerHeight);

  // Camera
  var camera = new THREE.PerspectiveCamera(35, window.innerWidth / window.innerHeight, 300, 10000);

  // Scene
  var scene = new THREE.Scene();

  var uniforms = {
    delta: { value: 0 }
  }

  var material = new THREE.ShaderMaterial({
    uniforms: uniforms,
    vertexShader: document.getElementById('vertexShader').textContent,
    fragmentShader: document.getElementById('fragmentShader').textContent
  });

  // Geometry
  var geometry1 = new THREE.BoxBufferGeometry(100, 100, 100, 10, 10, 10);
  var mesh1 = new THREE.Mesh(geometry1, material);
  mesh1.position.z = -1000;
  mesh1.position.x = -100;
  scene.add(mesh1);

  var geometry2 = new THREE.SphereGeometry(50, 5, 5);
  var mesh2 = new THREE.Mesh(geometry2, material);
  mesh2.position.z = -1000;
  mesh2.position.x = 100;
  scene.add(mesh2);

  var geometry3 = new THREE.PlaneGeometry(10000, 10000, 100, 100);
  var mesh3 = new THREE.Mesh(geometry3, material);
  mesh3.rotation.x = -90 * Math.PI / 180;
  mesh3.position.y = -100;
  scene.add(mesh3);

  var vertexDisplacement = new Float32Array(geometry1.attributes.position.count);
  for( i = 0; i < vertexDisplacement.length; i++ ){
    vertexDisplacement[i] = Math.sin(i);
  }
  geometry1.addAttribute('vertexDisplacement', new THREE.BufferAttribute(vertexDisplacement, 1));

  console.log(geometry1);

  // Lighting
  var lightAmbient = new THREE.AmbientLight(0xFFFFFF, 0.5);
  var lightPoint = new THREE.PointLight(0xFFFFFF, 0.25);

  // Add to scene
  scene.add(lightAmbient);
  scene.add(lightPoint);


  // RENDER UNTO GOD
  render();

  var delta = 0;

  function render(){

    delta += 0.1;

    mesh1.material.uniforms.delta.value = 0.5 + Math.sin(delta) * 0.5;
    mesh1.rotation.z += 0.01;

    for( i = 0; i < vertexDisplacement.length; i++ ){
      vertexDisplacement[i] = 0.5 + Math.sin(i * delta) * 0.25;
    }

    mesh1.geometry.attributes.vertexDisplacement.needsUpdate = true;

    // Make it so
    renderer.render(scene, camera);
    requestAnimationFrame(render);

  }


});