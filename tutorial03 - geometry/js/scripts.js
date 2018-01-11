document.addEventListener("DOMContentLoaded", function(event) { 
  
  console.log("03");
  
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

  //  Regular GEOMETRY
/*  var geometry = new THREE.Geometry();
  geometry.vertices.push(
    new THREE.Vector3(-100,100,0),
    new THREE.Vector3(-100,-100,0),
    new THREE.Vector3(100,-100,0)
  );
  geometry.faces.push(
    new THREE.Face3(0,1,2)
  );*/

  //  Buffer GEOMETRY
/*  var geometry = new THREE.BufferGeometry();
  vertices = new Float32Array([
    -25, 25, 0,
    -25, -25, 0,
    25, -25, 0
  ]);
  geometry.addAttribute('position', new THREE.BufferAttribute(vertices, 3));*/

  // Sphere GEOMETRY
 /* var geometry = new THREE.SphereGeometry(50, 12, 12);
 */

  // Font GEOMETRY
/*  var loader = new THREE.FontLoader();
  var font = loader.parse(fontJSON);
  var geometry = new THREE.TextGeometry('BOBBY', {
    font: font,
    size: 120,
    height: 10,
    material: 0,
    bevelThickness: 1,
    extrudeMaterial: 2
  });*/

  // Animated Plane GEOMETRY
  var geometry = new THREE.PlaneGeometry(100, 100);


  var material = new THREE.MeshLambertMaterial({color: 0xFFFFFF});
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


  // RENDER UNTO GOD
  render();

  var delta = 0;

  function render(){

    delta += 0.1;
    geometry.vertices[0].x = Math.sin(delta) * 50;
    geometry.vertices[3].x = Math.sin(delta) * 50;
    geometry.verticesNeedUpdate = true;

    // mesh.rotation.x += 0.02;
    // mesh.rotation.y += 0.02;
    // mesh.rotation.z += 0.02;

    // Make it so
    renderer.render(scene, camera);
    requestAnimationFrame(render);

  }


});