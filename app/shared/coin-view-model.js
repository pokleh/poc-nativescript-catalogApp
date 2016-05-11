"use strict";
var observable_1 = require("data/observable");
var CoinViewModel = (function (_super) {
    __extends(CoinViewModel, _super);
    function CoinViewModel(nominal, year, weight, diameter, category, imageSource, mintage) {
        _super.call(this);
        this._nominal = nominal;
        this._year = year;
        this._weight = weight;
        this._diameter = diameter;
        this._category = category;
        this._imageSource = imageSource;
        this._mintage = mintage;
    }
    Object.defineProperty(CoinViewModel.prototype, "nominal", {
        get: function () {
            return this._nominal;
        },
        set: function (value) {
            if (this._nominal !== value) {
                this._nominal = value;
                this.notifyPropertyChange("nominal", value);
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CoinViewModel.prototype, "year", {
        get: function () {
            return this._year;
        },
        set: function (value) {
            if (this._year !== value) {
                this._year = value;
                this.notifyPropertyChange("year", value);
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CoinViewModel.prototype, "mintage", {
        get: function () {
            return this._mintage;
        },
        set: function (value) {
            if (this._mintage !== value) {
                this._mintage = value;
                this.notifyPropertyChange("mintage", value);
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CoinViewModel.prototype, "weight", {
        get: function () {
            return this._weight;
        },
        set: function (value) {
            if (this._weight !== value) {
                this._weight = value;
                this.notifyPropertyChange("weight", value);
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CoinViewModel.prototype, "diameter", {
        get: function () {
            return this._diameter;
        },
        set: function (value) {
            if (this._diameter !== value) {
                this._diameter = value;
                this.notifyPropertyChange("diameter", value);
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CoinViewModel.prototype, "category", {
        get: function () {
            return this._category;
        },
        set: function (value) {
            if (this._category !== value) {
                this._category = value;
                this.notifyPropertyChange("category", value);
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CoinViewModel.prototype, "imageSource", {
        get: function () {
            return this._imageSource;
        },
        set: function (value) {
            if (this._imageSource !== value) {
                this._imageSource = value;
                this.notifyPropertyChange("imageSource", value);
            }
        },
        enumerable: true,
        configurable: true
    });
    return CoinViewModel;
}(observable_1.Observable));
exports.CoinViewModel = CoinViewModel;
//# sourceMappingURL=coin-view-model.js.map