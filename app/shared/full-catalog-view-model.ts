import { ObservableArray } from "data/observable-array";
import { CoinViewModel } from "./coin-view-model";

export var allCoinsViewModel = new ObservableArray();

allCoinsViewModel.push(new CoinViewModel("2 Stotinki", "1881", 2.0, 18, "Copper", "https://www.sixbid.com/images/auction_images/1186/1096532m.jpg", 1500000));
allCoinsViewModel.push(new CoinViewModel("5 Stotinki", "1881", 5.0, 23, "Copper", null, 5000000));
allCoinsViewModel.push(new CoinViewModel("10 Stotinki", "1881", 10.0, 27, "Copper", "http://coinquest.com/cgi-data/cq_ro/response_380/bulgaria_10_stotinki_1881.jpg", 10000000));
allCoinsViewModel.push(new CoinViewModel("2 Leva", "1882", 10.0, 24, "Silver", "http://www.coinfactswiki.com/w/images/thumb/c/ce/Bulgaria_H3035-30177r.jpg/300px-Bulgaria_H3035-30177r.jpg", 2500000));
allCoinsViewModel.push(new CoinViewModel("50 Sotinki", "1883", 2.5, 18, "Silver", null, 2400000));

allCoinsViewModel.push(new CoinViewModel("5 Leva", "1884", 25.00, 37, "Silver", null, 1500000));
allCoinsViewModel.push(new CoinViewModel("5 Leva", "1885", 25.00, 37, "Silver", "https://www.numisbids.com/sales/hosted/album/018/thumb02228.jpg", 1500000));
allCoinsViewModel.push(new CoinViewModel("10 Leva", "1894", 10.0, 27, "Gold", "http://agroplovdiv.bg/wp-content/uploads/2014/04/084143N2.jpg", 10000000));
allCoinsViewModel.push(new CoinViewModel("100 Leva", "1894", 10.0, 24, "Gold", "http://www.tableti.biz/uploads/com_article/gallery/0f2057e670c3cae8231b7d6316753fb9465652ab.jpg", 2500000));
allCoinsViewModel.push(new CoinViewModel("2-1/2 Sotinki", "1888", 2.5, 18, "Copper", null, 2400000));
