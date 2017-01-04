function Floor() {
    this.view = new THREE.Group();
    this.radius = 10;
    this.color = 0x888888;
    for (var x = -this.radius; x <= this.radius; x++) {
        this.drawLine(x, -this.radius, x, this.radius);
    }
    for (var y = -this.radius; y <= this.radius; y++) {
        this.drawLine(-this.radius, y, this.radius, y);
    }
}

Floor.prototype.drawLine = function(x0, y0, x1, y1) {
    var material = new THREE.LineBasicMaterial({color: this.color});
    var geometry = new THREE.Geometry();
    var v0 = new THREE.Vector3(x0, y0, -0.01);
    var v1 = new THREE.Vector3(x1, y1, -0.01);
    geometry.vertices.push(v0, v1);
    this.view.add(new THREE.Line(geometry, material));
}

Floor.prototype.addToWorld = function(world) {
    world.scene.add(this.view);
}
