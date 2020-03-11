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
        let cameraOrtho, mobileOrthoCamera, cameraPerspective, activeCamera, cameraRig;

        let frustumSize = 35;
        let mobileFrustumSize = 55;
        let aspect = window.innerWidth / window.innerHeight;
        let textMesh;
        let textMeshGroup = new THREE.Group();
        let group = new THREE.Group();
        let width = window.innerWidth;
        let height = window.innerHeight;
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
            setTimeout(() => {
                gyroPresent = true;
                activeCamera = mobileOrthoCamera;
                controls = new DeviceOrientationControls(group);
            }, 0);
        });
        init();
        initMesh();
        addCamera();
        animate();

        let randomizeMatrix = function () {

            let position = new THREE.Vector3();
            let rotation = new THREE.Euler();
            let quaternion = new THREE.Quaternion();
            let scale = new THREE.Vector3();

            return function (matrix) {

                position.x = Math.random() * 70 - 35;
                position.y = Math.random() * 70 - 35;
                position.z = Math.random() * 70 - 35;

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
            let count = gyroPresent ? 150 : 250;
            for (let i = 0; i < count; i++) {

                randomizeMatrix(matrix);

                let mesh = new THREE.Mesh(geometry, material);
                mesh.applyMatrix4(matrix);
                group.add(mesh);

            }

        }

        function init() {

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
            Object.assign(window, {scene});
        }

        function addCamera() {
            cameraPerspective = new THREE.PerspectiveCamera(70, width / height, 1, 100);

            cameraOrtho = new THREE.OrthographicCamera(frustumSize * aspect / -2, frustumSize * aspect / 2, frustumSize / 2, frustumSize / -2, 1, 1000);
            cameraOrtho.position.z = 100;

            mobileOrthoCamera = new THREE.OrthographicCamera(mobileFrustumSize * aspect / -2, mobileFrustumSize * aspect / 2, mobileFrustumSize / 2, mobileFrustumSize / -2, 1, 1000);
            mobileOrthoCamera.position.z = 100;

            cameraRig = new THREE.Group();

            cameraRig.add(cameraOrtho);
            cameraRig.add(mobileOrthoCamera);
            activeCamera = cameraOrtho;

            scene.add(cameraRig);

            controls = new TrackballControls(activeCamera, renderer.domElement);

            controls.rotateSpeed = 1.0;
            controls.zoomSpeed = 1.2;
            controls.panSpeed = 0.8;

            controls.keys = [65, 83, 68];


            window.addEventListener('resize', onWindowResize, false);

        }

        //

        function onWindowResize() {

            if (gyroPresent) {
                activeCamera.aspect = window.innerWidth / window.innerHeight;
                activeCamera.updateProjectionMatrix();
            } else {
                let aspect = window.innerWidth / window.innerHeight;

                activeCamera.left = -frustumSize * aspect / 2;
                activeCamera.right = frustumSize * aspect / 2;
                activeCamera.top = frustumSize / 2;
                activeCamera.bottom = -frustumSize / 2;
                activeCamera.updateProjectionMatrix();
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
            activeCamera.updateProjectionMatrix();
            renderer.render(scene, activeCamera);

        }
    }, []);

    return (
        <div id='container' className="flex-1"/>
    )
};