function World(domId) {
    var scene = new THREE.Scene();
    var dom = domId ? document.getElementById(domId) : document.body;

    var renderer = new THREE.WebGLRenderer();
    renderer.setSize(window.innerWidth, window.innerHeight);
    //renderer.setClearColor(0x87CEFA);
    //renderer.setClearColor(0xffffff);
    dom.appendChild(renderer.domElement);

    var camera = new THREE.PerspectiveCamera(60, window.innerWidth/window.innerHeight, 0.1, 1000);
    //camera.position.set(0, 0, 1000);
    camera.position.set(-1, -5, 3);
    camera.up.set(0, 0, 1);
    //camera.lookAt(new THREE.Vector3(1, 0, camera.position.z));
    camera.lookAt(new THREE.Vector3(0, 0, camera.position.z));

    if (typeof Stats === 'function') {
        var stats = new Stats();
        dom.appendChild(stats.dom);
    }

    scene.add(new THREE.AmbientLight(0xffffff, 0.2));

    var light = new THREE.DirectionalLight(0xffffff, 0.6);
    light.position.set(-4, -4, 10);
    scene.add(light);

    var axisHelper = new THREE.AxisHelper(10);
    scene.add(axisHelper);

    if (THREE.OrbitControls) {
        var controls = new THREE.OrbitControls(camera, renderer.domElement);
    }

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
    this.light = light;
    this.frameListeners = frameListeners;
}

World.prototype.addFrameListener = function(func) {
    this.frameListeners.push(func);
}

