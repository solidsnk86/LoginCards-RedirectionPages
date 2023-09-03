document.addEventListener('DOMContentLoaded', function () {
    const dropItemLists = document.querySelectorAll('.drop-item-list');

    dropItemLists.forEach(function (dropItemList) {
        const subItemList = dropItemList.nextElementSibling;

        if (subItemList) {
            dropItemList.addEventListener('click', function () {
                if (subItemList.style.display === 'none' || subItemList.style.display === '') {
                    subItemList.style.display = 'block';
                    dropItemList.querySelector('.cd').classList.add('rotated');
                } else {
                    subItemList.style.display = 'none';
                    dropItemList.querySelector('.cd').classList.remove('rotated');
                }
            });
        }
    });
});

/** 404 */
window.addEventListener('error', function (e) {
    if (e && e.target && e.target.src && e.target.src.includes('404')) {
        window.location.href = 'error404.html';
    }
});





