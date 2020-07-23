# 初始页面模板（PC端）
v1.0.1 by 午点科技
<br>

## 一、注意事项
1. 如果所用插件支持，并且只需兼容IE9及以上的浏览器，建议使用2.2.4版本的jquery

2. favicon尺寸应为32\*32/48\*48/64\*64，格式应为ico/png/gif

3. 一般情况，引入样式的`<link>`应该放在`<head>`中，优先加载

4. 对于一些不需要一开始就载入的JS文件，可以把`<script>`放在文档底部以加快页面打开速度

5. 利用浏览器的缓存机制，可以在首页载入其他页面需要的js、css文件（反之，可以提高首页加载速度）

6. 代码发布时，应当压缩css、js等文件，压缩文件的名称后面要跟.min，例如common.min.css
<br>

## 二、SEO优化
1. 一个页面中应该有且只有一个`<h1>`，其包含 网站名称/首页链接/核心关键词 等等，应该放在文档顶部，越接近`<body>`越好，多次使用`<h1>`会被搜索引擎视为作弊，反而降低seo效果
<br>

## 三、常用

**网页语言定义 `<html lang="zh">`**

HTML 的 lang 属性可用于网页或部分网页的语言。这对搜索引擎和浏览器是有帮助的。根据 W3C 推荐标准，您应该通过 `<html>` 标签中的 lang 属性对每张页面中的主要语言进行声明。

> 参考：[http://www.w3school.com.cn/tags/html_ref_language_codes.asp](http://www.w3school.com.cn/tags/html_ref_language_codes.asp)

<br>

**版权信息的写法**

> 参考：[https://10.1pxeye.com/footer-copyright/](https://10.1pxeye.com/footer-copyright/)

示例：
```html
<div class="m-copyright">Copyright &copy; 2019 <a href="">公司名称</a> All Right Reserved</div>
```
<br>

**1. 分页**

默认分页，直接复制即可
```html
<ul class="pagination">
  <li><a href="">上一页</a></li>
  <li class="disabled"><span>1</span></li>
  <li class="active"><span>1</span></li>
  <li><a href="">2</a></li>
  <li><a href="">下一页</a></li>
  <li class="disabled"><span>下一页</span></li>
</ul>
```
<br>

**2. 百度地图**

[百度地图开放平台](http://lbsyun.baidu.com/)
```html
<div class="cmap" id="allmap" style="width: 770px; height: 360px;"></div>
<script type="text/javascript" src="http://api.map.baidu.com/api?v=2.0&ak=4E5A3Fb789138a0ab8431f42a887aea1"></script>
<script type="text/javascript">
  var map = new BMap.Map("allmap");
  var point = new BMap.Point(116.404, 39.915);
  var marker = new BMap.Marker(point);  // 创建标注
  map.addOverlay(marker);              // 将标注添加到地图中
  map.centerAndZoom(point, 11);        // 初始化地图，设置中心点坐标和地图级别 
  map.enableScrollWheelZoom(true);     // 开启鼠标滚轮缩放
  var opts = {
    width: 300,     // 信息窗口宽度
    height: 100,     // 信息窗口高度
    title: "公司名称", // 信息窗口标题
  }
  var infoWindow = new BMap.InfoWindow("地址：公司所在地", opts);  // 创建信息窗口对象
  map.openInfoWindow(infoWindow, point); //开启信息窗口
</script>
```
<br>

**3. 覆盖富文本内容样式**

```scss
.rich-text {
  img { max-width: 100%!important; height: auto!important; }
  pre { white-space: pre-wrap!important; }
}
```
<br>

## 四、插件

**1. Swiper**

中文文档：[https://www.swiper.com.cn](https://www.swiper.com.cn/)

不需兼容IE10以下的浏览器？请使用[Swiper4.x](https://www.swiper.com.cn/)

需兼容IE7？请使用[Swiper2.x](https://2.swiper.com.cn/)

<br>

**2. SuperSlide**

类似Swiper，关键是兼容IE6

官方网站：[http://www.superslide2.com/index.html](http://www.superslide2.com/index.html)

<br>

**3. Layui**

Layui的弹层组件和日历组件都很好用，均有相应的独立版本，且兼容IE8

Layui官网：[https://www.layui.com](https://www.layui.com/)

+ 弹层——layer，兼容IE6，文档：[http://layer.layui.com](http://layer.layui.com/)

+ 日历——laydate，文档：[https://www.layui.com/laydate](https://www.layui.com/laydate/)