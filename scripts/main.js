body {
   background:url("../images/shoutu.jpg");  no-repeat center center;   /*加载背景图*/   /* 背景图不平铺 */
   background-size:cover;  /* 让背景图基于容器大小伸缩 */
   background-attachment:fixed;        /* 当内容高度大于图片高度时，背景图像的位置相对于viewport固定 */    //此条属性必须设置否则可能无效/
   background-color:#CCCCCC;   /* 设置背景颜色，背景图加载过程中会显示背景色 */
   
 }

 .toubu {
  color: blue;
 }

 .button {
  display: inline-block;
  border-radius: 4px;
  border: none;
  background-color: #ffffff;
  
  text-align: center;
  font-size: 20px;
  padding: 10px;
  width: 150px;
  transition: all 0.5s;
  cursor: pointer;
  margin: 5px;
  vertical-align:middle;
  opacity: 0.6;
}

.button span {
  cursor: pointer;
  display: inline-block;
  position: relative;
  transition: 0.5s;
}

.button span:after {
  content: '»';
  position: absolute;
  opacity: 0;
  top: 0;
  right: -20px;
  transition: 0.5s;
}

.button:hover span {
  padding-right: 15px;
}

.button:hover span:after {
  opacity: 1;
  right: 0;
}
