function Box() {
    var color = Math.ceil(Math.random() * 0xffffff);
    this.view = new THREE.Mesh(
        new THREE.BoxGeometry(1, 1, 1), 
        new THREE.MeshPhongMaterial({color: color})
    );
    this.view.position.z = 1;
    this.view.castShadow = true;
}

Box.prototype.addToWorld = function(world) {
    var view = this.view;
    world.scene.add(view);
    world.addFrameListener(function() {
        view.rotation.x += 0.01;
        view.rotation.y += 0.01;
    });
}
