function setCalendarData(year, month, day) {
    var calendar_doc = "";

    var setDate = new Date(year, month - 1, 1);

    var firstDayName = setDate.getDay();

    var lastDay = new Date(
        year,
        month,
        0
        ).getDate();

    var preLastDay;

    if (month != 1) {
        prevLastDay = new Date(
            year,
            month-1,
            0
        ).getDate();
    }
    else {
        prevLastDay = new Date(
            year-1,
            12,
            0
        ).getDate();
    }

    var startDayCount = 1;
    var lastDayCount = 1;

    calendar_doc += "<div class='calendar_week horizontalGutter verticalBottom'>일</div>";
    calendar_doc += "<div class='calendar_week horizontalGutter verticalBottom'>월</div>";
    calendar_doc += "<div class='calendar_week horizontalGutter verticalBottom'>화</div>";
    calendar_doc += "<div class='calendar_week horizontalGutter verticalBottom'>수</div>";
    calendar_doc += "<div class='calendar_week horizontalGutter verticalBottom'>목</div>";
    calendar_doc += "<div class='calendar_week horizontalGutter verticalBottom'>금</div>";
    calendar_doc += "<div class='calendar_week' style='margin-bottom:2px;'>토</div>";

    for (var i = 0; i < 6; i++) {
        for (var j = 0; j < 7 ; j++) {
            if ( i == 0 && j < firstDayName) {
                if(j == 0) {
                    calendar_doc += "<div class='preMonth calendar_day horizontalGutter sunday' id='dayblock" + (i*7+j) + "'><span>" + (prevLastDay - (firstDayName - 1) + j) + "</span><span></span></div>";
                }
                else if(j == 6) {
                    calendar_doc += "<div class='preMonth calendar_day saturday' id='dayblock" + (i*7+j) + "'><span>" + (prevLastDay - (firstDayName - 1) + j) + "</span><span></span></div>";
                }
                else {
                    calendar_doc += "<div class='preMonth calendar_day horizontalGutter' id='dayblock" + (i*7+j) + "'><span>" + (prevLastDay - (firstDayName - 1) + j) + "</span><span></span></div>";
                }
            }
            else if ( i == 0 && j >= firstDayName) {
                if(j == 0) {
                    if (startDayCount == day) {
                        calendar_doc += "<div class='toDay curMonth calendar_day horizontalGutter sunday' id='dayblock" + (i*7+j) + "'><span>" + startDayCount + "</span><span id='" + year + month + setFixDayCount(startDayCount++) + "'></span></div>";
                    }
                    else {
                        calendar_doc += "<div class='curMonth calendar_day horizontalGutter sunday' id='dayblock" + (i*7+j) + "'><span>" + startDayCount + "</span><span id='" + year + month + setFixDayCount(startDayCount++) + "'></span></div>";
                    }
                }
                else if(j == 6) {
                    if (startDayCount == day) {
                        calendar_doc += "<div class='toDay curMonth calendar_day saturday' id='dayblock" + (i*7+j) + "'><span>" + startDayCount + "</span><span id='" + year + month + setFixDayCount(startDayCount++) + "'></span></div>";
                    }
                    else {
                        calendar_doc += "<div class='curMonth calendar_day saturday' id='dayblock" + (i*7+j) + "'><span>" + startDayCount + "</span><span id='" + year + month + setFixDayCount(startDayCount++) + "'></span></div>";
                    }
                }
                else {
                    if (startDayCount == day) {
                        calendar_doc += "<div class='toDay curMonth calendar_day horizontalGutter' id='dayblock" + (i*7+j) + "'><span>" + startDayCount + "</span><span id='" + year + month + setFixDayCount(startDayCount++) + "'></span></div>";
                    }
                    else {
                        calendar_doc += "<div class='curMonth calendar_day horizontalGutter' id='dayblock" + (i*7+j) + "'><span>" + startDayCount + "</span><span id='" + year + month + setFixDayCount(startDayCount++) + "'></span></div>";
                    }
                }
            }
            else if (i > 0 && startDayCount <= lastDay) {
                if(j == 0) {
                    if (startDayCount == day) {
                        calendar_doc += "<div class='toDay curMonth calendar_day horizontalGutter verticalGutter sunday' id='dayblock" + (i*7+j) + "'><span>" + startDayCount + "</span><span id='" + year + month + setFixDayCount(startDayCount++) + "'></span></div>";
                    }
                    else {
                        calendar_doc += "<div class='curMonth calendar_day horizontalGutter verticalGutter sunday' id='dayblock" + (i*7+j) + "'><span>" + startDayCount + "</span><span id='" + year + month + setFixDayCount(startDayCount++) + "'></span></div>";
                    }
                }
                else if(j == 6) {
                    if (startDayCount == day) {
                        calendar_doc += "<div class='toDay curMonth calendar_day verticalGutter saturday' id='dayblock" + (i*7+j) + "'><span>" + startDayCount + "</span><span id='" + year + month + setFixDayCount(startDayCount++) + "'></span></div>";
                    }
                    else {
                        calendar_doc += "<div class='curMonth calendar_day verticalGutter saturday' id='dayblock" + (i*7+j) + "'><span>" + startDayCount + "</span><span id='" + year + month + setFixDayCount(startDayCount++) + "'></span></div>";
                    }
                }
                else {
                    if (startDayCount == day) {
                        calendar_doc += "<div class='toDay curMonth calendar_day horizontalGutter verticalGutter' id='dayblock" + (i*7+j) + "'><span>" + startDayCount + "</span><span id='" + year + month + setFixDayCount(startDayCount++) + "'></span></div>";
                    }
                    else {
                        calendar_doc += "<div class='curMonth calendar_day horizontalGutter verticalGutter' id='dayblock" + (i*7+j) + "'><span>" + startDayCount + "</span><span id='" + year + month + setFixDayCount(startDayCount++) + "'></span></div>";
                    }
                }
            }
            else if ( startDayCount > lastDay) {
                if(j == 0) {
                    calendar_doc += "<div class='nextMonth calendar_day horizontalGutter verticalGutter' id='dayblock" + (i*7+j) + "'><span>" + (lastDayCount++) + "</span><span></span></div>";
                }
                else if(j == 6) {
                    calendar_doc += "<div class='nextMonth calendar_day verticalGutter saturday' id='dayblock" + (i*7+j) + "'><span>" + (lastDayCount++) + "</span><span></span></div>";
                }
                else {
                    calendar_doc += "<div class='nextMonth calendar_day horizontalGutter verticalGutter' id='dayblock" + (i*7+j) + "'><span>" + (lastDayCount++) + "</span><span></span></div>";
                }
            }
        }
    }

    document.querySelector("#calendar").insertAdjacentHTML("beforeend", calendar_doc);
}

function setFixDayCount(number) {
    var fixNum ="";

    if (number < 10) {
        fixNum = "0" + number;
    }
    else {
        fixNum = number;
    }
    return fixNum;
}