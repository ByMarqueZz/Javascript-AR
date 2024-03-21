window.onload = function() {
    const models = [
        {
            "model": "./models/prueba.glb",
            "marker": "./markers/pattern-marker.patt"
        },
        {
            "model": "./models/room.glb",
            "marker": "./markers/pancarta64.patt"
        },
        {
            "model": "./models/chair.glb",
            "marker": "./markers/pancarta68.patt"
        }
    ]
    // creating scene
    const scene = document.createElement('a-scene');
    scene.setAttribute('embedded', '');
    scene.setAttribute('arjs', '');
    models.forEach((modelChild) => {
        // creacion marker
        const marker = document.createElement('a-marker');
        marker.setAttribute('type', 'pattern');
        marker.setAttribute('url', modelChild.marker);
        // creacion model
        const model = document.createElement('a-entity');
        model.setAttribute('gltf-model', `url(${modelChild.model})`);
        model.setAttribute('scale', '0.5 0.5 0.5');
        // append
        marker.appendChild(model);
        scene.appendChild(marker);
    })
    // append to body
    document.body.appendChild(scene);
}