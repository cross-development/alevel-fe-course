// Packages
import { FC } from 'react';

export enum LayoutEnum {
  PrimaryLayout = 'PrimaryLayout',
}

type LayoutType = typeof LayoutEnum;

type ReactPageExtended = {
  layout?: { type: keyof LayoutType };
};

export type ReactPageEnhanced = FC & ReactPageExtended;
