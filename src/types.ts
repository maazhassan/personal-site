import type { ReactNode } from 'react';

export interface Project {
  title: string;
  stack: string;
  image: string;
  description: ReactNode;
  github: string;
  titleSize?: string;
}

export interface ProjectCategory {
  description: ReactNode;
  color: string;
  projects: Project[];
}

export interface Dimensions {
  width: number;
  height: number;
}
