import * as React from 'react';
interface INavProps<P = {}> {
    id: string;
    payload?: P;
}
interface INavContext {
    selected: boolean;
    id: string;
    pathId: string;
    level: number;
    isLeaf: boolean;
}
export declare const NavContext: React.Context<INavContext>;
export declare const Nav: React.FC<INavProps>;
export {};
