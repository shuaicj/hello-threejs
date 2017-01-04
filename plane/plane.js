function Plane() {
    this.view = new THREE.Mesh(
        new THREE.PlaneGeometry(3, 3), 
        new THREE.MeshPhongMaterial({color: 0xff3333, side: THREE.DoubleSide})
    );
    this.view.position.z = 1;
}

Plane.prototype.addToWorld = function(world) {
    var view = this.view;
    world.scene.add(view);
    world.addFrameListener(function() {
        view.rotation.x += 0.01;
        view.rotation.y += 0.01;
    });
}
