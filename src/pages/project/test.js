import * as THREE from "three";
import OrbitControls from "three/examples/js/controls/OrbitControls"
export default function init(){
    // 创建场景
    var scene = new THREE.Scene();

    var geometry = new THREE.BufferGeometry(); //声明一个缓冲几何体对象

    //类型数组创建顶点位置position数据
    var vertices = new Float32Array([
    0, 0, 0, //顶点1坐标
    50, 0, 0, //顶点2坐标
    0, 100, 0, //顶点3坐标

    0, 0, 10, //顶点4坐标
    0, 0, 100, //顶点5坐标
    50, 0, 10, //顶点6坐标
    ]);
    // 创建属性缓冲区对象
    var attribue = new THREE.BufferAttribute(vertices, 3); //3个为一组，作为一个顶点的xyz坐标
    // 设置几何体attributes属性的位置position属性
    geometry.attributes.position = attribue;
    //类型数组创建顶点颜色color数据
    var colors = new Float32Array([
    1, 0, 0, //顶点1颜色
    0, 1, 0, //顶点2颜色
    0, 0, 1, //顶点3颜色

    1, 1, 0, //顶点4颜色
    0, 1, 1, //顶点5颜色
    1, 0, 1, //顶点6颜色
    ]);
    // 设置几何体attributes属性的颜色color属性
    geometry.attributes.color = new THREE.BufferAttribute(colors, 3); //3个为一组,表示一个顶点的颜色数据RGB

    var normals = new Float32Array([
        0, 0, 1, //顶点1法向量
        0, 0, 1, //顶点2法向量
        0, 0, 1, //顶点3法向量
      
        0, 1, 0, //顶点4法向量
        0, 1, 0, //顶点5法向量
        0, 1, 0, //顶点6法向量
      ]);
      // 设置几何体attributes属性的位置normal属性
      geometry.attributes.normal = new THREE.BufferAttribute(normals, 3); //3个为一组,表示一个顶点的法向量数据

    //材质对象
    var material = new THREE.MeshLambertMaterial({
    // 使用顶点颜色数据渲染模型，不需要再定义color属性
    // color: 0xff0000,
    vertexColors: THREE.VertexColors, //以顶点颜色为准
    size: 10.0 //点对象像素尺寸
    });
    // 点渲染模式  点模型对象Points
    var points = new THREE.Mesh(geometry, material); //点模型对象
    scene.add(points); //点对象添加到场景

    // 辅助坐标系  参数250表示坐标系大小，可以根据场景大小去设置
    var axisHelper = new THREE.AxisHelper(250);
    scene.add(axisHelper);

    return scene
    // 相机
}