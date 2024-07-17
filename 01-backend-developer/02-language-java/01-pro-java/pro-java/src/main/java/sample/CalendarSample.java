package sample;

import java.util.Calendar;
import java.util.Date;

public class CalendarSample {
    public static void main(String[] args) {
        Calendar calendar = Calendar.getInstance();
        calendar.setTime(new Date());
        calendar.add(Calendar.DAY_OF_MONTH, -90);
        Date calculatedDate = calendar.getTime();
        System.out.println(calculatedDate);
    }
}
