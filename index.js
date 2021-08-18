//################################
//Alap dolgok kirajzoltatása
//Scene létrehozása
const scene = new THREE.Scene();

//Kamera létrehozása

const camera = new THREE.PerspectiveCamera(45,16/9);
camera.position.z = 5;
camera.position.y = 3;
camera.position.x = 2;
camera.rotateY = 20;


//Renderer létrehozása
const renderer = new THREE.WebGLRenderer();

//Cavas Újraméterezése
renderer.setSize(window.innerWidth, window.innerHeight);

// Canvas létrehozása
document.body.appendChild(renderer.domElement);



//HELPERS
const size = 100;
const divisions = 80;

const gridHelper = new THREE.GridHelper( size, divisions );
scene.add( gridHelper );





//################################
//Maga a kirajzoltatás

renderer.render(scene, camera);

let scale = 0;
let scale2 = 0;

const control = new THREE.OrbitControls(camera, renderer.domElement);

function animate(){
    renderer.render(scene, camera);
    requestAnimationFrame(animate);
}

animate();