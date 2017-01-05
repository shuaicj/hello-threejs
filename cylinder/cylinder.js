function Cylinder() {
    var color = Math.ceil(Math.random() * 0xffffff);
    this.view = new THREE.Mesh(
        new THREE.CylinderGeometry(1, 0.8, 0.5, 12, 3),
        new THREE.MeshPhongMaterial({color: color})
    );
    this.view.position.z = 1;
}

Cylinder.prototype.addToWorld = function(world) {
    var view = this.view;
    world.scene.add(view);
    world.addFrameListener(function() {
        view.rotation.x += 0.01;
        view.rotation.y += 0.01;
    });
}
