
        var scene, camera, renderer, volume;
        var sound1;
        var mSound1;

    

        init();

        function init() {

            scene = new THREE.Scene();

            clock = new THREE.Clock();

            camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 100 );
            camera.position.set(0,3,10);
     
            renderer = new THREE.WebGLRenderer();
            renderer.setSize( window.innerWidth, window.innerHeight );
            renderer.setClearColor(new THREE.Color(0xaabbff));
            document.body.appendChild( renderer.domElement );

            const controls = new THREE.OrbitControls(camera, renderer.domElement);
            controls.target.set(0,0,0);
            controls.update();

            const assetPath = '';
            const loader = new THREE.GLTFLoader();
            loader.setPath(assetPath);

        
        loader.load('piyano2.glb', function(object) {
            const tus = object.scene.children[34];
            

            const listener = new THREE.AudioListener();
            camera.add( listener );

            sound1 = new THREE.Audio( listener );
           

            const audioLoader = new THREE.AudioLoader();
           
            audioLoader.load( 'notes/G1.mp3', function( buffer ) {
                sound1.setBuffer( buffer );
                sound1.setLoop( false );
                sound1.setVolume( 1 );
            },
            );
            
        });    
            animate();

            
            document.addEventListener("keydown", soundPlay, false);

            function soundPlay(event) {

               
                var keyCode = event.which;

                mSound1.color.set('red');
                
                if(keyCode == 65) {
                    if(sound1.isPlaying) {
                        
                        sound1.stop();
                        sound1.play();
                    } else {
                        sound1.play();
                        mSound1.color.set('white');
                    }   
                }
                
                renderer.render(scene, camera);
                
            }



        }

        function animate() {
            requestAnimationFrame(animate); 
            renderer.render(scene, camera);
            
        }

   