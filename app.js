{
    var DOMstrings = {
        monthLabel: '.month',
        yearLabel: '.year',
        dateLabel: '.date',
        dayLabel: '.day'
    };

    function updateDates() {
        var now, year, months, days, day;
        now = new Date();

        months = [
            'January',
            'February',
            'March',
            'April',
            'May',
            'June',
            'July',
            'August',
            'September',
            'October',
            'November',
            'December'
        ];
        days = [
            'Monday',
            'Tuesday',
            'wednesday',
            'Thursday',
            'Friday',
            'Saturday',
            'Sunday'
        ];

        year = now.getFullYear();
        month = months[now.getMonth()];
        day = days[now.getDay() - 1];
        date = now.getDate();

        //DOM manipulation
        document.querySelector(DOMstrings.monthLabel).textContent = month;
        document.querySelector(DOMstrings.yearLabel).textContent = year;
        document.querySelector(DOMstrings.dateLabel).textContent = date;
        document.querySelector(DOMstrings.dayLabel).textContent = day;
    }

    updateDates();
}
