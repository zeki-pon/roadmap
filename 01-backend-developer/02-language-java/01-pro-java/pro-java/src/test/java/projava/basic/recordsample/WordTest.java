package projava.sample.recordsample;

import org.junit.jupiter.api.Test;

import static org.junit.jupiter.api.Assertions.*;

class WordTest {

    @Test
    void word_test() {
        Word word1 = new Word("apple", "りんご");
        Word word2 = new Word("apple", "ぶどう");

        assertEquals(word1.english(), word2.english());
    }

}