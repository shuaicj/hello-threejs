function Circle() {
    this.view = new THREE.Mesh(
        new THREE.CircleGeometry(1, 32), 
        new THREE.MeshPhongMaterial({color: 0x654655, side: THREE.DoubleSide})
    );
    this.view.position.z = 1;
}

Circle.prototype.addToWorld = function(world) {
    var view = this.view;
    world.scene.add(view);
    world.addFrameListener(function() {
        view.rotation.x += 0.01;
        view.rotation.y += 0.01;
    });
}
