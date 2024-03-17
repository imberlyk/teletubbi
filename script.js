// Function to smoothly update camera position and rotation
AFRAME.registerComponent('smooth-camera', {
    init: function () {
      this.previousPosition = new THREE.Vector3();
      this.previousRotation = new THREE.Vector3();
    },
    tick: function () {
      const currentPosition = this.el.object3D.position;
      const currentRotation = this.el.object3D.rotation;
      
      // Smoothly interpolate camera position
      this.previousPosition.lerp(currentPosition, 0.1);
      this.el.object3D.position.copy(this.previousPosition);
  
      // Smoothly interpolate camera rotation
      this.previousRotation.lerp(currentRotation, 0.1);
      this.el.object3D.rotation.copy(this.previousRotation);
    }
  });
  