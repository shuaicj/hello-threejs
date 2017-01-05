function Shape() {
    var color = Math.ceil(Math.random() * 0xffffff);
    var shape = new THREE.Shape();
    var xy = [
        {x: 1, y: 1}, {x: 1, y: 2}, {x: 2, y: 3}, {x: 3, y: 3}, 
        {x: 3, y: 4}, {x: 4, y: 4}, {x: 4, y: 3}, {x: 3, y: 2}, 
        {x: 4, y: 2}, {x: 4, y: 1}, {x: 5, y: 1}, {x: 5, y: 0},
        {x: 4, y: -1}, {x: 3, y: -1}, {x: 3, y: 0}, {x: 2, y: 0}, 
        {x: 2, y: 1}
    ];
    shape.moveTo(xy[0].x, xy[0].y);
    for (var i = 1; i < xy.length; i++) {
        shape.lineTo(xy[i].x, xy[i].y);
    }
    shape.lineTo(xy[0].x, xy[0].y);
    this.view = new THREE.Mesh(
        new THREE.ShapeGeometry(shape), 
        new THREE.MeshPhongMaterial({color: color, side: THREE.DoubleSide})
    );
    this.view.position.z = 1;
}

Shape.prototype.addToWorld = function(world) {
    var view = this.view;
    world.scene.add(view);
    world.addFrameListener(function() {
        view.rotation.x += 0.01;
        view.rotation.y += 0.01;
    });
}
