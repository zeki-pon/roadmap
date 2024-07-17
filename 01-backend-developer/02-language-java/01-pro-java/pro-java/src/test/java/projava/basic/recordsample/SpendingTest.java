package projava.sample.recordsample;

import org.junit.jupiter.api.Test;

import java.time.LocalDate;

import static org.junit.jupiter.api.Assertions.*;

class SpendingTest {

    @Test
    void spendingTest() {
        Spending spending = new Spending(LocalDate.now(), 2000, "メモ帳");
        Spending spending1 = new Spending(spending.date().plusDays(1), 3000, "メモ帳");

        assertEquals(spending.price() + 1000, spending1.price());
    }

}