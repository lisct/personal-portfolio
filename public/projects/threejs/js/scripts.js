//=================================================================
// Main Script
//=================================================================

var Colors = {
    
	red:0xf25346,
	white:0xd8d0d1,
	brown:0x59332e,
	pink:0xF5986E,
	brownDark:0x23190f,
	blue:0x68c3c0
    
};

var scene,
    camera, fieldOfView, aspectRadio, nearPlane, farPlane, HEIGHT, WIDTH,
    renderer, container;

var hemisphereLight, shadowLight;

var sea, sky, airplane;

var mousePos = {x:0, y:0};

window.addEventListener('load', init, false);

function init(event){
    
    // Set up the scene, the camera and the renderer
    createScene();
    
    // Add the lights
    createLights();
    
    // Add the objects
    createPlane();
    createSea();
    createSky();
    
    // Add event listener for the mouse movement    
    
	document.addEventListener('mousemove', handleMouseMove, false);
    
    
    // Start a llop that will update the objects position
    // and render the scene on each frame
    loop();
    
}

function createScene(){
    
    HEIGHT = window.innerHeight;
    WIDTH = window.innerWidth;
    
    // Scene
    
    scene = new THREE.Scene();
    scene.fog = new THREE.Fog(0xf7d9aa, 100, 950);
    
    // Camera
    
    aspectRadio = WIDTH / HEIGHT;
    fieldOfView = 60;
    nearPlane = 1;
    farPlane = 10000;
    
    camera = new THREE.PerspectiveCamera(
        fieldOfView, 
        aspectRadio, 
        nearPlane, 
        farPlane
    );
    
    camera.position.x = 0;
    camera.position.z = 200;
    camera.position.y = 100;
    
    // Render
    
    renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true});
    renderer.setSize(WIDTH, HEIGHT);
     renderer.setPixelRatio(window.devicePixelRatio ? window.devicePixelRatio : 1); //retina stuff
    renderer.shadowMap.enabled = true;
    
    
    // Adding the render to the DOM
    
    container = document.getElementById('world');
    container.appendChild(renderer.domElement);
    
    // Listen the screen: if the user resize
    
    window.addEventListener('resize', handleWindowResize, false);
    
}

function handleWindowResize(){
    
    // Update height and width of the renderer and the camera
    
    HEIGHT = window.innerHeight;
    WIDTH = window.innerWidth;
    renderer.setSize(WIDTH, HEIGHT);
    camera.aspect = WIDTH / HEIGHT;
    camera.updateProjectionMatrix();
}

function createLights(){
    
    // A hemisphere light is a gradient colored light; 
	// the first parameter is the sky color, the second parameter is the ground color, 
	// the third parameter is the intensity of the light
    
    hemisphereLight = new THREE.HemisphereLight(0xaaaaaa,0x000000, .9);
    
	// A directional light shines from a specific direction. 
	// It acts like the sun, that means that all the rays produced are parallel.
    
    shadowLight = new THREE.DirectionalLight(0xffffff, .9);
    shadowLight.position.set(150, 350, 350);
    shadowLight.castShadow = true;
    
    // define the visible area of the projected shadow
	shadowLight.shadow.camera.left = -400;
	shadowLight.shadow.camera.right = 400;
	shadowLight.shadow.camera.top = 400;
	shadowLight.shadow.camera.bottom = -400;
	shadowLight.shadow.camera.near = 1;
	shadowLight.shadow.camera.far = 1000;
    
    // define the resolution of the shadow; the higher the better, 
	// but also the more expensive and less performant
	shadowLight.shadow.mapSize.width = 2048;
	shadowLight.shadow.mapSize.height = 2048;
    
    // to activate the lights, just add them to the scene
	scene.add(hemisphereLight);  
	scene.add(shadowLight);
}

// Sea OBJ

Sea = function(){
    
    var geom = new THREE.CylinderGeometry(600, 600, 800, 40, 10);
    
    // Rotate form the X axis
    geom.applyMatrix(new THREE.Matrix4().makeRotationX(-Math.PI/2));
    
    // Create the material
    
    var mat = new THREE.MeshPhongMaterial({
        color: Colors.blue,
        transparent: true,
        opacity: 6,
        shading: THREE.FlatShading
    });
    
    
    // Create the mesh OBJ
    
    this.mesh = new THREE.Mesh(geom, mat);
    this.mesh.receiveShadow = true;
    
}

// Instantiate the sea and add it to the scene:

function createSea(){
    
    sea = new Sea();
    
    // Push it a little bit at the bottom of the scene
    
    sea.mesh.position.y = -600;
    
    // add the mesh of the sea to the scene
    scene.add(sea.mesh);
    
}

// Cloud OBJ

Cloud = function(){
    
    // Empty container
    
    this.mesh = new THREE.Object3D();
    
    var geom = new THREE.BoxGeometry(20, 20, 20);
    
    var mat = new THREE.MeshPhongMaterial({
       color: Colors.white 
    });
    
    // duplicate the geometry a random number of times
    
    var nBlocs = 3 + Math.floor(Math.random() * 3);
    
    for (var i = 0; i < nBlocs; i++){
        
        // create the mesh by cloning the geometry
        
        var m = new THREE.Mesh(geom, mat);
        
        // set the position and the rotation of each cube randomly
        
        m.position.x = i*15;
        m.position.y = Math.random() * 10;
        m.position.z = Math.random() * 10;
        m.rotation.z = Math.random() * Math.PI/2;
        m.rotation.Y = Math.random() * Math.PI/2;
        
        // Set the size of the cube randomly
        
        var s = .1 + Math.random() * .9;
        m.scale.set(s,s,s);
        
        m.castShadow = true;
        m.receiveShadow = true;
        
        this.mesh.add(m);
        
    }
}

// Define the sky

Sky = function(){
    
    this.mesh = new THREE.Object3D();
    
    // Choose a number of clouds to be scattered in the sky
    
    this.nClouds = 20;
    
    // To distribute the clouds consistently,
	// We need to place them according to a uniform angle
    
    var stepAngle = Math.PI*2 / this.nClouds;
    
    for( var i=0; i<this.nClouds; i++){
        
        var c = new Cloud();
        
        // Set the rotation and the position of each cloud;
		// For that we use a bit of trigonometry
        
        var a = stepAngle*i; // This is the final angle of the cloud
        var h = 750 + Math.random()*200; // This is the distance between the center of the axis and the cloud itself
        
        // Converting polar coordinates (angle, distance) into Cartesian coordinates (x, y)
        
        c.mesh.position.y = Math.sin(a)*h;
		c.mesh.position.x = Math.cos(a)*h;
        
        // rotate the cloud according to its position
        
        c.mesh.rotation.z = a + Math.PI/2;
        
        // For a better result, we position the clouds 
		// At random depths inside of the scene
        
        c.mesh.position.z = -400-Math.random()*400;
        
        
        // We also set a random scale for each cloud
        
        var s = 1+Math.random()*2;
		c.mesh.scale.set(s,s,s);
        
        // Do not forget to add the mesh of each cloud in the scene
        
        this.mesh.add(c.mesh);
    }
    
}

// Now we instantiate the sky and push its center a bit
// Towards the bottom of the screen

function createSky(){
    
    sky = new Sky();
    sky.mesh.position.y = -600;
    scene.add(sky.mesh);
}

// Airplane Obj

var AirPlane = function() {
	
	this.mesh = new THREE.Object3D();
	
	// Create the cabin
	var geomCockpit = new THREE.BoxGeometry(90,50,50,1,1,1);
	var matCockpit = new THREE.MeshPhongMaterial({color:Colors.red, shading:THREE.FlatShading});
    
    // we can access a specific vertex of a shape through 
    // the vertices array, and then move its x, y and z property:
    geomCockpit.vertices[4].y-=20;
    geomCockpit.vertices[4].z+=20;
    geomCockpit.vertices[5].y-=10;
    geomCockpit.vertices[5].z-=20;
    geomCockpit.vertices[6].y+=30;
    geomCockpit.vertices[6].z+=20;
    geomCockpit.vertices[7].y+=30;
    geomCockpit.vertices[7].z-=20;
    
	var cockpit = new THREE.Mesh(geomCockpit, matCockpit);
	cockpit.castShadow = true;
	cockpit.receiveShadow = true;
	this.mesh.add(cockpit);
	
	// Create the engine
	var geomEngine = new THREE.BoxGeometry(20,50,50,1,1,1);
	var matEngine = new THREE.MeshPhongMaterial({color:Colors.white, shading:THREE.FlatShading});
	var engine = new THREE.Mesh(geomEngine, matEngine);
	engine.position.x = 40;
	engine.castShadow = true;
	engine.receiveShadow = true;
	this.mesh.add(engine);
	
	// Create the tail
	var geomTailPlane = new THREE.BoxGeometry(15,20,5,1,1,1);
	var matTailPlane = new THREE.MeshPhongMaterial({color:Colors.red, shading:THREE.FlatShading});
	var tailPlane = new THREE.Mesh(geomTailPlane, matTailPlane);
	tailPlane.position.set(-35,25,0);
	tailPlane.castShadow = true;
	tailPlane.receiveShadow = true;
	this.mesh.add(tailPlane);
	
	// Create the wing
	var geomSideWing = new THREE.BoxGeometry(40,8,150,1,1,1);
	var matSideWing = new THREE.MeshPhongMaterial({color:Colors.red, shading:THREE.FlatShading});
	var sideWing = new THREE.Mesh(geomSideWing, matSideWing);
	sideWing.castShadow = true;
	sideWing.receiveShadow = true;
	this.mesh.add(sideWing);
	
	// propeller
	var geomPropeller = new THREE.BoxGeometry(20,10,10,1,1,1);
	var matPropeller = new THREE.MeshPhongMaterial({color:Colors.brown, shading:THREE.FlatShading});
	this.propeller = new THREE.Mesh(geomPropeller, matPropeller);
	this.propeller.castShadow = true;
	this.propeller.receiveShadow = true;
	
	// blades
	var geomBlade = new THREE.BoxGeometry(1,100,20,1,1,1);
	var matBlade = new THREE.MeshPhongMaterial({color:Colors.brownDark, shading:THREE.FlatShading});
	
	var blade = new THREE.Mesh(geomBlade, matBlade);
	blade.position.set(8,0,0);
	blade.castShadow = true;
	blade.receiveShadow = true;
	this.propeller.add(blade);
	this.propeller.position.set(50,0,0);
	this.mesh.add(this.propeller);
};

// Instantiate the ariplane and add it to the scene

function createPlane(){
    
    airplane = new AirPlane();
    airplane.mesh.scale.set(.25, .25, .25);
    airplane.mesh.position.y = 100;
    scene.add(airplane.mesh);
    
}

// Handle mousemove event

function handleMouseMove(event) {

	// here we are converting the mouse position value received 
	// to a normalized value varying between -1 and 1;
	// this is the formula for the horizontal axis:
	
	var tx = -1 + (event.clientX / WIDTH)*2;

	// for the vertical axis, we need to inverse the formula 
	// because the 2D y-axis goes the opposite direction of the 3D y-axis
	
	var ty = 1 - (event.clientY / HEIGHT)*2;
	mousePos = {x:tx, y:ty};

}

// Update the plane position 

function updatePlane(){

	// let's move the airplane between -100 and 100 on the horizontal axis, 
	// and between 25 and 175 on the vertical axis,
	// depending on the mouse position which ranges between -1 and 1 on both axes;
	// to achieve that we use a normalize function (see below)
	
	var targetX = normalize(mousePos.x, -1, 1, -100, 100);
	var targetY = normalize(mousePos.y, -1, 1, 25, 175);

	// update the airplane's position
	airplane.mesh.position.y = targetY;
	airplane.mesh.position.x = targetX;
	airplane.propeller.rotation.x += 0.3;
}

// Nomalize function

function normalize(v,vmin,vmax,tmin, tmax){

	var nv = Math.max(Math.min(v,vmax), vmin);
	var dv = vmax-vmin;
	var pc = (nv-vmin)/dv;
	var dt = tmax-tmin;
	var tv = tmin + (pc*dt);
	return tv;

}

function loop(){
    
    // Rotate the propeller, the sea and the sky
    
    airplane.propeller.rotation.x += 0.3;
    sea.mesh.rotation.z += .005;
    sky.mesh.rotation.z += .01;
    
    // Update the plane on each frame
	
    updatePlane();
    
    // Render the scene
    
    renderer.render(scene, camera);
    
    // Call the loop function again
    
    requestAnimationFrame(loop);
    
}