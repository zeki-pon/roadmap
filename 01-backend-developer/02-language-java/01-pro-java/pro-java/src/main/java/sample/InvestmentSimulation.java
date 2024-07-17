package sample;

public class InvestmentSimulation {
    public static void main(String[] args) {
        /* 考慮すべき変数 */
        // 現有資産
        // 月の掛け金
        // 年利
        // 投資年数
        double currentAssets = 270000;
        double latchPerMonth = 6000;
        double interestRate = 1.08
                ;
        int investmentYears = 38;

        for (int i = 0; i < investmentYears; i++) {
            currentAssets = (currentAssets + latchPerMonth * 12) * interestRate;
            System.out.println((int) currentAssets);
        }
    }
}
