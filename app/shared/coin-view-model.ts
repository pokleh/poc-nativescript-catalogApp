import { Observable, EventData } from "data/observable";

export class CoinViewModel extends Observable {

    private _nominal: string;
    private _year: string;
    private _weight: number;
    private _diameter: number;
    private _category: string;
    private _imageSource: string;
    private _mintage: number;
    
    get nominal(): string {
        return this._nominal;
    }
    set nominal(value: string) {
        if (this._nominal !== value) {
            this._nominal = value;
            this.notifyPropertyChange("nominal", value)
        }
    }
    
    get year(): string {
        return this._year;
    }
    set year(value: string) {
        if (this._year !== value) {
            this._year = value;
            this.notifyPropertyChange("year", value)
        }
    }
        
    get mintage(): number {
        return this._mintage;
    }
    set mintage(value: number) {
        if (this._mintage !== value) {
            this._mintage = value;
            this.notifyPropertyChange("mintage", value)
        }
    }
    
    get weight(): number {
        return this._weight;
    }
    set weight(value: number) {
        if (this._weight !== value) {
            this._weight = value;
            this.notifyPropertyChange("weight", value)
        }
    }
    
    get diameter(): number {
        return this._diameter;
    }
    set diameter(value: number) {
        if (this._diameter !== value) {
            this._diameter = value;
            this.notifyPropertyChange("diameter", value)
        }
    }
    
    get category(): string {
        return this._category;
    }
    set category(value: string) {
        if (this._category !== value) {
            this._category = value;
            this.notifyPropertyChange("category", value)
        }
    }
    
    get imageSource(): string {
        return this._imageSource;
    }
    set imageSource(value: string) {
        if (this._imageSource !== value) {
            this._imageSource = value;
            this.notifyPropertyChange("imageSource", value)
        }
    }

    constructor(nominal: string, year: string, weight: number, diameter: number, category: string, imageSource: string, mintage: number) {
        super();
        
        this._nominal = nominal;        
        this._year = year;
        this._weight = weight;
        this._diameter = diameter;
        this._category = category;
        this._imageSource = imageSource;
        this._mintage = mintage;
    }
    
}