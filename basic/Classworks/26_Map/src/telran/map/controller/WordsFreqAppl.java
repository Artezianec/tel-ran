package telran.map.controller;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

public class WordsFreqAppl {

	public static void main(String[] args) {
		String[] words = { "abc", "ab", "limn", "limn", "ab", "limn", "a" };
		printWordsFrequency(words);

	}

	private static void printWordsFrequency(String... words) {
		Map<String, Integer> res = new HashMap<>();
		for (int i = 0; i < words.length; i++) {
//			if (!res.containsKey(words[i])) {
//				res.put(words[i], 1);
//			} else {
//				res.put(words[i], res.get(words[i]) + 1);
//			}

//			Additional
			
//			if(res.putIfAbsent(words[i], 1) != null) {
//				res.put(words[i], res.get(words[i]) + 1);
//			}
			
//			res.computeIfPresent(words[i], (k,v) -> v + 1);
//			res.computeIfAbsent(words[i], k -> 1);
			
			res.merge(words[i], 1, (oldValue, value) -> oldValue + value);
			
		}
		List<Map.Entry<String, Integer>> list = new ArrayList<>(res.entrySet());
		list.sort((e1, e2) -> Integer.compare(e2.getValue(), e1.getValue()));
		list.forEach(e -> System.out.println(e.getKey() + " -> " + e.getValue()));
	}

}
