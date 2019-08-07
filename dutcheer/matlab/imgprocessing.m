tu=imread('46.png'); %读取图片
x=rgb2gray(tu); %将RGB图像或彩色图转换为灰度图像
subplot(221); %设置绘图位置
imshow(tu); %绘图
title('原图','fontsize',20); %设置标题
subplot(222); 
imshow(x); 
title('灰度图像','fontsize',20);
thresh1=graythresh(x);   
tu1 = imbinarize(x,thresh1); %图像二分阈值化
subplot(223);
imshow(tu1);
title('使用算法阈值','fontsize',20);
%使用最大类间方差法找到图片的一个合适的阈值
%thresh1=0.7039，出图不佳，手动设置为0.95
tu2 = imbinarize(x,0.95); %图像二分阈值化
subplot(224);
imshow(tu2);
title('手动指定阈值','fontsize',20);
csvwrite('0和1矩阵x.csv',tu2); 
%将矩阵以csv格式输出
