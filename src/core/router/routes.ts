interface SwitchRoutes {
    root: string;
    catalog: string;
}

export const switchRoutes: SwitchRoutes = {
    root: '/',
    catalog: '/catalog',
};

export const routes: SwitchRoutes = {
    ...switchRoutes,
};
