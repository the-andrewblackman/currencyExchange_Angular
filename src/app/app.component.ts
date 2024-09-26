import { Component } from "@angular/core";
import { Exchange } from "./interface/exchange.model";
import { ExchangeService } from "./service/exchange.service";

@Component({
	selector: "app-root",
	templateUrl: "./app.component.html",
	styleUrls: ["./app.component.css"],
})
export class AppComponent {
	exchanges: Exchange[] = [];
	errorMessage: any[] = [];

	findAllList: Exchange[] = [];

	usd: string = "usd";

	constructor(private exchangeService: ExchangeService) {}

	ngOnInit() {
		this.exchangeService
			.loadFindAllList()
			.subscribe((data: Exchange[]) => {
				this.findAllList = data;
				console.log(data);
			});
	}

	convertAmount(from: string, to: string, amount: string) {
		this.exchangeService
			.getExchangeRate(from, to, amount)
			.subscribe(
				(data: Exchange) => {
					if (amount == "") {
					}
					this.errorMessage = [];
					this.exchanges = [];
					this.exchanges.push(data);
					console.log(data);
				},
				(error) => {
					if (amount == "") {
						error.error.message = "fill in amount";
						this.errorMessage = error.error.message;
					}
					this.exchanges = [];
					this.errorMessage = error.error.message;
					console.log(error.error.message);
					throw error;
				}
			);
	}
}
