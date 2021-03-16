const monthNames = {
    'Jan': 1,
    'Feb': 2,
    'Mar': 3,
    'Apr': 4,
    'May': 5,
    'Jun': 6,
    'Jul': 7,
    'Aug': 8,
    'Sep': 9,
    'Oct': 10,
    'Nov': 11,
    'Dec': 12,
}

const yearSelect = document.getElementById('years');
const years = [...document.querySelectorAll('.monthCalendar')].reduce((acc, c) => {
    acc[c.id] = c;
    return acc
}, {})
console.log(years);
const months = [...document.querySelectorAll('.daysCalendar')].reduce((acc, c) => {
    acc[c.id] = c;
    return acc
}, {})
console.log(months);

document.body.innerHTML = '';
document.body.appendChild(yearSelect);

yearSelect.addEventListener('click', (e) => {
    if (e.target.classList.contains('day') || e.target.classList.contains('date')) {
        // console.log(e.target.textContent.trim());
        e.stopImmediatePropagation();
        const yearId = `year-${e.target.textContent.trim()}`
        document.body.innerHTML = '';
        document.body.appendChild(years[yearId]);
    }
})
document.body.addEventListener('click', (e) => {
    if (e.target.tagName == 'CAPTION') {
        const sectionId = e.target.parentNode.parentNode.id
        if (sectionId.includes('year-')) {
            document.body.innerHTML = '';
            document.body.appendChild(yearSelect);
        } else if(sectionId.includes('month-')){
            const yearId=sectionId.split('-')[1];
            document.body.innerHTML = '';
            document.body.appendChild(years[`year-${yearId}`]);
        }
    } else if (e.target.tagName == 'TD' || e.target.tagName == 'DIV') {
        const monthName = e.target.textContent.trim();
        if (monthNames.hasOwnProperty(monthName)) {
            let parant = e.target.parentNode;
            while (parant.tagName != 'TABLE') {
                parant = parant.parentNode;
            }
            const year = parant.querySelector('caption').textContent.trim();
            const monthId=`month-${year}-${monthNames[monthName]}`
            document.body.innerHTML = '';
            document.body.appendChild(months[monthId]);
        }
    }
})