function TextureCylinder() {
    var texLoader = new THREE.TextureLoader();
    this.view = new THREE.Mesh(
        new THREE.CylinderGeometry(1, 1, 0.1, 50, 3),
        new THREE.MeshPhongMaterial({map: texLoader.load('circle.png')})
    );
    this.view.position.z = 1;
}

TextureCylinder.prototype.addToWorld = function(world) {
    var view = this.view;
    world.scene.add(view);
    world.addFrameListener(function() {
        view.rotation.x += 0.01;
        view.rotation.y += 0.01;
    });
}
