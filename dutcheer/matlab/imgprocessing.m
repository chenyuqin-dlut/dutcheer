tu=imread('46.png'); %��ȡͼƬ
x=rgb2gray(tu); %��RGBͼ����ɫͼת��Ϊ�Ҷ�ͼ��
subplot(221); %���û�ͼλ��
imshow(tu); %��ͼ
title('ԭͼ','fontsize',20); %���ñ���
subplot(222); 
imshow(x); 
title('�Ҷ�ͼ��','fontsize',20);
thresh1=graythresh(x);   
tu1 = imbinarize(x,thresh1); %ͼ�������ֵ��
subplot(223);
imshow(tu1);
title('ʹ���㷨��ֵ','fontsize',20);
%ʹ�������䷽��ҵ�ͼƬ��һ�����ʵ���ֵ
%thresh1=0.7039����ͼ���ѣ��ֶ�����Ϊ0.95
tu2 = imbinarize(x,0.95); %ͼ�������ֵ��
subplot(224);
imshow(tu2);
title('�ֶ�ָ����ֵ','fontsize',20);
csvwrite('0��1����x.csv',tu2); 
%��������csv��ʽ���
