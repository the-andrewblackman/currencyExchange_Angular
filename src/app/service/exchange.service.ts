import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Exchange } from "../interface/exchange.model";
import { Observable } from "rxjs";

@Injectable({
	providedIn: "root",
})
export class ExchangeService {
	private exchangeUrl =
		"http://localhost:8082/exchange-rate/from/to/amount/?";

	private findAllListUrl =
		"http://localhost:8082/exchange-rate/findAll";

	constructor(private http: HttpClient) {}

	getExchangeRate(from: string, to: string, amount: string) {
		return this.http.get<Exchange>(
			this.exchangeUrl +
				`from=${from}&to=${to}&amount=${amount}`
		);
	}

	loadFindAllList(): Observable<Exchange[]> {
		return this.http.get<Exchange[]>(this.findAllListUrl);
	}

	// getCategories() {
	// 	return this.http.get<string[]>(
	// 		this.apiUrl + "categories"
	// 	);
	// }

	// getCategoryByJoke(category: string) {
	// 	return this.http.get<Joke>(
	// 		this.apiUrl + `random?category=${category}`
	// 	);
	// }

	// getSearchJokes(searchTerm: string) {
	// 	return this.http.get<{ result: Joke[]; amount: number }>(
	// 		this.apiUrl + `search?query=${searchTerm}`
	// 	);
	// }
}
