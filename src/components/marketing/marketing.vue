<template>
    <div class="main">
        <sidebar></sidebar>
        <!--主体 start-->
    <div class="main-right">
        <navbar></navbar>
        <!--二级导航栏 -->
        <div class="main-goods">
            <marknav></marknav>
            <div class="main-goods-right">
                <!-- 商品中心内容 -->
                <div>
                    <!--选项卡组件-->
                    <div class="goods-card_body marketing">
                        <h1 class="marketing_h1">优惠券营销</h1>
                        <div class="marketing_div">
                               
                            <dl class="marketing_div_dl" @click="creatCoupon">
                                <dt>
                                  <img src="data:image/png;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAA0JCgsKCA0LCgsODg0PEyAVExISEyccHhcgLikxMC4pLSwzOko+MzZGNywtQFdBRkxOUlNSMj5aYVpQYEpRUk//2wBDAQ4ODhMREyYVFSZPNS01T09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0//wAARCABOAE4DASIAAhEBAxEB/8QAHwAAAQUBAQEBAQEAAAAAAAAAAAECAwQFBgcICQoL/8QAtRAAAgEDAwIEAwUFBAQAAAF9AQIDAAQRBRIhMUEGE1FhByJxFDKBkaEII0KxwRVS0fAkM2JyggkKFhcYGRolJicoKSo0NTY3ODk6Q0RFRkdISUpTVFVWV1hZWmNkZWZnaGlqc3R1dnd4eXqDhIWGh4iJipKTlJWWl5iZmqKjpKWmp6ipqrKztLW2t7i5usLDxMXGx8jJytLT1NXW19jZ2uHi4+Tl5ufo6erx8vP09fb3+Pn6/8QAHwEAAwEBAQEBAQEBAQAAAAAAAAECAwQFBgcICQoL/8QAtREAAgECBAQDBAcFBAQAAQJ3AAECAxEEBSExBhJBUQdhcRMiMoEIFEKRobHBCSMzUvAVYnLRChYkNOEl8RcYGRomJygpKjU2Nzg5OkNERUZHSElKU1RVVldYWVpjZGVmZ2hpanN0dXZ3eHl6goOEhYaHiImKkpOUlZaXmJmaoqOkpaanqKmqsrO0tba3uLm6wsPExcbHyMnK0tPU1dbX2Nna4uPk5ebn6Onq8vP09fb3+Pn6/9oADAMBAAIRAxEAPwDav7p7u6eRiducKPQVXoor3opRVkeW227sKKKKYgooooAKKKKACpIZ5YGLQyMhIwcGo6KTSejBOwUUVe0myS+umjlZgqru+XrSlJRXMxxTk7It6doqXVos8srDf0C+lM1bSorG2WWOR2Jfbhsehq7NodrHbyOsk2VUkfMPT6VW0nTIL20MszSbg5HDcVxqrrz82nax0On9nl1LCeH7dkU+dLyM9qX/AIR23/57S/pUv9g2n9+b/vof4Uf2Daf35v8Avof4Vl7Z/wA7+409n/d/Ei/4R23/AOe0v6Uf8I7b/wDPaX9Kl/sG0/vzf99D/CqNtax/22sdlK+yHmQsfQ4IFNVJSTtPbyE4pWvH8TO1CCK2u2hgkLqvBJ9e4qtV/Wnt31Bjbj2c+rd6oV3023BNnLNWk7BWjol1FaXhaYkKy7c46c1nVd0uyW+uTGzlVUbjgdaVXl5HzbBC/MrHVXXNnN/1zb+VZ/hz/kHN/wBdD/IVfugBZTAdBG38qoeHP+Qc3/XQ/wAhXlx/gy9Udz/iIW/uLmxvUuGYvat8rLj7tJBczX+phrdytrDwT/fNVNZjjNxMxiuy20fMv3OlRaPGnmwOIrvcW5Yfc/lW6hH2XN1sZOT5+XodLWEjC58RZiXyDEDv7GTBrdrC3+f4jX7SPJMYxGP7/PHP41hQ+16GtXp6mdrDwvqMnkoUwcNxjLdzVGtDW5DJqT7oym35ee/vWfXqUvgRw1PiYVr+G/8Aj+k/65/1FZFOR3jbdGzKw7qcGnUhzxcQhLlkmdrd/wDHpN/1zb+VZ/hz/kHN/wBdD/IVzxu7ogg3MxB4ILmmx3E8S7YppEHXCsRXIsI1BxubuuuZSsdtLGssTRvnawwcU22gS2gWGLOxemTmuN+2XX/PzN/38NH2y6/5+Zv+/hqfqcrW5ivrEb3sdtXKanNdRar5k23enMfGQB2qp9suv+fmb/v4ajd3kbdI7Mx7scmtaOGdN3epnUrc6siS6uZbuXzJ23NjHTFQ0UV1JJKyMG77ispVip4IODSVvatpQdnuoWC93U9/cVgkYOKilUVSN0XODg7MKKKK0ICiiigAooooAKKAMnFbWn6Kskfm3L5DD5VQ1nUqRpq8ioQc3ZH/2Q==" alt="优惠券" class="menu-img">
                                </dt>
                                <dd>
                                    <span class="marketing_div_dl-span">优惠券</span>
                                    <span class="marketing_div_dl-twospan">向客户发放店铺优惠券</span>
                                </dd>
                            </dl>   

                             <dl class="marketing_div_dl"  @click="goodsGiveCoupon">
                                <dt>
                                  <img src="data:image/png;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAA0JCgsKCA0LCgsODg0PEyAVExISEyccHhcgLikxMC4pLSwzOko+MzZGNywtQFdBRkxOUlNSMj5aYVpQYEpRUk//2wBDAQ4ODhMREyYVFSZPNS01T09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0//wAARCABOAE4DASIAAhEBAxEB/8QAHwAAAQUBAQEBAQEAAAAAAAAAAAECAwQFBgcICQoL/8QAtRAAAgEDAwIEAwUFBAQAAAF9AQIDAAQRBRIhMUEGE1FhByJxFDKBkaEII0KxwRVS0fAkM2JyggkKFhcYGRolJicoKSo0NTY3ODk6Q0RFRkdISUpTVFVWV1hZWmNkZWZnaGlqc3R1dnd4eXqDhIWGh4iJipKTlJWWl5iZmqKjpKWmp6ipqrKztLW2t7i5usLDxMXGx8jJytLT1NXW19jZ2uHi4+Tl5ufo6erx8vP09fb3+Pn6/8QAHwEAAwEBAQEBAQEBAQAAAAAAAAECAwQFBgcICQoL/8QAtREAAgECBAQDBAcFBAQAAQJ3AAECAxEEBSExBhJBUQdhcRMiMoEIFEKRobHBCSMzUvAVYnLRChYkNOEl8RcYGRomJygpKjU2Nzg5OkNERUZHSElKU1RVVldYWVpjZGVmZ2hpanN0dXZ3eHl6goOEhYaHiImKkpOUlZaXmJmaoqOkpaanqKmqsrO0tba3uLm6wsPExcbHyMnK0tPU1dbX2Nna4uPk5ebn6Onq8vP09fb3+Pn6/9oADAMBAAIRAxEAPwDav7p7u6eRiducKPQVXoor3opRVkeW227sKKKKYgooooAKKKKACpIZ5YGLQyMhIwcGo6KTSejBOwUUVe0myS+umjlZgqru+XrSlJRXMxxTk7It6doqXVos8srDf0C+lM1bSorG2WWOR2Jfbhsehq7NodrHbyOsk2VUkfMPT6VW0nTIL20MszSbg5HDcVxqrrz82nax0On9nl1LCeH7dkU+dLyM9qX/AIR23/57S/pUv9g2n9+b/vof4Uf2Daf35v8Avof4Vl7Z/wA7+409n/d/Ei/4R23/AOe0v6Uf8I7b/wDPaX9Kl/sG0/vzf99D/CqNtax/22sdlK+yHmQsfQ4IFNVJSTtPbyE4pWvH8TO1CCK2u2hgkLqvBJ9e4qtV/Wnt31Bjbj2c+rd6oV3023BNnLNWk7BWjol1FaXhaYkKy7c46c1nVd0uyW+uTGzlVUbjgdaVXl5HzbBC/MrHVXXNnN/1zb+VZ/hz/kHN/wBdD/IVfugBZTAdBG38qoeHP+Qc3/XQ/wAhXlx/gy9Udz/iIW/uLmxvUuGYvat8rLj7tJBczX+phrdytrDwT/fNVNZjjNxMxiuy20fMv3OlRaPGnmwOIrvcW5Yfc/lW6hH2XN1sZOT5+XodLWEjC58RZiXyDEDv7GTBrdrC3+f4jX7SPJMYxGP7/PHP41hQ+16GtXp6mdrDwvqMnkoUwcNxjLdzVGtDW5DJqT7oym35ee/vWfXqUvgRw1PiYVr+G/8Aj+k/65/1FZFOR3jbdGzKw7qcGnUhzxcQhLlkmdrd/wDHpN/1zb+VZ/hz/kHN/wBdD/IVzxu7ogg3MxB4ILmmx3E8S7YppEHXCsRXIsI1BxubuuuZSsdtLGssTRvnawwcU22gS2gWGLOxemTmuN+2XX/PzN/38NH2y6/5+Zv+/hqfqcrW5ivrEb3sdtXKanNdRar5k23enMfGQB2qp9suv+fmb/v4ajd3kbdI7Mx7scmtaOGdN3epnUrc6siS6uZbuXzJ23NjHTFQ0UV1JJKyMG77ispVip4IODSVvatpQdnuoWC93U9/cVgkYOKilUVSN0XODg7MKKKK0ICiiigAooooAKKAMnFbWn6Kskfm3L5DD5VQ1nUqRpq8ioQc3ZH/2Q==" alt="优惠券" class="menu-img">
                                </dt>
                                <dd>
                                    <span class="marketing_div_dl-span">购物送优惠券</span>
                                    <span class="marketing_div_dl-twospan">向客户发放店铺优惠券</span>
                                </dd>
                            </dl>     

                            <dl class="marketing_div_dl"  @click="followGiveCoupon">
                                <dt>
                                  <img src="data:image/png;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAA0JCgsKCA0LCgsODg0PEyAVExISEyccHhcgLikxMC4pLSwzOko+MzZGNywtQFdBRkxOUlNSMj5aYVpQYEpRUk//2wBDAQ4ODhMREyYVFSZPNS01T09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0//wAARCABQAE4DASIAAhEBAxEB/8QAHwAAAQUBAQEBAQEAAAAAAAAAAAECAwQFBgcICQoL/8QAtRAAAgEDAwIEAwUFBAQAAAF9AQIDAAQRBRIhMUEGE1FhByJxFDKBkaEII0KxwRVS0fAkM2JyggkKFhcYGRolJicoKSo0NTY3ODk6Q0RFRkdISUpTVFVWV1hZWmNkZWZnaGlqc3R1dnd4eXqDhIWGh4iJipKTlJWWl5iZmqKjpKWmp6ipqrKztLW2t7i5usLDxMXGx8jJytLT1NXW19jZ2uHi4+Tl5ufo6erx8vP09fb3+Pn6/8QAHwEAAwEBAQEBAQEBAQAAAAAAAAECAwQFBgcICQoL/8QAtREAAgECBAQDBAcFBAQAAQJ3AAECAxEEBSExBhJBUQdhcRMiMoEIFEKRobHBCSMzUvAVYnLRChYkNOEl8RcYGRomJygpKjU2Nzg5OkNERUZHSElKU1RVVldYWVpjZGVmZ2hpanN0dXZ3eHl6goOEhYaHiImKkpOUlZaXmJmaoqOkpaanqKmqsrO0tba3uLm6wsPExcbHyMnK0tPU1dbX2Nna4uPk5ebn6Onq8vP09fb3+Pn6/9oADAMBAAIRAxEAPwDpNU1KWedoonKwqcfKcbves2iivchBQVkeZKTk7sKKUAscAEn2pWjkUZZGA9xVXJG0UUdelMAop5ikAyY3x64NMpXAKvWeq3FqCufMTsrnpVGilKEZK0kOMnF3QVNaW73VwsMfVup9B61DWlpbeVaX04++kYVT6ZzSqScY3Q4K71HzXsVgTBp6LuXhpmGSx9qiTWbwH53WRe6sowaz6KlUYW1VxupLoa32SDVF8yyCwzA/PEemPUUPc22m/urNFlnH3pmGcH2rLjkeJt0blTjGQabS9lrZvQfP1S1L41m+DZMoI9CoxUzxw6nbvLBGI7qMZZF6OPUVlVa0ybyNQhcsFXdhifQ0TpqK5oKzQRm27S2KtFTXgQXkwjIKbztI9KhrVO6uZtWYVpaOVk+0WjHHnpgfUdKzaVHaNw6HDKcgipnHmjYqLs7iujRuyOMMpwRTa12WPV4TJGAl6g+Ze0grJYFWKsCCOCDRCfNo9wlG3oJWnc3UlqYooVjVfKU/cBySMmsyr8u/+ylFznfvHk567cc/h0pVEm1ccW7OwNfXqxLIVj2PnafLXmiW+vYSBII1JAYAxr0q3pCp5OGWJgQWIaYdR0O3t9aoX237WGYqd2CxWXfnn1rKPK5uPKW+ZRvcdeuZrO2ndVEjF1JVcZAxj+dUqu6p5v2n5/8AU/8ALHH3dvbFUq1p/CZz+IKKKK0JHRSPFIskbFWU5BFasiR6tCZoQFu0Hzp/fHqKyKfDK8EqyRMVZehFZzhfVblRlbR7DCCCQRgjtWldWzXJilhkiK+Uo5kAIIHvUzQw6uolhZIrkf6xScA+4qnqC2sTJDaksyDDyZ4Y1HPzNLZl8vKn2HRWl1CxaOSEEgqf3q9D+NM/s6f+9D/39X/GqlFacsu/4EXXYu3qiKztoS6M6lywVs4zjH8qpUUU4qysJu7CitLVNNlgnaWJC0LHPyjO32rNpQmpq6HKLi7MKKKKskKKKKACiiigAooq9Z6VcXQLY8tOzOOtTKcYq8mOMXJ2R//Z" alt="优惠券" class="menu-img">
                                </dt>
                                <dd>
                                    <span class="marketing_div_dl-span">关注送优惠券</span>
                                    <span class="marketing_div_dl-twospan">关注公众号即可得优惠券</span>
                                </dd>
                            </dl>    

                            <br>
                            <!-- 礼包 -->
                            <dl class="marketing_div_dl"  @click="toCouponGiftPack">
                                <dt> <img src="../../../static/images/icon/cp_Gift.png" alt="礼包" class="menu-img"></dt>
                                <dd>
                                    <span class="marketing_div_dl-span">优惠券礼包</span>
                                    <span class="marketing_div_dl-twospan">抢购可得优惠券礼包</span>
                                </dd>
                            </dl>    

                        </div>

                        <!------ 促销工具 -------->
                        <h1 class="marketing_h1">促销工具</h1>
                        <div class="">  
                            <div class="marketing_div">
                                <dl class="marketing_div_dl" @click="qianGou">
                                    <dt>
                                        <img src="../../../static/images/icon/qg_qiang2.png" alt="设置" class="menu-img">
                                    </dt>
                                    <dd>
                                        <span class="marketing_div_dl-span">抢购</span>
                                        <span class="marketing_div_dl-twospan">多人抢购游戏</span>
                                    </dd>
                                </dl>       

                                <dl class="marketing_div_dl" @click="creatSeventTuan">
                                    <dt>
                                    <img src="data:image/png;base64,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" alt="七人成团" class="menu-img">
                                    </dt>
                                    <dd>
                                        <span class="marketing_div_dl-span">超级拼团</span>
                                        <span class="marketing_div_dl-twospan">邀请好友七人成团</span>
                                    </dd>
                                </dl>      
                                <dl class="marketing_div_dl" @click="newManRedBao">
                                    <dt>
                                    <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAoCAYAAACM/rhtAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyZpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMDY3IDc5LjE1Nzc0NywgMjAxNS8wMy8zMC0yMzo0MDo0MiAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTUgKFdpbmRvd3MpIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOjExRENGNjEzRDQyRjExRTk5MThFRTZFRkEzRThFOTJFIiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOjExRENGNjE0RDQyRjExRTk5MThFRTZFRkEzRThFOTJFIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6MTFEQ0Y2MTFENDJGMTFFOTkxOEVFNkVGQTNFOEU5MkUiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6MTFEQ0Y2MTJENDJGMTFFOTkxOEVFNkVGQTNFOEU5MkUiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz4kBRYkAAAD6ElEQVR42sxYS0hVURRdPktLMzUwFcxBKol/bCKYFhkRiKiRIH5QRByKoILgUBBx6kQciNAgKTXIBhEW/dAgxR+EmglGJpml+MlS085ie3mK+rz3ffRu2O9w3rv33HXPXnvtfZ7bdlERlEUob1B+S/l5nKwtKe9RXqP80yn1cUX5e+V+MIdxg+4qv6k8yaI+6k0EbrcRU71lJ6xmtdsWE3DOlp075bSl3NwAf38gJgawqPd+/RrY3nZ4WccAursDISFAZiaQmCjf/f0LeHrKby9enADAM2eAyEggPx8ICAC2toCJCaC9HRgcBL5/B3JzgYKCYwLI0Pn6qoRPAu7dU3eoW9bWgJERoKtLxtXVvfcQ8J07wNmzcq1LAF68KKFLTpb5/Dzw8iUwNASMjwP//h2+anS0jOTjhw+OUVtVkv1M5tszTNPT8gCGbmbmRNL44B28dk12qaHBdib6KS0tKQFiY4UKRo1rj44Cra3A4qIBgMPDQFjY0TJRVgaEh6vK2bOfh3rM2xu4fl3WaWw0APDtWyA9HSgsBB48ADY3D35AVBTw7JlksL1GLpNShkI8NydjWhqQkCCAP34EFhZkV728gC9frMnkiAUH28FBahsBBAYCv34BWVniu624WEYKNDn77p1xcAxvfLydMvPwIVBVBbS0yJziHBQEnD4N/Pmz99rSUnmZ7m5gff1oYB4eImGkkd06ODkpI9+QSfDjx8HXMQuZIBkZQEoK8OqVyNLXr3u1UiuLV68CqamiAL29qh04B8TF2QGQu8Tk0AAeZhsbQHMzMDAAZGdb6UBwpAfXYXm8cEFA0qip9+/LPeXlDpS6x4/loQzJUaGjoPf3A5cvy0uFhkp3w8bh928BRV5TwqamdHc6tgH29QE5OVK6GDY9wvv5s7iTzGLzV8oKzQZHDm0wKiuFazTW8+pqa4id1s1wR9itHCEFh5ZBtmTfvongk4+UL6fuIO3JEyH4pUv6V+XO+fgI/2pqJElY1m7ccAFAdjSa3Oi15WVJBDr7R47k5dKSCwBSRqhzRnjIjB0bs7Zo2pzhdjpArapEREiY9IY4L0+Em8aRcy1pnA6QEsPMZN+nxzo7JYvb2mTOkfNHj1wEkJwywkNm68+fVs5x5NwlWazJDbsV8lA7Uh6TWXRfyU6FHOQxoKlJf7Iwe2dnjwEgz7sdHXKMfPPG+j2bV1v31NXZBmjrfsMH96dPxTVjl822v6ICWFkxvj08N7PP5Dou+euDzSxPdUwee091LKU81Rk6F5vILDC5EeCSifGtEGCPiQE+J8Ba5YsmBEdMtQSo2gwkKe9iUTMBsOUdLMQ09l+AAQBt8lY9ZAEz8wAAAABJRU5ErkJggg==" alt="优惠券" class="menu-img">
                                    </dt>
                                    <dd>
                                        <span class="marketing_div_dl-span">新人现金红包</span>
                                        <span class="marketing_div_dl-twospan">邀请好友一起抢红包，快速聚集人气</span>
                                    </dd>
                                </dl>
                                
                            </div>
                             <!-- 第二行 -->
                             <div class="marketing_div">
                                 <dl class="marketing_div_dl" @click="creatKanPrice">
                                    <dt>
                                    <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFAAAABQCAYAAACOEfKtAAAAAXNSR0IArs4c6QAABLpJREFUeAHt3btLHEEcB/Dvnl6QYKGNRYogghAUjcEiCgEhREVSq2BjE4u0/gXXaZNYBYtoGRStNSjByleaBJWIaOGjsFErRYivy/xubnDvbl13d2Zf2ZnCuZ3b2Z393G/2cbs3GihK2aGhRlxff2DFXchmn7O8smiWpE1ewDCO2EYvIp2eML5+/WMGMMRENpN5goODz2z6I4NLiXKdmwQM445NjaO2dtjIZK7onRxgHu87g3trml2/fEjAMJYYYg8h8kijyNN4D3GVlpMV760w8vu8Td1tS51sS6g7p9PNqdwBQ+/zbK0s3yQzdrClLtxlOYMudCLQlWJdl05VdPIiwOwoApN+nueFTtSp5EdhMalz1wIa0DVZYQUNWOjhekoDuiYrrKABCz1cT2lA12SFFcoLJwOcamoCGhqAnR1gYyPAFatdVTiAnZ3AwAD7Loh9GdTTA8zMAPPzarcsoKUFD9jFrhwJz5z6+jjm3Jy5NBavg90HWuEJpt5e4P17MRWbPDhAOzzBFUPEYACd4MUU0f99oBXe7S0wOQlsbgKNjcDQEFBuagpFIqUY7BP9jUArPIJZXwdWV4GLC+DnT2BlhUoLU0y6s3+AD+ER0x3d3DIlikirFANEfwDt8AiqrQ149QooKwOam4E3b6z4eFnEEY3s4GD24dZ7eOcxPPMis2zVdDLtJM3ORnKfqDYC3eARmlM8mjeikagO0C0eobhNEURUA9jRUXp55hbH6fwRQ5QHbG/nB4HDQ6cE8vNFCFEOkPC6u8Hu0IPdZAYSiOgd8Nkzjifiia4kEojoHfD4GPjxQ/DxPIGI3gGJbHk58YhygBoR8oAJR1QDmGBEdYBRQnz9mt+sojb5nNQCUmPDPrAcHQE1NUB/fyD3WNQDhoko8CoqeNwFcMXiD2AYiMV4nND3b3H8AwwScXeX31MRkSfwRO5jJPoLGAQi4X36BIyNAWdngqw09wmxLNPSkildm+IS6l43N0Bd3f2CU+yzo7Lzc6Cq6r7czSuB9/cvcHkJ/P4NtLYCT59aL4XuANL1+t6e9fseSoMBpIapRjTjiQ0PATE4QJWIVnhmxF+/AovEYAFVINrhmRGddOerK+nu7P9BRGyUOfd6su0ET6zn5AQYGbE/sNBTYS9fihqe8nAAqaluEd3gCYrT08cRX7wQc3vKwwOk5jpF9IInOOwQ6b709raY01MeLiA1+TFEGTxBQoijo6XdeWoK2NoSc3nK1T+Z4KkZrBI93vHuXWHt/X1gehqg8zwVqboaGBzk550LC8DamvRSowNIm2JGpDt8374BdKSMcDI9lBeBVlJ3plRfHws8amq0IpBaRIku84ofgePvRO5v+AcRK5KY4FHTowlohRrRMg0o+cFoQA0oKSBZXUegBpQUkKyuI1ADSgpIVtcRqAElBSSr6wjUgJICktV1BGpASQHJ6joCNaCkgGR1ikD2s3GdPApcpPKDTHusn/BqbIBuisDFhDPIbP5iiv1QcIJFYdEgBjLLTEhdPgzyRCo/Nvx4QjZb5WaOkx0/jWFjw7MoXFK59P96WXwo+GHaxhxgbmB9NjY8Q/yiu7PNR0/dlozy4+jTnCVDZuh/h1ECaPvvMP4BlhPfY5nJ+QoAAAAASUVORK5CYII=" alt="优惠券" class="menu-img">
                                    </dt>
                                    <dd>
                                        <span class="marketing_div_dl-span">砍价</span>
                                        <span class="marketing_div_dl-twospan">邀请好友砍价后低价购买</span>
                                    </dd>
                                </dl>  
                                <dl class="marketing_div_dl" @click="miaoSha">
                                    <dt>
                                        <img src="../../../static/images/icon/mh_miao2.png" alt="设置" class="menu-img">
                                    </dt>
                                    <dd>
                                        <span class="marketing_div_dl-span">秒杀</span>
                                        <span class="marketing_div_dl-twospan">商品秒杀</span>
                                    </dd>
                                </dl>   
                                <dl class="marketing_div_dl" @click="suCai">
                                    <dt>
                                        <img src="../../../static/images/icon/mh_suCai.png" alt="设置" class="menu-img">
                                    </dt>
                                    <dd>
                                        <span class="marketing_div_dl-span">素材</span>
                                        <span class="marketing_div_dl-twospan">文件材料</span>
                                    </dd>
                                </dl>   
                             </div>
                            
                        </div>

                        <h1 class="marketing_h1">积分营销</h1>
                        <div class="marketing_div">   
                            <dl class="marketing_div_dl" @click="newManRedBao">
                                <dt>
                                  <img src="data:image/png;base64,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" alt="优惠券" class="menu-img">
                                </dt>
                                <dd>
                                    <span class="marketing_div_dl-span">签到</span>
                                    <span class="marketing_div_dl-twospan">每日签到领取积分</span>
                                </dd>
                            </dl>
                        </div>

                        <h1 class="marketing_h1">游戏插件</h1>
                        <div class="marketing_div">   
                            <dl class="marketing_div_dl" @click="newManRedBao">
                                <dt>
                                  <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAoCAYAAACM/rhtAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyZpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMTQ1IDc5LjE2MzQ5OSwgMjAxOC8wOC8xMy0xNjo0MDoyMiAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTkgKFdpbmRvd3MpIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOjhFMkFCNTlFMTI1QTExRUFBMjU2ODgzN0E1MERDMzUyIiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOjhFMkFCNTlGMTI1QTExRUFBMjU2ODgzN0E1MERDMzUyIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6OEUyQUI1OUMxMjVBMTFFQUEyNTY4ODM3QTUwREMzNTIiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6OEUyQUI1OUQxMjVBMTFFQUEyNTY4ODM3QTUwREMzNTIiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz7LqqKeAAAGKklEQVR42sxY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" alt="优惠券" class="menu-img">
                                </dt>
                                <dd>
                                    <span class="marketing_div_dl-span">幸运大转盘</span>
                                    <span class="marketing_div_dl-twospan">邀请好友一起抢红包，快速聚集人气</span>
                                </dd>
                            </dl>
                        </div>


                        <h1 class="marketing_h1">任务插件</h1>
                        <div class="marketing_div">   
                            <dl class="marketing_div_dl" @click="inviteFriends">
                                <dt>
                                  <img src="../../../static/images/icon/mh_invite1.png" alt="优惠券" class="menu-img">
                                </dt>
                                <dd>
                                    <span class="marketing_div_dl-span">邀请好友</span>
                                    <span class="marketing_div_dl-twospan">邀请好友参与活动，即可获得奖励</span>
                                </dd>
                            </dl>
                        </div>

                    
                    </div>    
                    <!--选项卡组件 over-->
                </div>
                <!-- 商品中心over-->
            </div>
        </div>
        <!--        -->
    </div>
    <!--主体 over-->
    </div>
</template>

<script>

import navbar from '../navbar';
import sidebar from '../sidebar';
import marknav from './marknav';
import baseapi from '../../utils/api';

export default {
    data() {
        return {
         
        };
    },
    mounted(){

    },
    methods:{
        creatCoupon(){
           	this.$router.push('/marketing/coupon');
        },
        goodsGiveCoupon(){
            this.$router.push('/marketing/coupon/shoppingcoupon');
        },
        followGiveCoupon(){
            this.$router.push('/marketing/coupon/followcoupon');
        },
        newManRedBao(){
            this.$router.push('/marketing/newman');
            // this.$router.push('src/components/twitter/zm_elCheckbox.vue');
            // this.$router.push('../twitter/zm_elCheckbox');
        },
        creatCollage(){
            this.$router.push('/marketing/collage');
        },
        
        creatSeventTuan(){
              this.$router.push('/marketing/sevenT');
        },
        creatKanPrice(){
            //砍价
            // this.$router.push('/marketing/kanprice');
            this.$router.push('/marketing/kanprice/bargain');   
        },
        toCouponGiftPack(){
            //优惠券礼包
            this.$router.push('/marketing/coupon/giftPack');    
        },
        qianGou(){//抢购
            this.$router.push('/marketing/qiangGouing');        
        },
        miaoSha(){//秒杀
            this.$router.push('/marketing/miaoSha');            
        },
        suCai(){ //素材
            this.$router.push('/marketing/source/source');      
        },
        inviteFriends(){
            // 邀请好友  taskPlugin/inviteFriends
            this.$router.push('/marketing/taskPlugin');
        },
       
  
    //     <router-link tag="a" to="/marketing/source/1">   
    //       <li class="goods-left_list"><span>素材</span></li>
    //     </router-link>  

    },
    components:{
        navbar,marknav,sidebar 
    }
}
</script>
<style>
.marketing_div{
    display: flex;
}

.marketing_div_dl{
    width: 30%;
    display: flex;
    align-items: center;
    height: 60px;
    padding: 10px;
    margin: 10px 10px;
    border-radius: 6px;
    -webkit-box-shadow: 0 2px 12px 0 rgba(0,0,0,.1);
    box-shadow: 0 2px 12px 0 rgba(0,0,0,.1);
    background-color: #f2f2f2;
    cursor: pointer;
    /* display: flex; */

}
.marketing_div_dl dt img{
    width: 40px;
    height: 40px;
    margin-right: 10px;
}
.marketing_div_dl dd{
    display: flex;
    flex-direction: column;
}
.marketing_div_dl-span{
    color:#303133;
    font-weight: 700;
}

.marketing_div_dl-twospan{
    color: #666;
}
</style>



   
            
           