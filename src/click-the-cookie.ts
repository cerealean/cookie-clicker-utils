import { BehaviorSubject } from "rxjs";
import { BIG_COOKIE_ID } from "./constants";

export class ClickTheCookie {
    private cookieElement = document.getElementById(BIG_COOKIE_ID);

    private readonly _isOn$ = new BehaviorSubject(false);
    public readonly isOn$ = this._isOn$.asObservable();

    public enable(): void {
        this._isOn$.next(true);
    }

    public disable(): void {
        this._isOn$.next(false);
    }
}