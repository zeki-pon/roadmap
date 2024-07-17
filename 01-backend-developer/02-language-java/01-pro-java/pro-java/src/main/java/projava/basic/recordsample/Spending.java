package projava.sample.recordsample;

import java.time.LocalDate;

public record Spending(LocalDate date, int price, String memo) {
}
