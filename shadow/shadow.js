function Shadow() {
    this.enabled = false;
}

Shadow.prototype.addToWorld = function(world) {
    if (this.enabled) return;

    var renderer = world.renderer;
    renderer.shadowMap.enabled = true;
    renderer.shadowMap.type = THREE.PCFSoftShadowMap;

    var light = world.light;
    light.castShadow = true;
    //light.shadow.camera.near = 0.1; // 0.5
    light.shadow.camera.far = 20; // 500
    //light.shadow.camera.right = 300; // 5
    //light.shadow.camera.left = -300; // -5
    //light.shadow.camera.top = 300; // 5
    //light.shadow.camera.bottom = -300; // -5
    light.shadow.mapSize.width = 1024; // 512
    light.shadow.mapSize.height = 1024; // 512
    
    var helper = new THREE.CameraHelper(light.shadow.camera);
    world.scene.add(helper);

}
