// 以ajax方式来加载README.md, 更加便于更新文档, 但不适用SEO, 喜欢的可以试试
var xhr = new XMLHttpRequest();
xhr.open('GET', 'README.md', true);
xhr.onreadystatechange = function() {
    if (xhr.readyState == 4) {
        document.getElementById('xmp').innerHTML = xhr.responseText;

        var scriptTag = document.createElement('script');
        scriptTag.src = 'strapdown/strapdown.js';
        document.head.appendChild(scriptTag);
    }
};
xhr.send();