package sample;

import org.apache.commons.lang3.StringEscapeUtils;
import org.apache.commons.lang3.StringUtils;

public class UnEscapeSample {
    public static void main(String[] args) {

        // htmlの特殊文字を
        System.out.println(StringEscapeUtils.unescapeHtml4("test&amp;&lt;"));

        // htmlタグ削除
        System.out.println("test<:/font></a>".replaceAll("<.+?>", ""));

        // 末尾のタグを消したいなら、単純にSubstringすればいいのでは？
        String target = "test</font></a>";
        System.out.println(target.substring(0,target.indexOf("<")));
    }
}
