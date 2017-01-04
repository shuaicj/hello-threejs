function World(domId) {
    var scene = new THREE.Scene();
    var dom = domId ? document.getElementById(domId) : document.body;

    var renderer = new THREE.WebGLRenderer();
    renderer.setSize(window.innerWidth, window.innerHeight);
    //renderer.setClearColor(0x87CEFA);
    renderer.setClearColor(0xffffff);
    //renderer.shadowMap.enabled = true;
    //renderer.shadowMap.type = THREE.PCFSoftShadowMap;
    dom.appendChild(renderer.domElement);

    var camera = new THREE.PerspectiveCamera(60, window.innerWidth/window.innerHeight, 0.1, 1000);
    //camera.position.set(0, 0, 1000);
    camera.position.set(0, 0, 3);
    camera.up.set(0, 0, 1);
    camera.lookAt(new THREE.Vector3(1, 0, camera.position.z));

    if (typeof Stats === 'function') {
        var stats = new Stats();
        dom.appendChild(stats.dom);
    }

    scene.add(new THREE.AmbientLight(0xffffff, 0.7));

    var light = new THREE.DirectionalLight(0xffffff, 0.8);
    light.position.set(-160, -160, 400);
    //light.castShadow = true;
    //light.shadow.camera.near = 0.1; // 0.5
    //light.shadow.camera.far = 750; // 500
    //light.shadow.camera.right = 300; // 5
    //light.shadow.camera.left = -300; // -5
    //light.shadow.camera.top = 300; // 5
    //light.shadow.camera.bottom = -300; // -5
    //light.shadow.mapSize.width = 4096; // 512
    //light.shadow.mapSize.height = 4096; // 512
    scene.add(light);

    //var helper = new THREE.CameraHelper(light.shadow.camera);
    //scene.add(helper);

    var controls = new THREE.OrbitControls(camera, renderer.domElement);
    //controls.target.copy(new THREE.Vector3(10, 0, camera.position.z));

    var frameListeners = [];

    var clock = new THREE.Clock();

    function render() {
        var dt = clock.getDelta();
        var et = clock.getElapsedTime();
        for (var i in frameListeners) {
            frameListeners[i](dt, et);
        }
        if (stats) stats.update();
        if (controls) controls.update();
        renderer.render(scene, camera);
        requestAnimationFrame(render);
    };
    render();

    function onWindowResize() {
        camera.aspect = window.innerWidth / window.innerHeight;
        camera.updateProjectionMatrix();
        renderer.setSize(window.innerWidth, window.innerHeight);
    }
    window.addEventListener('resize', onWindowResize, false);

    this.scene = scene;
    this.renderer = renderer;
    this.camera = camera;
    this.frameListeners = frameListeners;
}

World.prototype.addFrameListener = function(func) {
    this.frameListeners.push(func);
}

