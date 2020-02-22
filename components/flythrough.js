import {useEffect} from 'react';
import * as THREE from 'three';
import Stats from 'three/examples/jsm/libs/stats.module.js';
import {OrbitControls} from 'three/examples/jsm/controls/OrbitControls.js';
import {STLLoader} from 'three/examples/jsm/loaders/STLLoader.js';


export default () => {

    useEffect(() => {

        let container;
        let camera, controls, scene, renderer, material;

        //

        init();
        initMesh();
        addText();
        animate();
        let randomizeMatrix = function () {

            let position = new THREE.Vector3();
            let rotation = new THREE.Euler();
            let quaternion = new THREE.Quaternion();
            let scale = new THREE.Vector3();

            return function (matrix) {

                position.x = Math.random() * 40 - 20;
                position.y = Math.random() * 40 - 20;
                position.z = Math.random() * 40 - 20;

                rotation.x = Math.random() * 2 * Math.PI;
                rotation.y = Math.random() * 2 * Math.PI;
                rotation.z = Math.random() * 2 * Math.PI;

                quaternion.setFromEuler(rotation);

                scale.x = scale.y = scale.z = Math.random() * 1;

                matrix.compose(position, quaternion, scale);

            };

        }();

        function initMesh() {

            new STLLoader().load('/models/cat.stl', function (geometry) {
                geometry.scale(0.1,0.1,0.1);
                material = new THREE.MeshNormalMaterial();

                geometry.computeVertexNormals();

                makeNaive(geometry);
            }, null, (e) => {
                console.log(e);
            });

        }

        function addText() {
            let loader = new THREE.FontLoader();

            loader.load('https://threejs.org/examples/fonts/helvetiker_regular.typeface.json', function (font) {

                let geometry = new THREE.TextGeometry('yik.dev', {
                    font: font,
                    size: 3.5,
                    height: 1,
                    curveSegments: 12,
                    bevelEnabled: true,
                    bevelThickness: 0.1,
                    bevelSize: 0.1,
                    bevelOffset: 0,
                    bevelSegments: 5
                });
                let mesh = new THREE.Mesh(geometry, material);
                mesh.position.x = -5;
                scene.add(mesh);
            });
        }


        function makeNaive(geometry) {

            let matrix = new THREE.Matrix4();

            for (let i = 0; i < 200; i++) {

                randomizeMatrix(matrix);

                let mesh = new THREE.Mesh(geometry, material);
                mesh.applyMatrix4(matrix);

                scene.add(mesh);

            }

        }

        function init() {

            let width = window.innerWidth;
            let height = window.innerHeight;

            // camera

            camera = new THREE.PerspectiveCamera(70, width / height, 1, 100);
            camera.position.z = 30;

            // renderer

            renderer = new THREE.WebGLRenderer({antialias: true});
            renderer.setPixelRatio(window.devicePixelRatio);
            renderer.setSize(width, height);
            renderer.outputEncoding = THREE.sRGBEncoding;

            container = document.getElementById('container');
            container.appendChild(renderer.domElement);

            // scene

            scene = new THREE.Scene();
            scene.background = new THREE.Color(0x000000);

            // controls

            controls = new OrbitControls(camera, renderer.domElement);
            controls.autoRotate = false;

            window.addEventListener('resize', onWindowResize, false);

            Object.assign(window, {scene});

        }

        //

        function onWindowResize() {

            let width = window.innerWidth;
            let height = window.innerHeight;

            camera.aspect = width / height;
            camera.updateProjectionMatrix();

            renderer.setSize(width, height);

        }

        function animate() {

            requestAnimationFrame(animate);

            controls.update();

            render();

        }

        function render() {

            renderer.render(scene, camera);

        }
    }, []);

    return (
        <div id='container'></div>
    )
};