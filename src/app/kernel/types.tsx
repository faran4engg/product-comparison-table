import { ReactNode } from 'react';

export interface EriksProducts {
  products?: ProductsEntity[] | null;
}

export interface Atp {}
export interface ProductsEntity {
  Artikelnummer: string;
  BUP_Conversion?: string;
  BUP_UOM?: string;
  BUP_Value?: string;
  Hardheid: string;
  'Inwendige diameter': string;
  Kleur: string;
  'Maat volgens AS568': string;
  Materiaal: string;
  Toepassing: string;
  Snoerdikte: string;
  salePrice: string;
  manufacturerName?: string;
  grossPrice: string;
  stepQuantity: string;
  badges: string;
  uom: string;
  productImage: string;
  Temperatuurgebied: string;
  minQuantity: string;
  manufacturerImage?: string;
  name: string;
  sku: string;
  listPrice: string;
  channel: string;
  display: boolean;
  atp?: Atp;
  id: string;
}

export type FilteredProductsEntity = Omit<
  ProductsEntity,
  | 'BUP_Conversion'
  | 'BUP_UOM'
  | 'BUP_Value'
  | 'manufacturerName'
  | 'manufacturerImage'
  | 'atp'
>;

export interface CompareProps {
  products?: FilteredProductsEntity[];
  isLoading: boolean;
}
export interface ProductsContainerChildrenProps extends CompareProps {}

export interface ProductsContainerOwnProps {}
export interface ProductsContainerRenderProps {
  children: (props: ProductsContainerChildrenProps) => ReactNode;
}

export interface TableCaption {
  featureName: string;
  shouldHighlight: boolean;
}
