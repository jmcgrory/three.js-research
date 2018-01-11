document.addEventListener("DOMContentLoaded", function(event) { 
  
  console.log("04");
  
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
//  camera.position.set(-5, 12, 10);

  // Scene
  var scene = new THREE.Scene();

  // Material
//  var material = new THREE.MeshLambertMaterial({color: 0xFFFFFF});
  // var material = new THREE.MeshLambertMaterial({
  //   color: 0xFFFFFF,
  //   emissive: 0xFF2255,
  //   emissiveIntensity: 0.5
  // });
  var material = new THREE.MeshStandardMaterial({
    color: 0xffffff,
    roughness: 0.25,
    metalness: 0.55
  });


  // Geometry
  var geometry1 = new THREE.BoxGeometry(100, 100, 100);
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

  // Lighting
  var lightAmbient = new THREE.AmbientLight(0xFFFFFF, 0.5);
  var lightPoint = new THREE.PointLight(0xFFFFFF, 0.25);
  lightPoint.position.set( 550, 5250, 50 );

  // Add to scene
  scene.add(lightAmbient);
  scene.add(lightPoint);


  // RENDER UNTO GOD
  render();

  function render(){

    mesh1.rotation.x += 0.01;
    mesh1.rotation.y += 0.01;

    mesh2.rotation.x += 0.01;
    mesh2.rotation.y += 0.01;

    // Make it so
    renderer.render(scene, camera);
    requestAnimationFrame(render);

  }


});