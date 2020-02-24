import React, {useEffect} from 'react';
import * as THREE from 'three';
import {TrackballControls} from 'three/examples/jsm/controls/TrackballControls.js';
import {STLLoader} from 'three/examples/jsm/loaders/STLLoader.js';
import {DeviceOrientationControls} from 'three/examples/jsm/controls/DeviceOrientationControls.js';


export default (props) => {

    useEffect(() => {

        let container;
        let camera, controls, scene, renderer, material;
        let gyroPresent = false;

        let frustumSize = 40;
        let aspect = window.innerWidth / window.innerHeight;
        let textMesh;
        let textMeshGroup = new THREE.Group();
        let group = new THREE.Group();
        let check = {
            gyroscope: function (callback) {
                function handler(event) {
                    var hasGyro = typeof event.alpha === 'number'
                        && typeof event.beta === 'number'
                        && typeof event.gamma === 'number';
                    window.removeEventListener('deviceorientation', handler, false);
                    callback(hasGyro);
                }

                window.addEventListener('deviceorientation', handler, false);
            }
        };

        check.gyroscope(function () {
            setTimeout( () => {
                while(container.firstChild){
                    container.removeChild(container.lastChild)
                }
                gyroPresent = true;
                init();
                initMesh();
                animate();
            }, 0 );
        });
        init();
        initMesh();
        animate();
        let randomizeMatrix = function () {

            let position = new THREE.Vector3();
            let rotation = new THREE.Euler();
            let quaternion = new THREE.Quaternion();
            let scale = new THREE.Vector3();

            return function (matrix) {

                position.x = Math.random() * 80 - 40;
                position.y = Math.random() * 80 - 40;
                position.z = Math.random() * 80 - 40;

                rotation.x = Math.random() * 2 * Math.PI;
                rotation.y = Math.random() * 2 * Math.PI;
                rotation.z = Math.random() * 2 * Math.PI;

                quaternion.setFromEuler(rotation);

                scale.x = scale.y = scale.z = Math.random() * 1;

                matrix.compose(position, quaternion, scale);

            };

        }();

        function initMesh() {
            material = new THREE.MeshNormalMaterial();
            new STLLoader().load('/models/cat.stl', function (geometry) {
                geometry.scale(0.1, 0.1, 0.1);

                geometry.computeVertexNormals();

                makeNaive(geometry);
            }, null, (e) => {
                console.log(e);
            });
            let loader = new THREE.FontLoader();

            loader.load('/fonts/helvetiker_regular.typeface.json', function (font) {

                let geometry = new THREE.TextGeometry(props.text, {
                    font: font,
                    size: 3,
                    height: 1,
                    curveSegments: 12,
                    bevelEnabled: true,
                    bevelThickness: 0.2,
                    bevelSize: 0.2,
                    bevelOffset: 0,
                    bevelSegments: 5,
                    align: 'center'
                });
                textMesh = new THREE.Mesh(geometry, material);
                textMesh.position.x = -8;
                textMeshGroup.add(textMesh);
                scene.add(textMeshGroup);
            });

        }

        function makeNaive(geometry) {

            let matrix = new THREE.Matrix4();
            let count = gyroPresent ? 200 : 350;
            for (let i = 0; i <  count; i++) {

                randomizeMatrix(matrix);

                let mesh = new THREE.Mesh(geometry, material);
                mesh.applyMatrix4(matrix);
                group.add(mesh);

            }

        }

        function init() {
            let width = window.innerWidth;
            let height = window.innerHeight;

            // renderer

            renderer = new THREE.WebGLRenderer({antialias: true, alpha: true});
            renderer.setPixelRatio(window.devicePixelRatio);
            renderer.setSize(width, height);
            renderer.outputEncoding = THREE.sRGBEncoding;

            container = document.getElementById('container');
            container.appendChild(renderer.domElement);

            // scene

            scene = new THREE.Scene();
            scene.add(group);
            scene.add(textMeshGroup);
            if (gyroPresent) {

                // camera
                camera = new THREE.PerspectiveCamera(70, width / height, 1, 100);
                camera.position.z = 40;
                controls = new DeviceOrientationControls(group);
            } else {

                // camera
                camera = new THREE.OrthographicCamera(frustumSize * aspect / -2, frustumSize * aspect / 2, frustumSize / 2, frustumSize / -2, 1, 1000);
                camera.position.z = 100;


                controls = new TrackballControls(camera, renderer.domElement);
                controls.autoRotate = true;

                controls.rotateSpeed = 1.0;
                controls.zoomSpeed = 1.2;
                controls.panSpeed = 0.8;

                controls.keys = [65, 83, 68];

            }
            window.addEventListener('resize', onWindowResize, false);

            Object.assign(window, {scene});
        }

        //

        function onWindowResize() {

            if (gyroPresent) {
                camera.aspect = window.innerWidth / window.innerHeight;
                camera.updateProjectionMatrix();
            } else {
                let aspect = window.innerWidth / window.innerHeight;

                camera.left = -frustumSize * aspect / 2;
                camera.right = frustumSize * aspect / 2;
                camera.top = frustumSize / 2;
                camera.bottom = -frustumSize / 2;
                camera.updateProjectionMatrix();
                controls.handleResize();
            }

            renderer.setSize(window.innerWidth, window.innerHeight);

        }

        function animate() {

            requestAnimationFrame(animate);
            group.rotation.y -= 0.0009;
            group.rotation.x -= 0.0018;

            controls.update();

            render();

        }

        function render() {

            renderer.render(scene, camera);

        }
    }, []);

    return (
        <div id='container' className="flex-1"/>
    )
};