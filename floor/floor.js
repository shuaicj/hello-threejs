function Floor() {
    this.radius = 10;
    this.color = 0x888888;
    this.view = new THREE.Mesh(
        new THREE.PlaneGeometry(2 * this.radius, 2 * this.radius), 
        new THREE.MeshPhongMaterial({color: this.color, side: THREE.DoubleSide})
    );
    this.view.position.z = -0.01;
    this.view.receiveShadow = true;
}

Floor.prototype.addToWorld = function(world) {
    world.scene.add(this.view);
}
