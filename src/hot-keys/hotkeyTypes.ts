import {HotKeyState} from "@/hot-keys/HotKeyStateMachine";

export interface HotKeyModifierState {
  hotKeys: HotKey[],
  hotKeyStateMachine: HotKeyState,
}

export enum ModifierKey {
  None, CommandOrControl, Alt, Shift
}

export interface ClickCombination {
  modifier: ModifierKey,
  hotKey: string,
}

export interface HotKey {
  combo: ClickCombination
  key: string
}
