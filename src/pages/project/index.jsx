import React,{useEffect} from 'react';
import * as THREE from "three";
import OrbitControls from "three/examples/js/controls/OrbitControls"
import init from './test'
function Project() {
  const scene = init();

    /**
     * 创建场景对象Scene
     */
    //  var scene = new THREE.Scene();
     /**
      * 创建网格模型
      */
    //  var geometry = new THREE.SphereGeometry(80, 80, 80); //创建一个球体几何对象
    //  var geometry = new THREE.BoxGeometry(100, 100, 100); //创建一个立方体几何对象Geometry
    //  var material = new THREE.MeshLambertMaterial({
    //    color: 0x00ff00
    //  }); //材质对象Material
    //  var mesh = new THREE.Mesh(geometry, material); //网格模型对象Mesh
    //  scene.add(mesh); //网格模型添加到场景中

    // 立方体网格模型
    var geometry1 = new THREE.BoxGeometry(100, 100, 100);
    var material1 = new THREE.MeshPhongMaterial({
      color: 0xff0000,
      specular:0x444444,//高光部分的颜色
      shininess:20,//高光部分的亮度，默认30
    });
    var mesh1 = new THREE.Mesh(geometry1, material1); //网格模型对象Mesh
    mesh1.translateZ(200);
    scene.add(mesh1); //网格模型添加到场景中

    // // 球体网格模型
    // var geometry2 = new THREE.SphereGeometry(60, 40, 40);
    // var material2 = new THREE.MeshLambertMaterial({
    //   color:0x0000ff,
    //   specular:0x4488ee,
    //   shininess:12
    // });
    // var mesh2 = new THREE.Mesh(geometry2, material2); //网格模型对象Mesh
    // mesh2.translateY(120); //球体网格模型沿Y轴正方向平移120
    // scene.add(mesh2);

    // // 圆柱网格模型
    // var geometry3 = new THREE.CylinderGeometry(50, 50, 100, 25);
    // var material3 = new THREE.MeshLambertMaterial({
    //   color:0xff0000,
    //   opacity:0.7,
    //   transparent:true
    // });
    // var mesh3 = new THREE.Mesh(geometry3, material3); //网格模型对象Mesh
    // // mesh3.translateX(120); //球体网格模型沿Y轴正方向平移120
    // mesh3.position.set(120,0,0);//设置mesh3模型对象的xyz坐标为120,0,0
    // scene.add(mesh3); //

    // var geometry = new THREE.BufferGeometry(); //创建一个Buffer类型几何体对象
    // //类型数组创建顶点数据
    // var vertices = new Float32Array([
    //   0, 0, 0, //顶点1坐标
    //   50, 0, 0, //顶点2坐标
    //   0, 100, 0, //顶点3坐标
    //   0, 0, 10, //顶点4坐标
    //   0, 0, 100, //顶点5坐标
    //   50, 0, 10, //顶点6坐标
    // ]);
    // // 创建属性缓冲区对象
    // var attribue = new THREE.BufferAttribute(vertices, 3); //3个为一组，表示一个顶点的xyz坐标
    // // 设置几何体attributes属性的位置属性
    // geometry.attributes.position = attribue;
    // 三角面(网格)渲染模式
    // var material = new THREE.MeshBasicMaterial({
    //   color: 0x0000ff, //三角面颜色
    //   side: THREE.DoubleSide //两面可见
    // }); //材质对象
    // 点渲染模式
    // var material = new THREE.PointsMaterial({
      //   color: 0xff0000,
      //   size: 10.0 //点对象像素尺寸
      // }); //材质对象
      // var points = new THREE.Points(geometry, material); //点模型对象
      // scene.add(points); //点对象添加到场景中
      
      // 线条渲染模式
    //   var material=new THREE.LineBasicMaterial({
    //     color:0xff0000 //线条颜色
    //   });//材质对象
    //   var line=new THREE.Line(geometry,material);//线条模型对象
    //   scene.add(line);//线条对象添加到场景中
      
    //   // var mesh4 = new THREE.Mesh(geometry, material); //网格模型对象Mesh
    //   // scene.add(mesh4);

    // // 辅助坐标系  参数250表示坐标系大小，可以根据场景大小去设置
    // var axisHelper = new THREE.AxisHelper(250);
    // scene.add(axisHelper);

     /**
      * 光源设置
      */
     //点光源
     var point = new THREE.PointLight(0x444444);
     point.position.set(400, 200, 300); //点光源位置
     scene.add(point); //点光源添加到场景中
     // 点光源2  位置和point关于原点对称
    var point2 = new THREE.PointLight(0xffffff);
    point2.position.set(-400, -200, -300); //点光源位置
    scene.add(point2); //点光源添加到场景中
     //环境光
     var ambient = new THREE.AmbientLight(0x888888);
     scene.add(ambient);
     // console.log(scene)
     // console.log(scene.children)
     /**
      * 相机设置
      */
    //  var width = window.innerWidth; //窗口宽度
     var width = 1000; //窗口宽度
    //  var width = window.innerWidth; //窗口宽度
     var height = 500; //窗口高度
     var k = width / height; //窗口宽高比
     var s = 500; //三维场景显示范围控制系数，系数越大，显示的范围越大
     //创建相机对象
     var camera = new THREE.OrthographicCamera(-s * k, s * k, s, -s, 1, 1000);
     camera.position.set(200, 200, 200); //设置相机位置
     camera.lookAt(scene.position); //设置相机方向(指向的场景对象)
     /**
      * 创建渲染器对象
      */
     var renderer = new THREE.WebGLRenderer();
     renderer.setSize(width, height);//设置渲染区域尺寸
     renderer.setClearColor(0xffffff, 1); //设置背景颜色
     //执行渲染操作   指定场景、相机作为参数
     renderer.render(scene, camera); 
     // 渲染函数
    //  let T0 = new Date();//上次时间
     function render() {
        renderer.render(scene,camera);//执行渲染操作
      }
      render();
      var controls = new OrbitControls(camera,renderer.domElement);//创建控件对象
      controls.addEventListener('change', render);//监听鼠标、键盘事件
    // function render() {
    //     let T1 = new Date();//本次时间
    //     let t = T1-T0;//时间差
    //     T0 = T1;//把本次时间赋值给上次时间
    //     requestAnimationFrame(render);
    //     renderer.render(scene,camera);//执行渲染操作
    //     mesh.rotateY(0.001*t);//旋转角速度0.001弧度每毫秒
    // }
    // render()
    //间隔20ms周期性调用函数fun,20ms也就是刷新频率是50FPS(1s/20ms)，每秒渲染50次
    // setInterval(render,20);

     useEffect(()=>{
         document.getElementById('canvas-frame').appendChild(renderer.domElement);
     },[renderer])
    return (
        <div id="canvas-frame">
            项目
        </div>
    );
}

export default Project;