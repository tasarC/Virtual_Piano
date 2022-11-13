

        
        var mixers = [];
        var actions = [];
        var scene, camera, renderer, volume,clock, nota , mode;
        var sound1, sound2, sound3, sound4, sound5, sound6, sound7,sound8;
        var mB1, mB2, mSound3, mSound4, mSound4, mSound5, mSound6, mSound7,msound8;
        mode = 'open';
        
        init();

        function init() {

            
            clock = new THREE.Clock();

            scene = new THREE.Scene();
            scene.background = new THREE.Color(0xf);

            camera = new THREE.PerspectiveCamera( 90, window.innerWidth / window.innerHeight, 0.1, 100 );
            camera.position.set(0,15,15);
            camera.rotation.set(Math.PI/4, 0,0)

            const ambient = new THREE.HemisphereLight(0xffffcc, 0x080820);
            scene.add(ambient);

            const light = new THREE.DirectionalLight(0xffffff, 0.5);
            light.position.set(0,5,-100);
            scene.add(light);
     
            renderer = new THREE.WebGLRenderer();
            renderer.setSize( window.innerWidth, window.innerHeight );
            document.body.appendChild( renderer.domElement );

            const controls = new THREE.OrbitControls(camera, renderer.domElement);
            controls.target.set(1,2,0);
            controls.update();

            const buyukluk = 100;
            const bolumler = 100;
            const izgara = new THREE.GridHelper( buyukluk, bolumler,0xffffff,0xffffff);
            scene.add( izgara );

            nota = document.getElementById('nota');

            const assetPath = '';
            const loader = new THREE.GLTFLoader();
            loader.setPath(assetPath);
            
            // document.addEventListener('keydown', canlandir, false);
            
            loader.load('piyanocn.glb', function(object) {
                
                
             scene.add(object.scene); 

            });
        
            const gB1 = new THREE.BoxGeometry(0.28,0.206,1.5);
            const mB1 = new THREE.MeshBasicMaterial({color: 'white'});
            const oB1 = new THREE.Mesh(gB1, mB1);
            scene.add(oB1);
            oB1.position.set(-7.16,8,5);
            const gS1 = new THREE.BoxGeometry(0.22,0.2,1.2);
            const mS1 = new THREE.MeshBasicMaterial({color: 'black'});
            const oS1 = new THREE.Mesh(gS1, mS1);
            scene.add(oS1);
            oS1.position.set(-7.06,8.1,4.6);
            
            const gB2 = new THREE.BoxGeometry(0.28,0.206,1.5);
            const mB2 = new THREE.MeshBasicMaterial({color: 'white'});
            const oB2 = new THREE.Mesh(gB2, mB2);
            scene.add(oB2);
            oB2.position.set(-6.9,8,5);
            
            const gB3 = new THREE.BoxGeometry(0.28,0.206,1.5);
            const mB3 = new THREE.MeshBasicMaterial({color: 'white'});
            const oB3 = new THREE.Mesh(gB3, mB3);
            scene.add(oB3);
            oB3.position.set(-6.64,8,5) ;
            const gS2 = new THREE.BoxGeometry(0.22,0.2,1.2);
            const mS2 = new THREE.MeshBasicMaterial({color: 'black'});
            const oS2 = new THREE.Mesh(gS2, mS2);
            scene.add(oS2);
            oS2.position.set(-6.54,8.1,4.6);

            const gB4 = new THREE.BoxGeometry(0.28,0.206,1.5);
            const mB4 = new THREE.MeshBasicMaterial({color: 'white'});
            const oB4 = new THREE.Mesh(gB4, mB4);
            scene.add(oB4);
            oB4.position.set(-6.38,8,5);
            const gS3 = new THREE.BoxGeometry(0.22,0.2,1.2);
            const mS3= new THREE.MeshBasicMaterial({color: 'black'});
            const oS3 = new THREE.Mesh(gS3, mS3);
            scene.add(oS3);
            oS3.position.set(-6.28,8.1,4.6);

            const gB5 = new THREE.BoxGeometry(0.28,0.206,1.5);
            const mB5 = new THREE.MeshBasicMaterial({color: 'white'});
            const oB5 = new THREE.Mesh(gB5, mB5);
            scene.add(oB5);
            oB5.position.set(-6.12,8,5);
            

            const gB6 = new THREE.BoxGeometry(0.28,0.206,1.5);
            const mB6 = new THREE.MeshBasicMaterial({color: 'white'});
            const oB6 = new THREE.Mesh(gB6, mB6);
            scene.add(oB6);
            oB6.position.set(-5.86,8,5);
            const gS4 = new THREE.BoxGeometry(0.22,0.2,1.2);
            const mS4= new THREE.MeshBasicMaterial({color: 'black'});
            const oS4 = new THREE.Mesh(gS4, mS4);
            scene.add(oS4);
            oS4.position.set(-5.76,8.1,4.6);

            

            const gB7 = new THREE.BoxGeometry(0.28,0.206,1.5);
            const mB7 = new THREE.MeshBasicMaterial({color: 'white'});
            const oB7 = new THREE.Mesh(gB7, mB7);
            scene.add(oB7);
            oB7.position.set(-5.6,8,5);
            const gS5 = new THREE.BoxGeometry(0.22,0.2,1.2);
            const mS5= new THREE.MeshBasicMaterial({color: 'black'});
            const oS5 = new THREE.Mesh(gS5, mS5);
            scene.add(oS5);
            oS5.position.set(-5.5,8.1,4.6);


            const gB8 = new THREE.BoxGeometry(0.28,0.206,1.5);
            const mB8 = new THREE.MeshBasicMaterial({color: 'white'});
            const oB8 = new THREE.Mesh(gB8, mB8);
            scene.add(oB8);
            oB8.position.set(-5.34,8,5);
            const gS6 = new THREE.BoxGeometry(0.22,0.2,1.2);
            const mS6 = new THREE.MeshBasicMaterial({color: 'black'});
            const oS6 = new THREE.Mesh(gS6, mS6);
            scene.add(oS6);
            oS6.position.set(-5.24,8.1,4.6);
            
            const gB9 = new THREE.BoxGeometry(0.28,0.206,1.5);
            const mB9 = new THREE.MeshBasicMaterial({color: 'white'});
            const oB9 = new THREE.Mesh(gB9, mB9);
            scene.add(oB9);
            oB9.position.set( -5.08,8,5); 

            const gB10 = new THREE.BoxGeometry(0.28,0.206,1.5);
            const mB10 = new THREE.MeshBasicMaterial({color: 'white'});
            const oB10 = new THREE.Mesh(gB10, mB10);
            scene.add(oB10);
            oB10.position.set(-4.82,8,5);
            const gS7 = new THREE.BoxGeometry(0.22,0.2,1.2);
            const mS7 = new THREE.MeshBasicMaterial({color: 'black'});
            const oS7 = new THREE.Mesh(gS7, mS7);
            scene.add(oS7);
            oS7.position.set(-4.72,8.1,4.6);

            const gB11 = new THREE.BoxGeometry(0.28,0.206,1.5);
            const mB11 = new THREE.MeshBasicMaterial({color: 'white'});
            const oB11 = new THREE.Mesh(gB11, mB11);
            scene.add(oB11);
            oB11.position.set(-4.56,8,5) ;
            const gS8 = new THREE.BoxGeometry(0.22,0.2,1.2);
            const mS8= new THREE.MeshBasicMaterial({color: 'black'});
            const oS8 = new THREE.Mesh(gS8, mS8);
            scene.add(oS8);
            oS8.position.set(-4.46,8.1,4.6);
            
            const gB12 = new THREE.BoxGeometry(0.28,0.206,1.5);
            const mB12 = new THREE.MeshBasicMaterial({color: 'white'});
            const oB12 = new THREE.Mesh(gB12, mB12);
            scene.add(oB12);
            oB12.position.set(-4.3,8,5);
            
            const gB13 = new THREE.BoxGeometry(0.28,0.206,1.5);
            const mB13 = new THREE.MeshBasicMaterial({color: 'white'});
            const oB13 = new THREE.Mesh(gB13, mB13);
            scene.add(oB13);
            oB13.position.set(-4.04,8,5);
            const gS9 = new THREE.BoxGeometry(0.22,0.2,1.2);
            const mS9= new THREE.MeshBasicMaterial({color: 'black'});
            const oS9 = new THREE.Mesh(gS9, mS9);
            scene.add(oS9);
            oS9.position.set(-3.94,8.1,4.6);
           

            const gB14 = new THREE.BoxGeometry(0.28,0.206,1.5);
            const mB14 = new THREE.MeshBasicMaterial({color: 'white'});
            const oB14 = new THREE.Mesh(gB14, mB14);
            scene.add(oB14);
            oB14.position.set(-3.78,8,5) ;
            const gS10 = new THREE.BoxGeometry(0.22,0.2,1.2);
            const mS10 = new THREE.MeshBasicMaterial({color: 'black'});
            const oS10 = new THREE.Mesh(gS10, mS10);
            scene.add(oS10);
            oS10.position.set(-3.68,8.1,4.6);
            
            const gB15 = new THREE.BoxGeometry(0.28,0.206,1.5);
            const mB15 = new THREE.MeshBasicMaterial({color: 'white'});
            const oB15 = new THREE.Mesh(gB15, mB15);
            scene.add(oB15);
            oB15.position.set(-3.52,8,5);
            const gS11 = new THREE.BoxGeometry(0.22,0.2,1.2);
            const mS11 = new THREE.MeshBasicMaterial({color: 'black'});
            const oS11 = new THREE.Mesh(gS11, mS11);
            scene.add(oS11);
            oS11.position.set(-3.42,8.1,4.6);
            
            const gB16 = new THREE.BoxGeometry(0.28,0.206,1.5);
            const mB16 = new THREE.MeshBasicMaterial({color: 'white'});
            const oB16 = new THREE.Mesh(gB16, mB16);
            scene.add(oB16);
            oB16.position.set(-3.26,8,5);
            

            const gB17 = new THREE.BoxGeometry(0.28,0.206,1.5);
            const mB17 = new THREE.MeshBasicMaterial({color: 'white'});
            const oB17 = new THREE.Mesh(gB17, mB17);
            scene.add(oB17);
            oB17.position.set(-3,8,5) ;
            const gS12 = new THREE.BoxGeometry(0.22,0.2,1.2);
            const mS12= new THREE.MeshBasicMaterial({color: 'black'});
            const oS12 = new THREE.Mesh(gS12, mS12);
            scene.add(oS12);
            oS12.position.set(-2.90,8.1,4.6);

            const gB18 = new THREE.BoxGeometry(0.28,0.206,1.5);
            const mB18 = new THREE.MeshBasicMaterial({color: 'white'});
            const oB18 = new THREE.Mesh(gB18, mB18);
            scene.add(oB18);
            oB18.position.set(-2.74,8,5);
            const gS13 = new THREE.BoxGeometry(0.22,0.2,1.2);
            const mS13= new THREE.MeshBasicMaterial({color: 'black'});
            const oS13 = new THREE.Mesh(gS13, mS13);
            scene.add(oS13);
            oS13.position.set(-2.64,8.1,4.6);

            const gB19 = new THREE.BoxGeometry(0.28,0.206,1.5);
            const mB19= new THREE.MeshBasicMaterial({color: 'white'});
            const oB19 = new THREE.Mesh(gB19, mB19);
            scene.add(oB19);
            oB19.position.set(-2.48,8,5);
 
            const gB20 = new THREE.BoxGeometry(0.28,0.206,1.5);
            const mB20 = new THREE.MeshBasicMaterial({color: 'white'});
            const oB20 = new THREE.Mesh(gB20, mB20);
            scene.add(oB20);
            oB20.position.set(-2.22,8,5) ;
            const gS14 = new THREE.BoxGeometry(0.22,0.2,1.2);
            const mS14= new THREE.MeshBasicMaterial({color: 'black'});
            const oS14 = new THREE.Mesh(gS14, mS14);
            scene.add(oS14);
            oS14.position.set(-2.12,8.1,4.6); //tekrar

            const gB21 = new THREE.BoxGeometry(0.28,0.206,1.5);
            const mB21 = new THREE.MeshBasicMaterial({color: 'white'});
            const oB21 = new THREE.Mesh(gB21, mB21);
            scene.add(oB21);
            oB21.position.set(-1.96,8,5);
            const gS15 = new THREE.BoxGeometry(0.22,0.2,1.2);
            const mS15= new THREE.MeshBasicMaterial({color: 'black'});
            const oS15 = new THREE.Mesh(gS15, mS15);
            scene.add(oS15);
            oS15.position.set(-1.86,8.1,4.6);


            const gB22 = new THREE.BoxGeometry(0.28,0.206,1.5);
            const mB22 = new THREE.MeshBasicMaterial({color: 'white'});
            const oB22 = new THREE.Mesh(gB22, mB22);
            scene.add(oB22);
            oB22.position.set(-1.8,8,5);
            const gS16 = new THREE.BoxGeometry(0.22,0.2,1.2);
            const mS16 = new THREE.MeshBasicMaterial({color: 'black'});
            const oS16 = new THREE.Mesh(gS16, mS16);
            scene.add(oS16);
            oS16.position.set(-1.6,8.1,4.6);
            
            const gB23 = new THREE.BoxGeometry(0.28,0.206,1.5);
            const mB23 = new THREE.MeshBasicMaterial({color: 'white'});
            const oB23 = new THREE.Mesh(gB23, mB23);
            scene.add(oB23);
            oB23.position.set(-1.5,8,5); 

            const gB24 = new THREE.BoxGeometry(0.28,0.206,1.5);
            const mB24 = new THREE.MeshBasicMaterial({color: 'white'});
            const oB24 = new THREE.Mesh(gB24, mB24);
            scene.add(oB24);
            oB24.position.set(-1.2,8,5);
            const gS17 = new THREE.BoxGeometry(0.22,0.2,1.2);
            const mS17 = new THREE.MeshBasicMaterial({color: 'black'});
            const oS17 = new THREE.Mesh(gS17, mS17);
            scene.add(oS17);
            oS17.position.set(-1.05,8.1,4.6);

            const gB25 = new THREE.BoxGeometry(0.28,0.206,1.5);
            const mB25 = new THREE.MeshBasicMaterial({color: 'white'});
            const oB25 = new THREE.Mesh(gB25, mB25);
            scene.add(oB25);
            oB25.position.set(-0.9,8,5) ;
            const gS18 = new THREE.BoxGeometry(0.22,0.2,1.2);
            const mS18= new THREE.MeshBasicMaterial({color: 'black'});
            const oS18 = new THREE.Mesh(gS18, mS18);
            scene.add(oS18);
            oS18.position.set(-0.75,8.1,4.6);
            
            const gB26 = new THREE.BoxGeometry(0.28,0.206,1.5);
            const mB26 = new THREE.MeshBasicMaterial({color: 'white'});
            const oB26 = new THREE.Mesh(gB26, mB26);
            scene.add(oB26);
            oB26.position.set(-0.6,8,5);
            
            const gB27 = new THREE.BoxGeometry(0.28,0.206,1.5);
            const mB27 = new THREE.MeshBasicMaterial({color: 'white'});
            const oB27 = new THREE.Mesh(gB27, mB27);
            scene.add(oB27);
            oB27.position.set(-0.3,8,5);
            const gS19 = new THREE.BoxGeometry(0.22,0.2,1.2);
            const mS19= new THREE.MeshBasicMaterial({color: 'black'});
            const oS19 = new THREE.Mesh(gS19, mS19);
            scene.add(oS19);
            oS19.position.set(-0.15,8.1,4.6);
           

            const gB28 = new THREE.BoxGeometry(0.28,0.206,1.5);
            const mB28 = new THREE.MeshBasicMaterial({color: 'white'});
            const oB28 = new THREE.Mesh(gB28, mB28);
            scene.add(oB28);
            oB28.position.set(0,8,5) ;
            const gS20 = new THREE.BoxGeometry(0.22,0.2,1.2);
            const mS20 = new THREE.MeshBasicMaterial({color: 'black'});
            const oS20 = new THREE.Mesh(gS20, mS20);
            scene.add(oS20);
            oS20.position.set(0.15,8.1,4.6);

            const gB29 = new THREE.BoxGeometry(0.28,0.206,1.5);
            const mB29 = new THREE.MeshBasicMaterial({color: 'white'});
            const oB29 = new THREE.Mesh(gB29, mB29);
            scene.add(oB29);
            oB29.position.set(0.3,8,5);
            const gS21 = new THREE.BoxGeometry(0.22,0.2,1.2);
            const mS21 = new THREE.MeshBasicMaterial({color: 'black'});
            const oS21 = new THREE.Mesh(gS21, mS21);
            scene.add(oS21);
            oS21.position.set(0.45,8.1,4.6);
            
            const gB30 = new THREE.BoxGeometry(0.28,0.206,1.5);
            const mB30 = new THREE.MeshBasicMaterial({color: 'white'});
            const oB30 = new THREE.Mesh(gB30, mB30);
            scene.add(oB30);
            oB30.position.set(0.6,8,5);
            
            const gB31 = new THREE.BoxGeometry(0.28,0.206,1.5);
            const mB31 = new THREE.MeshBasicMaterial({color: 'white'});
            const oB31 = new THREE.Mesh(gB31, mB31);
            scene.add(oB31);
            oB31.position.set(0.9,8,5) ;
            const gS22 = new THREE.BoxGeometry(0.22,0.2,1.2);
            const mS22 = new THREE.MeshBasicMaterial({color: 'black'});
            const oS22 = new THREE.Mesh(gS22, mS22);
            scene.add(oS22);
            oS22.position.set(1.05,8.1,4.6);

            const gB32 = new THREE.BoxGeometry(0.28,0.206,1.5);
            const mB32 = new THREE.MeshBasicMaterial({color: 'white'});
            const oB32 = new THREE.Mesh(gB32, mB32);
            scene.add(oB32);
            oB32.position.set(1.2,8,5);
            const gS23 = new THREE.BoxGeometry(0.22,0.2,1.2);
            const mS23= new THREE.MeshBasicMaterial({color: 'black'});
            const oS23 = new THREE.Mesh(gS23, mS23);
            scene.add(oS23);
            oS23.position.set(1.35,8.1,4.6);

            const gB33 = new THREE.BoxGeometry(0.28,0.206,1.5);
            const mB33 = new THREE.MeshBasicMaterial({color: 'white'});
            const oB33 = new THREE.Mesh(gB33, mB33);
            scene.add(oB33);
            oB33.position.set(1.5,8,5);
            

            const gB34 = new THREE.BoxGeometry(0.28,0.206,1.5);
            const mB34 = new THREE.MeshBasicMaterial({color: 'white'});
            const oB34 = new THREE.Mesh(gB34, mB34);
            scene.add(oB34);
            oB34.position.set(1.8,8,5);
            const gS24 = new THREE.BoxGeometry(0.22,0.2,1.2);
            const mS24= new THREE.MeshBasicMaterial({color: 'black'});
            const oS24 = new THREE.Mesh(gS24, mS24);
            scene.add(oS24);
            oS24.position.set(1.95,8.1,4.6);

            const gB35 = new THREE.BoxGeometry(0.28,0.206,1.5);
            const mB35 = new THREE.MeshBasicMaterial({color: 'white'});
            const oB35 = new THREE.Mesh(gB35, mB35);
            scene.add(oB35);
            oB35.position.set(2.1,8,5);
            const gS25 = new THREE.BoxGeometry(0.22,0.2,1.2);
            const mS25= new THREE.MeshBasicMaterial({color: 'black'});
            const oS25 = new THREE.Mesh(gS25, mS25);
            scene.add(oS25);
            oS25.position.set(2.25,8.1,4.6); ///////////

            const gB36 = new THREE.BoxGeometry(0.28,0.206,1.5);
            const mB36 = new THREE.MeshBasicMaterial({color: 'white'});
            const oB36 = new THREE.Mesh(gB36, mB36);
            scene.add(oB36);
            oB36.position.set(2.4,8,5);
            const gS26 = new THREE.BoxGeometry(0.22,0.2,1.2);
            const mS26 = new THREE.MeshBasicMaterial({color: 'black'});
            const oS26 = new THREE.Mesh(gS26, mS26);
            scene.add(oS26);
            oS26.position.set(2.55,8.1,4.6);
            
            const gB37 = new THREE.BoxGeometry(0.28,0.206,1.5);
            const mB37 = new THREE.MeshBasicMaterial({color: 'white'});
            const oB37 = new THREE.Mesh(gB37, mB37);
            scene.add(oB37);
            oB37.position.set(2.7,8,5);
            
            const gB38 = new THREE.BoxGeometry(0.28,0.206,1.5);
            const mB38 = new THREE.MeshBasicMaterial({color: 'white'});
            const oB38 = new THREE.Mesh(gB38, mB38);
            scene.add(oB38);
            oB38.position.set(3,8,5) ;
            const gS27 = new THREE.BoxGeometry(0.22,0.2,1.2);
            const mS27 = new THREE.MeshBasicMaterial({color: 'black'});
            const oS27 = new THREE.Mesh(gS27, mS27);
            scene.add(oS27);
            oS27.position.set(3.15,8.1,4.6);

            const gB39 = new THREE.BoxGeometry(0.28,0.206,1.5);
            const mB39 = new THREE.MeshBasicMaterial({color: 'white'});
            const oB39 = new THREE.Mesh(gB39, mB39);
            scene.add(oB39);
            oB39.position.set(3.3,8,5);
            const gS28 = new THREE.BoxGeometry(0.22,0.2,1.2);
            const mS28= new THREE.MeshBasicMaterial({color: 'black'});
            const OS28 = new THREE.Mesh(gS28, mS28);
            scene.add(OS28);
            OS28.position.set(3.45,8.1,4.6);

            const gB40 = new THREE.BoxGeometry(0.28,0.206,1.5);
            const mB40 = new THREE.MeshBasicMaterial({color: 'white'});
            const oB40 = new THREE.Mesh(gB40, mB40);
            scene.add(oB40);
            oB40.position.set(3.6,8,5);
            

            const gB41 = new THREE.BoxGeometry(0.28,0.206,1.5);
            const mB41 = new THREE.MeshBasicMaterial({color: 'white'});
            const oB41 = new THREE.Mesh(gB41, mB41);
            scene.add(oB41);
            oB41.position.set(3.9,8,5);
            const gS29 = new THREE.BoxGeometry(0.22,0.2,1.2);
            const mS29= new THREE.MeshBasicMaterial({color: 'black'});
            const OS29 = new THREE.Mesh(gS29, mS29);
            scene.add(OS29);
            OS29.position.set(4.05,8.1,4.6);

            

            const gB42 = new THREE.BoxGeometry(0.28,0.206,1.5);
            const mB42 = new THREE.MeshBasicMaterial({color: 'white'});
            const oB42 = new THREE.Mesh(gB42, mB42);
            scene.add(oB42);
            oB42.position.set(4.2,8,5);
            const gS30 = new THREE.BoxGeometry(0.22,0.2,1.2);
            const mS30= new THREE.MeshBasicMaterial({color: 'black'});
            const OS30 = new THREE.Mesh(gS30, mS30);
            scene.add(OS30);
            OS30.position.set(4.35,8.1,4.6);


            const gB43 = new THREE.BoxGeometry(0.28,0.206,1.5);
            const mB43 = new THREE.MeshBasicMaterial({color: 'white'});
            const oB43 = new THREE.Mesh(gB43, mB43);
            scene.add(oB43);
            oB43.position.set(4.5,8,5);
            const gS31 = new THREE.BoxGeometry(0.22,0.2,1.2);
            const mS31 = new THREE.MeshBasicMaterial({color: 'black'});
            const oS31 = new THREE.Mesh(gS31, mS31);
            scene.add(oS31);
            oS31.position.set(4.65,8.1,4.6);
            
            const gB44 = new THREE.BoxGeometry(0.28,0.206,1.5);
            const mB44 = new THREE.MeshBasicMaterial({color: 'white'});
            const oB44 = new THREE.Mesh(gB44, mB44);
            scene.add(oB44);
            oB44.position.set(4.8,8,5); 

            const gB45 = new THREE.BoxGeometry(0.28,0.206,1.5);
            const mB45 = new THREE.MeshBasicMaterial({color: 'white'});
            const oB45 = new THREE.Mesh(gB45, mB45);
            scene.add(oB45);
            oB45.position.set(5.1,8,5);
            const gS32 = new THREE.BoxGeometry(0.22,0.2,1.2);
            const mS32 = new THREE.MeshBasicMaterial({color: 'black'});
            const OS32 = new THREE.Mesh(gS32, mS32);
            scene.add(OS32);
            OS32.position.set(5.25,8.1,4.6);

            const gB46 = new THREE.BoxGeometry(0.28,0.206,1.5);
            const mB46 = new THREE.MeshBasicMaterial({color: 'white'});
            const oB46 = new THREE.Mesh(gB46, mB46);
            scene.add(oB46);
            oB46.position.set(5.4,8,5) ;
            const gS33 = new THREE.BoxGeometry(0.22,0.2,1.2);
            const mS33= new THREE.MeshBasicMaterial({color: 'black'});
            const OS33 = new THREE.Mesh(gS33, mS33);
            scene.add(OS33);
            OS33.position.set(5.55,8.1,4.6);
            
            const gB47 = new THREE.BoxGeometry(0.28,0.206,1.5);
            const mB47 = new THREE.MeshBasicMaterial({color: 'white'});
            const oB47 = new THREE.Mesh(gB47, mB47);
            scene.add(oB47);
            oB47.position.set(5.7,8,5);
            
            const gB48 = new THREE.BoxGeometry(0.28,0.206,1.5);
            const mB48 = new THREE.MeshBasicMaterial({color: 'white'});
            const oB48 = new THREE.Mesh(gB48, mB48);
            scene.add(oB48);
            oB48.position.set(6,8,5);
            const gS34 = new THREE.BoxGeometry(0.22,0.2,1.2);
            const mS34= new THREE.MeshBasicMaterial({color: 'black'});
            const OS34 = new THREE.Mesh(gS34, mS34);
            scene.add(OS34);
            OS34.position.set(6.15,8.1,4.6);
           

            const gB49 = new THREE.BoxGeometry(0.28,0.206,1.5);
            const mB49 = new THREE.MeshBasicMaterial({color: 'white'});
            const oB49 = new THREE.Mesh(gB49, mB49);
            scene.add(oB49);
            oB49.position.set(6.3,8,5) ;
            const gS35 = new THREE.BoxGeometry(0.22,0.2,1.2);
            const mS35 = new THREE.MeshBasicMaterial({color: 'black'});
            const oS35 = new THREE.Mesh(gS35, mS35);
            scene.add(oS35);
            oS35.position.set(6.45,8.1,4.6);
            
            const gB50 = new THREE.BoxGeometry(0.28,0.206,1.5);
            const mB50 = new THREE.MeshBasicMaterial({color: 'white'});
            const oB50 = new THREE.Mesh(gB50, mB50);
            scene.add(oB50);
            oB50.position.set(6.6,8,5);
            const gS36 = new THREE.BoxGeometry(0.22,0.2,1.2);
            const mS36 = new THREE.MeshBasicMaterial({color: 'black'});
            const OS36 = new THREE.Mesh(gS36, mS36);
            scene.add(OS36);
            OS36.position.set(6.75,8.1,4.6);
            
            const gB51 = new THREE.BoxGeometry(0.28,0.206,1.5);
            const mB51 = new THREE.MeshBasicMaterial({color: 'white'});
            const oB51 = new THREE.Mesh(gB51, mB51);
            scene.add(oB51);
            oB51.position.set(6.9,8,5);
            

            const gB52 = new THREE.BoxGeometry(0.28,0.206,1.5);
            const mB52 = new THREE.MeshBasicMaterial({color: 'white'});
            const oB52 = new THREE.Mesh(gB52, mB52);
            scene.add(oB52);
            oB52.position.set(7.20,8,5) ;
            

            window.addEventListener('resize', resize, false);
            animate();


            const listener = new THREE.AudioListener();
            camera.add( listener );

            sound1 = new THREE.Audio( listener );
            sound2 = new THREE.Audio( listener );
            sound3 = new THREE.Audio( listener );
            sound4 = new THREE.Audio( listener );
            sound5 = new THREE.Audio( listener );
            sound6 = new THREE.Audio( listener );
            sound7 = new THREE.Audio( listener );
            sound8 = new THREE.Audio( listener );
            sound9 = new THREE.Audio( listener );
            sound10 = new THREE.Audio( listener );
            sound11 = new THREE.Audio( listener );
            sound12 = new THREE.Audio( listener );
            sound13 = new THREE.Audio( listener );
            sound14 = new THREE.Audio( listener );
            sound15 = new THREE.Audio( listener );
            sound16 = new THREE.Audio( listener );
            sound17 = new THREE.Audio( listener );
            sound18 = new THREE.Audio( listener );
            sound19 = new THREE.Audio( listener );
            sound20 = new THREE.Audio( listener );
            

            const audioLoader = new THREE.AudioLoader();
           
            audioLoader.load( 'notes/G1.mp3', function( buffer ) {
                sound1.setBuffer( buffer );
                sound1.setLoop( false );
                sound1.setVolume( 1 );
            },
            );
            audioLoader.load( 'notes/G2.mp3', function( buffer ) {
                sound2.setBuffer( buffer );
                sound2.setLoop( false );
                sound2.setVolume( 1 );
            },
            );
            audioLoader.load( 'notes/G3.mp3', function( buffer ) {
                sound3.setBuffer( buffer );
                sound3.setLoop( false );
                sound3.setVolume( 1 );
            },
            );
            audioLoader.load( 'notes/G4.mp3', function( buffer ) {
                sound4.setBuffer( buffer );
                sound4.setLoop( false );
                sound4.setVolume( 1 );
            },
            );
            audioLoader.load( 'notes/G5.mp3', function( buffer ) {
                sound5.setBuffer( buffer );
                sound5.setLoop( false );
                sound5.setVolume( 1 );
            },
            );
            audioLoader.load( 'notes/G6.mp3', function( buffer ) {
                sound6.setBuffer( buffer );
                sound6.setLoop( false );
                sound6.setVolume( 1 );
            },
            );
            audioLoader.load( 'notes/G7.mp3', function( buffer ) {
                sound7.setBuffer( buffer );
                sound7.setLoop( false );
                sound7.setVolume( 1 );
            },
            );
            audioLoader.load( 'notes/G7.mp3', function( buffer ) {
                sound8.setBuffer( buffer );
                sound8.setLoop( false );
                sound8.setVolume( 1 );
            },
            );
            audioLoader.load( 'notes/G7.mp3', function( buffer ) {
                sound9.setBuffer( buffer );
                sound9.setLoop( false );
                sound9.setVolume( 1 );
            },
            );
            audioLoader.load( 'notes/G7.mp3', function( buffer ) {
                sound10.setBuffer( buffer );
                sound10.setLoop( false );
                sound10.setVolume( 1 );
            },
            );
            audioLoader.load( 'notes/G7.mp3', function( buffer ) {
                sound11.setBuffer( buffer );
                sound11.setLoop( false );
                sound11.setVolume( 1 );
            },
            );
            audioLoader.load( 'notes/G7.mp3', function( buffer ) {
                sound12.setBuffer( buffer );
                sound12.setLoop( false );
                sound12.setVolume( 1 );
            },
            );
            audioLoader.load( 'notes/G7.mp3', function( buffer ) {
                sound13.setBuffer( buffer );
                sound13.setLoop( false );
                sound13.setVolume( 1 );
            },
            );
            audioLoader.load( 'notes/G7.mp3', function( buffer ) {
                sound14.setBuffer( buffer );
                sound14.setLoop( false );
                sound14.setVolume( 1 );
            },
            );
            audioLoader.load( 'notes/G7.mp3', function( buffer ) {
                sound15.setBuffer( buffer );
                sound15.setLoop( false );
                sound15.setVolume( 1 );
            },
            );
            audioLoader.load( 'notes/G7.mp3', function( buffer ) {
                sound16.setBuffer( buffer );
                sound16.setLoop( false );
                sound16.setVolume( 1 );
            },
            );
            audioLoader.load( 'notes/G7.mp3', function( buffer ) {
                sound17.setBuffer( buffer );
                sound17.setLoop( false );
                sound17.setVolume( 1 );
            },
            );
            audioLoader.load( 'notes/G7.mp3', function( buffer ) {
                sound18.setBuffer( buffer );
                sound18.setLoop( false );
                sound18.setVolume( 1 );
            },
            );
            audioLoader.load( 'notes/G7.mp3', function( buffer ) {
                sound19.setBuffer( buffer );
                sound19.setLoop( false );
                sound19.setVolume( 1 );
            },
            );
            audioLoader.load( 'notes/G7.mp3', function( buffer ) {
                sound20.setBuffer( buffer );
                sound20.setLoop( false );
                sound20.setVolume( 1 );
            },
            );
            document.addEventListener("keydown", soundPlay, false);
        
        
            function soundPlay(event) { 
                var keyCode = event.which;

                mB1.color.set('white');
                mB2.color.set('white');
                mB3.color.set('white');
                mB4.color.set('white');
                mB5.color.set('white');
                mB6.color.set('white');
                mB7.color.set('white');
                mB8.color.set('white');
                mB9.color.set('white');
                mB10.color.set('white');
                mB11.color.set('white');
                mB12.color.set('white');
                mB13.color.set('white');
                mB14.color.set('white');
                mB15.color.set('white');
                mB16.color.set('white');
                mB17.color.set('white');
                mB18.color.set('white');
                mB19.color.set('white');
                mB20.color.set('white');
                
                if(keyCode == 49) {
                    nota.innerHTML ='-DO-';
                    if(sound1.isPlaying) {
                        sound1.stop();
                        sound1.play();
                        mB1.color.set('red');
                        oB1.rotation.set(0.1,0,0); 
    
                    } else {  
                        sound1.play();
                        mB1.color.set('red');  
                        oB1.rotation.set(0.1,0,0);   
                    }  
            
                }else if(sound1.stop()){
                    
                    oB1.rotation.set(0,0,0); 
                    mB1.color.set('white');
                    
                }
                
                if(keyCode == 50) {
                    nota.innerHTML ='-RE-';
                    if(sound2.isPlaying) {
                        sound2.stop();
                        sound2.play();
                        mB2.color.set('red');
                        oB2.rotation.set(0.1,0,0);
                        
                    } else {
                        sound2.play();
                        mB2.color.set('red');
                        oB2.rotation.set(0.1,0,0);
                    }
                    // sound2.stop();
                }
                else if(sound2.stop()){
                    
                    oB2.rotation.set(0,0,0); 
                    mB2.color.set('white');
                    
                }
                if(keyCode == 51) {
                    nota.innerHTML ='-Mİ-';
                    if(sound3.isPlaying) {
                        sound3.stop();
                        sound3.play();
                        mB3.color.set('red');
                        oB3.rotation.set(0.1,0,0);
                    
                    } else {
                        sound3.play();
                        mB3.color.set('red');
                        oB3.rotation.set(0.1,0,0);
                    }   
                }
                else if(sound3.stop()){
                    
                    oB3.rotation.set(0,0,0); 
                    mB3.color.set('white');
                    
                }
                if(keyCode == 52) {
                    nota.innerHTML ='-FA-';
                    if(sound4.isPlaying) {
                        sound4.stop();
                        sound4.play();
                        mB4.color.set('red');
                        oB4.rotation.set(0.1,0,0);
                    
                    } else {
                        sound4.play();
                        mB4.color.set('red');
                        oB4.rotation.set(0.1,0,0);
                    }   
                }
                else if(sound4.stop()){
                    
                    oB4.rotation.set(0,0,0); 
                    mB4.color.set('white');
                    
                }
                if(keyCode == 53) {
                    nota.innerHTML ='-SOL-';
                    if(sound5.isPlaying) {
                        sound5.stop();
                        sound5.play();
                        mB5.color.set('red');
                        oB5.rotation.set(0.1,0,0);
                        
                    } else {
                        sound5.play();
                        mB5.color.set('red');
                        oB5.rotation.set(0.1,0,0);
                    }   
                }
                else if(sound5.stop()){
                    
                    oB5.rotation.set(0,0,0); 
                    mB5.color.set('white');
                    
                }
                if(keyCode == 54) {
                    nota.innerHTML ='-LA-';
                    if(sound6.isPlaying) {
                        sound6.stop();
                        sound6.play();
                        mB6.color.set('red');
                        oB6.rotation.set(0.1,0,0);
                    
                    } else {
                        sound6.play();
                        mB6.color.set('red');
                        oB6.rotation.set(0.1,0,0);
                    }   
                }
                else if(sound6.stop()){
                    
                    oB6.rotation.set(0,0,0); 
                    mB6.color.set('white');
                    
                }
                if(keyCode == 55) {
                    nota.innerHTML ='-Sİ-';
                    if(sound7.isPlaying) {
                        sound7.stop();
                        sound7.play();
                        mB7.color.set('red');
                        oB7.rotation.set(0.1,0,0);
                        
                    } else {
                        sound7.play();
                        mB7.color.set('red');
                        oB7.rotation.set(0.1,0,0);
                    }   
                }
                else if(sound7.stop()){
                    
                    oB7.rotation.set(0,0,0); 
                    mB7.color.set('white');
                    
                }
                if(keyCode == 65) {
                    nota.innerHTML ='-DO#-';
                    if(sound8.isPlaying) {
                        sound8.stop();
                        sound8.play();
                        mB8.color.set('red');
                        oB8.rotation.set(0.1,0,0); 
    
                    } else {  
                        sound8.play();
                        mB8.color.set('red');  
                        oB8.rotation.set(0.1,0,0);   
                    }  
            
                }else if(sound8.stop()){
                    
                    oB8.rotation.set(0,0,0); 
                    mB8.color.set('white');
                    
                }

                renderer.render(scene, camera);
            }
    
        }
        function animate() {
            requestAnimationFrame(animate); 
            renderer.render(scene, camera);
            
        }

        function resize() {
            camera.aspect = window.innerWidth / window.innerHeight;
            camera.updateProjectionMatrix();
            renderer.setSize(window.innerWidth, window.innerHeight);
        }
       
    
            
            
        
        
    

        
