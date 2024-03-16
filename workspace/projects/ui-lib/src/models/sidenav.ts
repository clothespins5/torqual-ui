import {Brand} from "../lib/brand";

export type SidenavItemId = Brand<string, 'SidenavItemId'>;
export function SidenavItemId(value: string) {
  return value as SidenavItemId;
}

export type SidenavItemIcon = Brand<string, 'SidenavItemName'>;
export function SidenavItemIcon(value: string) {
  return value as SidenavItemIcon;
}

export type SidenavItem = {
  id: SidenavItemId,
  icon: SidenavItemIcon,
}
