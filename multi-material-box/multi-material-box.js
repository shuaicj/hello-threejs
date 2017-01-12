function MultiMaterialBox() {
    var materials = [];
    for (var i = 0; i < 6; i++) {
        var color = Math.ceil(Math.random() * 0xffffff);
        materials.push(new THREE.MeshPhongMaterial({color: color}));
    }
    this.view = new THREE.Mesh(
        new THREE.BoxGeometry(1, 1, 1), 
        new THREE.MultiMaterial(materials)
    );
    this.view.position.z = 1;
}

MultiMaterialBox.prototype.addToWorld = function(world) {
    var view = this.view;
    world.scene.add(view);
    world.addFrameListener(function() {
        view.rotation.x += 0.01;
        view.rotation.y += 0.01;
    });
}
