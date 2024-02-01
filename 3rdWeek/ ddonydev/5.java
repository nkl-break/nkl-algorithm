class Solution {
    public List<List<String>> suggestedProducts(String[] products, String searchWord) {
        List<List<String>> answer = new ArrayList<>();

        Arrays.sort(products);

        List<String> list = new ArrayList<>();
        for (int i = 0; i < searchWord.length(); i++) {
            String prefix = searchWord.substring(0, i + 1); // i번째까지의 prefix
            for (int j = 0; j < products.length; j++) {
                if (products[j].startsWith(prefix)) { // prefix로 시작하는 경우
                    list.add(products[j]); // list에 추가
                }
                if (list.size() == 3) { // 최소 3개 이상이면 최소 3개만 넣어야함
                    break;
                }
            }
            answer.add(new ArrayList<>(list));
            list.clear();
        }
        return answer;
    }
}