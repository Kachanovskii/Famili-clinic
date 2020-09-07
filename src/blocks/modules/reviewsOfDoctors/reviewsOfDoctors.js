
function showMore() {
    let $span = document.querySelectorAll('.review__customer__text > p > span');
    for (let elm of $span) {
        if (elm.textContent.length > 160) {
            let arrText = elm.textContent;
            let arrShort = arrText.slice(0, 120);
            let $p = elm.parentElement;
            $p.innerHTML = `<span>— "${arrShort}"...</span><a>Читати повністю ></a>`;
            showAllText(arrText, arrShort, $p);
        }
    }
    function showAllText(arrText, arrShort, $p) {
        $p.lastChild.addEventListener('click', e => {
            let reviewItem = document.querySelectorAll('.review__item');
            let currentItem;
            for (item of reviewItem) {
                if (!item.classList.contains('openReview')) {
                    normalHeightItem = item.offsetHeight;
                }
            }

            if (e.target.tagName === 'A') {
                if (e.target.textContent === 'Читати повністю >') {
                    e.target.textContent = '< Сховати';
                    e.target.previousElementSibling.textContent = `— "${arrText}"`;
                    currentItem = e.target.parentElement.parentElement.parentElement.parentElement.parentElement;
                    currentItem.classList.toggle('openReview');
                }
                else {
                    e.target.textContent = 'Читати повністю >';
                    e.target.previousElementSibling.textContent = `— "${arrShort}..."`;
                    currentItem = e.target.parentElement.parentElement.parentElement.parentElement.parentElement;
                    currentItem.classList.toggle('openReview');
                    normalHeightItem = 'auto';
                }
            }
            leveTheHeight(normalHeightItem, currentItem);
        });
    }
    function leveTheHeight(normalHeightItem) {
        let reviewItem = document.querySelectorAll('.review__item');
        for (item of reviewItem) {
            if (!item.classList.contains('openReview')) {
                if (typeof normalHeightItem == 'number') {
                    item.style.height = normalHeightItem + 'px';
                }
                else {
                    item.style.height = normalHeightItem;
                }
            }
            else {
                item.style.height = 'auto';
            }
        }
    }
}
showMore();