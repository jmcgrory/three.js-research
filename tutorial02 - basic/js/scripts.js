document.addEventListener("DOMContentLoaded", function(event) { 
  
  console.log("02");
  
  var myCanvas = document.getElementById('myCanvas');

  var renderer = new THREE.WebGLRenderer({
    canvas: myCanvas,
    antialias: true
  });

  // Set Renderer Vars
  renderer.setClearColor(0xff2255);
  renderer.setPixelRatio(window.devicePixelRatio);
  renderer.setSize(window.innerWidth, window.innerHeight);

  // Camera
  var camera = new THREE.PerspectiveCamera(35, window.innerWidth / window.innerHeight, 0.1, 3000);
  camera.position.set(-5, 12, 10);

  // Cube
  var geometry = new THREE.BoxGeometry(95, 105, 100);
  var material = new THREE.MeshLambertMaterial({color: 0x888888});
  var mesh = new THREE.Mesh(geometry, material);
  mesh.position.set(0, 0, -1000);

  // Scene
  var scene = new THREE.Scene();

  // Lighting
  var lightAmbient = new THREE.AmbientLight(0xFFFFFF, 0.5);
  var lightPoint = new THREE.PointLight(0xFFFFFF, 0.5);

  // Add to scene
  scene.add(lightAmbient);
  scene.add(lightPoint);
  scene.add(mesh);

  requestAnimationFrame(render);

  function render(){

    mesh.rotation.x += 0.05;
    mesh.rotation.y += 0.045;

    // Make it so
    renderer.render(scene, camera);
    requestAnimationFrame(render);

  }


});