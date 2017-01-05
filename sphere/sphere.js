function Sphere() {
    var color = Math.ceil(Math.random() * 0xffffff);
    this.view = new THREE.Mesh(
        new THREE.SphereGeometry(1, 100, 100), 
        new THREE.MeshPhongMaterial({color: color})
    );
    this.view.position.z = 1;
}

Sphere.prototype.addToWorld = function(world) {
    var view = this.view;
    world.scene.add(view);
    var forward = true;
    world.addFrameListener(function() {
        if (forward) {
            view.position.x += 0.02;
            view.position.y += 0.02;
        } else {
            view.position.x -= 0.02;
            view.position.y -= 0.02;
        }
        if (view.position.x < -2 || view.position.x > 2) {
            forward = !forward;
        }
    });
}
