/*
 *   ======================= 绘图、动画 功能配置  =======================
 */
export {
    zm_circleImg,
    
}

/* canvas 生成圆角图片（头像等）
 * 画布 ctx
 * 图片 img 
 * 起始坐标（x，y）
 * 图片半径	r
 */
function zm_circleImg(ctx, img, x, y, r) {
	ctx.save();
	var d = 2 * r;
	var cx = x + r;
	var cy = y + r;
	ctx.arc(cx, cy, r, 0, 2 * Math.PI);
	ctx.clip();
	ctx.drawImage(img, x, y, d, d);
	ctx.restore();
}