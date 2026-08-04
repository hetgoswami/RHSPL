import { ReactNode, MouseEventHandler } from 'react';

export type ButtonVariant = 'primary' | 'secondary' | 'outline' | 'whatsapp' | 'gold' | 'ghost';
export type ButtonSize = 'sm' | 'md' | 'lg';

export interface ButtonProps {
  variant?: ButtonVariant;
  size?: ButtonSize;
  href?: string;
  target?: string;
  rel?: string;
  icon?: ReactNode;
  ariaLabel?: string;
  children: ReactNode;
  className?: string;
  onClick?: MouseEventHandler<HTMLElement>;
}

export type SectionBgVariant = 'white' | 'soft' | 'navy';

export interface SectionWrapperProps {
  id?: string;
  bgVariant?: SectionBgVariant;
  ariaLabel?: string;
  className?: string;
  children: ReactNode;
}

export interface SectionHeaderProps {
  eyebrow?: string;
  title: ReactNode;
  description?: string;
  align?: 'left' | 'center';
  goldBar?: boolean;
  darkTheme?: boolean;
  className?: string;
}

export type BadgeVariant = 'superfine' | 'premium' | 'muted' | 'gold';

export interface BadgeProps {
  variant?: BadgeVariant;
  size?: 'sm' | 'md';
  children: ReactNode;
  className?: string;
}

export interface NavLinkItem {
  href: string;
  label: string;
  active?: boolean;
}

export interface ProductItem {
  id: string;
  name: string;
  description: string;
  image: string;
  applications: string[];
  packaging: string;
}

export interface BrandItem {
  id: string;
  name: string;
  badge: 'SUPERFINE' | 'PREMIUM';
  image: string;
  packaging: string;
}

export interface ProcessStepItem {
  step: string;
  title: string;
  description: string;
}

export interface HighlightItem {
  title: string;
  subtitle: string;
}
